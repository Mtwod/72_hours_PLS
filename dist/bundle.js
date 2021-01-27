(()=>{var t={484:function(t){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",a="month",u="quarter",o="year",d="date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+l(r,2,"0")+":"+l(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,u=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:a,y:o,w:s,d:i,D:d,h:r,m:n,s:e,ms:t,Q:u}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",m={};m[g]=f;var p=function(t){return t instanceof D},M=function(t,e,n){var r;if(!t)return g;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var i=t.name;m[i]=t,r=i}return!n&&r&&(g=r),r||!n&&g},y=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},v=$;v.l=M,v.i=p,v.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function f(t){this.$L=M(t.locale,null,!0),this.parse(t)}var l=f.prototype;return l.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return v},l.isValid=function(){return!("Invalid Date"===this.$d.toString())},l.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},l.isAfter=function(t,e){return y(t)<this.startOf(e)},l.isBefore=function(t,e){return this.endOf(e)<y(t)},l.$g=function(t,e,n){return v.u(t)?this[e]:this.set(n,t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,u){var c=this,h=!!v.u(u)||u,f=v.p(t),l=function(t,e){var n=v.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return h?n:n.endOf(i)},$=function(t,e){return v.w(c.toDate()[t].apply(c.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},g=this.$W,m=this.$M,p=this.$D,M="set"+(this.$u?"UTC":"");switch(f){case o:return h?l(1,0):l(31,11);case a:return h?l(1,m):l(0,m+1);case s:var y=this.$locale().weekStart||0,D=(g<y?g+7:g)-y;return l(h?p-D:p+(6-D),m);case i:case d:return $(M+"Hours",0);case r:return $(M+"Minutes",1);case n:return $(M+"Seconds",2);case e:return $(M+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(s,u){var c,h=v.p(s),f="set"+(this.$u?"UTC":""),l=(c={},c[i]=f+"Date",c[d]=f+"Date",c[a]=f+"Month",c[o]=f+"FullYear",c[r]=f+"Hours",c[n]=f+"Minutes",c[e]=f+"Seconds",c[t]=f+"Milliseconds",c)[h],$=h===i?this.$D+(u-this.$W):u;if(h===a||h===o){var g=this.clone().set(d,1);g.$d[l]($),g.init(),this.$d=g.set(d,Math.min(this.$D,g.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.get=function(t){return this[v.p(t)]()},l.add=function(t,u){var d,c=this;t=Number(t);var h=v.p(u),f=function(e){var n=y(c);return v.w(n.date(n.date()+Math.round(e*t)),c)};if(h===a)return this.set(a,this.$M+t);if(h===o)return this.set(o,this.$y+t);if(h===i)return f(1);if(h===s)return f(7);var l=(d={},d[n]=6e4,d[r]=36e5,d[e]=1e3,d)[h]||1,$=this.$d.getTime()+t*l;return v.w($,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=v.z(this),i=this.$locale(),s=this.$H,a=this.$m,u=this.$M,o=i.weekdays,d=i.months,c=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},f=function(t){return v.s(s%12||12,t,"0")},l=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:v.s(u+1,2,"0"),MMM:c(i.monthsShort,u,d,3),MMMM:c(d,u),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,o,2),ddd:c(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:v.s(s,2,"0"),h:f(1),hh:f(2),a:l(s,a,!0),A:l(s,a,!1),m:String(a),mm:v.s(a,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:r};return n.replace(h,(function(t,e){return e||$[t]||r.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(t,d,c){var h,f=v.p(d),l=y(t),$=6e4*(l.utcOffset()-this.utcOffset()),g=this-l,m=v.m(this,l);return m=(h={},h[o]=m/12,h[a]=m,h[u]=m/3,h[s]=(g-$)/6048e5,h[i]=(g-$)/864e5,h[r]=g/36e5,h[n]=g/6e4,h[e]=g/1e3,h)[f]||g,c?m:v.a(m)},l.daysInMonth=function(){return this.endOf(a).$D},l.$locale=function(){return m[this.$L]},l.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},l.clone=function(){return v.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},f}(),w=D.prototype;return y.prototype=w,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",a],["$y",o],["$D",d]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),y.extend=function(t,e){return t.$i||(t(e,D,y),t.$i=!0),y},y.locale=M,y.isDayjs=p,y.unix=function(t){return y(1e3*t)},y.en=m[g],y.Ls=m,y.p={},y}()}},e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(484),e=n.n(t);const r=e()().add(1,"day").format("YYYY-MM-DD"),i=e()().add(1,"year").format("YYYY-MM-DD"),{baseUrl:s,pageNumber:a,dates:u,orderedAdded:o}={baseUrl:"https://api.rawg.io/api/games?key=48b91582cb664a68806042763b794757&page_size=9",pageNumber:t=>`&page=${t}`,orderedReleased:"&ordering=released",orderedAdded:"&ordering=-added",dates:(t,e)=>`&dates=${t},${e}`},d=document.getElementById("pageContent"),c={"":()=>{d.innerHTML='\n      <section class="page-list">\n        <div class="games">...loading</div>\n      </section>\n    ',(async()=>{let t="";const e=`${s}${a(1)}${u(r,i)}${o}`;try{const n=await fetch(e);(await n.json()).results.forEach((e=>{t+=`\n            <div class="cardGame">\n              <img class="pageListPicture" src="${e.background_image}" alt="Game image">\n              <h1>${e.name}</h1>\n              <h2>${e.released}</h2>\n              <a href = "#pagedetail/${e.id}">${e.id}</a>\n            </div>\n        `}))}catch(t){console.error(t)}document.querySelector(".page-list .games").innerHTML=t})()},pagelist:(t="")=>{},pagedetail:(t="")=>{console.log("Page Detail",t)}};let h;const f=()=>{let t=window.location.hash.substring(1).split("/");return h=t[1]||"",document.getElementById("pageContent"),c[t[0]](h),!0};window.addEventListener("hashchange",(()=>f())),window.addEventListener("DOMContentLoaded",(()=>f()))})()})();