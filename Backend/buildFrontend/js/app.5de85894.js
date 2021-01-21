(function(t){function e(e){for(var a,o,u=e[0],i=e[1],l=e[2],f=0,p=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var a=n("2b0e"),r=n("5f5b");n("ab8b"),n("2dd8");a["default"].use(r["a"]);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("PostBox",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{type:"dark",variant:"dark"}},[n("b-navbar-nav",[n("b-navbar-brand",{attrs:{href:"#",center:""}},[n("h1",[t._v("Personenverwaltung")])])],1)],1),n("ul",{attrs:{id:"AllUsers"}},t._l(t.users,(function(t){return n("li",{key:t.id})})),0),n("b-list-group",{staticClass:"userlist"},t._l(t.users,(function(e){return n("b-list-group-item",{key:e.id},[t._v(" "+t._s(e.id)+" "+t._s(e.firstName)+" "+t._s(e.lastName)+" "),n("b-button",{attrs:{variant:"danger"},on:{click:function(n){return t.deleteRequest(e.id)}}},[t._v("Delete")])],1)})),1),n("b-container",{staticClass:"pt-3"},[n("b-row",[n("b-col",[n("b-form-input",{staticClass:"mb-2",attrs:{type:"number",placeholder:"UserID eingeben (nur zum updaten)"},model:{value:t.inputID,callback:function(e){t.inputID=e},expression:"inputID"}}),n("b-form-input",{staticClass:"mb-2",attrs:{placeholder:"Vorname"},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}}),n("b-form-input",{staticClass:"mb-2",attrs:{placeholder:"Nachname"},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}}),n("b-form-input",{staticClass:"mb-2",attrs:{type:"number",placeholder:"alter"},model:{value:t.age,callback:function(e){t.age=e},expression:"age"}}),n("b-button",{attrs:{variant:"success"},on:{click:t.getRequest}},[t._v("GET")]),n("b-button",{attrs:{variant:"dark"},on:{click:t.postRequest}},[t._v("POST")]),n("b-button",{attrs:{variant:"dark"},on:{click:function(e){return t.putRequest()}}},[t._v("UPDATE")])],1)],1),t._v(" "+t._s(this.messageFromServer)+" ")],1)],1)},i=[],l=(n("4de4"),n("d81d"),n("bc3a")),c=n.n(l),f={name:"PostBox",props:{msg:String},data:function(){return{users:[],inputID:"",firstName:"",lastName:"",age:"",newUser:"",url:"http://localhost:3000",messageFromServer:""}},methods:{getRequest:function(){var t=this;c.a.get("http://localhost:3000/users",{withCredentials:!1}).then((function(e){t.users=e.data}))},postRequest:function(){var t=this;c.a.post("http://localhost:3000/user",{firstName:this.firstName,lastName:this.lastName,age:this.age},{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data),t.users.push(e.data),t.firstName="",t.lastName="",t.age=""})).catch((function(t){console.log(t)}))},putRequest:function(){var t=this;c.a.put("http://localhost:3000/user/"+this.inputID,{firstName:this.firstName,lastName:this.lastName,age:this.age}).then((function(e){console.log(e.data),t.messageFromServer=JSON.stringify(e.data),t.users=t.users.map((function(e){return e.id==t.inputID&&(e.firstName=t.firstName,e.lastName=t.lastName,e.age=t.age),e})),t.firstName="",t.lastName="",t.age=""}))},deleteRequest:function(t){var e=this;c.a.delete("http://localhost:3000/user/"+t).then((function(n){console.log(n.data),e.messageFromServer=JSON.stringify(n.data),e.users=e.users.filter((function(e){return e.id!==t}))}))}},mounted:function(){console.log("first get here?")}},p=f,d=(n("a6da"),n("2877")),m=Object(d["a"])(p,u,i,!1,null,"2e428e1e",null),b=m.exports,h={name:"App",components:{PostBox:b}},v=h,g=(n("034f"),Object(d["a"])(v,s,o,!1,null,null,null)),N=g.exports;a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(N)}}).$mount("#app")},"64c4":function(t,e,n){},"85ec":function(t,e,n){},a6da:function(t,e,n){"use strict";n("64c4")}});
//# sourceMappingURL=app.5de85894.js.map