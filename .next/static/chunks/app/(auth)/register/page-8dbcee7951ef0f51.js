(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[566],{5386:function(e,s,a){Promise.resolve().then(a.bind(a,1544))},1544:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return SignUp}});var t=a(7437),l=a(2265),n=a(1396),r=a.n(n),i=a(2173),o=a(4033),c=a(2749);function SignUp(){let e=(0,o.useRouter)(),[s,a]=(0,l.useState)(!1),[n,d]=(0,l.useState)({email:"",password:"",name:"",password_confirmation:"",nameOfOrg:""}),[m,u]=(0,l.useState)({}),submitForm=async()=>{a(!0),i.Z.post("/api/auth/register",n).then(s=>{a(!1),console.log("The response is",s.data);let t=s.data;200==t.status?e.push("/login?message=".concat(t.msg)):(null==t?void 0:t.status)==400?u(null==t?void 0:t.errors):u({})}).catch(e=>console.log("The error is",e))};return(0,t.jsx)("section",{children:(0,t.jsx)("div",{className:"h-max",children:(0,t.jsx)("div",{className:"flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24",children:(0,t.jsx)("div",{className:"xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md",children:(0,t.jsxs)("div",{className:"w-[500px] shadow-2xl shadow-gray-900/10 rounded-lg p-5",children:[(0,t.jsx)("h2",{className:"text-3xl font-bold leading-tight text-black sm:text-4xl",children:"Sign up"}),(0,t.jsxs)("p",{className:"mt-2 text-base text-gray-600",children:["Already have an account?",(0,t.jsx)(r(),{href:"/login",title:"",className:"font-medium text-black transition-all duration-200 hover:underline ml-2",children:"Sign In"})]}),(0,t.jsx)("form",{action:"#",method:"POST",className:"mt-8",children:(0,t.jsxs)("div",{className:"space-y-5",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"name",className:"text-base font-medium text-gray-900",children:"Full Name"}),(0,t.jsxs)("div",{className:"mt-2",children:[(0,t.jsx)("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"text",placeholder:"Full Name",id:"name",onChange:e=>d({...n,name:e.target.value})}),(0,t.jsx)("span",{className:"text-red-500 font-bold",children:null==m?void 0:m.name})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"email",className:"text-base font-medium text-gray-900",children:"Email address"}),(0,t.jsxs)("div",{className:"mt-2",children:[(0,t.jsx)("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"email",placeholder:"Email",id:"email",onChange:e=>d({...n,email:e.target.value})}),(0,t.jsx)("span",{className:"text-red-500 font-bold",children:null==m?void 0:m.email})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"flex items-center justify-between",children:(0,t.jsx)("label",{htmlFor:"password",className:"text-base font-medium text-gray-900",children:"Password"})}),(0,t.jsxs)("div",{className:"mt-2",children:[(0,t.jsx)("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"password",placeholder:"Password",id:"password",onChange:e=>d({...n,password:e.target.value})}),(0,t.jsx)("span",{className:"text-red-500 font-bold",children:null==m?void 0:m.password})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"flex items-center justify-between",children:(0,t.jsx)("label",{htmlFor:"password",className:"text-base font-medium text-gray-900",children:"Confirm Password"})}),(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsx)("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"password",placeholder:"Confirm Password",id:"password_confirmation",onChange:e=>d({...n,password_confirmation:e.target.value})})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"flex items-center justify-between",children:(0,t.jsx)("label",{htmlFor:"nameOfOrg",className:"text-base font-medium text-gray-900",children:"Enter the Organisation"})}),(0,t.jsxs)("div",{className:"mt-2",children:[(0,t.jsx)("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"text",placeholder:"Your Organisation name",id:"nameOfOrg",onChange:e=>d({...n,nameOfOrg:e.target.value})}),(0,t.jsx)("span",{className:"text-red-500 font-bold",children:null==m?void 0:m.password})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{type:"button",className:"inline-flex w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 ".concat(s?"bg-gray-700":"bg-black"),onClick:submitForm,disabled:s,children:s?"Processing...":"Create Account"})})]})}),(0,t.jsx)("p",{className:"text-center my-3",children:"-- OR --"}),(0,t.jsx)("div",{className:"space-y-3",children:(0,t.jsxs)("button",{type:"button",className:"relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none",onClick:()=>{(0,c.signIn)("github",{callbackUrl:"/"})},children:[(0,t.jsx)("span",{className:"mr-2 inline-block",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"30px",height:"30px",children:(0,t.jsx)("path",{d:"M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"})})}),"Sign in with Github"]})})]})})})})})}},1396:function(e,s,a){e.exports=a(8326)}},function(e){e.O(0,[580,749,142,971,472,744],function(){return e(e.s=5386)}),_N_E=e.O()}]);