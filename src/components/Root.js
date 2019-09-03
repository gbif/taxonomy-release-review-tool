import React from 'react';
import { Select, Table, Tag, Input, Row, Col } from 'antd';
import Papa from 'papaparse';

const { Search } = Input;
const { Option } = Select;

// const verbatimPrefix = 'Verbatim_';
const currentPrefix = 'Current_';
const proposedPrefix = 'Proposed_';

const ranksToCompare = ['kingdom', 'phylum', 'klass', 'order', 'family', 'genus', 'subGenus', 'species', 'scientificName'];
const fieldsToCompare = ['acceptedScientificName', 'taxonKey'];
const tableColumns = ['kingdom', 'phylum', 'klass', 'order', 'family', 'genus', 'subGenus', 'species', 'scientificName', 'acceptedScientificName'];

const url = '/diff.txt';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      csvUrl: url,
      searchCol: 'scientificName',
      pageSize: 20
    };
  }

  componentDidMount() {
    this.loadfromUrl(this.state.csvUrl);
  }

  loadfromUrl = url => {
    Papa.parse(url, {
      download: true,
      delimiter: "\t",
      header: true,
      dynamicTyping: true,
      complete: result => {

        // const expandedRowColumns = Object.keys(result.data[0]).map(col => (
        //   { title: col, key: col, dataIndex: col }
        // ));

        let rowIndex = 0;

        let changeSummary = {};
        ranksToCompare.forEach(rank => changeSummary[rank] = 0);
        fieldsToCompare.forEach(field => changeSummary[field] = 0);

        result.data.forEach(row => {
          // All rows need a unique key for the table to render
          row._key = rowIndex++;
          row.changes = {};

          // Add derrived flags - this should be in the csv, but we have decided that as an interim solution it will be here.
          ranksToCompare.forEach(rank => {
            if (row[`${currentPrefix}${rank}`] !== row[`${proposedPrefix}${rank}`]) {
              row.changes[rank] = true;
              changeSummary[rank]++;
            }
            if (row[`${currentPrefix}${rank}Key`] !== row[`${proposedPrefix}${rank}Key`]) {
              row.changes[`${rank}Key`] = true;
              changeSummary[`${rank}Key`]++;
            }
          });
          fieldsToCompare.forEach(field => {
            if (row[`${currentPrefix}${field}`] !== row[`${proposedPrefix}${field}`]) {
              row.changes[field] = true;
              changeSummary[field]++;
            }
          });
        });

        // contruct main columns for table
        let columns = tableColumns.map(rank => {
          return {
            title: rank, key: rank, dataIndex: `${currentPrefix}${rank}`,
            sorter: (a, b) => a[`${currentPrefix}${rank}`].localeCompare(b[`${currentPrefix}${rank}`]),
            sortDirections: ['descend', 'ascend'],
            filters: [
              {
                text: `Has changed name(${changeSummary[rank]})`,
                value: true,
              },
              {
                text: 'Has not changed name',
                value: false,
              },
            ],
            filterMultiple: false,
            onFilter: (value, record) => !!record.changes[rank] === value,
            render: (text, record) => {
              const isDifferent = record[`${proposedPrefix}${rank}`] !== text;
              return <div className={isDifferent ? 'hasChanged' : 'isSame'}>
                <div>{text}</div>
                <div>{record[`${proposedPrefix}${rank}`] !== text ? record[`${proposedPrefix}${rank}`] : '\u00A0'}</div>
              </div>;
            }
          }
        });

        // add columns for counts, changes and actions
        columns = [
          {
            title: 'Count',
            key: 'Count',
            dataIndex: 'Count',
            sorter: (a, b) => a.Count - b.Count,
            sortDirections: ['descend', 'ascend'],
            render: text => Number(text).toLocaleString()
          }
        ].concat(columns).concat(
          {
            title: 'Changes',
            key: 'changes',
            dataIndex: 'changes',
            render: (val, record) => <React.Fragment>{Object.keys(val).map(f => <Tag color="red" key={f}>{f}</Tag>)}</React.Fragment>,
            filters: Object.keys(changeSummary).map(x => {
              return { text: x, value: x };
            }),
            filterMultiple: true,
            onFilter: (value, record) => {
              return record.changes[value] > 0
            },
          },
          {
            title: 'Action',
            key: 'operation',
            render: (text, record) => <a href={`https://github.com/gbif/checklistbank/issues/new?title=${this.getIssueSubjectText(record)}&body=${this.getIssueBodyText(record)}&labels=bug`} target="_blank" rel="noopener noreferrer">Report</a>,
          }
        );

        this.setState({
          columns,
          dataSource: result.data,
          unfilteredData: result.data,
          // expandedRowColumns
        });
      },
      error: err => {
        console.log(err);
      },
    });
  }

  getIssueSubjectText = record => {
    let template = `Regression for ${record[`${currentPrefix}scientificName`]}`;
    return encodeURIComponent(template);
  }

  getIssueBodyText = record => {
    let template = `\`\`\`\n${JSON.stringify(record, null, 2)}\n\`\`\``;
    return encodeURIComponent(template);
  }

  expandedRowRender = record => {
    return <p><pre>{JSON.stringify(record, null, 2)}</pre></p>
    // return <Table columns={this.state.expandedRowColumns} dataSource={[record]} pagination={false} />;
  };

  handleSearch = (q, searchCol) => {
    this.setState({
      q,
      searchCol,
      dataSource: this.state.unfilteredData.filter(record => {
        return record[`${currentPrefix}${searchCol}`].indexOf(q) > -1 || record[`${proposedPrefix}${searchCol}`].indexOf(q) > -1;
      })
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div style={{ padding: 20 }}>
            <Row gutter={16}>
              <Col span={4}>
                <Select defaultValue={this.state.searchCol} style={{ width: '100%' }} onChange={value => this.handleSearch(this.state.q, value)}>
                  {tableColumns.map(x => <Option value={x} key={x}>{x}</Option>)}
                </Select>
              </Col>
              <Col span={12}>
                <Search
                  placeholder="Search names"
                  enterButton="Search"
                  onSearch={value => this.handleSearch(value, this.state.searchCol)}
                />
              </Col>
              <Col span={4}>
                <Select defaultValue={this.state.pageSize} style={{ width: '100%' }} onChange={value => this.setState({pageSize: value})}>
                  {[10,20,50,100,250,1000].map(x => <Option value={x} key={x}>{x}</Option>)}
                </Select>
              </Col>
            </Row>
          </div>

          {this.state.dataSource &&
            <div style={{overflow: 'auto', width: '100%'}}>
              <Table dataSource={this.state.dataSource} columns={this.state.columns}
                bordered={true}
                scroll={{ x: 870 }}
                pagination={{
                  pageSize: this.state.pageSize,
                }}
                size="middle"
                expandedRowRender={this.expandedRowRender}
                rowKey="_key"
              />
            </div>
          }
        </div>
      </React.Fragment>
    )
  }
}

export default Root;