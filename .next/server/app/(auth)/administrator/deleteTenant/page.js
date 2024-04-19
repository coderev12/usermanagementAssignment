(()=>{var e={};e.id=1508,e.ids=[1508],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},4005:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=r(67096),n=r(16132),a=r(37284),i=r.n(a),o=r(32564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["(auth)",{children:["administrator",{children:["deleteTenant",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,31763)),"C:\\Users\\shiva\\Downloads\\User_managment_Assignment\\User_management_assignment\\src\\app\\(auth)\\administrator\\deleteTenant\\page.tsx"]}]},{}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,88959)),"C:\\Users\\shiva\\Downloads\\User_managment_Assignment\\User_management_assignment\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\shiva\\Downloads\\User_managment_Assignment\\User_management_assignment\\src\\app\\(auth)\\administrator\\deleteTenant\\page.tsx"],u="/(auth)/administrator/deleteTenant/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(auth)/administrator/deleteTenant/page",pathname:"/administrator/deleteTenant",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3609:(e,t,r)=>{Promise.resolve().then(r.bind(r,80440))},80440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>RemoveBtn});var s=r(30784);r(9885);var n=r(4002),a=r(57114),i=r(54997);function RemoveBtn({id:e}){let t=(0,a.useRouter)(),removeTopic=async()=>{let r=confirm("Are you sure?");if(r){let r=await i.Z.delete(`/api/auth/administrator?id=${e}`);200==r.status&&t.refresh()}};return s.jsx("button",{onClick:removeTopic,className:"text-red-400",children:s.jsx(n.Bhs,{size:24})})}},31763:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>TopicsList});var s=r(4656);r(3542);var n=r(40700),a=r(95153);let i=(0,a.createProxy)(String.raw`C:\Users\shiva\Downloads\User_managment_Assignment\User_management_assignment\src\components\RemoveButton.tsx`),{__esModule:o,$$typeof:l}=i,d=i.default,getTopics=async()=>{try{let e=await n.Z.get("http://localhost:3000/api/auth/administrator/dashborad");return e.data}catch(e){return console.log("Error loading topics: ",e),[]}};async function TopicsList(){let e=await getTopics(),t=Object.entries(e)[0][1];return s.jsx(s.Fragment,{children:t.length>0?t.map(e=>s.jsx("div",{className:"flex items-center justify-center",children:(0,s.jsxs)("div",{className:"p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start",children:[(0,s.jsxs)("div",{children:[s.jsx("h2",{className:"font-bold text-2xl",children:e.name}),s.jsx("div",{children:e.email}),s.jsx("div",{children:e.role}),s.jsx("div",{children:e.nameOfOrg})]}),s.jsx("div",{className:"flex gap-2",children:s.jsx(d,{id:e._id})})]})})):s.jsx("div",{children:"No topics found."})})}},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(31323);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[6126,3657,2961,8651,1323,4997,4551,2613],()=>__webpack_exec__(4005));module.exports=r})();