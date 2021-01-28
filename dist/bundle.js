(()=>{var e={484:function(e){e.exports=function(){"use strict";var e="millisecond",t="second",n="minute",s="hour",r="day",i="week",a="month",o="quarter",c="year",d="date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(e,t,n){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(n)+e},h={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),s=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+m(s,2,"0")+":"+m(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var s=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(s,a),i=n-r<0,o=t.clone().add(s+(i?-1:1),a);return+(-(s+(n-r)/(i?r-o:o-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(u){return{M:a,y:c,w:i,d:r,D:d,h:s,m:n,s:t,ms:e,Q:o}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},p="en",f={};f[p]=g;var $=function(e){return e instanceof w},v=function(e,t,n){var s;if(!e)return p;if("string"==typeof e)f[e]&&(s=e),t&&(f[e]=t,s=e);else{var r=e.name;f[r]=e,s=r}return!n&&s&&(p=s),s||!n&&p},y=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},M=h;M.l=v,M.i=$,M.w=function(e,t){return y(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function g(e){this.$L=v(e.locale,null,!0),this.parse(e)}var m=g.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(u);if(s){var r=s[2]-1||0,i=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)):new Date(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return M},m.isValid=function(){return!("Invalid Date"===this.$d.toString())},m.isSame=function(e,t){var n=y(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return y(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<y(e)},m.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,o){var u=this,l=!!M.u(o)||o,g=M.p(e),m=function(e,t){var n=M.w(u.$u?Date.UTC(u.$y,t,e):new Date(u.$y,t,e),u);return l?n:n.endOf(r)},h=function(e,t){return M.w(u.toDate()[e].apply(u.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),u)},p=this.$W,f=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(g){case c:return l?m(1,0):m(31,11);case a:return l?m(1,f):m(0,f+1);case i:var y=this.$locale().weekStart||0,w=(p<y?p+7:p)-y;return m(l?$-w:$+(6-w),f);case r:case d:return h(v+"Hours",0);case s:return h(v+"Minutes",1);case n:return h(v+"Seconds",2);case t:return h(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(i,o){var u,l=M.p(i),g="set"+(this.$u?"UTC":""),m=(u={},u[r]=g+"Date",u[d]=g+"Date",u[a]=g+"Month",u[c]=g+"FullYear",u[s]=g+"Hours",u[n]=g+"Minutes",u[t]=g+"Seconds",u[e]=g+"Milliseconds",u)[l],h=l===r?this.$D+(o-this.$W):o;if(l===a||l===c){var p=this.clone().set(d,1);p.$d[m](h),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else m&&this.$d[m](h);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[M.p(e)]()},m.add=function(e,o){var d,u=this;e=Number(e);var l=M.p(o),g=function(t){var n=y(u);return M.w(n.date(n.date()+Math.round(t*e)),u)};if(l===a)return this.set(a,this.$M+e);if(l===c)return this.set(c,this.$y+e);if(l===r)return g(1);if(l===i)return g(7);var m=(d={},d[n]=6e4,d[s]=36e5,d[t]=1e3,d)[l]||1,h=this.$d.getTime()+e*m;return M.w(h,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this;if(!this.isValid())return"Invalid Date";var n=e||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$locale(),i=this.$H,a=this.$m,o=this.$M,c=r.weekdays,d=r.months,u=function(e,s,r,i){return e&&(e[s]||e(t,n))||r[s].substr(0,i)},g=function(e){return M.s(i%12||12,e,"0")},m=r.meridiem||function(e,t,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:u(r.monthsShort,o,d,3),MMMM:u(d,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,c,2),ddd:u(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:M.s(i,2,"0"),h:g(1),hh:g(2),a:m(i,a,!0),A:m(i,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return n.replace(l,(function(e,t){return t||h[e]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(e,d,u){var l,g=M.p(d),m=y(e),h=6e4*(m.utcOffset()-this.utcOffset()),p=this-m,f=M.m(this,m);return f=(l={},l[c]=f/12,l[a]=f,l[o]=f/3,l[i]=(p-h)/6048e5,l[r]=(p-h)/864e5,l[s]=p/36e5,l[n]=p/6e4,l[t]=p/1e3,l)[g]||p,u?f:M.a(f)},m.daysInMonth=function(){return this.endOf(a).$D},m.$locale=function(){return f[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),s=v(e,t,!0);return s&&(n.$L=s),n},m.clone=function(){return M.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},g}(),L=w.prototype;return y.prototype=L,[["$ms",e],["$s",t],["$m",n],["$H",s],["$W",r],["$M",a],["$y",c],["$D",d]].forEach((function(e){L[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),y.extend=function(e,t){return e.$i||(e(t,w,y),e.$i=!0),y},y.locale=v,y.isDayjs=$,y.unix=function(e){return y(1e3*e)},y.en=f[p],y.Ls=f,y.p={},y}()}},t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e="https://api.rawg.io/api/",t=`${e}games`,s=`${e}platforms`,r="?key=48b91582cb664a68806042763b794757",i={baseUrl:`${t}${r}&page_size=9`,pageNumberUrl:e=>`&page=${e}`,orderedReleased:"&ordering=-released",orderedAdded:"&ordering=-added",dates:(e,t)=>`&dates=${e},${t}`,platformUrl:e=>`&platforms=${e}`,searchUrl:e=>`&search=${e}`};var a=n(484),o=n.n(a);const c=o()().add(1,"day").format("YYYY-MM-DD"),d=o()().add(1,"year").format("YYYY-MM-DD"),u=o()().subtract(50,"year").format("YYYY-MM-DD"),l=o()().format("YYYY-MM-DD"),g=e=>{const{platforms:t}=e;let n=[],s="";const r=["pc","xbox","playstation","switch","ios","android","linux"];return t.forEach((e=>{return t=e.platform.slug,void r.forEach((e=>{t.includes(e)&&n.push(e)}));var t})),n=n.map((e=>"ios"===e||"android"===e?"mobile":e)),n=n.reduce(((e,t)=>(e.includes(t)||e.push(t),e)),[]),n.forEach((e=>{s+=`\n              <img class="platformIcon" src="./src/images/${"ios"===e||"android"===e?"mobile":e}.svg" alt="platform img">\n    `})),s},m=(e,t,n)=>{const{background_image:s,rating:r,rating_top:i,ratings_count:a,genres:o,released:c}=t;e.innerHTML="";let d=[];o.forEach((e=>{d.push(e.name)})),d=d.join(", "),e.innerHTML+=`\n        <div>\n          <p>${c}</p>\n          <p>${n}</p>\n          <p>${r}/5, ${a} votes</p>\n          <small>Genres: ${d}</small>\n        </div>\n  `},{baseUrl:h,pageNumberUrl:p,orderedReleased:f,platformUrl:$,dates:v}=i,y=document.getElementById("pageContent"),M=async()=>{try{const e=await(async()=>{try{const e=await fetch(s);return(await e.json()).results.map((e=>{const{id:t,name:n,slug:s}=e;return{id:t,name:n,slug:s}}))}catch(e){console.error(e)}})(),n=document.getElementById("welcomeMessage");let i="";e.forEach((e=>{const{id:t,name:n}=e;i+=`\n          <option value="${t}">${n}</option>\n      `}));const a=`\n          <div class="custom-select" style="width:200px;">\n            <select name="platforms" id="platform-select">\n              <option value="" disabled selected hidden>Platform</option>\n              ${i}\n            </select>\n          </div>\n    `;n.insertAdjacentHTML("afterend",a);const o=document.getElementById("platform-select");o.addEventListener("change",(()=>{((e="")=>{const n=async(s=1,i=!0)=>{let a="";const o=`${h}${p(s)}${v(u,l)}${$(e.id)}${f}`;console.log(o);try{const e=await fetch(o),n=await e.json();n.results.forEach((e=>{const{slug:t,background_image:n,name:s,id:r}=e;a+=`\n            <div class="cardGame">\n              <div id="picture-zone-${t}" class="pageListPictureZone">\n                <img class="pageListPicture" src="${n||"../images/no-image.png"}" alt="Game image">\n              </div>\n              <h1><a href="#pageDetail/${t}">${s}</a></h1>\n              <div class="platformsIcons">${g(e)}</div>\n            </div>\n        `})),i?document.querySelector(".page-list").innerHTML=a:document.querySelector(".page-list").innerHTML+=a;for(const e of n.results){const n=`${t}/${e.id}${r}`,s=await fetch(n),i=(await s.json()).developers.reduce(((e,t)=>(e.push(t.name),e)),[]).join(", "),a=document.getElementById(`picture-zone-${e.slug}`);a.addEventListener("mouseenter",(()=>{m(a,e,i)})),a.addEventListener("mouseleave",(()=>{a.innerHTML=`<img class="pageListPicture" src="${e.background_image}" alt="Game image">`}))}}catch(e){console.error(e)}if(s<3){document.querySelector(".page-list").insertAdjacentHTML("afterend",'<button id="showMoreButton" class="button"><strong>Show more</strong></button>');const e=document.getElementById("showMoreButton");e.addEventListener("click",(()=>{e.remove(),s++,n(s,!1)}))}};y.innerHTML=`\n      <h1>Results for ${e.name}</h1>\n      <span id="welcomeMessage"></span>\n\n      <section class="page-list">\n        <p>...loading</p>\n      </section>\n    `,M(),n()})(e.filter((e=>e.id==o.value))[0])}))}catch(e){console.error(e)}},{baseUrl:w,pageNumberUrl:L,dates:b,orderedAdded:D}=i,E=document.getElementById("pageContent"),T=()=>{const e=async(n=1,s=!0)=>{let i="";const a=`${w}${L(n)}${b(c,d)}${D}`;try{const e=await fetch(a),n=await e.json();n.results.forEach((e=>{const{slug:t,background_image:n,name:s,id:r}=e;i+=`\n            <div class="cardGame">\n              <div id="picture-zone-${t}" class="pageListPictureZone">\n                <img class="pageListPicture" src="${n||"../images/no-image.png"}" alt="Game image">\n              </div>\n              <h1><a href="#pageDetail/${t}">${s}</a></h1>\n              <div class="platformsIcons">${g(e)}</div>\n            </div>\n        `})),s?document.querySelector(".page-list").innerHTML=i:document.querySelector(".page-list").innerHTML+=i;for(const e of n.results){const n=`${t}/${e.id}${r}`,s=await fetch(n),i=(await s.json()).developers.reduce(((e,t)=>(e.push(t.name),e)),[]).join(", "),a=document.getElementById(`picture-zone-${e.slug}`);a.addEventListener("mouseenter",(()=>{m(a,e,i)})),a.addEventListener("mouseleave",(()=>{a.innerHTML=`<img class="pageListPicture" src="${e.background_image}" alt="Game image">`}))}}catch(e){console.error(e)}if(n<3){document.querySelector(".page-list").insertAdjacentHTML("afterend",'<button id="showMoreButton" class="button"><strong>Show more</strong></button>');const t=document.getElementById("showMoreButton");t.addEventListener("click",(()=>{t.remove(),n++,e(n,!1)}))}};E.innerHTML='\n      <h1>Welcome,</h1>\n      <span id="welcomeMessage">The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</span>\n\n      <section class="page-list">\n        <p>...loading</p>\n      </section>\n    ',M(),e()},{baseUrl:S,pageNumberUrl:H,searchUrl:B}=i,I=document.getElementById("pageContent"),_=document.getElementById("pageContent"),Y=e=>e.reduce(((e,t)=>(e.push(t.name),e)),[]).join("<br/>"),O=e=>e.reduce(((e,t)=>(e.push(t.name),e)),[]).join(", "),j={"":T,pageList:(e="")=>{},pageDetail:e=>{_.innerHTML='\n      <section class="page-detail">\n        <h2>Loading game info...</h2>\n        <div id="gameDetailBackgroundZone">\n          <img id="gameDetailBackground" src="" alt="Image of game">\n          <a id="websiteButton" href="#" class="button"><strong>See website</strong></a>\n        </div>\n        <div class="grid-container">\n          <h1 id="name"></h1>\n          <h1 id="rating"></h1>\n        </div>\n        <p id="description"></p>\n        <div class="grid-container">\n          <div class="detailsColumn">\n            <strong>Release date</strong>\n            <span id="released"></span>\n          </div>\n          <div class="detailsColumn">\n            <strong>Developers</strong>\n            <span id="developers"></span>\n          </div>\n          <div class="detailsColumn">\n            <strong>Platforms</strong>\n            <span id="platforms"></span>\n          </div>\n          <div class=detailsColumn">\n            <strong>Publishers</strong>\n            <span id="publishers"></span>\n          </div>\n        </div>\n        <div class="grid-container">\n          <div class="detailsColumn">\n            <strong>Genres</strong>\n            <span id="genres"></span>\n          </div>\n          <div class="detailsColumn">\n            <strong>Tags</strong>\n            <span id="tags"></span>\n          </div>\n        </div>\n        <h1 class="detailPageRedTitle">BUY</h1>\n        <span id="stores"></span>\n        <h1 class="detailPageRedTitle">TRAILER</h1>\n        <video controls>\n          <source id="clip" src="maVideo.mp4" type="video/mp4">\n        </video>\n        <h1 class="detailPageRedTitle">SCREENSHOTS</h1>\n        <h1 class="detailPageRedTitle">YOUTUBE</h1>\n        <h1 class="detailPageRedTitle">SIMILAR GAMES</h1>\n      </section>\n    ',(async()=>{const n=e.replace(/\s+/g,"-"),s=`${t}/${n}${r}`;try{const e=await fetch(s),t=await e.json(),{background_image:n,website:r,name:i,description:a,rating:o,ratings_count:c,released:d,developers:u,platforms:l,publishers:g,genres:m,tags:h,stores:p,clip:f}=t;document.getElementById("gameDetailBackground").src=n,document.getElementById("websiteButton").href=r,document.getElementById("name").innerHTML=i,document.getElementById("rating").innerHTML=`${o}/5 - ${c} votes`,document.getElementById("description").innerHTML=a,document.getElementById("released").innerHTML=d;const $=Y(u);document.getElementById("developers").innerHTML=$;const v=l.reduce(((e,t)=>(e.push(t.platform.name),e)),[]).join("<br/>");document.getElementById("platforms").innerHTML=v;const y=Y(g);document.getElementById("publishers").innerHTML=y;const M=O(m);document.getElementById("genres").innerHTML=M;const w=O(h);document.getElementById("tags").innerHTML=w}catch(e){console.error(e)}})()}};let k;const C=()=>{let e=window.location.hash.substring(1).split("/");return k=e[1]||"",document.getElementById("pageContent"),j[e[0]](k),!0};window.addEventListener("hashchange",(()=>C())),window.addEventListener("DOMContentLoaded",(()=>C())),document.getElementById("mainTitle").addEventListener("click",(()=>{T()}));const P=document.getElementById("searchBar");P.addEventListener("change",(()=>{((e="")=>{const n=async(s=1,i=!0)=>{const a=e.replace(/\s+/g,"-").toLowerCase();let o="";const c=`${S}${H(s)}${B(a)}`;console.log(c);try{const e=await fetch(c),n=await e.json();n.results.forEach((e=>{const{slug:t,background_image:n,name:s,id:r}=e;o+=`\n            <div class="cardGame">\n              <div id="picture-zone-${t}" class="pageListPictureZone">\n                <img class="pageListPicture" src="${n||"../images/no-image.png"}" alt="Game image">\n              </div>\n              <h1><a href="#pageDetail/${t}">${s}</a></h1>\n              <div class="platformsIcons">${g(e)}</div>\n            </div>\n        `})),i?document.querySelector(".page-list").innerHTML=o:document.querySelector(".page-list").innerHTML+=o;for(const e of n.results){const n=`${t}/${e.id}${r}`,s=await fetch(n),i=(await s.json()).developers.reduce(((e,t)=>(e.push(t.name),e)),[]).join(", "),a=document.getElementById(`picture-zone-${e.slug}`);a.addEventListener("mouseenter",(()=>{m(a,e,i)})),a.addEventListener("mouseleave",(()=>{a.innerHTML=`<img class="pageListPicture" src="${e.background_image}" alt="Game image">`}))}}catch(e){console.error(e)}if(s<3){document.querySelector(".page-list").insertAdjacentHTML("afterend",'<button id="showMoreButton" class="button"><strong>Show more</strong></button>');const e=document.getElementById("showMoreButton");e.addEventListener("click",(()=>{e.remove(),s++,n(s,!1)}))}};I.innerHTML=`\n      <h1>Results for ${e}</h1>\n      <span id="welcomeMessage"></span>\n\n      <section class="page-list">\n        <p>...loading</p>\n      </section>\n    `,M(),n()})(P.value)}))})()})();