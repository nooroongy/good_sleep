(this.webpackJsonpreact_03_good_sleep=this.webpackJsonpreact_03_good_sleep||[]).push([[0],{55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var a=c(7),s=c(31),n=c.n(s),r=c(11),o=c(0),l=c.n(o),i=c(16),d=c(2),j=c(40),u=c(26),b=c(24);Object(j.a)({apiKey:"AIzaSyDbUluFwoJWUYGUysFeUy4Vr0zHYDSNFU0",authDomain:"good-sleep-a2c34.firebaseapp.com",projectId:"good-sleep-a2c34",storageBucket:"good-sleep-a2c34.appspot.com",messagingSenderId:"955570029105",appId:"1:955570029105:web:a1ed5ab2685746c74e0b10",measurementId:"G-6RBM2RW3BN"});var m=new u.a,p=Object(u.b)(),O=Object(b.f)(),f=function(){Object(u.f)(p)},h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?Object(u.d)(p,m):Object(u.e)(p,m)},x=function(e){Object(u.c)(p,"function"===typeof e?e:null)},v={get:function(){var e=Object(d.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],e.next=3,Object(b.e)(Object(b.b)(O,t));case 3:return e.sent.forEach((function(e){return c.push(Object(i.a)({id:e.id},e.data()))})),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),add:function(e,t,c){Object(b.a)(Object(b.b)(O,e),t).then((function(e){"function"===typeof c&&c(e.id)}))},delete:function(e,t){Object(b.c)(Object(b.d)(O,e,t))},update:function(e,t,c,a){Object(b.g)(Object(b.d)(O,e,t),c).then((function(){alert("\uc218\uc815\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),"function"===typeof a&&a()}))}},N=c(4),g=function(){return Object(N.jsx)("div",{children:"Loading..."})},S=c(29),w=c(12),y=c(17),C=(c(55),function(e){var t=e.children,c=e.title;return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"card-wrap theme-color",children:[Object(N.jsx)("div",{className:"card-wrap-header sub-color font-color",children:c}),t]})})}),k=c(15),D=c(37),E=Object(D.b)({name:"useReducer",initialState:{user:{},sleepData:[],colorSet:{mainColor:"01",subColor:"01",theme:"01",fontColor:"01"}},reducers:{setUser:function(e,t){e.user=t.payload},setSleep:function(e,t){var c=Object(k.a)(t.payload);c.sort((function(e,t){return t.date-e.date})),e.sleepData=c},setColorSet:function(e,t){e.colorSet=t.payload},removeSleep:function(e,t){e.sleepData=e.sleepData.filter((function(e){return e.id!==t.payload}))},addSleep:function(e,t){e.sleepData=[t.payload].concat(Object(k.a)(e.sleepData))}}}),B=E.actions,_=Object(D.a)({reducer:E.reducer});c(56);var I=Object(y.b)((function(e,t){return{user:e.user,sleepData:e.sleepData}}),(function(e){return{connectSleepDB:function(t){return e(B.setSleep(t))}}}))((function(e){e.user;var t=e.sleepData,c=void 0===t?[]:t;e.connectSleepDB;function a(e,t){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=1*e.substr(0,2),s=1*e.substr(2,2),n=1*t.substr(0,2),r=1*t.substr(2,2),o=a>n?24+n-a:n-a,l=r-s;return l<0&&(l+=60,o--),c?o+"H "+l+"M":60*o+l}var s=c.map((function(e){return{rating:e.rating,sleepStart:e.sleepStart,sleepTimeStr:a(e.sleepStart,e.sleepEnd,!0),sleepTime:a(e.sleepStart,e.sleepEnd)}})),n=[];s.forEach((function(e){0===n.filter((function(t){return t.time===e.sleepTimeStr})).length&&n.push({time:e.sleepTimeStr,score:0,start:e.sleepStart.substr(0,2)+":"+e.sleepStart.substr(2,2)}),n.forEach((function(t,c){t.time===e.sleepTimeStr&&(n[c].score+=1*(e.rating-3))}))})),n.sort((function(e,t){return t.score-e.score}));var r=n.length>0?n[0].time:"",o=n.length>0?n[0].start:"";return Object(N.jsxs)("div",{className:"home-wrap",children:[Object(N.jsx)("div",{className:"home-wrap-full",children:Object(N.jsx)(C,{title:"time line",children:Object(N.jsx)("div",{className:"home-graph-wrap",children:c.map((function(e){var t=(a(e.sleepStart,e.sleepEnd)-120)/5;return Object(N.jsxs)("span",{className:"home-graph-data",children:[Object(N.jsx)("span",{className:"home-graph-bar home-graph-rating"+e.rating+" home-graph-sleeptime sub-color",style:{height:t>80?80:t+"px"}}),Object(N.jsx)("span",{className:"home-graph-date",children:"".concat(e.date.substr(2,2),"/").concat(e.date.substr(4,2),"/").concat(e.date.substr(6,2))})]},e.id)}))})})}),Object(N.jsxs)("div",{className:"home-wrap-half",children:[Object(N.jsx)(C,{title:"sleep for",children:Object(N.jsx)("div",{className:"home-for-you-wrap",children:Object(N.jsx)("span",{className:"home-for-you-hour main-color",children:r})})}),Object(N.jsx)(C,{title:"sleep at",children:Object(N.jsx)("div",{className:"home-at-you-wrap",children:Object(N.jsx)("span",{className:"home-at-you-hour main-color",children:o})})})]}),Object(N.jsx)("div",{className:"home-wrap-full",children:Object(N.jsx)(C,{title:"score board",children:Object(N.jsx)("div",{className:"home-score-wrap",children:Object(N.jsxs)("div",{className:"home-score-box",children:[Object(N.jsxs)("span",{className:"home-score-horizontal-wrap sub-color",children:[Object(N.jsx)("span",{className:"home-score-horizontal-line"}),Object(N.jsx)("span",{className:"home-score-horizontal-line"}),Object(N.jsx)("span",{className:"home-score-horizontal-line"}),Object(N.jsx)("span",{className:"home-score-horizontal-line"}),Object(N.jsx)("span",{className:"home-score-horizontal-line"})]}),Object(N.jsxs)("span",{className:"home-score-vertical-wrap sub-color",children:[Object(N.jsx)("span",{className:"home-score-vertical-line"}),Object(N.jsx)("span",{className:"home-score-vertical-line"}),Object(N.jsx)("span",{className:"home-score-vertical-line"}),Object(N.jsx)("span",{className:"home-score-vertical-line"}),Object(N.jsx)("span",{className:"home-score-vertical-line"}),Object(N.jsx)("span",{className:"home-score-vertical-line"}),Object(N.jsx)("span",{className:"home-score-vertical-line"}),Object(N.jsx)("span",{className:"home-score-vertical-line"})]}),Object(N.jsx)("span",{className:"home-srore-time-tx",children:"time"}),Object(N.jsx)("span",{className:"home-srore-rating-tx",children:"rating"}),c.map((function(e){var t=30*e.rating-5,c=2*(a(e.sleepStart,e.sleepEnd)-120)/3-3;return c>320?"":Object(N.jsx)("span",{className:"home-score-dot main-color",style:{bottom:t,left:c}},e.id)}))]})})})}),Object(N.jsx)("div",{className:"home-wrap-full",children:Object(N.jsx)(C,{title:"tips",children:Object(N.jsxs)("div",{className:"home-tips",children:["\uc54c\uace0 \uacc4\uc168\ub098\uc694? \uc6b0\ub9ac\uc758 \uc218\uba74\uc740 \ucc98\uc74c 90\ubd84\uc774 \uac00\uc7a5 \uc911\uc694\ud558\ub2e4\ub294 \uc0ac\uc2e4",Object(N.jsx)("br",{}),"\uc7a0\uc5d0\ub4e4\uace0 \ucc98\uc74c\uc73c\ub85c \ub9de\uc774\ud558\ub294 \uae4a\uc740\uc218\uba74\uc758 \uc9c8\uc5d0 \ub530\ub77c \ub098\uba38\uc9c0 \uc218\uba74\uc758 \uc9c8\ub3c4 \ubcc0\ud55c\ub2e4\uace0 \ud569\ub2c8\ub2e4."]})})})]})})),L=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("button",{onClick:function(){h(!1)},children:"sign In With Google"})})};c(57),c(58),c(59);var F=Object(y.b)((function(e,t){return{user:e.user}}))((function(e){var t=e.user,c=e.isLogedIn;return Object(N.jsxs)("div",{className:"header-wrap main-color",children:[c?Object(N.jsx)("button",{onClick:function(){f()},className:"header-signout font-icon",children:"logout"}):Object(N.jsx)(N.Fragment,{}),Object(N.jsxs)("span",{className:"header-nickname",children:[t?t.displayName:""," \uc758 \uc218\uba74\uc0dd\ud65c"]})]})}));c(60);var T=function(){return Object(N.jsxs)("div",{className:"footer-wrap",children:[Object(N.jsx)(S.b,{to:"good_sleep/record",children:Object(N.jsx)("button",{className:"footer-btn sub-color font-color font-icon",children:"description"})}),Object(N.jsx)(S.b,{to:"good_sleep",children:Object(N.jsx)("button",{className:"footer-btn sub-color font-color font-icon",children:"home"})}),Object(N.jsx)(S.b,{to:"good_sleep/setting",children:Object(N.jsx)("button",{className:"footer-btn sub-color font-color font-icon",children:"settings"})})]})},U=(c(61),c(62),function(e){var t=e.val,c=void 0===t?0:t,a=e.min,s=void 0===a?0:a,n=e.max,r=void 0===n?9:n,o=e.setter,l=void 0===o?function(){}:o,i=function(e){var t=e.target.attributes.add.value;l((function(e){var c=1*e+1*t;return c>r?1*s:c<s?1*r:c}))};return Object(N.jsxs)("span",{className:"numberslide-wrap",children:[Object(N.jsx)("span",{className:"numberslide-up-btn font-icon main-color",add:"1",onClick:i,children:"arrow_drop_up"}),Object(N.jsx)("span",{className:"numberslide-number-box",children:Object(N.jsxs)("span",{className:"numberslide-disply",children:[Object(N.jsx)("span",{className:"numberslide-prev-num main-color",children:c-1}),Object(N.jsx)("span",{className:"numberslide-cur-num main-color",children:c}),Object(N.jsx)("span",{className:"numberslide-next-num main-color",children:c+1})]})}),Object(N.jsx)("span",{className:"numberslide-down-btn font-icon main-color",add:"-1",onClick:i,children:"arrow_drop_down"})]})}),z=function(e){return e<10&&1*e!==0?"0"+e:e};var M=Object(y.b)((function(e,t){var c=t.editId,a=e.user,s=e.sleepData;return{user:a,sleepObj:s.filter((function(e){return e.id===c}))[0],_sleepData:s}}),(function(e){return{addSleep:function(t){return e(B.addSleep(t))},setSleep:function(t){return e(B.setSleep(t))}}}))((function(e){var t=e.addSleep,c=e.user,s=e.callbaclFn,n=e.isNew,o=e.editId,l=e.sleepObj,d=e.setSleep,j=e._sleepData,u=new Date,b=Object(a.useState)(2),m=Object(r.a)(b,2),p=m[0],O=m[1],f=Object(a.useState)(3),h=Object(r.a)(f,2),x=h[0],g=h[1],S=Object(a.useState)(3),w=Object(r.a)(S,2),y=w[0],C=w[1],k=Object(a.useState)(0),D=Object(r.a)(k,2),E=D[0],B=D[1],_=Object(a.useState)(9),I=Object(r.a)(_,2),L=I[0],F=I[1],T=Object(a.useState)(9),M=Object(r.a)(T,2),H=M[0],q=M[1],A=Object(a.useState)(0),R=Object(r.a)(A,2),Y=R[0],G=R[1],J=Object(a.useState)(7),W=Object(r.a)(J,2),K=W[0],V=W[1],P=Object(a.useState)(3),Q=Object(r.a)(P,2),X=Q[0],Z=Q[1],$=Object(a.useState)(0),ee=Object(r.a)($,2),te=ee[0],ce=ee[1],ae=Object(a.useState)(9),se=Object(r.a)(ae,2),ne=se[0],re=se[1],oe=Object(a.useState)(9),le=Object(r.a)(oe,2),ie=le[0],de=le[1],je=Object(a.useState)(u.getFullYear()+""+z(u.getMonth()+1)+z(u.getDate())),ue=Object(r.a)(je,2),be=ue[0],me=ue[1],pe=Object(a.useState)(0),Oe=Object(r.a)(pe,2),fe=Oe[0],he=Oe[1],xe=Object(a.useState)({rating:"3"}),ve=Object(r.a)(xe,2),Ne=ve[0],ge=ve[1];function Se(e){var t=e.flag,c=e.frontN,a=e.backNSetter,s=e.maxSetter;"H"===t?(s(2===c?4:9),a((function(e){return 2===c&&e>4?4:e}))):"M"===t&&(s(6===c?0:9),a((function(e){return 6===c?0:e})))}Object(a.useEffect)((function(){Se({flag:"H",frontN:p,backNSetter:g,maxSetter:F}),Se({flag:"M",frontN:y,backNSetter:B,maxSetter:q}),Se({flag:"H",frontN:Y,backNSetter:V,maxSetter:re}),Se({flag:"M",frontN:X,backNSetter:ce,maxSetter:de})}),[p,x,y,E,Y,K,X,te]),Object(a.useEffect)((function(){if(l){var e=l.sleepStart,t=l.sleepEnd;O(e.substr(0,1)),g(e.substr(1,1)),C(e.substr(2,1)),B(e.substr(3,1)),G(t.substr(0,1)),V(t.substr(1,1)),Z(t.substr(2,1)),ce(t.substr(3,1)),me(l.date),ge((function(e){return Object(i.a)(Object(i.a)({},e),{},{rating:l.rating})})),he(0),document.querySelectorAll(".add-data-step1-score").forEach((function(e){e.classList.remove("add-data-step1-selected","main-color"),e.attributes.rating.value===l.rating&&e.classList.add("add-data-step1-selected","main-color")}))}}),[l]),Object(a.useEffect)((function(){(n?document.querySelector(".add-data-new .add-data-contents"):document.querySelector(".add-data-edit .add-data-contents")).style.marginLeft=-250*fe+"px",ge((function(e){return Object(i.a)(Object(i.a)({},e),{},{sleepStart:p+""+x+y+E,sleepEnd:Y+""+K+X+te,date:be})}))}),[fe,n]);var we=function(e){"prev"===e.target.innerText?fe>0&&he(fe-1):fe<3?he(fe+1):n?window.confirm("\ucd94\uac00 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(v.add("sleep",Object(i.a)(Object(i.a)({},Ne),{},{uid:c.uid}),(function(e){t(Object(i.a)(Object(i.a)({},Ne),{},{uid:c.uid,id:e}))})),s(),he(0),ge({date:u.getFullYear()+""+(u.getMonth()+1)+u.getDate(),sleepStart:"1203am",sleepEnd:"0701am",rating:"3"})):window.confirm("\uc218\uc815 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(v.update("sleep",l.id,Object(i.a)(Object(i.a)({},Ne),{},{uid:c.uid}),(function(){d(j.map((function(e){return e.id===o?Object(i.a)(Object(i.a)({},Ne),{},{id:o}):e})))})),s())},ye=function(e){document.querySelectorAll(".add-data-step1-score").forEach((function(e){e.classList.remove("add-data-step1-selected","main-color")})),e.target.classList.add("add-data-step1-selected","main-color"),ge(Object(i.a)(Object(i.a)({},Ne),{},{rating:e.target.attributes.rating.value}))};return Object(N.jsxs)("div",{className:"add-data-wrap "+(n?"add-data-new":"add-data-edit"),children:[Object(N.jsxs)("div",{className:"add-data-contents font-color",children:[Object(N.jsxs)("div",{className:"add-data-step1",children:[Object(N.jsxs)("div",{className:"add-data-step-text main-color",children:["\uc798 \uc8fc\ubb34\uc168\ub098\uc694? ",Object(N.jsx)("br",{}),"\uc77c\uc5b4\ub0ac\uc744 \ub54c \uae30\ubd84\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694"]}),Object(N.jsxs)("div",{className:"add-data-step1-scores",children:[Object(N.jsx)("span",{className:"add-data-step1-score font-icon",onClick:ye,rating:"1",children:"sick"}),Object(N.jsx)("span",{className:"add-data-step1-score font-icon",onClick:ye,rating:"2",children:"mood_bad"}),Object(N.jsx)("span",{className:"add-data-step1-score font-icon add-data-step1-selected main-color",onClick:ye,rating:"3",children:"sentiment_satisfied"}),Object(N.jsx)("span",{className:"add-data-step1-score font-icon",onClick:ye,rating:"4",children:"mood"}),Object(N.jsx)("span",{className:"add-data-step1-score font-icon",onClick:ye,rating:"5",children:"emoji_emotions"})]})]}),Object(N.jsxs)("div",{className:"add-data-step2",children:[Object(N.jsxs)("div",{className:"add-data-step-text main-color",children:["\uba87\uc2dc\uc5d0 \uc8fc\ubb34\uc168\ub098\uc694? ",Object(N.jsx)("br",{}),"\uc8fc\ubb34\uc2e0 \uc2dc\uac04\uc744 \uc54c\ub824\uc8fc\uc138\uc694"]}),Object(N.jsxs)("div",{className:"add-data-step2-time",children:[Object(N.jsx)("span",{}),Object(N.jsx)(U,{val:p,setter:O,max:"2"}),Object(N.jsx)(U,{val:x,setter:g,max:L}),Object(N.jsx)(U,{val:y,setter:C,max:"6"}),Object(N.jsx)(U,{val:E,setter:B,max:H})]})]}),Object(N.jsxs)("div",{className:"add-data-step3",children:[Object(N.jsxs)("div",{className:"add-data-step-text main-color",children:["\uba87\uc2dc\uc5d0 \uc77c\uc5b4\ub098\uc168\ub098\uc694? ",Object(N.jsx)("br",{}),"\uc77c\uc5b4\ub09c \uc2dc\uac04\uc744 \uc54c\ub824\uc8fc\uc138\uc694"]}),Object(N.jsxs)("div",{className:"add-data-step3-time",children:[Object(N.jsx)("span",{}),Object(N.jsx)(U,{val:Y,setter:G,max:"2"}),Object(N.jsx)(U,{val:K,setter:V,max:ne}),Object(N.jsx)(U,{val:X,setter:Z,max:"6"}),Object(N.jsx)(U,{val:te,setter:ce,max:ie})]})]}),Object(N.jsx)("div",{className:"add-data-step5",children:Object(N.jsxs)("div",{className:"add-data-step-text main-color",children:[n?"\ub4f1\ub85d":"\uc218\uc815","\uc744 \uc644\ub8cc\ud558\uc2dc\ub824\uba74 ",Object(N.jsx)("br",{}),"done \ubc84\ud2bc\uc744 \ud074\ub9ad\ud574\uc8fc\uc138\uc694"]})})]}),Object(N.jsxs)("div",{className:"add-data-btn-wrap",children:[Object(N.jsx)("button",{className:"add-data-btn sub-color font-color",onClick:we,children:"prev"}),Object(N.jsx)("button",{className:"add-data-btn font-color "+(3===fe?"main-color":"sub-color"),onClick:we,children:3===fe?"done":"next"})]})]})})),H=(c(63),function(e){var t=e.isOpend,c=e.clossBtnClick,s=e.title,n=e.children,o=Object(a.useState)(!1),l=Object(r.a)(o,2),i=l[0],d=l[1],j=Object(a.useState)(!1),u=Object(r.a)(j,2),b=u[0],m=u[1];Object(a.useEffect)((function(){d(t),setTimeout((function(){m(t)}),50)}),[t]);return Object(N.jsxs)("div",{className:"".concat((i?"":"popup-closed ")+(b?"popup-anim":"")),children:[Object(N.jsx)("div",{className:"popup-wrap",children:Object(N.jsx)(C,{title:s,children:Object(N.jsx)("div",{className:"popup-contents",children:n})})}),Object(N.jsx)("div",{className:"popup-background",onClick:function(){d(!1),c()}})]})});c(64);var q=Object(y.b)((function(e,t){var c=e.sleepData,a=e.user;return{sleepData:[].concat(Object(k.a)(c),[{Rating:"",date:"",id:"new",sleepEnd:"",sleepStart:"",uid:""}]),user:a}}),(function(e){return{removeSleep:function(t){return e(B.removeSleep(t))},addSleep:function(t){return e(B.addSleep(t))}}}))((function(e){var t=e.sleepData,c=e.id,s=e.removeSleep,n=(e.addSleep,e.user,e.addBtnClick),o=e.editBtnClick,l=Object(a.useState)(!1),i=Object(r.a)(l,2),d=i[0],j=i[1],u=t.filter((function(e){return e.id===c}))[0],b="".concat(u.date.substr(0,4),"/").concat(u.date.substr(4,2),"/").concat(u.date.substr(6,2)),m=function(e){switch(e){case"1":return"sick";case"2":return"mood_bad";case"3":return"sentiment_satisfied";case"4":return"mood";case"5":return"emoji_emotions";default:return}}(u.rating),p=function(e,t){var c=1*e.substr(0,2),a=1*e.substr(2,2),s=1*t.substr(0,2),n=1*t.substr(2,2),r=c>s?24+s-c:s-c,o=n-a;o<0&&(o+=60,r--);return r+"\uc2dc\uac04 "+o+"\ubd84"}(u.sleepStart,u.sleepEnd);return Object(N.jsx)("div",{className:"sub-color sleepcard-wrap "+(d?"deleted":""),children:"new"!==c?Object(N.jsxs)("div",{className:"sleepcard-old-wrap",children:[Object(N.jsx)("div",{className:"sleepcard-header sub-color font-color ",children:Object(N.jsx)("span",{className:"sleepcard-date",children:b})}),Object(N.jsxs)("div",{className:"sleepcard-body theme-color",children:[Object(N.jsxs)("span",{className:"sleepcard-data",children:[Object(N.jsx)("span",{className:"sleepcard-emoji font-icon  main-color",children:m}),Object(N.jsx)("span",{className:"sleepcard-tx main-color",children:p})]}),Object(N.jsx)("span",{className:"sleepcard-icon font-icon main-color",onClick:function(){o(c)},children:"edit"}),Object(N.jsx)("span",{className:"sleepcard-icon font-icon main-color",onClick:function(){window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(console.log(u.id),v.delete("sleep",u.id),j(!0),setTimeout((function(){s(u.id)}),500))},children:"delete_forever"})]})]}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"sleepcard-new-wrap sub-color font-color ",children:Object(N.jsx)("span",{className:"sleepcard-plus-btn",onClick:function(){n()},children:"add"})})})})}));c(65);var A=Object(y.b)((function(e){var t=e.sleepData;return{sleepData:Object(k.a)(t)}}))((function(e){var t=e.sleepData,c=Object(a.useState)(!1),s=Object(r.a)(c,2),n=s[0],o=s[1],l=Object(a.useState)(!1),i=Object(r.a)(l,2),d=i[0],j=i[1],u=Object(a.useState)(""),b=Object(r.a)(u,2),m=b[0],p=b[1],O=function(e){p(e),j(!0)},f=function(){o(!1),j(!1)};return Object(N.jsxs)("div",{className:"record-wrap",children:[Object(N.jsx)(q,{id:"new",addBtnClick:function(){o(!0)}}),t.map((function(e,t){return Object(N.jsx)(q,{id:e.id,editBtnClick:O},e.id)})),Object(N.jsx)(H,{isOpend:n,clossBtnClick:f,title:"Add new sleep data",children:Object(N.jsx)(M,{callbaclFn:f,isNew:!0})}),Object(N.jsx)(H,{isOpend:d,clossBtnClick:f,title:"Edit sleep data",children:Object(N.jsx)(M,{callbaclFn:f,isNew:!1,editId:m})})]})}));var R=Object(y.b)((function(e,t){var c=Object(i.a)({},e.colorSet),a=t.category,s=t.no;return c[a+"Color"]=s,{colorSet:c}}),(function(e){return{setColorSet:function(t){return e(B.setColorSet(t))}}}))((function(e){var t=e.no,c=e.category,a=e.colorSet,s=e.setColorSet;return Object(N.jsx)("span",{onClick:function(){console.log(a),s(a)},className:"color-sample color-".concat(c,"-").concat(t)})})),Y=function(e){var t=e.noSet,c=e.category;return Object(N.jsx)("div",{className:"pallet-wrap",children:t.map((function(e){return Object(N.jsx)(R,{category:c,no:e},e)}))})};c(66);var G=Object(y.b)((function(e){return{colorSet:e.colorSet}}),(function(){return{updateColorSet:function(e,t,c){v.update(e,t,c)}}}))((function(e){var t=e.updateColorSet,c=e.colorSet,a=function(){t("colorSet",c.id,c)},s={main:["00","01","02","03","04","05","06","07","08"],sub:["00","01","02","03","04","05","06","07","08"],theme:["01","02","03","04"],font:["01","02","03","04"]};return Object(N.jsxs)("div",{className:"setting-wrap",children:[Object(N.jsxs)(C,{title:"Color",children:[Object(N.jsx)("div",{className:"setting-pallet-category",children:"main"}),Object(N.jsx)(Y,{category:"main",noSet:s.main}),Object(N.jsx)("div",{className:"setting-pallet-category",children:"sub"}),Object(N.jsx)(Y,{category:"sub",noSet:s.sub}),Object(N.jsx)("div",{className:"setting-pallet-category",children:"theme"}),Object(N.jsx)(Y,{category:"theme",noSet:s.theme}),Object(N.jsx)("div",{className:"setting-pallet-category",children:"font"}),Object(N.jsx)(Y,{category:"font",noSet:s.font})]}),Object(N.jsx)("button",{onClick:function(){a()},className:"setting-save-btn main-color font-color",children:"save"})]})}));var J=Object(y.b)((function(e){return{colorSet:e.colorSet}}),(function(e){return{setUser:function(t){return e(B.setUser(t))},connectSleepDB:function(t){return e(B.setSleep(t))},connectThemeDB:function(t){return e(B.setColorSet(t))}}}))((function(e){var t=e.setUser,c=e.connectSleepDB,s=e.connectThemeDB,n=e.colorSet,o=Object(a.useState)(!1),l=Object(r.a)(o,2),i=l[0],d=l[1],j=Object(a.useState)(!0),u=Object(r.a)(j,2),b=u[0],m=u[1];return["01","02","03","04","05","06","07","08"].forEach((function(e){document.getElementById("root").classList.remove("color-main-"+e),document.getElementById("root").classList.remove("color-sub-"+e),document.getElementById("root").classList.remove("color-font-"+e),document.getElementById("root").classList.remove("color-theme-"+e)})),document.getElementById("root").classList.add("color-main-".concat(n.mainColor)),document.getElementById("root").classList.add("color-sub-".concat(n.subColor)),document.getElementById("root").classList.add("color-font-".concat(n.fontColor)),document.getElementById("root").classList.add("color-theme-".concat(n.themeColor)),Object(a.useEffect)((function(){x((function(e){if(e){d(!0);var a=e.displayName,n=e.uid,r=e.email;t({displayName:a,uid:n,email:r}),v.get("sleep").then((function(t){c(t.filter((function(t){return t.uid===e.uid}))),m(!1)})),v.get("colorSet").then((function(t){var c=t.filter((function(t){return t.uid===e.uid}));0===c.length?v.add("colorSet",{mainColor:"01",subColor:"01",fontColor:"01",themeColor:"01",uid:e.uid}):s(c[0])}))}else d(!1),m(!1)}))}),[c,t,s]),b?Object(N.jsx)(g,{}):i?Object(N.jsxs)(S.a,{children:[Object(N.jsx)(F,{isLogedIn:i}),Object(N.jsxs)(w.c,{children:[Object(N.jsx)(w.a,{path:"good_sleep/*",element:Object(N.jsx)(I,{})}),Object(N.jsx)(w.a,{path:"good_sleep/record",element:Object(N.jsx)(A,{})}),Object(N.jsx)(w.a,{path:"good_sleep/setting",element:Object(N.jsx)(G,{})})]}),Object(N.jsx)(T,{})]}):Object(N.jsx)(L,{})}));n.a.render(Object(N.jsx)(y.a,{store:_,children:Object(N.jsx)(J,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.ef3a3176.chunk.js.map