(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{4884:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/alt",function(){return t(4194)}])},4194:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return j}});var a=t(4051),l=t.n(a),n=t(5893),r=t(2369),c=t(7673),i=(t(6746),t(7972)),o=t(7294),x=t(3801),d=t(2077),u=t(7835),p=t(1664),m=t(3193);function f(e,s,t,a,l,n,r){try{var c=e[n](r),i=c.value}catch(o){return void t(o)}c.done?s(i):Promise.resolve(i).then(a,l)}var h=function(e,s){return e.name>s.name},y=function(){return(0,n.jsx)("section",{className:"pt-6",children:(0,n.jsx)(r.Z,{children:(0,n.jsx)("h1",{className:"text-xl sm:text-3xl font-medium text-gray-800",children:"A collection of open source imaging data sets."})})})},v=function(){var e=(0,o.useState)([]),s=e[0],t=e[1],a=(0,o.useState)(""),c=a[0],m=a[1],y=(0,o.useState)(!1),v=y[0],j=y[1],g=(0,o.useMemo)((function(){return s.length>0?c?function(e,s){return s.filter((function(s){return s.name.toLowerCase().indexOf(e.toLowerCase())>-1||s.name.toLowerCase().indexOf(e.toLowerCase())>-1})).sort(h)}(c,s):s:[]})),w=function(){var e,s=(e=l().mark((function e(){var s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.P)("/data/open-source-datasets-raw.csv");case 2:(s=e.sent).shift(),t(s.map((function(e){return{name:e[0],url:e[1],area:e[2],imageType:e[3],resourceType:e[4],focusType:e[5],openAccess:e[6],requestAccess:e[7],commercialAccess:e[8],dataType:e[9]}})));case 5:case"end":return e.stop()}}),e)})),function(){var s=this,t=arguments;return new Promise((function(a,l){var n=e.apply(s,t);function r(e){f(n,a,l,r,c,"next",e)}function c(e){f(n,a,l,r,c,"throw",e)}r(void 0)}))});return function(){return s.apply(this,arguments)}}();return(0,o.useEffect)((function(){w()}),[]),(0,n.jsx)("section",{className:"pt-2 pb-6",children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"py-4 bg-white sticky top-0",children:(0,n.jsxs)(r.Z,{children:[(0,n.jsxs)("div",{className:"flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 sm:items-center",children:[(0,n.jsxs)("div",{className:"relative flex-1",children:[(0,n.jsx)("div",{className:"absolute top-0 left-0 p-3",children:(0,n.jsx)(x.W1M,{className:"w-4 h-4 text-gray-800"})}),(0,n.jsx)("input",{type:"text",value:c,onChange:function(e){return m(e.target.value)},className:"w-full border-gray-300 pl-10 pr-3 py-2 text-sm text-gray-800 focus:ring-blue-500 focus:ring-2 focus:border-transparent focus:ring-offset-1",placeholder:"Search datasets"})]}),(0,n.jsx)("div",{className:"flex flex-col items-stretch",children:(0,n.jsx)(d.Z,{type:"button",color:"blue",onClick:function(){return j(!v)},children:v?"Hide filters":"Filter datasets"})})]}),v&&(0,n.jsxs)("div",{className:"flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 mt-3 mb-2 sm:items-center",children:[(0,n.jsx)("div",{className:"flex-1",children:(0,n.jsx)(u.Z,{label:"Image Type",options:[{value:"ct",label:"CT"},{value:"mri",label:"MRI"},{value:"xray",label:"X-ray"}]})}),(0,n.jsx)("div",{className:"flex-1",children:(0,n.jsx)(u.Z,{label:"Focus",options:[{value:"alzheimers",label:"Alzheimers"},{value:"covid",label:"Covid"},{value:"arthritis",label:"Arthritis"}]})}),(0,n.jsx)("div",{className:"flex-1",children:(0,n.jsx)(u.Z,{label:"Permission",options:[{value:"open-access",label:"Open Access"},{value:"on-application",label:"On Application"},{value:"none",label:"None"}]})})]})]})}),(0,n.jsx)(r.Z,{children:g.length>0?(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsx)("div",{className:"-my-2 overflow-x-auto -mx-6 lg:-mx-8",children:(0,n.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:(0,n.jsx)("div",{className:"overflow-hidden border-b border-gray-200",children:(0,n.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,n.jsx)("thead",{className:"bg-gray-50",children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Name"}),(0,n.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Image Types"}),(0,n.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Focus"}),(0,n.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Permissions"}),(0,n.jsx)("th",{scope:"col",className:"relative px-6 py-3",children:(0,n.jsx)("span",{className:"sr-only",children:"Edit"})})]})}),(0,n.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:g.map((function(e){return(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{className:"px-6 py-4",children:[(0,n.jsx)("div",{className:"text-sm font-medium text-gray-900",children:e.name||"-"}),(0,n.jsx)("div",{className:"text-sm text-gray-500",children:e.url})]}),(0,n.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.imageType}),(0,n.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.focusType}),(0,n.jsxs)("td",{className:"px-6 py-4 flex flex-col space-y-2 items-start whitespace-nowrap",children:[e.openAccess&&(0,n.jsx)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",children:"Open Access"}),e.requestAccess&&(0,n.jsx)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800",children:"Access on Request"}),e.openAccess&&(0,n.jsx)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800",children:"Commercial Access"})]}),(0,n.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:(0,n.jsx)(p.default,{href:e.url,children:(0,n.jsx)("a",{target:"_blank",className:"text-blue-600 hover:text-blue-900",children:"View"})})})]},e.url)}))})]})})})})}):(0,n.jsx)("div",{className:"text-center text-sm py-4 text-gray-600",children:"No results found."})})]})})};function j(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{}),(0,n.jsx)(y,{}),(0,n.jsx)(v,{}),(0,n.jsx)(m.Z,{})]})}}},function(e){e.O(0,[9,696,774,888,179],(function(){return s=4884,e(e.s=s);var s}));var s=e.O();_N_E=s}]);