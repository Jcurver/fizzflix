(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{127:function(n,e,t){"use strict";t.r(e);var i,r,o,c,a,l,s,d,h=t(10),b=t(0),u=t.n(b),j=t(45),p=t.n(j),v=t(93),x=t(9),g=t(36),f=t(17),O=t(11),m=t(8),w=t(133),y=t(135),k=t(136),z=t(88),S=t(3),C=Object(x.c)(w.a.nav)(i||(i=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  font-size: 14px;\n  padding: 20px 60px;\n  color: white;\n"]))),I=x.c.div(r||(r=Object(h.a)(["\n  display: flex;\n  align-items: center;\n"]))),P=Object(x.c)(w.a.svg)(o||(o=Object(h.a)(["\n  margin-right: 50px;\n  width: 95px;\n  height: 25px;\n  fill: ",";\n  path {\n    stroke-width: 6px;\n    stroke: white;\n  }\n"])),(function(n){return n.theme.red})),M=x.c.ul(c||(c=Object(h.a)(["\n  display: flex;\n  align-items: center;\n"]))),_=x.c.li(a||(a=Object(h.a)(["\n  margin-right: 20px;\n  color: ",";\n  transition: color 0.3s ease-in-out;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.white.darker}),(function(n){return n.theme.white.lighter})),q=x.c.form(l||(l=Object(h.a)(["\n  color: white;\n  display: flex;\n  align-items: center;\n  position: relative;\n  svg {\n    height: 25px;\n  }\n"]))),F=Object(x.c)(w.a.span)(s||(s=Object(h.a)(["\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 5px;\n  bottom: -5px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background-color: ",";\n"])),(function(n){return n.theme.red})),W=Object(x.c)(w.a.input)(d||(d=Object(h.a)(["\n  transform-origin: right center;\n  position: absolute;\n  right: 0px;\n  padding: 5px 10px;\n  padding-left: 40px;\n  z-index: -1;\n  color: white;\n  font-size: 16px;\n  background-color: transparent;\n  border: 1px solid ",";\n"])),(function(n){return n.theme.white.lighter})),E={normal:{fillOpacity:1},active:{fillOpacity:[0,1,0],transition:{repeat:1/0}}},H={top:{backgroundColor:"rgba(0, 0, 0, 0)"},scroll:{backgroundColor:"rgba(0, 0, 0, 1)"}};var L=function(){var n=Object(b.useState)(!1),e=Object(m.a)(n,2),t=e[0],i=e[1],r=Object(f.h)("/"),o=Object(f.h)("/tv"),c=Object(y.a)(),a=Object(y.a)(),l=Object(k.a)().scrollY;Object(b.useEffect)((function(){l.onChange((function(){l.get()>80?a.start("scroll"):a.start("top")}))}),[l,a]);var s=Object(f.f)(),d=Object(z.a)(),h=d.register,u=d.handleSubmit;return Object(S.jsxs)(C,{variants:H,animate:a,initial:"top",children:[Object(S.jsxs)(I,{children:[Object(S.jsx)(P,{variants:E,whileHover:"active",animate:"normal",xmlns:"http://www.w3.org/2000/svg",width:"1024",height:"276.742",viewBox:"0 0 1024 276.742",children:Object(S.jsx)(w.a.path,{d:"M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"})}),Object(S.jsxs)(M,{children:[Object(S.jsx)(_,{children:Object(S.jsxs)(g.b,{to:"/",children:["Home ",(null===r||void 0===r?void 0:r.isExact)&&Object(S.jsx)(F,{layoutId:"circle"})]})}),Object(S.jsx)(_,{children:Object(S.jsxs)(g.b,{to:"/tv",children:["Tv Shows ",o&&Object(S.jsx)(F,{layoutId:"circle"})]})})]})]}),Object(S.jsx)(I,{children:Object(S.jsxs)(q,{onSubmit:u((function(n){try{s.push("/search?keyword=".concat(n.keyword))}catch(e){return}})),children:[Object(S.jsx)(w.a.svg,{onClick:function(){t?c.start({scaleX:0}):c.start({scaleX:1}),i((function(n){return!n}))},animate:{x:t?-185:0},transition:{type:"linear"},fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(S.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),Object(S.jsx)(W,Object(O.a)(Object(O.a)({},h("keyword",{required:!0,minLength:2})),{},{animate:c,initial:{scaleX:0},transition:{type:"linear"},placeholder:"Search for movie or tv show..."}))]})})]})},Q=t(33),R="10923b261ba94d897ac6b81148314a3f",T="https://api.themoviedb.org/3";function B(){return fetch("".concat(T,"/movie/now_playing?api_key=").concat(R)).then((function(n){return n.json()}))}function X(){return fetch("".concat(T,"/movie/popular?api_key=").concat(R)).then((function(n){return n.json()}))}var Y,J,A,D,N,U,G,K,V,Z,$,nn,en,tn,rn,on,cn,an,ln=t(134);function sn(n,e){return"https://image.tmdb.org/t/p/".concat(e||"original","/").concat(n)}var dn,hn,bn,un,jn,pn,vn,xn,gn,fn,On,mn,wn,yn,kn,zn,Sn,Cn,In,Pn,Mn=x.c.div(Y||(Y=Object(h.a)(["\n  position: relative;\n  top: -200px;\n"]))),_n=Object(x.c)(w.a.div)(J||(J=Object(h.a)(["\n  display: grid;\n  gap: 5px;\n  grid-template-columns: repeat(6, 1fr);\n  position: absolute;\n  width: 100%;\n"]))),qn=Object(x.c)(w.a.div)(A||(A=Object(h.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  height: 200px;\n  color: ",";\n  font-size: 66px;\n  cursor: pointer;\n  &:first-child {\n    transform-origin: center left;\n  }\n  &:last-child {\n    transform-origin: center right;\n  }\n"])),(function(n){return n.bgPhoto}),(function(n){return n.theme.white.lighter})),Fn=Object(x.c)(w.a.div)(D||(D=Object(h.a)(["\n  padding: 10px;\n  background-color: ",";\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  h4 {\n    text-align: center;\n    font-size: 18px;\n  }\n"])),(function(n){return n.theme.black.lighter})),Wn=(Object(x.c)(w.a.div)(N||(N=Object(h.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n"]))),Object(x.c)(w.a.div)(U||(U=Object(h.a)(["\n  position: absolute;\n  width: 40vw;\n  height: 80vh;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  border-radius: 15px;\n  overflow: hidden;\n  background-color: ",";\n"])),(function(n){return n.theme.black.lighter})),x.c.div(G||(G=Object(h.a)(["\n  width: 100%;\n  background-size: cover;\n  background-position: center center;\n  height: 400px;\n"]))),x.c.h3(K||(K=Object(h.a)(["\n  color: ",";\n  padding: 20px;\n  font-size: 46px;\n  position: relative;\n  top: -80px;\n"])),(function(n){return n.theme.white.lighter})),x.c.p(V||(V=Object(h.a)(["\n  padding: 20px;\n"]))),{hover:{opacity:1,transition:{delay:.4,duration:.2,type:"tween"}}}),En=x.c.div(Z||(Z=Object(h.a)(["\n  position: relative;\n  margin: 0 20px;\n  top: -210px;\n  display: flex;\n  justify-content: space-between;\n"]))),Hn={normal:{scale:1},hover:{scale:1.3,y:-50,transition:{delay:.4,duration:.2,type:"tween"}}},Ln=(x.c.div($||($=Object(h.a)(["\n  /* background-color: blue; */\n  width: 100%;\n  height: 66px;\n  position: absolute;\n  /* top: -230px; */\n"]))),x.c.div(nn||(nn=Object(h.a)(["\n  position: relative;\n  margin: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),x.c.div(en||(en=Object(h.a)(["\n  font-size: 20px;\n  font-weight: 500;\n  color: white;\n"])))),Qn=x.c.div(tn||(tn=Object(h.a)([""]))),Rn=x.c.button(rn||(rn=Object(h.a)(["\n  font-size: 20px;\n  margin: 0 10px;\n"]))),Tn=x.c.div(on||(on=Object(h.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 60px;\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),\n    url(",");\n  background-size: cover;\n"])),(function(n){return n.bgPhoto})),Bn=x.c.h2(cn||(cn=Object(h.a)(["\n  font-size: 68px;\n  margin-bottom: 20px; ;\n"]))),Xn=x.c.p(an||(an=Object(h.a)(["\n  font-size: 30px;\n  width: 50%;\n"]))),Yn=function(){var n=Object(Q.useQuery)(["movies","now_playing"],B).data,e=Object(f.f)(),t=Object(f.h)("/movies/:movieId"),i=Object(b.useState)(0),r=Object(m.a)(i,2),o=r[0],c=r[1],a=(Object(k.a)().scrollY,Object(b.useState)(0)),l=Object(m.a)(a,2),s=l[0],d=l[1],h=Object(b.useState)(!1),u=Object(m.a)(h,2),j=u[0],p=u[1],v={initial:function(){return{x:1===o?window.outerWidth+5:-window.outerWidth-5}},animate:function(){return{x:0}},exit:function(){return{x:1===o?-window.outerWidth-5:+window.outerWidth+5}}},x=(null===t||void 0===t?void 0:t.params.movieId)&&(null===n||void 0===n?void 0:n.results.find((function(n){return n.id===+t.params.movieId})));return console.log(x),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(Tn,{bgPhoto:sn((null===n||void 0===n?void 0:n.results[0].backdrop_path)||""),children:[Object(S.jsx)(Bn,{children:null===n||void 0===n?void 0:n.results[0].title}),Object(S.jsx)(Xn,{children:null===n||void 0===n?void 0:n.results[0].overview})]}),Object(S.jsxs)(En,{children:[Object(S.jsx)(Ln,{children:"Now Playing"}),Object(S.jsxs)(Qn,{children:[Object(S.jsx)(Rn,{onClick:function(){if(c(-1),n){if(j)return;p(!0);var e=(null===n||void 0===n?void 0:n.results.length)-1,t=Math.floor(e/6)-1;d((function(n){return 0===n?t:n-1}))}},children:"prev"}),Object(S.jsx)(Rn,{onClick:function(){if(c(1),n){if(j)return;p(!0);var e=(null===n||void 0===n?void 0:n.results.length)-1,t=Math.floor(e/6)-1;d((function(n){return n===t?0:n+1}))}},children:"next"})]})]}),Object(S.jsx)(Mn,{children:Object(S.jsx)(ln.a,{initial:!1,onExitComplete:function(){return p((function(n){return!n}))},custom:o,children:Object(S.jsx)(_n,{variants:v,initial:"initial",animate:"animate",exit:"exit",transition:{type:"tween",duration:.6},custom:o,children:null===n||void 0===n?void 0:n.results.slice(1).slice(6*s,6*s+6).map((function(n){return Object(S.jsx)(qn,{layoutId:n.id+"",whileHover:"hover",initial:"normal",variants:Hn,onClick:function(){return t=n.id,void e.push("/movies/".concat(t));var t},bgPhoto:sn(n.backdrop_path,"w500"),children:Object(S.jsx)(Fn,{variants:Wn,children:Object(S.jsx)("h4",{children:n.title})})},n.id)}))},s)})})]})},Jn=x.c.div(dn||(dn=Object(h.a)(["\n  position: relative;\n  top: 30px;\n"]))),An=Object(x.c)(w.a.div)(hn||(hn=Object(h.a)(["\n  display: grid;\n  gap: 5px;\n  grid-template-columns: repeat(6, 1fr);\n  position: absolute;\n  width: 100%;\n"]))),Dn=Object(x.c)(w.a.div)(bn||(bn=Object(h.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  height: 200px;\n  color: ",";\n  font-size: 66px;\n  cursor: pointer;\n  &:first-child {\n    transform-origin: center left;\n  }\n  &:last-child {\n    transform-origin: center right;\n  }\n"])),(function(n){return n.bgPhoto}),(function(n){return n.theme.white.lighter})),Nn=Object(x.c)(w.a.div)(un||(un=Object(h.a)(["\n  padding: 10px;\n  background-color: ",";\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  h4 {\n    text-align: center;\n    font-size: 18px;\n  }\n"])),(function(n){return n.theme.black.lighter})),Un=Object(x.c)(w.a.div)(jn||(jn=Object(h.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n"]))),Gn=Object(x.c)(w.a.div)(pn||(pn=Object(h.a)(["\n  position: absolute;\n  width: 40vw;\n  height: 80vh;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  border-radius: 15px;\n  overflow: hidden;\n  background-color: ",";\n"])),(function(n){return n.theme.black.lighter})),Kn=x.c.div(vn||(vn=Object(h.a)(["\n  width: 100%;\n  background-size: cover;\n  background-position: center center;\n  height: 400px;\n"]))),Vn=x.c.h3(xn||(xn=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  color: ",";\n  padding: 20px;\n  font-size: 29px;\n  font-weight: 500;\n  position: relative;\n  top: -80px;\n"])),(function(n){return n.theme.white.lighter})),Zn=x.c.div(gn||(gn=Object(h.a)(["\nfont-size: 20px;\nmargin-left: 20px;\n\n\n"]))),$n=x.c.div(fn||(fn=Object(h.a)([""]))),ne=x.c.div(On||(On=Object(h.a)([""]))),ee=x.c.p(mn||(mn=Object(h.a)(["\n  padding: 20px;\n"]))),te={hover:{opacity:1,transition:{delay:.4,duration:.2,type:"tween"}}},ie=x.c.div(wn||(wn=Object(h.a)(["\n  position: relative;\n  margin: 0 20px;\n  top: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),re={normal:{scale:1},hover:{scale:1.3,y:-50,transition:{delay:.4,duration:.2,type:"tween"}}},oe=(x.c.div(yn||(yn=Object(h.a)(["\n  /* background-color: blue; */\n  width: 100%;\n  height: 66px;\n  position: absolute;\n  /* top: -230px; */\n"]))),x.c.div(kn||(kn=Object(h.a)(["\n  position: relative;\n  margin: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),x.c.div(zn||(zn=Object(h.a)(["\n  font-size: 20px;\n  font-weight: 500;\n  color: white;\n"])))),ce=x.c.div(Sn||(Sn=Object(h.a)([""]))),ae=x.c.button(Cn||(Cn=Object(h.a)(["\n  font-size: 20px;\n  margin: 0 10px;\n"]))),le=function(){var n=Object(Q.useQuery)(["movies","popular"],X).data,e=Object(f.f)(),t=Object(f.h)("/movies/:movieId"),i=Object(b.useState)(0),r=Object(m.a)(i,2),o=r[0],c=r[1],a=Object(k.a)().scrollY,l=Object(b.useState)(0),s=Object(m.a)(l,2),d=s[0],h=s[1],u=Object(b.useState)(!1),j=Object(m.a)(u,2),p=j[0],v=j[1],x={initial:function(){return{x:1===o?window.outerWidth+5:-window.outerWidth-5}},animate:function(){return{x:0}},exit:function(){return{x:1===o?-window.outerWidth-5:+window.outerWidth+5}}},g=(null===t||void 0===t?void 0:t.params.movieId)&&(null===n||void 0===n?void 0:n.results.find((function(n){return n.id===+t.params.movieId})));return console.log(g),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(ie,{children:[Object(S.jsx)(oe,{children:"Most popular"}),Object(S.jsxs)(ce,{children:[Object(S.jsx)(ae,{onClick:function(){if(c(-1),n){if(p)return;v(!0);var e=(null===n||void 0===n?void 0:n.results.length)-1,t=Math.floor(e/6)-1;h((function(n){return 0===n?t:n-1}))}},children:"prev"}),Object(S.jsx)(ae,{onClick:function(){if(c(1),n){if(p)return;v(!0);var e=(null===n||void 0===n?void 0:n.results.length)-1,t=Math.floor(e/6)-1;h((function(n){return n===t?0:n+1}))}},children:"next"})]})]}),Object(S.jsx)(Jn,{children:Object(S.jsx)(ln.a,{initial:!1,onExitComplete:function(){return v((function(n){return!n}))},custom:o,children:Object(S.jsx)(An,{variants:x,initial:"initial",animate:"animate",exit:"exit",transition:{type:"tween",duration:.6},custom:o,children:null===n||void 0===n?void 0:n.results.slice(6*d,6*d+6).map((function(n){return Object(S.jsx)(Dn,{layoutId:n.id+"",whileHover:"hover",initial:"normal",variants:re,onClick:function(){return t=n.id,void e.push("/movies/".concat(t));var t},bgPhoto:sn(n.backdrop_path,"w500"),children:Object(S.jsx)(Nn,{variants:te,children:Object(S.jsx)("h4",{children:n.title})})},n.id)}))},d)})}),Object(S.jsx)(ln.a,{children:t?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(Un,{onClick:function(){return e.push("/")},exit:{opacity:0},animate:{opacity:1}}),Object(S.jsx)(Gn,{style:{top:a.get()+100},layoutId:t.params.movieId,children:g&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(Kn,{style:{backgroundImage:"linear-gradient(to top,black,transparent), url(".concat(sn(g.backdrop_path,"w500"),")")}}),Object(S.jsxs)(Vn,{children:[Object(S.jsx)($n,{children:g.title}),Object(S.jsxs)(ne,{children:["\u2b50\ufe0f ",g.vote_average]})]}),Object(S.jsxs)(Zn,{children:[" Release : ",g.release_date]}),Object(S.jsx)(ee,{children:g.overview.length>200?g.overview.substr(0,200)+"...":g.overview})]})})]}):null})]})},se=x.c.div(In||(In=Object(h.a)(["\n  background: black;\n"]))),de=x.c.div(Pn||(Pn=Object(h.a)(["\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));var he=function(){var n=Object(Q.useQuery)(["movies","nowPlaying","popular","top_rated"],B),e=(n.data,n.isLoading);return Object(S.jsx)(se,{children:e?Object(S.jsx)(de,{children:"Loading..."}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(Yn,{}),Object(S.jsx)(le,{})]})})};var be=function(){var n=Object(f.g)(),e=new URLSearchParams(n.search).get("keyword");return console.log(e),null};var ue=function(){return Object(S.jsx)("h1",{children:"Tv"})};var je,pe=function(){return Object(S.jsxs)(g.a,{children:[Object(S.jsx)(L,{}),Object(S.jsxs)(f.c,{children:[Object(S.jsx)(f.a,{path:"/tv",children:Object(S.jsx)(ue,{})}),Object(S.jsx)(f.a,{path:"/search",children:Object(S.jsx)(be,{})}),Object(S.jsx)(f.a,{path:["/","/movies/:movieId"],children:Object(S.jsx)(he,{})})]})]})},ve=Object(x.b)(je||(je=Object(h.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:",";\n  line-height: 1.2;\n  background-color: black;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.white.darker})),xe=new Q.QueryClient;p.a.render(Object(S.jsx)(u.a.StrictMode,{children:Object(S.jsx)(v.a,{children:Object(S.jsx)(Q.QueryClientProvider,{client:xe,children:Object(S.jsxs)(x.a,{theme:{red:"#E51013",black:{veryDark:"#141414",darker:"#181818",lighter:"#2F2F2F"},white:{lighter:"#fff",darker:"#e5e5e5"}},children:[Object(S.jsx)(ve,{}),Object(S.jsx)(pe,{})]})})})}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.91ec9bd3.chunk.js.map