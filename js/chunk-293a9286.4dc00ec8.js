(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-293a9286"],{7499:function(e,t,n){},a1ab:function(e,t,n){"use strict";n("7499")},b0c0:function(e,t,n){var o=n("83ab"),r=n("9bf2").f,a=Function.prototype,s=a.toString,u=/^\s*function ([^ (]*)/,i="name";o&&!(i in a)&&r(a,i,{configurable:!0,get:function(){try{return s.call(this).match(u)[1]}catch(e){return""}}})},c24f:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"i",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"g",(function(){return f}));var o=n("b775"),r=function(e){return Object(o["a"])({method:"POST",url:"/app/v1_0/authorizations",data:e})},a=function(e){return Object(o["a"])({url:"/app/v1_0/sms/codes/".concat(e),method:"GET"})},s=function(){return Object(o["a"])({url:"/app/v1_0/user",method:"GET"})},u=function(){return Object(o["a"])({url:"/app/v1_0/user/channels",method:"GET"})},i=function(e){return Object(o["a"])({method:"POST",url:"/app/v1_0/user/followings",data:{target:e}})},c=function(e){return Object(o["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(e)})},l=function(){return Object(o["a"])({method:"GET",url:"/app/v1_0/user/profile"})},d=function(e){return Object(o["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:e})},f=function(e){return Object(o["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:e})}},ede4:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("login-nav-bar"),n("login-form")],1)},r=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("van-nav-bar",{staticClass:"app-nav-bar",attrs:{title:"注册 / 登录","left-arrow":""},on:{"click-left":function(t){return e.$router.back()}}})],1)},s=[],u={name:"",components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},i=u,c=n("2877"),l=Object(c["a"])(i,a,s,!1,null,"27b62b4d",null),d=l.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-form"},[n("van-form",{ref:"login-form",attrs:{"show-error-message":!1,"show-error":!1,"validate-first":""},on:{submit:e.onLogin,failed:e.onFailed}},[n("van-field",{attrs:{"icon-prefix":"toutiao","left-icon":"shouji",placeholder:"请输入手机号",name:"mobile",rules:e.formRules.mobile},model:{value:e.user.mobile,callback:function(t){e.$set(e.user,"mobile",t)},expression:"user.mobile"}}),n("van-field",{attrs:{clearable:"","icon-prefix":"toutiao","left-icon":"yanzhengma",placeholder:"请输入验证码",name:"code",rules:e.formRules.code},scopedSlots:e._u([{key:"button",fn:function(){return[e.isCountDownShow?n("van-count-down",{staticClass:"yanzhengma",attrs:{time:6e4,format:"ss s"},on:{finish:function(t){e.isCountDownShow=!1}}}):n("van-button",{staticClass:"yanzhengma",attrs:{size:"small",round:"",loading:e.isSendSmsLoading,"loading-type":"spinner"},on:{click:function(t){return t.preventDefault(),e.onSendSms.apply(null,arguments)}}},[e._v("发送验证码")])]},proxy:!0}]),model:{value:e.user.code,callback:function(t){e.$set(e.user,"code",t)},expression:"user.code"}}),n("div",{staticClass:"login"},[n("van-button",{staticClass:"denglu",attrs:{type:"info",block:""}},[e._v("登录")])],1)],1)],1)},m=[],p=n("1da1"),b=(n("b0c0"),n("96cf"),n("c24f")),h={name:"LoginForm",components:{},props:{},data:function(){return{user:{mobile:"13911111111",code:"246810"},formRules:{mobile:[{required:!0,message:"请输入手机号"},{pattern:/^1[3|5|6|7|8|9]\d{9}$/,message:"手机号格式错误"}],code:[{required:!0,message:"请输入验证码"},{pattern:/^\d{6}$/,message:"验证码格式错误"}]},isCountDownShow:!1,isSendSmsLoading:!1}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{onLogin:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$toast.loading({message:"登录中...",forbidClick:!0,duration:0}),t.prev=1,t.next=4,Object(b["e"])(e.user);case 4:n=t.sent,o=n.data,e.$toast.success("登录成功"),e.$store.commit("setUser",o.data),e.$store.commit("removeCachePage","Layout"),e.$router.push(e.$route.query.redirect||"/"),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](1),e.$toast.fail("登录失败，手机号或验证码错误");case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))()},onFailed:function(e){console.log(e),e.errors[0]&&this.$toast({message:e.errors[0].message,position:top})},onSendSms:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isSendSmsLoading=!0,t.prev=1,t.next=4,e.$refs["login-form"].validate("mobile");case 4:return t.next=6,Object(b["f"])(e.user.mobile);case 6:e.isCountDownShow=!0,t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](1),n="",n=t.t0&&t.t0.response&&429===t.t0.response.status?"验证码发送频繁，请一分钟后发送":t.t0&&"mobile"===t.t0.name?t.t0.message:"发送失败，请稍后重试",e.$toast({message:n,position:top});case 14:e.isSendSmsLoading=!1;case 15:case"end":return t.stop()}}),t,null,[[1,9]])})))()}}},v=h,g=(n("a1ab"),Object(c["a"])(v,f,m,!1,null,"6902bbb6",null)),w=g.exports,S={name:"Login",components:{LoginNavBar:d,LoginForm:w},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},O=S,$=Object(c["a"])(O,o,r,!1,null,"45f10221",null);t["default"]=$.exports}}]);
//# sourceMappingURL=chunk-293a9286.4dc00ec8.js.map