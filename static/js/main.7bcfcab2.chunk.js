(this.webpackJsonpgamingfriends=this.webpackJsonpgamingfriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(3),i=n.n(s),o=(n(13),n(4)),h=n(5),l=n(7),d=n(6),j=function(e){var t=e.name,n=e.email,r=e.id;return Object(c.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(c.jsx)("img",{src:"https://robohash.org/".concat(r,"/?200x200"),alt:"gaming"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("p",{children:n})]})]})},u=function(e){var t=e.gamers;return Object(c.jsx)("div",{children:t.map((function(e,n){return Object(c.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},b=function(e){e.searchfield;var t=e.searchChange;return Object(c.jsx)("div",{className:"pa2",children:Object(c.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},g=function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black"},children:e.children})},f=(n(14),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={gamers:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({gamers:t})}))}},{key:"render",value:function(){var e=this.state,t=e.gamers,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:"gaming friends"}),Object(c.jsx)(b,{searchChange:this.onSearchChange}),Object(c.jsx)(g,{children:Object(c.jsx)(u,{gamers:r})})]}):Object(c.jsx)("h1",{children:"loading"})}}]),n}(r.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(15);i.a.render(Object(c.jsx)("div",{children:Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f,{})})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.7bcfcab2.chunk.js.map