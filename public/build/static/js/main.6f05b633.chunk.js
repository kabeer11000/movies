(this["webpackJsonpreact-clone"]=this["webpackJsonpreact-clone"]||[]).push([[0],{100:function(e,t){},116:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(44),o=n.n(c),i=(n(61),n(62),n(45));n.n(i).a.create({baseURL:"https://api.themoviedb.org/3"}),n(80),n(94),n(97);var s=function(e){var t=e.title,n=e.movies,a=e.isLargeRow;return r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"row_posters"},n.map((function(e){return r.a.createElement("a",{href:"/watch?id="+e.id},r.a.createElement("img",{key:e.id,onClick:function(){},className:"row_poster ".concat(a&&"row_posterLarge"),src:"".concat(a?e.medium_cover_image:e.background_image_original),alt:e.title}))}))),r.a.createElement("div",{style:{padding:"40px"}}))},u="Your TMDB Api_Key";"/trending/all/week?api_key=".concat(u,"&language=en-US"),"/discover/tv?api_key=".concat(u,"&with_network=123"),"/movie/top_rated?api_key=".concat(u,"&language=en-US"),"/discover/movie?api_key=".concat(u,"&with_genres=28"),"/discover/movie?api_key=".concat(u,"&with_genres=35"),"/discover/movie?api_key=".concat(u,"&with_genres=27"),"/discover/movie?api_key=".concat(u,"&with_genres=10749"),"/discover/movie?api_key=".concat(u,"&with_genres=99"),n(42);var l=function(e){var t=e.movie;return r.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n        "'.concat(null===t||void 0===t?void 0:t.background_image_original,'"\n        )'),backgroundPosition:"center center"}},r.a.createElement("div",{className:"banner_contents"},r.a.createElement("h1",{className:"banner_title"},(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)||(null===t||void 0===t?void 0:t.original_name)),r.a.createElement("div",{style:{padding:"1rem 0"},className:"banner_buttons"},r.a.createElement("a",{href:"/watch?id="+(null===t||void 0===t?void 0:t.id)},r.a.createElement("button",{className:"banner_button"},"Stream")),r.a.createElement("a",{target:"_blank",href:"https://youtube.com/watch?v="+(null===t||void 0===t?void 0:t.yt_trailer_id)},r.a.createElement("button",{className:"banner_button"},"Trailer"))),r.a.createElement("h1",{className:"banner_description"},null===t||void 0===t?void 0:t.synopsis)),r.a.createElement("div",{className:"banner--fadeBottom"}))},m=n(9);n(98);var v=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?c(!0):c(!1)})),function(){window.removeEventListener("scroll")}}),[]),r.a.createElement("div",{className:"nav ".concat(n&&"nav_black")},r.a.createElement("img",{className:"nav_logo",src:"https://docs.kabeercloud.tk/c/synced/6273fa5e26b3a---b862fb2e08f8e07c0f22f0ab9befb163.png",alt:"Netflix Logo"}),r.a.createElement("div",{hidden:!0},r.a.createElement("form",null,r.a.createElement("input",{type:"text"}))))},d=n(10),f=n.n(d),p=n(15),h=function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:return n=e.sent,e.abrupt("return",[null,n]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[e.t0,null]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json");case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id="+t);case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=window.location.protocol+"//"+window.location.host,E=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w,"/stream/v1/details?hash=").concat(t));case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=".concat(t));case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=n(7),j=n(17),k=n(48),O=(n(115),function(e){var t=r.a.useRef(null),n=r.a.useRef(null),a=e.options,c=e.onReady;return r.a.useEffect((function(){if(n.current)n.current.autoplay(a.autoplay),n.current.src(a.sources);else{var e=t.current;if(!e)return;var r=n.current=Object(k.a)(e,a,(function(){r.log("player is ready"),c&&c(r)}))}}),[a,t]),r.a.useEffect((function(){var e=n.current;return function(){e&&(e.dispose(),n.current=null)}}),[n]),r.a.createElement("div",{"data-vjs-player":!0},r.a.createElement("video",{ref:t,className:"video-js vjs-big-play-centered"}))}),x=function(e){var t,n,c=e.movie,o=e.streamConfig,i=r.a.useRef(null),u={autoplay:!1,controls:!0,responsive:!0,fluid:!0,poster:c.background_image_original,sources:[{src:(t=o.stream_id,n=o.files[0].hash,"".concat(w,"/stream/v1/play?stream_id=").concat(t,"&file=").concat(n)),type:"video/mp4"}]},l=Object(a.useState)(),v=Object(m.a)(l,2),d=v[0],f=v[1];return Object(a.useEffect)((function(){y(c.id).then(f)}),[]),r.a.createElement("div",{style:{minHeight:"100vh",minWidth:"100vw"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{padding:"5rem 1rem",minWidth:"60vw",minHeight:"auto",maxWidth:"40rem",width:"100%",height:"auto"}},r.a.createElement(O,{options:u,onReady:function(e){i.current=e,e.on("waiting",(function(){e.log("player is waiting")})),e.on("dispose",(function(){e.log("player will dispose")}))}}),r.a.createElement("div",{style:{marginTop:"1rem"}},r.a.createElement("h1",{style:{color:"white"}},c.title),r.a.createElement("p",{style:{color:"whitesmoke"}},c.description_full),r.a.createElement("a",{href:"https://www.youtube.com/watch?v=".concat(c.yt_trailer_code),target:"_blank"},"Watch Trailer"))),r.a.createElement("br",null)),d?r.a.createElement("div",{style:{width:"100vw"}},r.a.createElement(s,{title:"You might like",isLargeRow:!0,movies:d.data.movies})):null)},N=function(){var e=Object(a.useState)(),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(),i=Object(m.a)(o,2),s=i[0],u=i[1],l=Object(j.b)()[0],v=function(){var e=Object(p.a)(f.a.mark((function e(){var t,n,a,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(b(l.get("id")));case 2:if(t=e.sent,n=Object(m.a)(t,2),a=n[0],r=n[1],!a){e.next=8;break}return e.abrupt("return",alert("Error Fetching Movie"));case 8:c(r),o=r.data.movie.torrents.find((function(e){return e.quality===r.data.movie.torrents.map((function(e){return parseInt(e.quality.slice(0,-1))})).sort((function(e,t){return e-t}))[0]+"p"})),E(o.hash).then(u),console.log(r.data.movie);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v()}),[]),l.get("id")?n&&s?r.a.createElement(x,{movie:n.data.movie,streamConfig:s}):"Loading":"ID IS REQUIRED"},R=n(54),S=function(){var e=Object(a.useState)(),t=Object(m.a)(e,2),n=t[0],c=t[1],o=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.data.movies,a=Object(R.a)(new Set(n.map((function(e){return e.genres})).flat())),r=a.map((function(e){return{genre:e,movies:n.filter((function(t){return t.genres.includes(e)}))}})),c(r),console.log(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){g().then(o)}),[]),r.a.createElement("div",null,r.a.createElement(l,{movie:n?n[0].movies[0]:void 0}),r.a.createElement("div",{style:{marginTop:"2rem"}},n?n.map((function(e){return r.a.createElement(s,{title:e.genre,isLargeRow:e.movies.length>=5,movies:e.movies})})):r.a.createElement(r.a.Fragment,null)))};var L=function(){var e=Object(_.c)().pathname;return r.a.createElement("div",{className:"app"},r.a.createElement(v,null),"/"===e&&r.a.createElement(S,null),"/watch"===e&&r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j.a,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,n){},56:function(e,t,n){e.exports=n(116)},61:function(e,t,n){},62:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[56,1,2]]]);
//# sourceMappingURL=main.6f05b633.chunk.js.map