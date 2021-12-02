(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{114:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(28),s=n.n(r),o=n(9),i=n(13),l=n(6),u=n.n(l),j=n(18),d=n(10),h=n(5),b=n(15),p=n(142),m=n(136),x=n(141),O=n(30),f=n.n(O),g=n(133),y=n(134),v=n(135),w=n(12),N="LOGIN_SUCCESS",S="LOGIN_FAIL",_="SIGNUP_SUCCESS",k="SIGNUP_FAIL",C="ACTIVATION_SUCCESS",A="ACTIVATION_FAIL",I="USER_LOADED_SUCCESS",E="USER_LOADED_FAIL",T="AUTHENTICATED_SUCCESS",F="AUTHENTICATED_FAIL",D="PASSWORD_RESET_SUCCESS",L="PASSWORD_RESET_FAIL",R="PASSWORD_RESET_CONFIRM_SUCCESS",U="PASSWORD_RESET_CONFIRM_FAIL",G="GOOGLE_AUTH_SUCCESS",P="GOOGLE_AUTH_FAIL",W="FACEBOOK_AUTH_SUCCESS",q="FACEBOOK_AUTH_FAIL",Y="LOGOUT",H=n(19),J=n.n(H),z=function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=14;break}return n={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,J.a.get("".concat("http://localhost:8000","/auth/users/me/"),n);case 5:a=e.sent,t({type:I,payload:a.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:E});case 12:e.next=15;break;case 14:t({type:E});case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},B=n(137),M=n(1);function V(){return Object(M.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(M.jsx)("span",{color:"inherit",href:"https://material-ui.com/",children:"Rajan Gautam"})," ",(new Date).getFullYear(),"."]})}var K=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),Q=Object(w.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,loading:e.auth.loading,user:e.auth.user}}),{login:function(e,t){return function(){var n=Object(j.a)(u.a.mark((function n(a){var c,r,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,J.a.post("".concat("http://localhost:8000","/auth/jwt/create/"),r,c);case 5:s=n.sent,a({type:N,payload:s.data}),a(z()),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),a({type:S});case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuthenticated,c=e.loading,r=K(),s=Object(a.useState)(""),l=Object(b.a)(s,2),O=l[0],y=l[1],w=Object(a.useState)({email:"",password:""}),N=Object(b.a)(w,2),S=N[0],_=N[1],k=S.email,C=S.password,A=function(e){_(Object(h.a)(Object(h.a)({},S),{},Object(d.a)({},e.target.name,e.target.value)))};if(n)return Object(M.jsx)(i.a,{to:"/"});var I=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.get("".concat("http://localhost:8000","/auth/o/google-oauth2/?redirect_uri=").concat("http://localhost:8000","/google"));case 3:t=e.sent,window.location.replace(t.data.authorization_url),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.get("".concat("http://localhost:8000","/auth/o/facebook/?redirect_uri=").concat("http://localhost:8000","/facebook"));case 3:t=e.sent,window.location.replace(t.data.authorization_url),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(M.jsxs)(v.a,{component:"main",maxWidth:"md",children:[Object(M.jsx)(m.a,{}),Object(M.jsxs)("div",{className:r.paper,children:[Object(M.jsx)(p.a,{className:r.avatar,children:Object(M.jsx)(f.a,{})}),Object(M.jsx)(g.a,{component:"h1",variant:"h5",children:"Sign in"})]}),O?Object(M.jsx)("div",{className:"errorMsg",children:Object(M.jsx)("strong",{className:"text-danger",children:O})}):null,c?Object(M.jsx)(B.a,{}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(k,C),y("Please check your email and password")}(e)},children:[Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("input",{type:"email",className:"form-control my-3 py-3",placeholder:"Email Address",name:"email",value:k,onChange:function(e){return A(e)},required:!0}),Object(M.jsx)("input",{type:"password",className:"form-control my-3 py-3",placeholder:"Password",name:"password",value:C,minLength:"6",onChange:function(e){return A(e)},required:!0})]}),Object(M.jsx)("button",{type:"submit",className:"btn btn-primary my-2 py-1 px-3",children:"Sign In"}),Object(M.jsxs)("div",{className:"row d-flex justify-content-center align-items-center my-4",children:[Object(M.jsx)("div",{className:"col-md-6 col-12 d-flex justify-content-center",children:Object(M.jsx)("h5",{children:Object(M.jsx)(o.b,{to:"/reset_password",variant:"body2",children:"Forgot password?"})})}),Object(M.jsx)("div",{className:"col-md-6 col-12 d-flex justify-content-center",children:Object(M.jsxs)("h5",{children:["Don't have an account?"," ",Object(M.jsx)(o.b,{to:"/signup",variant:"body2",children:"Sign Up"})]})})]})]}),Object(M.jsxs)("div",{className:"row mx-auto d-flex",children:[Object(M.jsx)("div",{className:"col-md-6 d-flex justify-content-center",children:Object(M.jsx)("button",{className:"btn btn-danger my-3",onClick:I,children:"Continue with Google"})}),Object(M.jsx)("div",{className:"col-md-6 d-flex justify-content-center",children:Object(M.jsx)("button",{className:"btn btn-primary my-3",onClick:E,children:"Continue with Facebook"})})]})]}),Object(M.jsx)(x.a,{mt:8,children:Object(M.jsx)(V,{})})]})})),X=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}}})),Z=Object(w.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e,t,n,a,c,r,s){return function(){var o=Object(j.a)(u.a.mark((function o(i){var l,j,d;return u.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return l={headers:{"Content-Type":"application/json"}},j=JSON.stringify({username:e,email:t,first_name:n,last_name:a,phone:c,password:r,re_password:s}),o.prev=2,o.next=5,J.a.post("".concat("http://localhost:8000","/auth/users/"),j,l);case 5:d=o.sent,i({type:_,payload:d.data}),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(2),i({type:k});case 12:case"end":return o.stop()}}),o,null,[[2,9]])})));return function(e){return o.apply(this,arguments)}}()}})((function(e){var t=e.signup,n=e.isAuthenticated,c=X(),r=Object(a.useState)(!1),s=Object(b.a)(r,2),l=s[0],O=s[1],y=Object(a.useState)({username:"",email:"",first_name:"",last_name:"",phone:"",password:"",re_password:""}),w=Object(b.a)(y,2),N=w[0],S=w[1],_=N.username,k=N.email,C=N.first_name,A=N.last_name,I=N.phone,E=N.password,T=N.re_password,F=function(e){S(Object(h.a)(Object(h.a)({},N),{},Object(d.a)({},e.target.name,e.target.value)))};if(n)return Object(M.jsx)(i.a,{to:"/"});if(l)return Object(M.jsx)(i.a,{to:"/verify-redirect"});var D=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.get("".concat("http://localhost:8000","/auth/o/google-oauth2/?redirect_uri=").concat("http://localhost:8000","/google"));case 3:t=e.sent,window.location.replace(t.data.authorization_url),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.get("".concat("http://localhost:8000","/auth/o/facebook/?redirect_uri=").concat("http://localhost:8000","/facebook"));case 3:t=e.sent,window.location.replace(t.data.authorization_url),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(M.jsxs)(v.a,{component:"main",maxWidth:"md",children:[Object(M.jsx)(m.a,{}),Object(M.jsxs)("div",{className:c.paper,children:[Object(M.jsx)(p.a,{className:c.avatar,children:Object(M.jsx)(f.a,{})}),Object(M.jsx)(g.a,{component:"h1",variant:"h5",children:"Sign up"})]}),Object(M.jsx)("form",{className:"mt-3",onSubmit:function(e){return function(e){e.preventDefault(),E===T&&(t(_,k,C,A,I,E,T),O(!0))}(e)},children:Object(M.jsxs)("div",{className:"form-group mt-2",children:[Object(M.jsx)("input",{type:"text",className:"form-control my-2 py-2",placeholder:"Username",name:"username",id:"username",value:_,onChange:function(e){return F(e)},required:!0}),Object(M.jsx)("input",{type:"text",className:"form-control my-2 py-2",placeholder:"First Name",name:"first_name",id:"first_name",value:C,onChange:function(e){return F(e)},required:!0}),Object(M.jsx)("input",{type:"text",className:"form-control my-2 py-2",placeholder:"Last Name",name:"last_name",id:"last_name",value:A,onChange:function(e){return F(e)},required:!0}),Object(M.jsx)("input",{type:"email",className:"form-control my-2 py-2",placeholder:"Email Address",name:"email",id:"email",value:k,onChange:function(e){return F(e)},required:!0}),Object(M.jsx)("input",{type:"text",className:"form-control my-2 py-2",placeholder:"Phone Number",name:"phone",id:"phone",value:I,onChange:function(e){return F(e)},minLength:"10",required:!0}),Object(M.jsx)("input",{type:"password",className:"form-control my-2 py-2",placeholder:"Password",name:"password",id:"password",value:E,minLength:"6",onChange:function(e){return F(e)},required:!0}),Object(M.jsx)("input",{type:"password",className:"form-control my-2 py-2",placeholder:"Confirm Password",name:"re_password",id:"re_password",value:T,minLength:"6",onChange:function(e){return F(e)},required:!0}),Object(M.jsx)("button",{type:"submit",className:"btn btn-primary my-2 py-1 px-3",children:"Sign Up"}),Object(M.jsx)("div",{className:"my-4",children:Object(M.jsxs)("h5",{children:["Already have an Account?"," ",Object(M.jsx)(o.b,{to:"/login",variant:"body2",children:"Login"})]})})]})}),Object(M.jsxs)("div",{className:"row mx-auto d-flex",children:[Object(M.jsx)("div",{className:"col-md-6 d-flex justify-content-center",children:Object(M.jsx)("button",{className:"btn btn-danger my-2",onClick:D,children:"Continue with Google"})}),Object(M.jsx)("div",{className:"col-md-6 d-flex justify-content-center",children:Object(M.jsx)("button",{className:"btn btn-primary my-2",onClick:L,children:"Continue with Facebook"})})]}),Object(M.jsx)(x.a,{my:3,children:Object(M.jsx)(V,{})})]})})),$=Object(w.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}),{})((function(e){var t=e.isAuthenticated,n=e.user,c=Object(a.useState)({fname:"",lname:"",email:"",phone:"",username:""}),r=Object(b.a)(c,2),s=r[0],o=r[1];return Object(a.useEffect)((function(){n&&t&&o({fname:n.first_name,lname:n.last_name,email:n.email,phone:n.phone,username:n.username})}),[n]),Object(M.jsxs)("div",{className:"container my-4",children:[Object(M.jsxs)("h1",{className:"text-center display-3",style:{fontWeight:"bolder"},children:["Welcome ",Object(M.jsx)("span",{children:s.fname?s.fname:""})," to Authentication System"]}),Object(M.jsx)("div",{className:"row my-5",children:Object(M.jsx)("h1",{className:"text-center",children:"Home Page"})}),t?Object(M.jsx)("div",{className:"row",children:Object(M.jsx)("div",{className:"col-8 mx-auto",children:Object(M.jsxs)("div",{className:"row",children:[Object(M.jsx)("div",{className:"col-6",children:Object(M.jsx)("h4",{children:"First Name: "})}),Object(M.jsx)("div",{className:"col-6",children:Object(M.jsx)("h4",{children:s.fname?s.fname:""})}),Object(M.jsx)("div",{className:"col-6",children:Object(M.jsx)("h4",{children:"Last Name: "})}),Object(M.jsx)("div",{className:"col-6",children:Object(M.jsx)("h4",{children:s.lname?s.lname:""})}),Object(M.jsx)("div",{className:"col-6",children:Object(M.jsx)("h4",{children:"Username: "})}),Object(M.jsx)("div",{className:"col-6",children:Object(M.jsx)("h4",{children:s.username?s.username:""})}),Object(M.jsx)("div",{className:"col-6",children:Object(M.jsx)("h4",{children:"Email: "})}),Object(M.jsx)("div",{className:"col-6",children:Object(M.jsx)("h4",{children:s.email?s.email:""})}),Object(M.jsx)("div",{className:"col-6",children:Object(M.jsx)("h4",{children:"Phone: "})}),Object(M.jsx)("div",{className:"col-6",children:Object(M.jsx)("h4",{children:s.phone?s.phone:""})})]})})}):""]})}));function ee(){return Object(M.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(M.jsx)("span",{color:"inherit",href:"https://material-ui.com/",children:"Rajan Gautam"})," ",(new Date).getFullYear(),"."]})}var te=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),ne=Object(w.b)(null,{reset_password:function(e){return function(t){var n=JSON.stringify({email:e});try{J.a.post("".concat("http://localhost:8000","/auth/users/reset_password/"),n,{headers:{"Content-Type":"application/json"}}),t({type:D})}catch(a){t({type:L})}}}})((function(e){var t=e.reset_password,n=te(),c=Object(a.useState)(!1),r=Object(b.a)(c,2),s=r[0],o=r[1],l=Object(a.useState)({email:""}),u=Object(b.a)(l,2),j=u[0],O=u[1],y=j.email;return s?Object(M.jsx)(i.a,{to:"/password-redirect"}):Object(M.jsxs)(v.a,{component:"main",maxWidth:"md",children:[Object(M.jsx)(m.a,{}),Object(M.jsxs)("div",{className:n.paper,children:[Object(M.jsx)(p.a,{className:n.avatar,children:Object(M.jsx)(f.a,{})}),Object(M.jsx)(g.a,{component:"h1",variant:"h5",children:"Request Password Reset"})]}),Object(M.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(y),o(!0)}(e)},children:[Object(M.jsx)("div",{className:"form-group",children:Object(M.jsx)("input",{type:"email",placeholder:"Enter Your Email",className:"form-control my-2",name:"email",value:y,onChange:function(e){return function(e){O(Object(h.a)(Object(h.a)({},j),{},Object(d.a)({},e.target.name,e.target.value)))}(e)},required:!0})}),Object(M.jsx)("button",{type:"submit",className:"btn btn-primary my-2",children:"Reset Password"})]}),Object(M.jsx)(x.a,{mt:8,children:Object(M.jsx)(ee,{})})]})}));function ae(){return Object(M.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(M.jsx)("span",{color:"inherit",href:"https://material-ui.com/",children:"Rajan Gautam"})," ",(new Date).getFullYear(),"."]})}var ce=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),re=Object(w.b)(null,{reset_password_confirm:function(e,t,n){return function(){var a=Object(j.a)(u.a.mark((function a(c){var r,s;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"Content-Type":"application/json"}},s=JSON.stringify({uid:e,token:t,new_password:n}),a.prev=2,a.next=5,J.a.post("".concat("http://localhost:8000","/auth/users/reset_password_confirm/"),s,r);case 5:c({type:R}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),c({type:U});case 11:case"end":return a.stop()}}),a,null,[[2,8]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.match,n=e.reset_password_confirm,c=ce(),r=Object(a.useState)(!1),s=Object(b.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)({new_password:"",re_new_password:""}),j=Object(b.a)(u,2),O=j[0],y=j[1],w=O.new_password,N=O.re_new_password,S=function(e){y(Object(h.a)(Object(h.a)({},O),{},Object(d.a)({},e.target.name,e.target.value)))};return o?Object(M.jsx)(i.a,{to:"/"}):Object(M.jsxs)(v.a,{component:"main",maxWidth:"md",children:[Object(M.jsx)(m.a,{}),Object(M.jsxs)("div",{className:c.paper,children:[Object(M.jsx)(p.a,{className:c.avatar,children:Object(M.jsx)(f.a,{})}),Object(M.jsx)(g.a,{component:"h1",variant:"h5",children:"Request Password Reset"})]}),Object(M.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var a=t.params.uid,c=t.params.token;w===N?(n(a,c,w,N),l(!0)):console.log("error")}(e)},children:[Object(M.jsxs)("div",{className:"form-group",children:[Object(M.jsx)("input",{type:"password",className:"form-control my-2",name:"new_password",placeholder:"New Password",value:w,minLength:"6",onChange:function(e){return S(e)},required:!0}),Object(M.jsx)("input",{type:"password",className:"form-control my-2",name:"re_new_password",placeholder:"Confirm New Password",value:N,minLength:"6",onChange:function(e){return S(e)},required:!0})]}),Object(M.jsx)("button",{type:"submit",className:"btn btn-primary my-2",children:"Confirm Password"})]}),Object(M.jsx)(x.a,{mt:8,children:Object(M.jsx)(ae,{})})]})})),se=n(138);function oe(){return Object(M.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(M.jsx)("span",{color:"inherit",href:"https://material-ui.com/",children:"Rajan Gautam"})," ",(new Date).getFullYear(),"."]})}var ie=Object(w.b)(null,{verify:function(e,t){return function(){var n=Object(j.a)(u.a.mark((function n(a){var c,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({uid:e,token:t}),n.prev=2,n.next=5,J.a.post("".concat("http://localhost:8000","/auth/users/activation/"),r,c);case 5:a({type:C}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),a({type:A});case 11:case"end":return n.stop()}}),n,null,[[2,8]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.verify,n=e.match,c=Object(a.useState)(!1),r=Object(b.a)(c,2),s=r[0],o=r[1],l=n.params,u=l.uid,j=l.token;return s?Object(M.jsx)(i.a,{to:"/login"}):Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("div",{className:"container my-5",children:[Object(M.jsx)("h1",{className:"my-5 text-center font-weight-bold bold",children:"Verify Your Account"}),Object(M.jsx)("div",{className:"btn-section d-flex justify-content-center align-items-center my-5",children:Object(M.jsx)(se.a,{color:"primary",variant:"contained",onClick:function(e){t(u,j),o(!0)},children:"Verify Account"})}),Object(M.jsx)(oe,{})]})})}));function le(){return Object(M.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(M.jsx)("span",{color:"inherit",href:"https://material-ui.com/",children:"Rajan Gautam"})," ",(new Date).getFullYear(),"."]})}var ue=function(){return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("div",{className:"container my-5",children:[Object(M.jsx)("h1",{className:"my-5 text-center font-weight-bold bold",children:"Please, check your mail and activate your account."}),Object(M.jsx)("div",{className:"btn-section d-flex justify-content-center align-items-center mt-3 mb-5",children:Object(M.jsxs)("h4",{className:"text-center",children:["If you have already activated your account, then you may want to"," ",Object(M.jsx)(o.b,{to:"/login",style:{textDecoration:"none",color:"blue",cursor:"pointer"},children:"Login"})]})}),Object(M.jsx)(le,{})]})})};function je(){return Object(M.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(M.jsx)("span",{color:"inherit",href:"https://material-ui.com/",children:"Rajan Gautam"})," ",(new Date).getFullYear(),"."]})}var de=function(){return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("div",{className:"container my-5",children:[Object(M.jsx)("h1",{className:"my-5 text-center font-weight-bold bold",children:"Please, check your email and follow the instructions to change your password."}),Object(M.jsx)("div",{className:"btn-section d-flex justify-content-center align-items-center mt-3 mb-5",children:Object(M.jsxs)("h4",{className:"text-center",children:["If you have already changed your password, then you may want to"," ",Object(M.jsx)(o.b,{to:"/login",style:{textDecoration:"none",color:"blue",cursor:"pointer"},children:"Login"})]})}),Object(M.jsx)(je,{})]})})},he=n(45),be=n.n(he),pe=Object(w.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{facebookAuthenticate:function(e,t){return function(){var n=Object(j.a)(u.a.mark((function n(a){var c,r,s,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e||!t||localStorage.getItem("access")){n.next=17;break}return c={headers:{"Content-Type":"application/x-www-form-urlencoded"}},r={state:e,code:t},s=Object.keys(r).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r[e])})).join("&"),n.prev=4,n.next=7,J.a.post("".concat("http://localhost:8000","/auth/o/facebook/?").concat(s),c);case 7:o=n.sent,a({type:W,payload:o.data}),a(z()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(4),a({type:q});case 15:n.next=18;break;case 17:a({type:q});case 18:case"end":return n.stop()}}),n,null,[[4,12]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.facebookAuthenticate,n=e.isAuthenticated,c=Object(i.g)();return Object(a.useEffect)((function(){var e=be.a.parse(c.search),n=e.state?e.state:null,a=e.code?e.code:null;n&&a&&t(n,a)}),[c]),Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("div",{className:"facebook-home",children:[Object(M.jsx)("h1",{className:"text-center py-3",children:"Welcome to the Authentication System"}),n?Object(M.jsx)("h1",{className:"text-center py-3",children:"You are successfully Logged in with Facebook"}):Object(M.jsxs)("h3",{className:"text-center py-3 text-danger",children:["Sorry, We can't connect get you logged in with Facebook.",Object(M.jsxs)(o.b,{exact:!0,to:"/signup",children:[Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("strong",{children:"Try Again"})]})]}),Object(M.jsx)("center",{children:Object(M.jsx)("button",{className:"btn btn-primary my-5",children:Object(M.jsx)(o.b,{style:{textDecoration:"none",color:"white"},to:"/",children:"Go to Home Page"})})})]})})})),me=Object(w.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{googleAuthenticate:function(e,t){return function(){var n=Object(j.a)(u.a.mark((function n(a){var c,r,s,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e||!t||localStorage.getItem("access")){n.next=17;break}return c={headers:{"Content-Type":"application/x-www-form-urlencoded"}},r={state:e,code:t},s=Object.keys(r).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r[e])})).join("&"),n.prev=4,n.next=7,J.a.post("".concat("http://localhost:8000","/auth/o/google-oauth2/?").concat(s),c);case 7:o=n.sent,a({type:G,payload:o.data}),a(z()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(4),a({type:P});case 15:n.next=18;break;case 17:a({type:P});case 18:case"end":return n.stop()}}),n,null,[[4,12]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.googleAuthenticate,n=e.isAuthenticated,c=Object(i.g)();return Object(a.useEffect)((function(){var e=be.a.parse(c.search),n=e.state?e.state:null,a=e.code?e.code:null;n&&a&&t(n,a)}),[c]),Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("div",{className:"facebook-home",children:[Object(M.jsx)("h1",{className:"text-center py-3",children:"Welcome to the Authentication System"}),n?Object(M.jsx)("h1",{className:"text-center py-3",children:"You are successfully Logged in with Google"}):Object(M.jsxs)("h3",{className:"text-center py-3 text-danger",children:["Sorry, We can't connect get you logged in with Google.",Object(M.jsxs)(o.b,{exact:!0,to:"/signup",children:[Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)("strong",{children:"Try Again"})]})]}),Object(M.jsx)("center",{children:Object(M.jsx)("button",{className:"btn btn-primary my-5",children:Object(M.jsx)(o.b,{style:{textDecoration:"none",color:"white"},to:"/",children:"Go to Home Page"})})})]})})})),xe=function(){return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(i.d,{children:[Object(M.jsx)(i.b,{exact:!0,path:"/",component:$}),Object(M.jsx)(i.b,{exact:!0,path:"/login",component:Q}),Object(M.jsx)(i.b,{exact:!0,path:"/signup",component:Z}),Object(M.jsx)(i.b,{exact:!0,path:"/facebook",component:pe}),Object(M.jsx)(i.b,{exact:!0,path:"/google",component:me}),Object(M.jsx)(i.b,{exact:!0,path:"/activate/:uid/:token",component:ie}),Object(M.jsx)(i.b,{exact:!0,path:"/verify-redirect",component:ue}),Object(M.jsx)(i.b,{exact:!0,path:"/password-redirect",component:de}),Object(M.jsx)(i.b,{exact:!0,path:"/reset_password",component:ne}),Object(M.jsx)(i.b,{exact:!0,path:"/password/reset/confirm/:uid/:token",component:re})]})})},Oe=n(143),fe=n(139),ge=n(140),ye=n(68),ve=n.n(ye),we=Object(y.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),Ne=Object(w.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:Y});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.logout,n=e.isAuthenticated,a=we();return Object(M.jsx)("div",{className:a.root,children:Object(M.jsx)(Oe.a,{position:"static",children:Object(M.jsxs)(fe.a,{children:[Object(M.jsx)(ge.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu",children:Object(M.jsx)(ve.a,{})}),Object(M.jsx)(g.a,{variant:"h6",className:a.title,children:Object(M.jsx)(o.b,{to:"/",style:{textDecoration:"none",color:"white"},children:"Authentication System"})}),n?Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(se.a,{color:"inherit",children:Object(M.jsx)(o.b,{to:"/",style:{textDecoration:"none",color:"white"},onClick:t,children:"Logout"})})}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(se.a,{color:"inherit",children:Object(M.jsx)(o.b,{to:"/login",style:{textDecoration:"none",color:"white"},children:"Sign in"})}),Object(M.jsx)(se.a,{color:"inherit",children:Object(M.jsx)(o.b,{to:"/signup",style:{textDecoration:"none",color:"white"},children:"Sign up"})})]})]})})})})),Se=Object(w.b)(null,{checkAuthenticated:function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return n={headers:{"Content-Type":"application/json",Accept:"application/json"}},a=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,J.a.get("".concat("http://localhost:8000","/auth/jwt/verify/"),a,n);case 6:"token_not_valid"!==e.sent.data.code?t({type:T}):t({type:F}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:F});case 13:e.next=16;break;case 15:t({type:F});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},load_user:z})((function(e){var t=e.checkAuthenticated,n=e.load_user,c=e.children;return Object(a.useEffect)((function(){t(),n()}),[]),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(Ne,{}),c]})})),_e=(n(114),n(33)),ke=n(69),Ce=n(70),Ae={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:!!localStorage.getItem("access"),loading:!1,user:null},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case T:return Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!0});case W:case G:case N:return localStorage.setItem("access",a.access),localStorage.setItem("refresh",a.refresh),Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!0,access:a.access,refresh:a.refresh});case Y:case k:case S:case P:case q:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(h.a)(Object(h.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});case I:return Object(h.a)(Object(h.a)({},e),{},{user:a});case E:return Object(h.a)(Object(h.a)({},e),{},{user:null});case _:return Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!1});case F:case C:case A:case D:case L:case R:case U:return Object(h.a)({},e);default:return e}},Ee=Object(_e.combineReducers)({auth:Ie}),Te=Object(_e.createStore)(Ee,Object(ke.composeWithDevTools)(Object(_e.applyMiddleware)(Ce.a)));var Fe=function(){return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(w.a,{store:Te,children:Object(M.jsx)(o.a,{children:Object(M.jsx)(Se,{children:Object(M.jsx)(xe,{})})})})})};n(115);s.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(Fe,{})}),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.6cde27bd.chunk.js.map