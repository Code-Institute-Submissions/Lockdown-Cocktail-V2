(this["webpackJsonpemailjs-dashboard-react"]=this["webpackJsonpemailjs-dashboard-react"]||[]).push([[3],{558:function(e,t,s){e.exports={title:"NotFound_title__1xnY9",text:"NotFound_text__tuxv_",suggestion:"NotFound_suggestion__3hPJ_"}},559:function(e,t,s){e.exports={page:"SignIn_page__3OJY5",form:"SignIn_form__2n1eT",forgot:"SignIn_forgot__1d2ap",button:"SignIn_button__2FE64",error:"SignIn_error__9i2bp",signUp:"SignIn_signUp__1JRyi",create:"SignIn_create__2XNua"}},560:function(e,t,s){e.exports={form:"ForgotPassword_form__2IjWS",button:"ForgotPassword_button__2eYtW",error:"ForgotPassword_error__37Z4n",text:"ForgotPassword_text__2Tb1G"}},561:function(e,t,s){e.exports={title:"ResetPassword_title__3WcbE",form:"ResetPassword_form__cu_qU",button:"ResetPassword_button__32Rad",error:"ResetPassword_error__N86sM",text:"ResetPassword_text__3KUIj"}},562:function(e,t,s){e.exports={page:"SignUp_page__3lxnD",form:"SignUp_form__2o-R0",forgot:"SignUp_forgot__2Cqkw",and:"SignUp_and__UpnIL",button:"SignUp_button__2Tgen",error:"SignUp_error__2mD4v",note:"SignUp_note__16eMh",signIn:"SignUp_signIn__27yoL",login:"SignUp_login__JiqsD"}},563:function(e,t,s){e.exports={title:"UnknownIssue_title__1hjbx",text:"UnknownIssue_text__1q-Ct",suggestion:"UnknownIssue_suggestion__2jDiN"}},564:function(e,t,s){"use strict";s.r(t),s.d(t,"Router",(function(){return ie}));var n=s(0),a=s(1),c=s(26),r=s(34),i=function(){var e=Object(r.j)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},o=s(292),l=s(558),j=s.n(l),d=s(165),u=s(266),b=s(267),h=s(268),m=function(){return Object(n.jsx)(d.a,{mobile:!0,children:Object(n.jsx)(u.a,{children:Object(n.jsxs)(b.a,{title:"404",children:[Object(n.jsx)(h.a,{}),Object(n.jsx)("h1",{className:j.a.title,children:"Oops!! 404"}),Object(n.jsx)("div",{className:j.a.text,children:"This is not the page you are looking for"}),Object(n.jsxs)("div",{className:j.a.suggestion,children:[Object(n.jsx)(c.b,{to:"/admin",className:"ejs-button ejs-button-link",children:"Back to dashboard"}),Object(n.jsx)(c.b,{to:"/sign-in",className:"ejs-button ejs-button-link",children:"Go to Sign-In"})]})]})})})},p=s(6),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"}}]},name:"login",theme:"outlined"},O=s(14),g=function(e,t){return a.createElement(O.a,Object.assign({},e,{ref:t,icon:x}))};g.displayName="LoginOutlined";var f=a.forwardRef(g),_=s(559),w=s.n(_),v=s(32),y=s(28);var P=s(269),N=s(11),S=s(15),k=s(9),U={required:"Please input ${label}",types:{email:"Please input a valid email"}},F=[{required:!0}],T=[{type:"email",required:!0}],I=function(){var e=Object(a.useState)(),t=Object(p.a)(e,2),s=t[0],i=t[1],o=Object(a.useState)(!1),l=Object(p.a)(o,2),j=l[0],m=l[1],x=Object(r.i)(),O=Object(r.j)().state,g=function(){i(void 0)};return Object(n.jsx)(d.a,{mobile:!0,children:Object(n.jsx)(u.a,{children:Object(n.jsxs)(b.a,{title:"Sign In",className:w.a.page,children:[Object(n.jsx)(h.a,{}),Object(n.jsxs)(N.a,{noValidate:!0,name:"sing-in",layout:"vertical",validateMessages:U,className:w.a.form,onValuesChange:g,onFinish:function(e){var t,s;g(),m(!0),(t=e.email.toLowerCase(),s=e.password,fetch("".concat("https://inffuse.emailjs.com","/api/v0.1/users/login"),{method:"POST",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:Object(v.stringify)({email:t,password:s,platform:"web",app:"emailjs"})}).then(y.a).then((function(e){return e.json()}),(function(e){return Promise.reject({status:e.status})}))).then((function(){m(!1),Object(P.a)("User","Sign In"),x.push((null===O||void 0===O?void 0:O.from)||"/admin")}),(function(e){m(!1),Object(P.a)("User","Sign In:Error",e.status),i(e.status)}))},children:[Object(n.jsx)(N.b,{label:"Your Email",name:"email",rules:T,children:Object(n.jsx)(S.b,{type:"email",maxLength:70})}),Object(n.jsx)(N.b,{label:"Password",name:"password",rules:F,children:Object(n.jsx)(S.c,{maxLength:70})}),Object(n.jsx)(c.b,{to:"/forgot-password",className:"ejs-button ejs-button-link ".concat(w.a.forgot),children:"Forgot your password?"}),Object(n.jsx)(k.a,{type:"primary",htmlType:"submit",loading:j,className:w.a.button,icon:Object(n.jsx)(f,{}),children:"Sign In"})]}),Object(n.jsx)("div",{className:w.a.error,children:Object(n.jsx)("span",{children:s&&(401===s||404===s?Object(n.jsx)(n.Fragment,{children:"The email and password you entered did not match our records. Please double-check and try again."}):Object(n.jsx)(n.Fragment,{children:"An unexpected problem has occurred. Please contact support."}))})}),Object(n.jsxs)("div",{className:w.a.signUp,children:[Object(n.jsx)("span",{children:"New to EmailJS?"}),Object(n.jsx)(c.b,{to:"/sign-up",className:"ejs-button ejs-button-link ".concat(w.a.create),children:"Create your free account now!"})]})]})})})},C=s(538),q=s(560),R=s.n(q);var A={required:"Please input ${label}",types:{email:"Please input a valid email"}},L=[{type:"email",required:!0}],E=function(){var e=Object(a.useState)(),t=Object(p.a)(e,2),s=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(p.a)(r,2),o=i[0],l=i[1],j=Object(a.useState)(!1),m=Object(p.a)(j,2),x=m[0],O=m[1],g=function(){c(void 0)};return Object(n.jsx)(d.a,{mobile:!0,children:Object(n.jsx)(u.a,{children:Object(n.jsxs)(b.a,{title:"Forgot Password",children:[Object(n.jsx)(h.a,{}),Object(n.jsx)("h1",{children:"Recover Your Password"}),x?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:R.a.text,children:"Please check your inbox for password recovery instructions."}),Object(n.jsx)("div",{className:R.a.text,children:"Still having trouble signing in? Please contact support."})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(N.a,{noValidate:!0,name:"forgot-password",layout:"vertical",validateMessages:A,className:R.a.form,onValuesChange:g,onFinish:function(e){var t;g(),l(!0),(t=e.email,fetch("".concat("https://inffuse.emailjs.com","/api/v0.1/users/reset_password_request"),{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:Object(v.stringify)({email:t,platform:"web",app:"emailjs"})}).then(y.a).then((function(e){return e.json()}),(function(e){return Promise.reject({status:e.status})}))).then((function(){l(!1),O(!0)}),(function(e){l(!1),c(e.status)}))},children:[Object(n.jsx)(N.b,{label:"Your Email",name:"email",rules:L,children:Object(n.jsx)(S.b,{type:"email",maxLength:70})}),Object(n.jsx)(k.a,{type:"primary",htmlType:"submit",loading:o,className:R.a.button,icon:Object(n.jsx)(C.a,{}),children:"Send Instructions"})]}),s&&Object(n.jsx)("div",{className:R.a.error,children:Object(n.jsx)("span",{children:404===s?Object(n.jsx)(n.Fragment,{children:"The email you entered did not match our records. Please double-check and try again."}):Object(n.jsx)(n.Fragment,{children:"An unexpected problem has occurred. Please contact support."})})})]})]})})})},Y=s(561),J=s.n(Y);var M={required:"Please input ${label}"},V=[{required:!0}],B=[{required:!0},function(e){var t=e.getFieldValue;return{validator:function(e,s){return s&&t("password")!==s?Promise.reject("The passwords do not match"):Promise.resolve()}}}],D=function(){var e=Object(r.k)(),t=e.id,s=e.token,i=Object(a.useState)(),o=Object(p.a)(i,2),l=o[0],j=o[1],m=Object(a.useState)(!1),x=Object(p.a)(m,2),O=x[0],g=x[1],f=Object(a.useState)(!1),_=Object(p.a)(f,2),w=_[0],P=_[1],U=function(){j(void 0)};return Object(n.jsx)(d.a,{mobile:!0,children:Object(n.jsx)(u.a,{children:Object(n.jsxs)(b.a,{title:"Reset Password",children:[Object(n.jsx)(h.a,{}),Object(n.jsx)("h1",{className:J.a.title,children:"Reset Your Password"}),w?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:J.a.text,children:"Your password has been changed successfully."}),Object(n.jsx)(c.b,{to:"/sign-in",className:"ejs-button ejs-button-primary ".concat(J.a.button),children:"Go to Sign-In"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(N.a,{noValidate:!0,name:"reset-password",layout:"vertical",className:J.a.form,validateMessages:M,onValuesChange:U,onFinish:function(e){U(),g(!0),function(e,t,s){return fetch("".concat("https://inffuse.emailjs.com","/api/v0.1/users/reset_password"),{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:Object(v.stringify)({password:e,token:s,user:t,platform:"web",app:"emailjs"})}).then(y.a).then((function(e){return e.json()}),(function(e){return Promise.reject({status:e.status})}))}(e.password,t,s).then((function(){g(!1),P(!0)}),(function(e){g(!1),j(e.status)}))},children:[Object(n.jsx)(N.b,{label:"New Password",name:"password",rules:V,children:Object(n.jsx)(S.c,{maxLength:70})}),Object(n.jsx)(N.b,{label:"Confirm Password",name:"repeat",dependencies:["password"],rules:B,children:Object(n.jsx)(S.c,{maxLength:70})}),Object(n.jsx)(k.a,{type:"primary",htmlType:"submit",loading:O,className:J.a.button,icon:Object(n.jsx)(C.a,{}),children:"Reset Password"})]}),l&&Object(n.jsx)("div",{className:J.a.error,children:Object(n.jsx)("span",{children:401===l?Object(n.jsx)(n.Fragment,{children:"The reset password link is expired."}):Object(n.jsx)(n.Fragment,{children:"An unexpected problem has occurred. Please contact support."})})})]})]})})})},G=s(562),H=s.n(G),$=s(4);var W=s(66),z=s(172),K=s(44),X=s(107),Z=function(e){var t=e.onChange,s=void 0===t?X.a:t,c=Object(a.useMemo)((function(){return Object(K.a)("id")}),[]);Object(z.a)("https://www.google.com/recaptcha/api.js?render=explicit").then((function(){var e=window.grecaptcha;e.ready((function(){e.render(c,{sitekey:"6Ld-e1wUAAAAAOJ8TuceqCH-RmcalOk_742uIcNx",theme:"light",callback:r})}))}),(function(e){return console.warn(e)}));var r=function(e){s({target:{value:e}})};return Object(n.jsx)("div",{id:c})},Q={required:"Please input ${label}",types:{email:"Please input a valid email"}},ee=[{required:!0}],te=[{type:"email",required:!0}],se=function(e){switch(e.status){case 400:return Object(n.jsx)(n.Fragment,{children:"This email is already in use"});case 403:return Object(n.jsx)(n.Fragment,{children:"The reCAPTCHA protection failed. Please refresh the page and try again."});default:return Object(n.jsx)(n.Fragment,{children:"An unexpected problem has occurred. Please contact support."})}},ne=function(){var e=Object(a.useState)(),t=Object(p.a)(e,2),s=t[0],i=t[1],o=Object(a.useState)(!1),l=Object(p.a)(o,2),j=l[0],m=l[1],x=Object(r.i)(),O=function(){i(void 0)};return Object(n.jsx)(d.a,{mobile:!0,children:Object(n.jsx)(u.a,{children:Object(n.jsxs)(b.a,{title:"Sign Up",className:H.a.page,children:[Object(n.jsx)(h.a,{}),Object(n.jsxs)(N.a,{noValidate:!0,name:"sing-up",layout:"vertical",validateMessages:Q,className:H.a.form,onValuesChange:O,onFinish:function(e){var t;O(),m(!0),(t=function(e){return e.email=e.email.toLowerCase(),e}(e),fetch("".concat("https://inffuse.emailjs.com","/api/v0.1/users"),{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:Object(v.stringify)(Object($.a)(Object($.a)({},t),{},{platform:"web",app:"emailjs"}))}).then(y.a).then((function(e){return e.json()}),(function(e){return Promise.reject({status:e.status})}))).then((function(){m(!1),Object(P.a)("User","Sign Up"),x.push("/admin")}),(function(e){m(!1),Object(P.a)("User","Sign Up:Error",e.status),i(e.status)}))},children:[Object(n.jsx)(N.b,{label:"Your Name",name:"name",rules:ee,children:Object(n.jsx)(S.b,{type:"text",maxLength:70})}),Object(n.jsx)(N.b,{label:"Your Email",name:"email",rules:te,children:Object(n.jsx)(S.b,{type:"email",maxLength:70})}),Object(n.jsx)(N.b,{label:"Password",name:"password",rules:ee,children:Object(n.jsx)(S.c,{maxLength:70})}),Object(n.jsx)(N.b,{label:"reCAPTCHA",name:"captcha",rules:ee,children:Object(n.jsx)(Z,{})}),Object(n.jsx)(k.a,{type:"primary",htmlType:"submit",loading:j,className:H.a.button,icon:Object(n.jsx)(C.a,{}),children:"Sign Up"}),Object(n.jsxs)("div",{className:H.a.note,children:['By clicking "Sign Up" you are agreeing to our',Object(n.jsx)(W.a,{to:"https://www.emailjs.com/legal/privacy-policy/",noReferrer:!1,className:"ejs-button ejs-button-link ".concat(H.a.forgot),children:"Privacy Policy"}),Object(n.jsx)("span",{className:H.a.and,children:"&"}),Object(n.jsx)(W.a,{to:"https://www.emailjs.com/legal/terms-of-service/",noReferrer:!1,className:"ejs-button ejs-button-link ".concat(H.a.forgot),children:"Terms of Service"})]})]}),Object(n.jsx)("div",{className:H.a.error,children:Object(n.jsx)("span",{children:s&&Object(n.jsx)(se,{status:s})})}),Object(n.jsxs)("div",{className:H.a.signIn,children:[Object(n.jsx)("span",{children:"Known to EmailJS?"}),Object(n.jsx)(c.b,{to:"/sign-in",className:"ejs-button ejs-button-link ".concat(H.a.login),children:"Sign in to continue!"})]})]})})})},ae=s(563),ce=s.n(ae),re=function(){var e=Object(r.j)().state;return 404===(null===e||void 0===e?void 0:e.status)?Object(n.jsx)(r.b,{to:{pathname:"/not-found"}}):Object(n.jsx)(d.a,{mobile:!0,children:Object(n.jsx)(u.a,{children:Object(n.jsxs)(b.a,{title:"Unexpected",children:[Object(n.jsx)(h.a,{}),Object(n.jsx)("h1",{className:ce.a.title,children:"Unexpected Behavior"}),Object(n.jsx)("div",{className:ce.a.text,children:"Please contact support"}),Object(n.jsxs)("div",{className:ce.a.suggestion,children:[Object(n.jsx)(c.b,{to:"/admin",className:"ejs-button ejs-button-link",children:"Back to dashboard"}),Object(n.jsx)(c.b,{to:"/sign-in",className:"ejs-button ejs-button-link",children:"Go to Sign-In"})]})]})})})},ie=function(){return Object(n.jsxs)(c.a,{children:[Object(n.jsx)(i,{}),Object(n.jsxs)(r.e,{children:[Object(n.jsx)(r.c,{exact:!0,path:"/",children:Object(n.jsx)(r.b,{to:"/admin"})}),Object(n.jsx)(r.c,{exact:!0,path:"/sign-in",children:Object(n.jsx)(I,{})}),Object(n.jsx)(r.c,{exact:!0,path:"/sign-up",children:Object(n.jsx)(ne,{})}),Object(n.jsx)(r.c,{exact:!0,path:"/forgot-password",children:Object(n.jsx)(E,{})}),Object(n.jsx)(r.c,{exact:!0,path:"/reset-password/:id/:token",children:Object(n.jsx)(D,{})}),Object(n.jsx)(r.c,{path:"/admin",children:Object(n.jsx)(o.a,{})}),Object(n.jsx)(r.c,{path:"/unknown-issue",children:Object(n.jsx)(re,{})}),Object(n.jsx)(r.c,{path:"*",children:Object(n.jsx)(m,{})})]})]})};t.default=ie}}]);
//# sourceMappingURL=3.c93f0968.chunk.js.map