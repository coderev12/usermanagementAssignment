"use strict";exports.id=4822,exports.ids=[4822],exports.modules={4867:(r,t,e)=>{e.d(t,{Z:()=>ErrorReporter});var s=e(60222);let ErrorReporter=class ErrorReporter{report(r,t,e,s){this.hasErrors=!0,this.errors[e.wildCardPath]=r}createError(){return new s.R0.S(this.errors)}constructor(){this.hasErrors=!1,this.errors={}}}},71589:(r,t,e)=>{e.d(t,{d:()=>o,g:()=>i});var s=e(60222);let i=s.ZP.object({name:s.ZP.string().trim().minLength(2).maxLength(30),email:s.ZP.string().email(),password:s.ZP.string().minLength(6).maxLength(20).confirmed(),nameOfOrg:s.ZP.string()}),o=s.ZP.object({email:s.ZP.string().email(),password:s.ZP.string().minLength(6)})}};