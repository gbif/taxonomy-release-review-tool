(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,n){e.exports=n(300)},153:function(e,t,n){},300:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(7),r=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(153);var i=n(129),s=n(130),l=n(144),u=n(131),d=n(145),m=n(303),f=n(56),h=n(143),p=n(304),g=n(305),y=n(302),v=n(132),E=n.n(v),w=m.a.Search,S=f.a.Option,b="verbatim_",k="current_",x="proposed_",C=["kingdom","phylum","class","order","family","genus","subGenus","species","scientificName"],N=["acceptedScientificName","taxonKey"],O=["kingdom","phylum","class","order","family","genus","subGenus","species","scientificName","acceptedScientificName"],R="./diff.txt",I=window.location.href,j=new URL(I).searchParams.get("csv"),U=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).loadfromUrl=function(e){E.a.parse(e,{download:!0,delimiter:"\t",header:!0,dynamicTyping:!0,complete:function(e){var t=0,a={};C.forEach(function(e){return a[e]=0}),N.forEach(function(e){return a[e]=0}),e.data.forEach(function(e){e._key=t++,e.changes={},C.forEach(function(t){e["".concat(k).concat(t)]!==e["".concat(x).concat(t)]&&(e.changes[t]=!0,a[t]++),e["".concat(k).concat(t,"Key")]!==e["".concat(x).concat(t,"Key")]&&(e.changes["".concat(t,"Key")]=!0,a["".concat(t,"Key")]++)}),N.forEach(function(t){e["".concat(k).concat(t)]!==e["".concat(x).concat(t)]&&(e.changes[t]=!0,a[t]++)})});var o=O.map(function(e){return{title:e,key:e,dataIndex:"".concat(k).concat(e),sorter:function(t,n){return t["".concat(k).concat(e)].localeCompare(n["".concat(k).concat(e)])},sortDirections:["descend","ascend"],filters:[{text:"Has changed name(".concat(a[e],")"),value:!0},{text:"Has not changed name",value:!1}],filterMultiple:!1,onFilter:function(t,n){return!!n.changes[e]===t},render:function(t,n){var a=n["".concat(x).concat(e)]!==t,o=a&&n["".concat(x).concat(e)].toLowerCase().replace(/[()]/g,"")===t.toLowerCase().replace(/[()]/g,""),r=n["".concat(b).concat(e)]===t&&a,i=n["".concat(b).concat(e)]===n["".concat(x).concat(e)]&&a;return c.a.createElement("div",{className:"nowrap ".concat(a?"hasChanged":"isSame"," ").concat(o?"smallChange":"")},c.a.createElement(h.a,{title:"".concat(a?e+" has changed":"").concat(o?" (casing and/or parenthesis":"").concat(r?" - current equals verbatim":"").concat(i?" - propsed equals verbatim":"")},c.a.createElement("div",{className:r?"perfectMatchChanged":""},t),c.a.createElement("div",{className:i?"changedToPerfectMatch":""},n["".concat(x).concat(e)]!==t?n["".concat(x).concat(e)]:"\xa0")))}}});o=[{title:"count",key:"count",dataIndex:"count",sorter:function(e,t){return e.count-t.count},sortDirections:["descend","ascend"],render:function(e){return Number(e).toLocaleString()}}].concat(o).concat({title:"Changes",key:"changes",dataIndex:"changes",render:function(e,t){return c.a.createElement(c.a.Fragment,null,Object.keys(e).map(function(e){return c.a.createElement("span",{key:e},e,", ")}))},filters:Object.keys(a).map(function(e){return{text:e,value:e}}),filterMultiple:!0,onFilter:function(e,t){return t.changes[e]>0}},{title:"Action",key:"operation",render:function(e,t){return c.a.createElement("a",{href:"https://github.com/gbif/checklistbank/issues/new?title=".concat(n.getIssueSubjectText(t),"&body=").concat(n.getIssueBodyText(t),"&labels=bug"),target:"_blank",rel:"noopener noreferrer"},"Report")}}),n.setState({columns:o,dataSource:e.data,unfilteredData:e.data})},error:function(e){console.log(e)}})},n.getIssueSubjectText=function(e){var t="Regression for ".concat(e["".concat(k,"scientificName")]);return encodeURIComponent(t)},n.getIssueBodyText=function(e){var t="```\n".concat(JSON.stringify(e,null,2),"\n```");return encodeURIComponent(t)},n.expandedRowRender=function(e){return c.a.createElement("p",null,c.a.createElement("pre",null,JSON.stringify(e,null,2)))},n.handleSearch=function(e,t){n.setState({q:e,searchCol:t,dataSource:n.state.unfilteredData.filter(function(n){return n["".concat(k).concat(t)].indexOf(e)>-1||n["".concat(x).concat(t)].indexOf(e)>-1})})},n.state={csvUrl:j||R,searchCol:"scientificName",pageSize:20},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadfromUrl(this.state.csvUrl)}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("div",{style:{padding:20}},c.a.createElement(p.a,{gutter:16},c.a.createElement(g.a,{span:4},c.a.createElement(f.a,{defaultValue:this.state.searchCol,style:{width:"100%"},onChange:function(t){return e.handleSearch(e.state.q,t)}},O.map(function(e){return c.a.createElement(S,{value:e,key:e},e)}))),c.a.createElement(g.a,{span:12},c.a.createElement(w,{placeholder:"Search names",enterButton:"Search",onSearch:function(t){return e.handleSearch(t,e.state.searchCol)}})),c.a.createElement(g.a,{span:4},c.a.createElement(f.a,{defaultValue:this.state.pageSize,style:{width:"100%"},onChange:function(t){return e.setState({pageSize:t})}},[10,20,50,100,250,1e3].map(function(e){return c.a.createElement(S,{value:e,key:e},e)}))))),this.state.dataSource&&c.a.createElement("div",{style:{overflow:"auto",width:"100%"}},c.a.createElement(y.a,{dataSource:this.state.dataSource,columns:this.state.columns,bordered:!0,scroll:{x:870},pagination:{pageSize:this.state.pageSize},size:"middle",expandedRowRender:this.expandedRowRender,rowKey:"_key"}))))}}]),t}(c.a.Component);n(299);r.a.render(c.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[148,1,2]]]);
//# sourceMappingURL=main.1f093996.chunk.js.map