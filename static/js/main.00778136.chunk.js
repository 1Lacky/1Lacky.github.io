(this.webpackJsonphackathon=this.webpackJsonphackathon||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo_anim.052b00ce.svg"},19:function(e,t,a){e.exports=a.p+"static/media/logo_motiv.b2116d3b.svg"},22:function(e,t,a){e.exports=a(38)},27:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),s=a.n(r),l=a(11),o=(a(27),a(4)),u=a.n(o),m=a(7),i=a(8),p=a(6),f=(a(29),a(30),"https://urfuhack.herokuapp.com/");var v=function(e){var t=e.auth,a=Object(n.useState)("+7"),r=Object(i.a)(a,2),s=r[0],l=r[1],o=Object(n.useState)(""),p=Object(i.a)(o,2),v=p[0],E=p[1];function h(){return(h=Object(m.a)(u.a.mark((function e(a,n){var c,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(f,"/login?auth=password&phone=").concat(a,"&pass=").concat(n),e.next=3,fetch(c,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:if(!(r=e.sent).ok){e.next=11;break}return e.next=7,r.json();case 7:s=e.sent,t(s.authorization),e.next=12;break;case 11:alert("\u041e\u0448\u0438\u0431\u043a\u0430 HTTP: "+r.status);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.createElement("form",{className:"loginFrom",onSubmit:function(e){e.preventDefault(),function(e,t){h.apply(this,arguments)}(s.slice(1),v),l("+7"),E("")}},c.a.createElement("span",{className:"labelInput"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"),c.a.createElement("input",{className:"phoneInput",type:"tel",name:"telefon",value:s,onChange:function(e){l(e.target.value)}}),c.a.createElement("span",{className:"labelInput"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),c.a.createElement("input",{className:"phoneInput",type:"password",name:"password",value:v,onChange:function(e){E(e.target.value)}}),c.a.createElement("input",{className:"nextButton",type:"submit",value:"\u0414\u0430\u043b\u0435\u0435"}),c.a.createElement("span",{className:"forgotPassword"},"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"))},E=a(18),h=a.n(E),d=a(19),b=a.n(d);a(31);var N=function(e){var t=e.func;return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:h.a,alt:"\u0410\u043d\u0438\u043c\u0438\u0440\u043e\u0432\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u0435\u043b\u043e\u0447\u043a\u0438",className:"anim"}),c.a.createElement("img",{src:b.a,alt:"\u041c\u043e\u0442\u0438\u0432 \u0411\u0443\u043a\u0430\u0432\u044b",className:"motiv"})),c.a.createElement("div",{className:"loginMethod"},c.a.createElement("div",{className:"tab sms "},"\u0412\u0445\u043e\u0434 \u043f\u043e SMS"),c.a.createElement("div",{className:"tab password active-tab"},"\u041f\u043e \u043d\u043e\u043c\u0435\u0440\u0443 \u0438 \u043f\u0430\u0440\u043e\u043b\u044e")),c.a.createElement(v,{auth:t}),c.a.createElement("a",{href:"tel:*205#",className:"getPhone"},"\u041d\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043d\u043e\u043c\u0435\u0440"))},g=(a(32),"https://urfuhack.herokuapp.com/");var w=function(e){var t=e.token,a=Object(n.useState)(null),r=Object(i.a)(a,2),s=r[0],l=r[1];function o(){return(o=Object(m.a)(u.a.mark((function e(){var a,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(g,"/user"),e.next=3,fetch(a,{method:"POST",headers:{Authorization:t,Accept:"application/json","Content-Type":"application/json"}});case 3:if(!(n=e.sent).ok){e.next=12;break}return e.next=7,n.json();case 7:c=e.sent,console.log(c),l(c),e.next=13;break;case 12:alert("\u041e\u0448\u0438\u0431\u043a\u0430 HTTP: "+n.status);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),null===s?c.a.createElement("span",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"):c.a.createElement("div",{className:"account"},c.a.createElement("div",{className:"news"},c.a.createElement("div",{className:"newsItem newsItemOne"},"\u0423\u0437\u043d\u0430\u0439 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440 \u0442\u0432\u043e\u0435\u0433\u043e \u043d\u043e\u043c\u0435\u0440\u0430 ",c.a.createElement("br",null),"\ud83d\ude40\ud83d\ude40\ud83d\ude40 ",c.a.createElement("br",null)," \u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c"),c.a.createElement("div",{className:"newsItem newsItemTwo"},"\u0414\u0430\u0440\u0438\u043c ",c.a.createElement("br",null),"1 000 \u20bd \u043f\u0440\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",c.a.createElement("br",null),"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d \ud83d\uded2"),c.a.createElement("div",{className:"newsItem newsItemFree"},"\u041a\u0430\u043a\u0438\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 \u0441\u0447\u0438\u0442\u0430\u044e\u0442 \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u043c\u0438?",c.a.createElement("br",null),"\u0420\u0430\u0437\u0431\u0435\u0440\u0435\u043c \u0441\u0435\u0433\u043e\u0434\u043d\u044f\ud83d\udcf1")),c.a.createElement("div",{className:"AccountInfor"},c.a.createElement("div",{className:"AccountNumbers"},c.a.createElement("div",{className:"AccountTitle"},"\u0411\u0430\u043b\u0430\u043d\u0441"),c.a.createElement("div",{className:"AccountNumber"},"+"+s.phoneNumber)),c.a.createElement("div",{className:"AccountMoneys"},c.a.createElement("div",{className:"AccountMoney"},s.money+" \u20bd"),c.a.createElement("div",{className:"MoneyTitle"},"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c")),c.a.createElement("div",{className:"AccountTest"},c.a.createElement("div",{className:"AccountText"},"\u0410 \u043a\u0430\u043a\u043e\u0439 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440 \u0443 \u0442\u0432\u043e\u0435\u0433\u043e \u043d\u043e\u043c\u0435\u0440\u0430? \u042d\u043b\u0435\u0433\u0430\u043d\u0442\u043d\u044b\u0439, \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u044b\u0439 \u0438\u043b\u0438 \u0434\u0435\u0440\u0437\u043a\u0438\u0439?"),c.a.createElement("div",{className:"orngBtn"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c")),c.a.createElement("div",{className:"AccountTarif"})))};var j=Object(p.e)((function(e){var t=e.history,a=Object(n.useState)(null),r=Object(i.a)(a,2),s=r[0],l=r[1],o=function(){var e=Object(m.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,l(a);case 3:t.push("/account");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement(p.a,{exact:!0,path:"/",render:function(){return c.a.createElement(N,{func:o})}}),c.a.createElement(p.a,{path:"/account",render:function(){return c.a.createElement(w,{token:s})}}))}));s.a.render(c.a.createElement(l.a,null,c.a.createElement(j,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.00778136.chunk.js.map