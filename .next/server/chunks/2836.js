"use strict";exports.id=2836,exports.ids=[2836],exports.modules={82836:(t,e,r)=>{let n=r(6113),u="aes-256-gcm";t.exports=function(t,e){if(!t||"string"!=typeof t)throw Error("Cryptr: secret must be a non-0-length string");let r="hex",o=64,a=1e5;e&&(e.encoding&&(r=e.encoding),e.pbkdf2Iterations&&(a=e.pbkdf2Iterations),e.saltLength&&(o=e.saltLength));let i=o+16,s=i+16;function getKey(e){return n.pbkdf2Sync(t,e,a,32,"sha512")}this.encrypt=function(t){if(null==t)throw Error("value must not be null or undefined");let e=n.randomBytes(16),a=n.randomBytes(o),i=getKey(a),s=n.createCipheriv(u,i,e),f=Buffer.concat([s.update(String(t),"utf8"),s.final()]),l=s.getAuthTag();return Buffer.concat([a,e,l,f]).toString(r)},this.decrypt=function(t){if(null==t)throw Error("value must not be null or undefined");let e=Buffer.from(String(t),r),a=e.subarray(0,o),f=e.subarray(o,i),l=e.subarray(i,s),c=e.subarray(s),d=getKey(a),g=n.createDecipheriv(u,d,f);return g.setAuthTag(l),g.update(c)+g.final("utf8")}}}};