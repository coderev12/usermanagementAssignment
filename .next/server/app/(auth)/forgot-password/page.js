(()=>{var e={};e.id=9985,e.ids=[9985],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},33693:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>m,tree:()=>u});var r=s(67096),a=s(16132),n=s(37284),o=s.n(n),i=s(32564),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let u=["",{children:["(auth)",{children:["forgot-password",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,3686)),"C:\\Users\\shiva\\Downloads\\User_managment_Assignment\\User_management_assignment\\src\\app\\(auth)\\forgot-password\\page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,88959)),"C:\\Users\\shiva\\Downloads\\User_managment_Assignment\\User_management_assignment\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\shiva\\Downloads\\User_managment_Assignment\\User_management_assignment\\src\\app\\(auth)\\forgot-password\\page.tsx"],c="/(auth)/forgot-password/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(auth)/forgot-password/page",pathname:"/forgot-password",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},26567:(e,t,s)=>{Promise.resolve().then(s.bind(s,16561))},16561:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>ForgotPassword});var r=s(30784),a=s(9885),n=s(54997),o=s(34751);function ForgotPassword(){let[e,t]=(0,a.useState)(""),[s,i]=(0,a.useState)(!1),[l,u]=(0,a.useState)();return(0,r.jsxs)(r.Fragment,{children:[r.jsx(o.Ix,{}),r.jsx("div",{className:"mt-[100px] p-[100px] h-max w-screen flex justify-center items-center",children:(0,r.jsxs)("div",{className:"w-[500px] p-5 rounded-lg  shadow-2xl shadow-gray-900/10",children:[r.jsx("h1",{className:"text-2xl font-bold",children:"Forgot Password ?"}),r.jsx("p",{children:"Don't worry it happens. just enter your email below and we will send an email to you."}),(0,r.jsxs)("form",{onSubmit:t=>{t.preventDefault(),i(!0),n.Z.post("/api/auth/forgot-password",{email:e}).then(e=>{i(!1);let t=e.data;200==t.status?o.Am.success(t.message,{theme:"colored"}):400==t.status?u(t.errors):500==t.status&&o.Am.success(t.message,{theme:"colored"})}).catch(e=>{i(!1),console.log("The error is",e)})},children:[(0,r.jsxs)("div",{className:"mt-5",children:[r.jsx("label",{className:"block",children:"Email"}),r.jsx("input",{type:"email",placeholder:"shivansh@gmail.com",className:"w-full h-10 p-2 border rounded-md outline-red-400",onChange:e=>t(e.target.value)}),r.jsx("span",{className:"text-red-500",children:l?.email})]}),r.jsx("div",{className:"mt-5",children:r.jsx("button",{className:"w-full bg-black p-2 rounded-lg text-white",disabled:s,children:s?"Processing":"Submit"})})]})]})})]})}s(45996)},3686:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>l});var r=s(95153);let a=(0,r.createProxy)(String.raw`C:\Users\shiva\Downloads\User_managment_Assignment\User_management_assignment\src\app\(auth)\forgot-password\page.tsx`),{__esModule:n,$$typeof:o}=a,i=a.default,l=i},73881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(31323);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,r.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[6126,3657,2961,8651,1323,4997,9527,2613],()=>__webpack_exec__(33693));module.exports=s})();