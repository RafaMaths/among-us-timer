(this["webpackJsonpamong-us-timer"]=this["webpackJsonpamong-us-timer"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(9),i=n.n(s),r=(n(14),n(2)),o=n(3),l=n(6),u=n(5),b=n(4),j=n(8),d=(n(16),n(0)),p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var t=[],e=1;e<10;e+=1)t.push(Object(d.jsx)("button",{type:"button",children:e},e));return Object(d.jsxs)("div",{className:"dial-pad-buttons",children:[t,Object(d.jsx)("button",{type:"button",className:"fas fa-backspace",id:"del",children:" "},"del"),Object(d.jsx)("button",{type:"button",children:"0"},0),Object(d.jsx)("button",{type:"button",id:"clear",children:"C"},"clear")]})}}]),n}(a.Component),h=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("header",{children:Object(d.jsxs)("h1",{children:["There is",Object(d.jsx)("span",{className:"title-spotlight",children:" 1 Timer "})," ","among us"]})})}}]),n}(a.Component),m=n.p+"static/media/start.c8149644.mp3",O=n.p+"static/media/pause.895d2f7f.mp3",f=n.p+"static/media/impostor-win.a3cf6271.mp3",y=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).soundPlay=t.soundPlay.bind(Object(l.a)(t)),t}return Object(o.a)(n,[{key:"soundPlay",value:function(t){new j.Howl({src:[t]}).play()}},{key:"render",value:function(){return j.Howler.volume(.1),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{}),Object(d.jsxs)("div",{className:"main-container",children:[Object(d.jsx)("div",{className:"timer-container",children:Object(d.jsx)("span",{className:"timer",children:"05:30"})}),Object(d.jsx)("div",{className:"dial-pad-container",children:Object(d.jsx)(p,{})})]}),Object(d.jsxs)("div",{className:"command-btn",children:[Object(d.jsx)("button",{type:"button",className:"start fas fa-play",onChange:this.soundPlay(O),children:" "}),Object(d.jsx)("button",{type:"button",className:"pause fas fa-pause",onClick:this.soundPlay(m),children:" "}),Object(d.jsx)("button",{type:"button",className:"stop fas fa-stop",onClick:this.soundPlay(f),children:" "})]})]})}}]),n}(a.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),s(t),i(t)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.41acf89f.chunk.js.map