"use strict";(()=>{var e={};e.id=4901,e.ids=[4901],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6113:e=>{e.exports=require("crypto")},29227:e=>{e.exports=require("node:dns/promises")},47261:e=>{e.exports=require("node:util")},19564:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>f,originalPathname:()=>P,requestAsyncStorage:()=>h,routeModule:()=>g,serverHooks:()=>w,staticGenerationAsyncStorage:()=>_,staticGenerationBailout:()=>x});var s={};t.r(s),t.d(s,{POST:()=>POST}),t(78976);var a=t(10884),o=t(16132),n=t(1344),i=t(48572),u=t(62421),l=t.n(u),d=t(95798),p=t(60222),m=t(4867),c=t(71589);async function POST(e){(0,n.$)();try{console.log(e);let r=await e.json();p.ZP.errorReporter=()=>new m.Z;let t=p.ZP.compile(c.d),s=await t.validate(r),a=await i.n.findOne({email:s.email});if(a){let e=l().compareSync(s.password,a.password);if(console.info("the checkpassword is",e),e)return d.Z.json({status:200,message:"User Logged in successfully!"},{status:200});return d.Z.json({status:400,errors:{email:"Please check your credentials."}},{status:200})}return d.Z.json({status:400,errors:{email:"No User found in our system with above email."}},{status:200})}catch(e){if(e instanceof p.R0.S)return d.Z.json({status:400,errors:e.messages},{status:200});return d.Z.json({status:400,errors:"error.message "},{status:200})}}let g=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/auth/administrator/login/route",pathname:"/api/auth/administrator/login",filename:"route",bundlePath:"app/api/auth/administrator/login/route"},resolvedPagePath:"C:\\Users\\shiva\\Downloads\\User_managment_Assignment\\User_management_assignment\\src\\app\\api\\auth\\administrator\\login\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:h,staticGenerationAsyncStorage:_,serverHooks:w,headerHooks:f,staticGenerationBailout:x}=g,P="/api/auth/administrator/login/route"}};var r=require("../../../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[6126,6449,4933,5798,2421,222,4122,4822],()=>__webpack_exec__(19564));module.exports=t})();