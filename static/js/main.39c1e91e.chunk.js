(this["webpackJsonpstackline-frontend-assessment"]=this["webpackJsonpstackline-frontend-assessment"]||[]).push([[0],{289:function(e,t,a){},431:function(e,t,a){},432:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(22),c=a.n(r),o=(a(289),a.p+"static/media/logo.d19ed00c.svg"),l=a(498),s=a(116),d=a(197),j=a(229),h=a(260),u=a(8),g=Object(d.a)((function(e){return Object(j.a)({root:{flexGrow:1,backgroundColor:"#ffffff",height:"100%"},paper:{height:"100%"},image:{height:150,alignContent:"center",textAlign:"center",paddingTop:10,display:"block",marginLeft:"auto",marginRight:"auto"},heading5:{textAlign:"center"},subTitle:{textAlign:"center",color:"#d3d3d3"},button:{fontSize:8,borderRight:0},tags:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"},tag:{borderRadius:10,border:"2px solid grey",margin:5,fontSize:9,padding:5}})})),b=function(e){var t,a=(null===e||void 0===e||null===(t=e.intro)||void 0===t?void 0:t.tags)?e.intro.tags:[],n=g();return Object(u.jsx)("div",{className:n.root,children:Object(u.jsxs)(h.a,{variant:"outlined",className:n.paper,children:[Object(u.jsx)("img",{src:e.intro.image,className:n.image,alt:"Product Pic"}),Object(u.jsx)("h5",{className:n.heading5,children:e.intro.title}),Object(u.jsx)("h6",{className:n.subTitle,children:e.intro.subtitle}),Object(u.jsx)("div",{className:n.tags,children:a.map((function(e,t){return Object(u.jsx)("div",{className:n.tag,children:e},t)}))})]})})},f=(a(486),a(490),a(489),a(485),a(487),a(488),Object(d.a)({table:{minWidth:500}}),a(491)),x=a(495),O=a(249),m=a(250),p=a(121),v=a(118),S=a(257),w=Object(d.a)({table:{minWidth:500},paper:{marginBottom:"20px"}}),N=function(e){var t,a=w(),n=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.sales;return Object(u.jsx)(h.a,{className:a.paper,children:Object(u.jsxs)(f.a,{width:750,height:350,data:n,margin:{top:30,right:30,left:30,bottom:30},children:[Object(u.jsx)(x.a,{strokeDasharray:"3 3"}),Object(u.jsx)(O.a,{dataKey:"weekEnding"}),Object(u.jsx)(m.a,{}),Object(u.jsx)(p.a,{}),Object(u.jsx)(v.a,{}),Object(u.jsx)(S.a,{type:"monotone",dataKey:"retailSales",stroke:"#82ca9d",strokeWidth:4}),Object(u.jsx)(S.a,{type:"monotone",dataKey:"wholesaleSales",stroke:"#8884d8",strokeWidth:4})]})})},y=a(175),k=a(251),E=[{field:"weekEnding",headerName:"WEEK ENDING",width:150},{field:"retailSales",headerName:"RETAIL SALES",width:150},{field:"wholesaleSales",headerName:"WHOLESALE SALES",width:150},{field:"unitsSold",headerName:"UNITS SOLD",width:150},{field:"retailerMargin",headerName:"RETAILER MARGIN",width:150}],L=function(e){var t,a,n=(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.sales)||void 0===a?void 0:a.map((function(e,t){return Object(y.a)(Object(y.a)({},e),{},{retailSales:"$".concat(e.retailSales.toLocaleString()),wholesaleSales:"$".concat(e.wholesaleSales.toLocaleString()),retailerMargin:"$".concat(e.retailerMargin.toLocaleString()),id:t+1})})))||[];return Object(u.jsx)(h.a,{children:Object(u.jsx)("div",{style:{height:300,width:"100%"},children:(null===n||void 0===n?void 0:n.length)?Object(u.jsx)(k.a,{rows:n,columns:E}):null})})},A="FETCH_DATA",T=function(){var e=Object(s.c)((function(e){return e.product})),t=Object(s.b)();return Object(n.useEffect)((function(){t((function(e){return fetch("data.json").then((function(e){return e.json()})).then((function(t){e({type:A,payload:(null===t||void 0===t?void 0:t.length)?t[0]:null})}))}))}),[t]),console.log("----product",e),Object(u.jsx)(l.a,{container:!0,spacing:2,children:e?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{item:!0,xs:3,children:Object(u.jsx)(b,{intro:e})}),Object(u.jsxs)(l.a,{item:!0,xs:9,children:[Object(u.jsx)(N,{data:e}),Object(u.jsx)(L,{data:e})]})]}):null})},C=(a(431),a(499)),I=Object(d.a)((function(e){return Object(j.a)({root:{flexGrow:1},container:{display:"flex",flexDirection:"column",backgroundColor:"#f5f7f9"},header:{height:70,backgroundColor:"#06243f",display:"flex",alignItems:"center",paddingLeft:e.spacing(2),marginBottom:e.spacing(5)},logo:{height:40}})})),D=function(){var e=I();return Object(u.jsxs)("div",{className:e.container,children:[Object(u.jsx)("header",{className:e.header,children:Object(u.jsx)("img",{src:o,alt:"Stackline Logo",className:e.logo})}),Object(u.jsx)(C.a,{children:Object(u.jsx)(T,{})})]})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,502)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))},W=a(179),F=a(255),M={product:{}};var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;return t.type===A?{product:t.payload}:e},G=Object(W.b)(B,Object(W.a)(F.a));c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(s.a,{store:G,children:Object(u.jsx)(D,{})})}),document.getElementById("root")),R()}},[[432,1,2]]]);
//# sourceMappingURL=main.39c1e91e.chunk.js.map