(this.webpackJsonpreact_03_good_sleep=this.webpackJsonpreact_03_good_sleep||[]).push([[0],{55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var c=a(6),n=a(31),s=a.n(n),r=a(11),o=a(0),i=a.n(o),l=a(16),d=a(2),u=a(40),j=a(27),b=a(24);Object(u.a)({apiKey:"AIzaSyDbUluFwoJWUYGUysFeUy4Vr0zHYDSNFU0",authDomain:"good-sleep-a2c34.firebaseapp.com",projectId:"good-sleep-a2c34",storageBucket:"good-sleep-a2c34.appspot.com",messagingSenderId:"955570029105",appId:"1:955570029105:web:a1ed5ab2685746c74e0b10",measurementId:"G-6RBM2RW3BN"});var p=new j.a,m=Object(j.b)(),O=Object(b.f)(),f=function(){Object(j.f)(m)},h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?Object(j.d)(m,p):Object(j.e)(m,p)},x=function(e){Object(j.c)(m,"function"===typeof e?e:null)},v={get:function(){var e=Object(d.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,Object(b.e)(Object(b.b)(O,t));case 3:return e.sent.forEach((function(e){return a.push(Object(l.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),add:function(e,t,a){Object(b.a)(Object(b.b)(O,e),t).then((function(e){"function"===typeof a&&a(e.id)}))},delete:function(e,t){Object(b.c)(Object(b.d)(O,e,t))},update:function(e,t,a,c){Object(b.g)(Object(b.d)(O,e,t),a).then((function(){alert("\uc218\uc815\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),"function"===typeof c&&c()}))}},g=a(4),N=function(){return Object(g.jsx)("div",{children:"Loading..."})},S=a(26),_=a(12),w=a(17),y=(a(55),function(e){var t=e.datas;return Object(g.jsx)("div",{className:"graph__wrap",children:t.map((function(e,t){return function(e,t){var a=e.height,c=e.col,n=e.color;return Object(g.jsxs)("span",{className:"graph__data",children:[Object(g.jsx)("span",{className:"graph__bar graph__rating"+n+" graph__sleeptime sub-color",style:{height:a>80?80:a+"px"}}),Object(g.jsx)("span",{className:"graph__date",children:c})]},t)}(e,t)}))})}),C=(a(56),function(e){var t=e.children,a=e.title;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"card-wrap theme-color",children:[Object(g.jsx)("div",{className:"card-wrap-header sub-color font-color",children:a}),t]})})}),k=(a(57),function(e){var t=e.datas;return Object(g.jsx)("div",{className:"dotgraph__wrap",children:Object(g.jsxs)("div",{className:"dotgraph__box",children:[Object(g.jsxs)("span",{className:"dotgraph__horizontal-wrap sub-color",children:[Object(g.jsx)("span",{className:"dotgraph__horizontal-line"}),Object(g.jsx)("span",{className:"dotgraph__horizontal-line"}),Object(g.jsx)("span",{className:"dotgraph__horizontal-line"}),Object(g.jsx)("span",{className:"dotgraph__horizontal-line"}),Object(g.jsx)("span",{className:"dotgraph__horizontal-line"})]}),Object(g.jsxs)("span",{className:"dotgraph__vertical-wrap sub-color",children:[Object(g.jsx)("span",{className:"dotgraph__vertical-line"}),Object(g.jsx)("span",{className:"dotgraph__vertical-line"}),Object(g.jsx)("span",{className:"dotgraph__vertical-line"}),Object(g.jsx)("span",{className:"dotgraph__vertical-line"}),Object(g.jsx)("span",{className:"dotgraph__vertical-line"}),Object(g.jsx)("span",{className:"dotgraph__vertical-line"}),Object(g.jsx)("span",{className:"dotgraph__vertical-line"}),Object(g.jsx)("span",{className:"dotgraph__vertical-line"})]}),Object(g.jsx)("span",{className:"dotgraph__time-tx",children:"time"}),Object(g.jsx)("span",{className:"dotgraph__rating-tx",children:"rating"}),t.map((function(e,t){var a=e.posX,c=e.posY;return Object(g.jsx)("span",{className:"dotgraph__dot main-color",style:{bottom:c,left:a}},t)}))]})})});a(58);var D=Object(w.b)((function(e){var t,a,c=e.sleepData;function n(e,t){var a=1*e.substr(0,2),c=1*e.substr(2,2),n=1*t.substr(0,2),s=a>n?24+n-a:n-a,r=1*t.substr(2,2)-c;return r<0&&(r+=60,s--),{diffH:s,diffM:r}}var s=function(e,t){var a=n(e,t);return a.diffH+"H "+a.diffM+"M"},r=function(e,t){var a=n(e,t);return 60*a.diffH+a.diffM},o=c.map((function(e){return{rating:e.rating,sleepStart:e.sleepStart,sleepTimeStr:s(e.sleepStart,e.sleepEnd),sleepTime:r(e.sleepStart,e.sleepEnd)}})),i=[];return o.forEach((function(e){0===i.filter((function(t){return t.time===e.sleepTimeStr})).length&&i.push({time:e.sleepTimeStr,score:0,start:e.sleepStart.substr(0,2)+":"+e.sleepStart.substr(2,2)}),i.forEach((function(t,a){t.time===e.sleepTimeStr&&(i[a].score+=1*(e.rating-3))}))})),i.sort((function(e,t){return t.score-e.score})),{bestTime:null===(t=i[0])||void 0===t?void 0:t.time,bestTimeAt:null===(a=i[0])||void 0===a?void 0:a.start,dataForBarGrahp:c.map((function(e){return{height:(r(e.sleepStart,e.sleepEnd)-80)/6,col:"".concat(e.date.substr(2,2),"/").concat(e.date.substr(4,2),"/").concat(e.date.substr(6,2)),color:e.rating}})),dataForDotGraph:c.map((function(e){return{posX:Math.min(2*(r(e.sleepStart,e.sleepEnd)-120)/3-3,320),posY:30*e.rating-5}}))}}))((function(e){var t,a=e.bestTime,n=e.bestTimeAt,s=e.dataForBarGrahp,o=e.dataForDotGraph,i=Object(c.useState)([]),l=Object(r.a)(i,2),d=l[0],u=l[1],j=Object(c.useState)(0),b=Object(r.a)(j,2),p=b[0],m=b[1];Object(c.useEffect)((function(){v.get("tips").then((function(e){u(e),O(e)}))}),[]);var O=function(e){var t=e.length,a=Math.floor(10*Math.random()*t)%t;m(a)};return Object(g.jsxs)("div",{className:"home-wrap",children:[Object(g.jsxs)("div",{className:"home-wrap-full",children:[Object(g.jsx)(C,{title:"tips",children:Object(g.jsx)("div",{className:"home-tips",children:null===(t=d[p])||void 0===t?void 0:t.info})}),Object(g.jsx)(C,{title:"time line",children:Object(g.jsx)(y,{datas:s})})]}),Object(g.jsxs)("div",{className:"home-wrap-half",children:[Object(g.jsx)(C,{title:"sleep for",children:Object(g.jsx)("div",{className:"home-for-you-wrap",children:Object(g.jsx)("span",{className:"home-for-you-hour main-color",children:a})})}),Object(g.jsx)(C,{title:"sleep at",children:Object(g.jsx)("div",{className:"home-at-you-wrap",children:Object(g.jsx)("span",{className:"home-at-you-hour main-color",children:n})})})]}),Object(g.jsx)("div",{className:"home-wrap-full",children:Object(g.jsx)(C,{title:"score board",children:Object(g.jsx)(k,{datas:o})})}),Object(g.jsx)("div",{className:"home-wrap-full",children:d.map((function(e,t){return p===t?"":Object(g.jsx)(C,{title:"tips",children:Object(g.jsx)("div",{className:"home-tips",children:e.info})},t)}))})]})})),E=(a(59),function(e){var t=e.setIsDemo,a=Object(c.useState)(!1),n=Object(r.a)(a,2),s=n[0],o=n[1];Object(c.useEffect)((function(){setTimeout((function(){o(!0)}),100)}),[]);return Object(g.jsxs)("div",{className:"auth__wrap ".concat(s?"auth__start":""),children:[Object(g.jsx)("span",{className:"auth__background"}),Object(g.jsx)("span",{className:"auth__logo",children:"Good Sleep"}),Object(g.jsxs)("div",{className:"auth__btn_wrap",children:[Object(g.jsxs)("button",{className:"auth__btn",onClick:function(){h(!1),t(!1)},children:["sign In",Object(g.jsx)("br",{}),"With Google"]}),Object(g.jsx)("button",{className:"auth__btn",onClick:function(){t(!0)},children:"show demo"})]})]})}),B=a(15),I=a(37),L=Object(I.b)({name:"useReducer",initialState:{user:{},sleepData:[],colorSet:{mainColor:"01",subColor:"01",theme:"01",fontColor:"01"}},reducers:{setUser:function(e,t){e.user=t.payload},setSleep:function(e,t){var a=Object(B.a)(t.payload);a.sort((function(e,t){return t.date-e.date})),e.sleepData=a},setColorSet:function(e,t){e.colorSet=t.payload},removeSleep:function(e,t){e.sleepData=e.sleepData.filter((function(e){return e.id!==t.payload}))},addSleep:function(e,t){e.sleepData=[t.payload].concat(Object(B.a)(e.sleepData))}}}),F=L.actions,T=Object(I.a)({reducer:L.reducer});a(60),a(61),a(62);var M=Object(w.b)((function(e,t){return{user:e.user}}))((function(e){var t=e.user,a=e.isLogedIn,c=e.isDemo,n=e.setDemo;return Object(g.jsxs)("div",{className:"header-wrap main-color",children:[a?Object(g.jsx)("button",{onClick:function(){c?n(!1):f()},className:"header-signout font-icon",children:"logout"}):Object(g.jsx)(g.Fragment,{}),Object(g.jsxs)("span",{className:"header-nickname",children:[t?t.displayName:""," \uc758 \uc218\uba74\uc0dd\ud65c"]})]})}));a(63);var U=function(){return Object(g.jsxs)("div",{className:"footer-wrap",children:[Object(g.jsx)(S.b,{to:"good_sleep/record",children:Object(g.jsx)("button",{className:"footer-btn sub-color font-color font-icon",children:"description"})}),Object(g.jsx)(S.b,{to:"good_sleep",children:Object(g.jsx)("button",{className:"footer-btn sub-color font-color font-icon",children:"home"})}),Object(g.jsx)(S.b,{to:"good_sleep/setting",children:Object(g.jsx)("button",{className:"footer-btn sub-color font-color font-icon",children:"settings"})})]})},z=(a(64),a(65),function(e){var t=e.val,a=void 0===t?0:t,c=e.min,n=void 0===c?0:c,s=e.max,r=void 0===s?9:s,o=e.setter,i=void 0===o?function(){}:o,l=function(e){var t=e.target.attributes.add.value;i((function(e){var a=1*e+1*t;return a>r?1*n:a<n?1*r:a}))};return Object(g.jsxs)("span",{className:"numberslide-wrap",children:[Object(g.jsx)("span",{className:"numberslide-up-btn font-icon main-color",add:"1",onClick:l,children:"arrow_drop_up"}),Object(g.jsx)("span",{className:"numberslide-number-box",children:Object(g.jsxs)("span",{className:"numberslide-disply",children:[Object(g.jsx)("span",{className:"numberslide-prev-num main-color",children:a-1}),Object(g.jsx)("span",{className:"numberslide-cur-num main-color",children:a}),Object(g.jsx)("span",{className:"numberslide-next-num main-color",children:a+1})]})}),Object(g.jsx)("span",{className:"numberslide-down-btn font-icon main-color",add:"-1",onClick:l,children:"arrow_drop_down"})]})}),G=function(e){return e<10&&1*e!==0?"0"+e:e};var H=Object(w.b)((function(e,t){var a=t.editId,c=e.user,n=e.sleepData;return{user:c,sleepObj:n.filter((function(e){return e.id===a}))[0],_sleepData:n}}),(function(e){return{addSleep:function(t){return e(F.addSleep(t))},setSleep:function(t){return e(F.setSleep(t))}}}))((function(e){var t=e.addSleep,a=e.user,n=e.callbaclFn,s=e.isNew,o=e.editId,i=e.sleepObj,d=e.setSleep,u=e._sleepData,j=new Date,b=Object(c.useState)(2),p=Object(r.a)(b,2),m=p[0],O=p[1],f=Object(c.useState)(3),h=Object(r.a)(f,2),x=h[0],N=h[1],S=Object(c.useState)(3),_=Object(r.a)(S,2),w=_[0],y=_[1],C=Object(c.useState)(0),k=Object(r.a)(C,2),D=k[0],E=k[1],B=Object(c.useState)(9),I=Object(r.a)(B,2),L=I[0],F=I[1],T=Object(c.useState)(9),M=Object(r.a)(T,2),U=M[0],H=M[1],A=Object(c.useState)(0),Y=Object(r.a)(A,2),q=Y[0],R=Y[1],J=Object(c.useState)(7),W=Object(r.a)(J,2),X=W[0],K=W[1],V=Object(c.useState)(3),P=Object(r.a)(V,2),Q=P[0],Z=P[1],$=Object(c.useState)(0),ee=Object(r.a)($,2),te=ee[0],ae=ee[1],ce=Object(c.useState)(9),ne=Object(r.a)(ce,2),se=ne[0],re=ne[1],oe=Object(c.useState)(9),ie=Object(r.a)(oe,2),le=ie[0],de=ie[1],ue=Object(c.useState)(j.getFullYear()+""+G(j.getMonth()+1)+G(j.getDate())),je=Object(r.a)(ue,2),be=je[0],pe=je[1],me=Object(c.useState)(0),Oe=Object(r.a)(me,2),fe=Oe[0],he=Oe[1],xe=Object(c.useState)({rating:"3"}),ve=Object(r.a)(xe,2),ge=ve[0],Ne=ve[1];function Se(e){var t=e.flag,a=e.frontN,c=e.backNSetter,n=e.maxSetter;"H"===t?(n(2===a?4:9),c((function(e){return 2===a&&e>4?4:e}))):"M"===t&&(n(6===a?0:9),c((function(e){return 6===a?0:e})))}Object(c.useEffect)((function(){Se({flag:"H",frontN:m,backNSetter:N,maxSetter:F}),Se({flag:"M",frontN:w,backNSetter:E,maxSetter:H}),Se({flag:"H",frontN:q,backNSetter:K,maxSetter:re}),Se({flag:"M",frontN:Q,backNSetter:ae,maxSetter:de})}),[m,x,w,D,q,X,Q,te]),Object(c.useEffect)((function(){if(i){var e=i.sleepStart,t=i.sleepEnd;O(e.substr(0,1)),N(e.substr(1,1)),y(e.substr(2,1)),E(e.substr(3,1)),R(t.substr(0,1)),K(t.substr(1,1)),Z(t.substr(2,1)),ae(t.substr(3,1)),pe(i.date),Ne((function(e){return Object(l.a)(Object(l.a)({},e),{},{rating:i.rating})})),he(0),document.querySelectorAll(".add-data-step1-score").forEach((function(e){e.classList.remove("add-data-step1-selected","main-color"),e.attributes.rating.value===i.rating&&e.classList.add("add-data-step1-selected","main-color")}))}}),[i]),Object(c.useEffect)((function(){(s?document.querySelector(".add-data-new .add-data-contents"):document.querySelector(".add-data-edit .add-data-contents")).style.marginLeft=-250*fe+"px",Ne((function(e){return Object(l.a)(Object(l.a)({},e),{},{sleepStart:m+""+x+w+D,sleepEnd:q+""+X+Q+te,date:be})}))}),[fe,s]);var _e=function(e){"prev"===e.target.innerText?fe>0&&he(fe-1):fe<3?he(fe+1):s?window.confirm("\ucd94\uac00 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(v.add("sleep",Object(l.a)(Object(l.a)({},ge),{},{uid:a.uid}),(function(e){t(Object(l.a)(Object(l.a)({},ge),{},{uid:a.uid,id:e}))})),n(),he(0),Ne({date:j.getFullYear()+""+(j.getMonth()+1)+j.getDate(),sleepStart:"1203am",sleepEnd:"0701am",rating:"3"})):window.confirm("\uc218\uc815 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(v.update("sleep",i.id,Object(l.a)(Object(l.a)({},ge),{},{uid:a.uid}),(function(){d(u.map((function(e){return e.id===o?Object(l.a)(Object(l.a)({},ge),{},{id:o}):e})))})),n())},we=function(e){document.querySelectorAll(".add-data-step1-score").forEach((function(e){e.classList.remove("add-data-step1-selected","main-color")})),e.target.classList.add("add-data-step1-selected","main-color"),Ne(Object(l.a)(Object(l.a)({},ge),{},{rating:e.target.attributes.rating.value}))};return Object(g.jsxs)("div",{className:"add-data-wrap "+(s?"add-data-new":"add-data-edit"),children:[Object(g.jsxs)("div",{className:"add-data-contents font-color",children:[Object(g.jsxs)("div",{className:"add-data-step1",children:[Object(g.jsxs)("div",{className:"add-data-step-text main-color",children:["\uc798 \uc8fc\ubb34\uc168\ub098\uc694? ",Object(g.jsx)("br",{}),"\uc77c\uc5b4\ub0ac\uc744 \ub54c \uae30\ubd84\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694"]}),Object(g.jsxs)("div",{className:"add-data-step1-scores",children:[Object(g.jsx)("span",{className:"add-data-step1-score font-icon",onClick:we,rating:"1",children:"sick"}),Object(g.jsx)("span",{className:"add-data-step1-score font-icon",onClick:we,rating:"2",children:"mood_bad"}),Object(g.jsx)("span",{className:"add-data-step1-score font-icon add-data-step1-selected main-color",onClick:we,rating:"3",children:"sentiment_satisfied"}),Object(g.jsx)("span",{className:"add-data-step1-score font-icon",onClick:we,rating:"4",children:"mood"}),Object(g.jsx)("span",{className:"add-data-step1-score font-icon",onClick:we,rating:"5",children:"emoji_emotions"})]})]}),Object(g.jsxs)("div",{className:"add-data-step2",children:[Object(g.jsxs)("div",{className:"add-data-step-text main-color",children:["\uba87\uc2dc\uc5d0 \uc8fc\ubb34\uc168\ub098\uc694? ",Object(g.jsx)("br",{}),"\uc8fc\ubb34\uc2e0 \uc2dc\uac04\uc744 \uc54c\ub824\uc8fc\uc138\uc694"]}),Object(g.jsxs)("div",{className:"add-data-step2-time",children:[Object(g.jsx)("span",{}),Object(g.jsx)(z,{val:m,setter:O,max:"2"}),Object(g.jsx)(z,{val:x,setter:N,max:L}),Object(g.jsx)(z,{val:w,setter:y,max:"6"}),Object(g.jsx)(z,{val:D,setter:E,max:U})]})]}),Object(g.jsxs)("div",{className:"add-data-step3",children:[Object(g.jsxs)("div",{className:"add-data-step-text main-color",children:["\uba87\uc2dc\uc5d0 \uc77c\uc5b4\ub098\uc168\ub098\uc694? ",Object(g.jsx)("br",{}),"\uc77c\uc5b4\ub09c \uc2dc\uac04\uc744 \uc54c\ub824\uc8fc\uc138\uc694"]}),Object(g.jsxs)("div",{className:"add-data-step3-time",children:[Object(g.jsx)("span",{}),Object(g.jsx)(z,{val:q,setter:R,max:"2"}),Object(g.jsx)(z,{val:X,setter:K,max:se}),Object(g.jsx)(z,{val:Q,setter:Z,max:"6"}),Object(g.jsx)(z,{val:te,setter:ae,max:le})]})]}),Object(g.jsx)("div",{className:"add-data-step5",children:Object(g.jsxs)("div",{className:"add-data-step-text main-color",children:[s?"\ub4f1\ub85d":"\uc218\uc815","\uc744 \uc644\ub8cc\ud558\uc2dc\ub824\uba74 ",Object(g.jsx)("br",{}),"done \ubc84\ud2bc\uc744 \ud074\ub9ad\ud574\uc8fc\uc138\uc694"]})})]}),Object(g.jsxs)("div",{className:"add-data-btn-wrap",children:[Object(g.jsx)("button",{className:"add-data-btn sub-color font-color",onClick:_e,children:"prev"}),Object(g.jsx)("button",{className:"add-data-btn font-color "+(3===fe?"main-color":"sub-color"),onClick:_e,children:3===fe?"done":"next"})]})]})})),A=(a(66),function(e){var t=e.isOpend,a=e.clossBtnClick,n=e.title,s=e.children,o=Object(c.useState)(!1),i=Object(r.a)(o,2),l=i[0],d=i[1],u=Object(c.useState)(!1),j=Object(r.a)(u,2),b=j[0],p=j[1];Object(c.useEffect)((function(){d(t),setTimeout((function(){p(t)}),50)}),[t]);return Object(g.jsxs)("div",{className:"".concat((l?"":"popup-closed ")+(b?"popup-anim":"")),children:[Object(g.jsx)("div",{className:"popup-wrap",children:Object(g.jsx)(C,{title:n,children:Object(g.jsx)("div",{className:"popup-contents",children:s})})}),Object(g.jsx)("div",{className:"popup-background",onClick:function(){d(!1),a()}})]})});a(67);var Y=Object(w.b)((function(e,t){var a=e.sleepData,c=e.user;return{sleepData:[].concat(Object(B.a)(a),[{Rating:"",date:"",id:"new",sleepEnd:"",sleepStart:"",uid:""}]),user:c}}),(function(e){return{removeSleep:function(t){return e(F.removeSleep(t))},addSleep:function(t){return e(F.addSleep(t))}}}))((function(e){var t=e.sleepData,a=e.id,n=e.removeSleep,s=(e.addSleep,e.user,e.addBtnClick),o=e.editBtnClick,i=Object(c.useState)(!1),l=Object(r.a)(i,2),d=l[0],u=l[1],j=t.filter((function(e){return e.id===a}))[0],b="".concat(j.date.substr(0,4),"/").concat(j.date.substr(4,2),"/").concat(j.date.substr(6,2)),p=function(e){switch(e){case"1":return"sick";case"2":return"mood_bad";case"3":return"sentiment_satisfied";case"4":return"mood";case"5":return"emoji_emotions";default:return}}(j.rating),m=function(e,t){var a=1*e.substr(0,2),c=1*e.substr(2,2),n=1*t.substr(0,2),s=1*t.substr(2,2),r=a>n?24+n-a:n-a,o=s-c;o<0&&(o+=60,r--);return r+"\uc2dc\uac04 "+o+"\ubd84"}(j.sleepStart,j.sleepEnd);return Object(g.jsx)("div",{className:"sub-color sleepcard-wrap "+(d?"deleted":""),children:"new"!==a?Object(g.jsxs)("div",{className:"sleepcard-old-wrap",children:[Object(g.jsx)("div",{className:"sleepcard-header sub-color font-color ",children:Object(g.jsx)("span",{className:"sleepcard-date",children:b})}),Object(g.jsxs)("div",{className:"sleepcard-body theme-color",children:[Object(g.jsxs)("span",{className:"sleepcard-data",children:[Object(g.jsx)("span",{className:"sleepcard-emoji font-icon  main-color",children:p}),Object(g.jsx)("span",{className:"sleepcard-tx main-color",children:m})]}),Object(g.jsx)("span",{className:"sleepcard-icon font-icon main-color",onClick:function(){o(a)},children:"edit"}),Object(g.jsx)("span",{className:"sleepcard-icon font-icon main-color",onClick:function(){window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(console.log(j.id),v.delete("sleep",j.id),u(!0),setTimeout((function(){n(j.id)}),500))},children:"delete_forever"})]})]}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"sleepcard-new-wrap sub-color font-color ",children:Object(g.jsx)("span",{className:"sleepcard-plus-btn",onClick:function(){s()},children:"add"})})})})}));a(68);var q=Object(w.b)((function(e){var t=e.sleepData;return{sleepData:Object(B.a)(t)}}))((function(e){var t=e.sleepData,a=Object(c.useState)(!1),n=Object(r.a)(a,2),s=n[0],o=n[1],i=Object(c.useState)(!1),l=Object(r.a)(i,2),d=l[0],u=l[1],j=Object(c.useState)(""),b=Object(r.a)(j,2),p=b[0],m=b[1],O=function(e){m(e),u(!0)},f=function(){o(!1),u(!1)};return Object(g.jsxs)("div",{className:"record-wrap",children:[Object(g.jsx)(Y,{id:"new",addBtnClick:function(){o(!0)}}),t.map((function(e,t){return Object(g.jsx)(Y,{id:e.id,editBtnClick:O},e.id)})),Object(g.jsx)(A,{isOpend:s,clossBtnClick:f,title:"Add new sleep data",children:Object(g.jsx)(H,{callbaclFn:f,isNew:!0})}),Object(g.jsx)(A,{isOpend:d,clossBtnClick:f,title:"Edit sleep data",children:Object(g.jsx)(H,{callbaclFn:f,isNew:!1,editId:p})})]})}));var R=Object(w.b)((function(e,t){var a=Object(l.a)({},e.colorSet),c=t.category,n=t.no;return a[c+"Color"]=n,{colorSet:a}}),(function(e){return{setColorSet:function(t){return e(F.setColorSet(t))}}}))((function(e){var t=e.no,a=e.category,c=e.colorSet,n=e.setColorSet;return Object(g.jsx)("span",{onClick:function(){console.log(c),n(c)},className:"color-sample color-".concat(a,"-").concat(t)})})),J=function(e){var t=e.noSet,a=e.category;return Object(g.jsx)("div",{className:"pallet-wrap",children:t.map((function(e){return Object(g.jsx)(R,{category:a,no:e},e)}))})};a(69);var W=Object(w.b)((function(e){return{colorSet:e.colorSet}}),(function(){return{updateColorSet:function(e,t,a){v.update(e,t,a)}}}))((function(e){var t=e.updateColorSet,a=e.colorSet,c=function(){t("colorSet",a.id,a)},n={main:["00","01","02","03","04","05","06","07","08"],sub:["00","01","02","03","04","05","06","07","08"],theme:["01","02","03","04"],font:["01","02","03","04"]};return Object(g.jsxs)("div",{className:"setting-wrap",children:[Object(g.jsxs)(C,{title:"Color",children:[Object(g.jsx)("div",{className:"setting-pallet-category",children:"main"}),Object(g.jsx)(J,{category:"main",noSet:n.main}),Object(g.jsx)("div",{className:"setting-pallet-category",children:"sub"}),Object(g.jsx)(J,{category:"sub",noSet:n.sub}),Object(g.jsx)("div",{className:"setting-pallet-category",children:"theme"}),Object(g.jsx)(J,{category:"theme",noSet:n.theme}),Object(g.jsx)("div",{className:"setting-pallet-category",children:"font"}),Object(g.jsx)(J,{category:"font",noSet:n.font})]}),Object(g.jsx)(S.b,{to:"good_sleep",children:Object(g.jsx)("button",{onClick:function(){c()},className:"setting-save-btn main-color font-color",children:"save"})})]})}));var X=Object(w.b)((function(e){return{colorSet:e.colorSet}}),(function(e){return{setUser:function(t){return e(F.setUser(t))},connectSleepDB:function(t){return e(F.setSleep(t))},connectThemeDB:function(t){return e(F.setColorSet(t))}}}))((function(e){var t=e.setUser,a=e.connectSleepDB,n=e.connectThemeDB,s=e.colorSet,o=Object(c.useState)(!1),i=Object(r.a)(o,2),l=i[0],d=i[1],u=Object(c.useState)(!0),j=Object(r.a)(u,2),b=j[0],p=j[1],m=Object(c.useState)(!1),O=Object(r.a)(m,2),f=O[0],h=O[1];Object(c.useEffect)((function(){f?y():w()}),[f]),Object(c.useEffect)((function(){k(s)}),[s]);var w=function(){x((function(e){e?C(e):(d(!1),p(!1))}))},y=function(){C({displayName:"Demo",uid:"demo__uid",email:""})},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};d(!0);var c=e.displayName,s=e.uid,r=e.email;t({displayName:c,uid:s,email:r}),v.get("sleep").then((function(t){a(t.filter((function(t){return t.uid===e.uid}))),p(!1)})),v.get("colorSet").then((function(t){var a=t.filter((function(t){return t.uid===e.uid}));0===a.length?v.add("colorSet",{mainColor:"01",subColor:"01",fontColor:"01",themeColor:"01",uid:e.uid}):n(a[0])}))},k=function(e){["01","02","03","04","05","06","07","08"].forEach((function(e){document.getElementById("root").classList.remove("color-main-"+e),document.getElementById("root").classList.remove("color-sub-"+e),document.getElementById("root").classList.remove("color-font-"+e),document.getElementById("root").classList.remove("color-theme-"+e)})),document.getElementById("root").classList.add("color-main-".concat(e.mainColor)),document.getElementById("root").classList.add("color-sub-".concat(e.subColor)),document.getElementById("root").classList.add("color-font-".concat(e.fontColor)),document.getElementById("root").classList.add("color-theme-".concat(e.themeColor))};return b?Object(g.jsx)(N,{}):l?Object(g.jsxs)(S.a,{children:[Object(g.jsx)(M,{isLogedIn:l,isDemo:f,setDemo:h}),Object(g.jsxs)(_.c,{children:[Object(g.jsx)(_.a,{path:"good_sleep/*",element:Object(g.jsx)(D,{})}),Object(g.jsx)(_.a,{path:"good_sleep/record",element:Object(g.jsx)(q,{})}),Object(g.jsx)(_.a,{path:"good_sleep/setting",element:Object(g.jsx)(W,{})})]}),Object(g.jsx)(U,{})]}):Object(g.jsx)(E,{setIsDemo:h})}));s.a.render(Object(g.jsx)(w.a,{store:T,children:Object(g.jsx)(X,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.19a91ee0.chunk.js.map