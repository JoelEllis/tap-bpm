/* findadomain v1.0.0 ©2019 Joel Ellis */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).app=e()}(this,function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function a(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function u(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function s(){return i(" ")}function c(t,e){e=""+e,t.data!==e&&(t.data=e)}let p;function d(t){p=t}const f=[],m=Promise.resolve();let v=!1;const h=[],g=[],$=[];function _(t){g.push(t)}function b(){const t=new Set;do{for(;f.length;){const t=f.shift();d(t),(e=t.$$).fragment&&(e.update(e.dirty),o(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(_))}for(;h.length;)h.shift()();for(;g.length;){const e=g.pop();t.has(e)||(e(),t.add(e))}}while(f.length);for(var e;$.length;)$.pop()();v=!1}function y(r,l,u,i,s,c){const h=p;d(r);const g=l.props||{},$=r.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:null};let y=!1;var x;$.ctx=u?u(r,g,(t,e)=>{$.ctx&&s($.ctx[t],$.ctx[t]=e)&&($.bound[t]&&$.bound[t](e),y&&function(t,e){t.$$.dirty||(f.push(t),v||(v=!0,m.then(b)),t.$$.dirty={}),t.$$.dirty[e]=!0}(r,t))}):g,$.update(),y=!0,o($.before_render),$.fragment=i($.ctx),l.target&&(l.hydrate?$.fragment.l((x=l.target,Array.from(x.childNodes))):$.fragment.c(),l.intro&&r.$$.fragment.i&&r.$$.fragment.i(),function(t,n,r){const{fragment:l,on_mount:u,on_destroy:i,after_render:s}=t.$$;l.m(n,r),_(()=>{const n=u.map(e).filter(a);i?i.push(...n):o(n),t.$$.on_mount=[]}),s.forEach(_)}(r,l.target,l.anchor),b()),d(h)}function x(e){var n,o,a,r,p,d,f,m,v,g,$,_,b,y,x,V,w,C,k,E,A,N,P,B,M,F,O,T,j,L,S,q,D,I;return{c(){var t;n=u("main"),(o=u("p")).textContent="Use any key - Start tapping to measure BPM",a=s(),r=u("p"),(p=u("span")).textContent="Average BPM",d=s(),f=u("span"),m=i(e.avgVal),v=s(),g=u("p"),($=u("span")).textContent="Nearest Whole",_=s(),b=u("span"),y=i(e.wholeVal),x=s(),V=u("p"),(w=u("span")).textContent="Timing Taps",C=s(),k=u("span"),E=i(e.tapVal),A=s(),N=u("p"),P=u("label"),B=i("Pause\n      "),M=u("select"),(F=u("option")).textContent="1",(O=u("option")).textContent="2",(T=u("option")).textContent="3",(j=u("option")).textContent="4",(L=u("option")).textContent="5",S=i("\n      second(s) or\n      "),q=u("input"),D=i("\n      to start again"),f.className="input svelte-1hk4tmn",b.className="input svelte-1hk4tmn",k.className="input svelte-1hk4tmn",F.__value="1",F.value=F.__value,O.__value="2",O.value=O.__value,O.selected=!0,T.__value="3",T.value=T.__value,j.__value="4",j.value=j.__value,L.__value="5",L.value=L.__value,M.name="pause",t=q,null=="button"?t.removeAttribute("type"):t.setAttribute("type","button"),q.name="id",q.value="reset",P.htmlFor="pause",n.className="cont svelte-1hk4tmn",I=function(t,e,n){return t.addEventListener("click",n,void 0),()=>t.removeEventListener("click",n,void 0)}(q,0,e.resetCount)},m(t,u){var i;!function(t,e,n){t.insertBefore(e,n)}(t,n,u),l(n,o),l(n,a),l(n,r),l(r,p),l(r,d),l(r,f),l(f,m),l(n,v),l(n,g),l(g,$),l(g,_),l(g,b),l(b,y),l(n,x),l(n,V),l(V,w),l(V,C),l(V,k),l(k,E),l(n,A),l(n,N),l(N,P),l(P,B),l(P,M),l(M,F),l(M,O),l(M,T),l(M,j),l(M,L),i=(()=>e.select_binding(M,null)),h.push(i),l(P,S),l(P,q),l(P,D)},p(t,e){t.avgVal&&c(m,e.avgVal),t.wholeVal&&c(y,e.wholeVal),t.tapVal&&c(E,e.tapVal),t.items&&(e.select_binding(null,M),e.select_binding(M,null))},i:t,o:t,d(t){var o;t&&(o=n).parentNode.removeChild(o),e.select_binding(null,M),I()}}}function V(t,e,n){var o=0,a=0,r=0;let l,u,i="",s="",c="";if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))var p="touchstart";else p="keypress";return document.addEventListener(p,function(){l.blur();let t=(new Date).getTime();return t-r>1e3*l.value&&n("count",o=0),0==o?(n("avgVal",i="First Beat"),n("tapVal",s="First Beat"),n("msecsFirst",a=t),n("count",o=1)):(n("bpmAvg",c=6e4*o/(t-a)),n("avgVal",i=Math.round(100*c)/100),n("count",++o),n("tapVal",s=o)),n("msecsPrevious",r=t),!0}),t.$$.update=((t={bpmAvg:1})=>{t.bpmAvg&&n("wholeVal",u=Math.round(c))}),{avgVal:i,tapVal:s,waitEl:l,resetCount:function(){n("count",o=0),n("avgVal",i=""),n("tapVal",s=""),this.blur()},wholeVal:u,select_binding:function(t){n("waitEl",l=t)}}}return new class extends class{$destroy(){this.$$&&(o(this.$$.on_destroy),this.$$.fragment.d(!0),this.$$.on_destroy=this.$$.fragment=null,this.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),y(this,t,V,x,r,[])}}({target:document.body,props:{}})});
