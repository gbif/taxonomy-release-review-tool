(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,n){e.exports=n(300)},153:function(e,t,n){},300:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),o=n.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(153);var i=n(130),l=n(131),s=n(144),u=n(132),d=n(145),f=n(303),m=n(56),h=n(304),p=n(305),g=n(306),y=n(302),v=n(133),E=n.n(v),S=f.a.Search,k=m.a.Option,w="Current_",b="Proposed_",x=["kingdom","phylum","klass","order","family","genus","subGenus","species","scientificName"],C=["acceptedScientificName","taxonKey"],O=["kingdom","phylum","klass","order","family","genus","subGenus","species","scientificName","acceptedScientificName"],I="/diff.txt",N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).loadfromUrl=function(e){E.a.parse(e,{download:!0,delimiter:"\t",header:!0,dynamicTyping:!0,complete:function(e){var t=0,a={};x.forEach(function(e){return a[e]=0}),C.forEach(function(e){return a[e]=0}),e.data.forEach(function(e){e._key=t++,e.changes={},x.forEach(function(t){e["".concat(w).concat(t)]!==e["".concat(b).concat(t)]&&(e.changes[t]=!0,a[t]++),e["".concat(w).concat(t,"Key")]!==e["".concat(b).concat(t,"Key")]&&(e.changes["".concat(t,"Key")]=!0,a["".concat(t,"Key")]++)}),C.forEach(function(t){e["".concat(w).concat(t)]!==e["".concat(b).concat(t)]&&(e.changes[t]=!0,a[t]++)})});var r=O.map(function(e){return{title:e,key:e,dataIndex:"".concat(w).concat(e),sorter:function(t,n){return t["".concat(w).concat(e)].localeCompare(n["".concat(w).concat(e)])},sortDirections:["descend","ascend"],filters:[{text:"Has changed name(".concat(a[e],")"),value:!0},{text:"Has not changed name",value:!1}],filterMultiple:!1,onFilter:function(t,n){return!!n.changes[e]===t},render:function(t,n){var a=n["".concat(b).concat(e)]!==t;return c.a.createElement("div",{className:a?"nowrap hasChanged":"nowrap isSame"},c.a.createElement("div",null,t),c.a.createElement("div",null,n["".concat(b).concat(e)]!==t?n["".concat(b).concat(e)]:"\xa0"))}}});r=[{title:"Count",key:"Count",dataIndex:"Count",sorter:function(e,t){return e.Count-t.Count},sortDirections:["descend","ascend"],render:function(e){return Number(e).toLocaleString()}}].concat(r).concat({title:"Changes",key:"changes",dataIndex:"changes",render:function(e,t){return c.a.createElement(c.a.Fragment,null,Object.keys(e).map(function(e){return c.a.createElement(h.a,{key:e},e)}))},filters:Object.keys(a).map(function(e){return{text:e,value:e}}),filterMultiple:!0,onFilter:function(e,t){return t.changes[e]>0}},{title:"Action",key:"operation",render:function(e,t){return c.a.createElement("a",{href:"https://github.com/gbif/checklistbank/issues/new?title=".concat(n.getIssueSubjectText(t),"&body=").concat(n.getIssueBodyText(t),"&labels=bug"),target:"_blank",rel:"noopener noreferrer"},"Report")}}),n.setState({columns:r,dataSource:e.data,unfilteredData:e.data})},error:function(e){console.log(e)}})},n.getIssueSubjectText=function(e){var t="Regression for ".concat(e["".concat(w,"scientificName")]);return encodeURIComponent(t)},n.getIssueBodyText=function(e){var t="```\n".concat(JSON.stringify(e,null,2),"\n```");return encodeURIComponent(t)},n.expandedRowRender=function(e){return c.a.createElement("p",null,c.a.createElement("pre",null,JSON.stringify(e,null,2)))},n.handleSearch=function(e,t){n.setState({q:e,searchCol:t,dataSource:n.state.unfilteredData.filter(function(n){return n["".concat(w).concat(t)].indexOf(e)>-1||n["".concat(b).concat(t)].indexOf(e)>-1})})},n.state={csvUrl:I,searchCol:"scientificName",pageSize:20},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadfromUrl(this.state.csvUrl)}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("div",{style:{padding:20}},c.a.createElement(p.a,{gutter:16},c.a.createElement(g.a,{span:4},c.a.createElement(m.a,{defaultValue:this.state.searchCol,style:{width:"100%"},onChange:function(t){return e.handleSearch(e.state.q,t)}},O.map(function(e){return c.a.createElement(k,{value:e,key:e},e)}))),c.a.createElement(g.a,{span:12},c.a.createElement(S,{placeholder:"Search names",enterButton:"Search",onSearch:function(t){return e.handleSearch(t,e.state.searchCol)}})),c.a.createElement(g.a,{span:4},c.a.createElement(m.a,{defaultValue:this.state.pageSize,style:{width:"100%"},onChange:function(t){return e.setState({pageSize:t})}},[10,20,50,100,250,1e3].map(function(e){return c.a.createElement(k,{value:e,key:e},e)}))))),this.state.dataSource&&c.a.createElement("div",{style:{overflow:"auto",width:"100%"}},c.a.createElement(y.a,{dataSource:this.state.dataSource,columns:this.state.columns,bordered:!0,scroll:{x:870},pagination:{pageSize:this.state.pageSize},size:"middle",expandedRowRender:this.expandedRowRender,rowKey:"_key"}))))}}]),t}(c.a.Component);n(299);o.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[148,1,2]]]);
//# sourceMappingURL=main.d02d80d9.chunk.js.map