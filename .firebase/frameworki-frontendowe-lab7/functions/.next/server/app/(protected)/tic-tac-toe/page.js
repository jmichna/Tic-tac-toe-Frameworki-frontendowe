(()=>{var e={};e.id=291,e.ids=[291],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},55511:e=>{"use strict";e.exports=require("crypto")},14985:e=>{"use strict";e.exports=require("dns")},94735:e=>{"use strict";e.exports=require("events")},29021:e=>{"use strict";e.exports=require("fs")},81630:e=>{"use strict";e.exports=require("http")},73496:e=>{"use strict";e.exports=require("http2")},91645:e=>{"use strict";e.exports=require("net")},21820:e=>{"use strict";e.exports=require("os")},33873:e=>{"use strict";e.exports=require("path")},19771:e=>{"use strict";e.exports=require("process")},27910:e=>{"use strict";e.exports=require("stream")},34631:e=>{"use strict";e.exports=require("tls")},79551:e=>{"use strict";e.exports=require("url")},28354:e=>{"use strict";e.exports=require("util")},74075:e=>{"use strict";e.exports=require("zlib")},68503:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>p,pages:()=>u,routeModule:()=>c,tree:()=>d});var o=t(70260),s=t(28203),i=t(25155),a=t.n(i),n=t(67292),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(r,l);let d=["",{children:["(protected)",{children:["tic-tac-toe",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,65865)),"C:\\Users\\jmich\\OneDrive\\Dokumenty\\K\xf3łko i Krzyżyk Frameworki\\frontend-app-next-js-main\\app\\(protected)\\tic-tac-toe\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,955)),"C:\\Users\\jmich\\OneDrive\\Dokumenty\\K\xf3łko i Krzyżyk Frameworki\\frontend-app-next-js-main\\app\\(protected)\\layout.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,33803)),"C:\\Users\\jmich\\OneDrive\\Dokumenty\\K\xf3łko i Krzyżyk Frameworki\\frontend-app-next-js-main\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,51617)),"C:\\Users\\jmich\\OneDrive\\Dokumenty\\K\xf3łko i Krzyżyk Frameworki\\frontend-app-next-js-main\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\jmich\\OneDrive\\Dokumenty\\K\xf3łko i Krzyżyk Frameworki\\frontend-app-next-js-main\\app\\(protected)\\tic-tac-toe\\page.js"],p={require:t,loadChunk:()=>Promise.resolve()},c=new o.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/(protected)/tic-tac-toe/page",pathname:"/tic-tac-toe",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},10718:(e,r,t)=>{Promise.resolve().then(t.bind(t,955))},50886:(e,r,t)=>{Promise.resolve().then(t.bind(t,58039))},87483:(e,r,t)=>{Promise.resolve().then(t.bind(t,65865))},40627:(e,r,t)=>{Promise.resolve().then(t.bind(t,11621))},58039:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var o=t(45512),s=t(75674);t(58009);var i=t(79334);let a=function({children:e}){let{user:r}=(0,s.A)();return(0,i.usePathname)(),(0,o.jsx)(o.Fragment,{children:e})}},11621:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var o=t(45512),s=t(58009),i=t(17656),a=t(4034),n=t(26008),l=t(12688);function d({gameId:e,initialState:r}){let t=(0,s.useRef)(e||crypto.randomUUID()),[d,u]=(0,s.useState)({boardSize:3,backgroundColor:"#ffffff",symbolColors:{X:"#ff0000",O:"#0000ff"},borderColor:"#000000",cellSize:80,symbolSize:"2rem",gameMode:"friend",playerSymbol:"X"}),[p,c]=(0,s.useState)(Array(9).fill(null)),[m,h]=(0,s.useState)(!0),[f,y]=(0,s.useState)({xMoves:0,oMoves:0,emptyFields:9}),[x,b]=(0,s.useState)(null),v=e=>e.reduce((e,r,t)=>(r||e.push(t),e),[]),g=(e,r)=>{for(let t of v(e)){let o=[...e];if(o[t]=r,k(o)===r)return t}return null},j=(e,r)=>{let t=v(e);if(0===t.length)return null;let o=g(e,"X"===d.playerSymbol?"O":"X");if(null!==o)return o;let s=g(e,d.playerSymbol);if(null!==s)return s;switch(r){case"easy":default:return t[Math.floor(Math.random()*t.length)];case"medium":{if(.7>Math.random())return t[Math.floor(Math.random()*t.length)];let r=Math.floor(e.length/2),o=Math.sqrt(e.length),s=[r,0,o-1,o*(o-1),o*o-1].filter(e=>t.includes(e));return s.length>0?s[Math.floor(Math.random()*s.length)]:t[Math.floor(Math.random()*t.length)]}case"hard":{let r=Math.floor(e.length/2),o=Math.sqrt(e.length);if(t.includes(r))return r;let s=[0,o-1,o*(o-1),o*o-1].filter(e=>t.includes(e));if(s.length>0)return s[Math.floor(Math.random()*s.length)];return t[Math.floor(Math.random()*t.length)]}}},k=e=>{for(let r=0;r<d.boardSize;r++)for(let t=0;t<=d.boardSize-d.boardSize;t++){let t=e.slice(r*d.boardSize,(r+1)*d.boardSize);if(t.every(e=>"X"===e)||t.every(e=>"O"===e))return t[0]}for(let r=0;r<d.boardSize;r++){let t=[];for(let o=0;o<d.boardSize;o++)t.push(e[r+o*d.boardSize]);if(t.every(e=>"X"===e)||t.every(e=>"O"===e))return t[0]}let r=[],t=[];for(let o=0;o<d.boardSize;o++)r.push(e[o*d.boardSize+o]),t.push(e[o*d.boardSize+(d.boardSize-1-o)]);return r.every(e=>"X"===e)||r.every(e=>"O"===e)?r[0]:t.every(e=>"X"===e)||t.every(e=>"O"===e)?t[0]:null},M=async e=>{if(k(p)||p[e])return;let r=[...p],o=d.playerSymbol||"X",s="X"===o?"O":"X";r[e]=o;let n={xMoves:f.xMoves+("X"===o?1:0),oMoves:f.oMoves+("O"===o?1:0),emptyFields:f.emptyFields-1};if(c(r),y(n),"friend"!==d.gameMode&&!k(r)&&n.emptyFields>0){let e=j(r,d.gameMode);null!==e&&(r[e]=s,n["X"===s?"xMoves":"oMoves"]+=1,n.emptyFields-=1,c(r),y(n))}else h(!m);let l=k(r),u={timestamp:(0,i.O5)(),lastModified:(0,i.O5)(),status:l||0===n.emptyFields?"completed":"in_progress",winner:l||(0===n.emptyFields?"Draw":null),xMoves:n.xMoves,oMoves:n.oMoves,boardSize:d.boardSize,currentBoard:r,xIsNext:"friend"!==d.gameMode||!m,emptyFields:n.emptyFields,gameMode:d.gameMode,playerSymbol:d.playerSymbol};try{await (0,i.BN)((0,i.H9)(a.db,"users",a.j.currentUser.uid,"tictactoe-games",t.current),u)}catch(e){console.error("Error saving game:",e)}},S=k(p),z=S?`Winner: ${S}`:0===f.emptyFields?"Game is a draw!":`Next player: ${m?"X":"O"}`;return(0,o.jsxs)("div",{className:"flex min-h-screen flex-col items-center justify-center p-4",children:[(0,o.jsxs)("h1",{className:"text-3xl font-bold mb-8",children:["Tic Tac Toe ",d.boardSize,"x",d.boardSize,"friend"!==d.gameMode&&` (vs Bot - ${d.gameMode})`]}),"friend"!==d.gameMode&&(0,o.jsxs)("p",{className:"mb-4 text-lg",children:["You are playing as:"," ",x?.playerSymbol||d.playerSymbol||"X"]}),(0,o.jsxs)("div",{className:"mb-4 flex items-center justify-center gap-3",children:[(0,o.jsxs)(n.default,{href:"/tic-tac-toe/settings",className:"rounded-md bg-primary px-4 py-3 text-base text-white font-medium dark:text-white hover:bg-primary/90 flex items-center gap-2",children:[(0,o.jsx)(l.xPd,{size:25}),"Settings"]}),(0,o.jsxs)(n.default,{href:"/tic-tac-toe/history",className:"rounded-md bg-primary px-4 py-3 text-base text-white font-medium dark:text-white hover:bg-primary/90 flex items-center gap-2",children:[(0,o.jsx)(l.Eyn,{size:25}),"History"]})]}),(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsxs)("p",{children:["X Moves: ",f.xMoves]}),(0,o.jsxs)("p",{children:["O Moves: ",f.oMoves]}),(0,o.jsxs)("p",{children:["Empty Fields: ",f.emptyFields]}),(0,o.jsx)("p",{className:"font-bold",children:z})]}),(0,o.jsx)("div",{className:"grid gap-1 mb-4",style:{gridTemplateColumns:`repeat(${d.boardSize}, ${d.cellSize}px)`},children:p.map((e,r)=>(0,o.jsx)("button",{onClick:()=>M(r),style:{width:`${d.cellSize}px`,height:`${d.cellSize}px`,backgroundColor:d.backgroundColor,borderColor:d.borderColor,color:e?d.symbolColors[e]:"inherit",fontSize:d.symbolSize},className:"border-2 flex items-center justify-center font-bold hover:bg-gray-100",disabled:!!(S||e),children:e},r))}),(0,o.jsx)("div",{className:"space-x-4",children:(0,o.jsx)("button",{className:"rounded-md bg-primary px-4 py-3 text-base text-white font-medium dark:text-white hover:bg-primary/90 flex items-center gap-2",onClick:()=>{c(Array(d.boardSize*d.boardSize).fill(null)),h(!0),y({xMoves:0,oMoves:0,emptyFields:d.boardSize*d.boardSize})},children:"Reset Game"})})]})}},79334:(e,r,t)=>{"use strict";var o=t(58686);t.o(o,"redirect")&&t.d(r,{redirect:function(){return o.redirect}}),t.o(o,"useParams")&&t.d(r,{useParams:function(){return o.useParams}}),t.o(o,"usePathname")&&t.d(r,{usePathname:function(){return o.usePathname}}),t.o(o,"useRouter")&&t.d(r,{useRouter:function(){return o.useRouter}}),t.o(o,"useSearchParams")&&t.d(r,{useSearchParams:function(){return o.useSearchParams}})},955:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});let o=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\jmich\\\\OneDrive\\\\Dokumenty\\\\K\xf3łko i Krzyżyk Frameworki\\\\frontend-app-next-js-main\\\\app\\\\(protected)\\\\layout.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\jmich\\OneDrive\\Dokumenty\\K\xf3łko i Krzyżyk Frameworki\\frontend-app-next-js-main\\app\\(protected)\\layout.jsx","default")},65865:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});let o=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\jmich\\\\OneDrive\\\\Dokumenty\\\\K\xf3łko i Krzyżyk Frameworki\\\\frontend-app-next-js-main\\\\app\\\\(protected)\\\\tic-tac-toe\\\\page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\jmich\\OneDrive\\Dokumenty\\K\xf3łko i Krzyżyk Frameworki\\frontend-app-next-js-main\\app\\(protected)\\tic-tac-toe\\page.js","default")}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[989,998,833],()=>t(68503));module.exports=o})();