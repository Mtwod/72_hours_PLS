(()=>{var t={484:function(t){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",a="month",o="quarter",u="year",c="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+f(r,2,"0")+":"+f(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,o=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:a,y:u,w:s,d:i,D:c,h:r,m:n,s:e,ms:t,Q:o}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",m={};m[g]=l;var p=function(t){return t instanceof D},v=function(t,e,n){var r;if(!t)return g;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var i=t.name;m[i]=t,r=i}return!n&&r&&(g=r),r||!n&&g},M=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},y=$;y.l=v,y.i=p,y.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function l(t){this.$L=v(t.locale,null,!0),this.parse(t)}var f=l.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return M(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<M(t)},f.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var d=this,h=!!y.u(o)||o,l=y.p(t),f=function(t,e){var n=y.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return h?n:n.endOf(i)},$=function(t,e){return y.w(d.toDate()[t].apply(d.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},g=this.$W,m=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case u:return h?f(1,0):f(31,11);case a:return h?f(1,m):f(0,m+1);case s:var M=this.$locale().weekStart||0,D=(g<M?g+7:g)-M;return f(h?p-D:p+(6-D),m);case i:case c:return $(v+"Hours",0);case r:return $(v+"Minutes",1);case n:return $(v+"Seconds",2);case e:return $(v+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var d,h=y.p(s),l="set"+(this.$u?"UTC":""),f=(d={},d[i]=l+"Date",d[c]=l+"Date",d[a]=l+"Month",d[u]=l+"FullYear",d[r]=l+"Hours",d[n]=l+"Minutes",d[e]=l+"Seconds",d[t]=l+"Milliseconds",d)[h],$=h===i?this.$D+(o-this.$W):o;if(h===a||h===u){var g=this.clone().set(c,1);g.$d[f]($),g.init(),this.$d=g.set(c,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[y.p(t)]()},f.add=function(t,o){var c,d=this;t=Number(t);var h=y.p(o),l=function(e){var n=M(d);return y.w(n.date(n.date()+Math.round(e*t)),d)};if(h===a)return this.set(a,this.$M+t);if(h===u)return this.set(u,this.$y+t);if(h===i)return l(1);if(h===s)return l(7);var f=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[h]||1,$=this.$d.getTime()+t*f;return y.w($,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),i=this.$locale(),s=this.$H,a=this.$m,o=this.$M,u=i.weekdays,c=i.months,d=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},l=function(t){return y.s(s%12||12,t,"0")},f=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:d(i.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:d(i.weekdaysMin,this.$W,u,2),ddd:d(i.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:y.s(s,2,"0"),h:l(1),hh:l(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return n.replace(h,(function(t,e){return e||$[t]||r.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,d){var h,l=y.p(c),f=M(t),$=6e4*(f.utcOffset()-this.utcOffset()),g=this-f,m=y.m(this,f);return m=(h={},h[u]=m/12,h[a]=m,h[o]=m/3,h[s]=(g-$)/6048e5,h[i]=(g-$)/864e5,h[r]=g/36e5,h[n]=g/6e4,h[e]=g/1e3,h)[l]||g,d?m:y.a(m)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return m[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=v(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},l}(),w=D.prototype;return M.prototype=w,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",a],["$y",u],["$D",c]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,D,M),t.$i=!0),M},M.locale=v,M.isDayjs=p,M.unix=function(t){return M(1e3*t)},M.en=m[g],M.Ls=m,M.p={},M}()}},e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t="https://api.rawg.io/api/games",e="?key=48b91582cb664a68806042763b794757",r={baseUrl:`${t}${e}&page_size=9`,pageNumber:t=>`&page=${t}`,orderedReleased:"&ordering=released",orderedAdded:"&ordering=-added",dates:(t,e)=>`&dates=${t},${e}`};var i=n(484),s=n.n(i);const a=s()().add(1,"day").format("YYYY-MM-DD"),o=s()().add(1,"year").format("YYYY-MM-DD"),u=(t,e,n)=>{const{background_image:r,rating:i,rating_top:s,ratings_count:a,genres:o,released:u}=e;t.innerHTML="";let c=[];o.forEach((t=>{c.push(t.name)})),c=c.join(", "),t.innerHTML+=`\n        <div class="text-top-left">\n          <p>${u}</p>\n          <p>${n}</p>\n          <p>${i}/${s}, ${a} votes</p>\n          <small>Genres: ${c}</small>\n        </div>\n  `},{baseUrl:c,pageNumber:d,dates:h,orderedAdded:l}=r,f=document.getElementById("pageContent"),$={"":()=>{f.innerHTML='\n      <section class="page-list">\n        <p>...loading</p>\n      </section>\n    ',(async()=>{let n="";const r=`${c}${d(1)}${h(a,o)}${l}`;try{const i=await fetch(r),s=await i.json();s.results.forEach((t=>{n+=`\n            <div class="cardGame">\n              <div id="picture-zone-${t.slug}" class="pageListPictureZone">\n                <img class="pageListPicture" src="${t.background_image}" alt="Game image">\n              </div>\n              <h1>${t.name}</h1>\n              <div class="platformsIcons">${(t=>{const{platforms:e}=t;let n=[],r="";const i=["pc","xbox","playstation","switch","ios","android","linux"];return e.forEach((t=>{return e=t.platform.slug,void i.forEach((t=>{e.includes(t)&&n.push(t)}));var e})),n=n.map((t=>"ios"===t||"android"===t?"mobile":t)),n=n.reduce(((t,e)=>(t.includes(e)||t.push(e),t)),[]),n.forEach((t=>{r+=`\n              <img class="platformIcon" src="./src/images/${"ios"===t||"android"===t?"mobile":t}.svg" alt="platform img">\n    `})),r})(t)}</div>\n              <a href = "#pagedetail/${t.id}">${t.id}</a>\n            </div>\n        `})),document.querySelector(".page-list").innerHTML=n;for(const n of s.results){const r=`${t}/${n.id}${e}`,i=await fetch(r),s=(await i.json()).developers.reduce(((t,e)=>(t.push(e.name),t)),[]).join(", "),a=document.getElementById(`picture-zone-${n.slug}`);a.addEventListener("mouseenter",(()=>{u(a,n,s)})),a.addEventListener("mouseleave",(()=>{a.innerHTML=`<img class="pageListPicture" src="${n.background_image}" alt="Game image">`}))}}catch(t){console.error(t)}document.querySelector(".page-list").insertAdjacentHTML("beforeend",'<a href="#" class="button"><strong>Show more</strong></a>')})()},pagelist:(t="")=>{},pagedetail:(t="")=>{console.log("Page Detail",t)}};let g;const m=()=>{let t=window.location.hash.substring(1).split("/");return g=t[1]||"",document.getElementById("pageContent"),$[t[0]](g),!0};window.addEventListener("hashchange",(()=>m())),window.addEventListener("DOMContentLoaded",(()=>m()))})()})();