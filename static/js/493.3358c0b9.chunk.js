"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{5906:function(n,t,e){e.d(t,{e:function(){return i}});var c=e(7689),o=e(1087),r=e(184),i=function(n){var t=n.movies,e=n.showTitle,i=void 0===e||e,u=(0,c.TH)();return(0,r.jsxs)("div",{className:"container",children:[i&&(0,r.jsx)("h1",{className:"p-2 mt-3 mb-3",children:"Trending Today"}),t.length>0&&t.map((function(n){return(0,r.jsx)(o.rU,{to:"/movies/".concat(n.id),state:{from:u},className:"text-decoration-none",children:(0,r.jsx)("ul",{className:"list-group",children:(0,r.jsx)("li",{className:"list-group-item",children:n.title})})},n.id)}))]})}},5647:function(n,t,e){e.d(t,{Ny:function(){return i},Tg:function(){return r},oO:function(){return a},on:function(){return s},y:function(){return u}});var c="https://api.themoviedb.org/3/",o="44cd7d40e9c9ffc80f6b2e51bac6d9ee",r=function(){return fetch("".concat(c,"trending/movie/day?api_key=").concat(o)).then((function(n){return n.json()}))},i=function(n){return fetch("".concat(c,"movie/").concat(n,"?api_key=").concat(o)).then((function(n){return n.json()}))},u=function(n){return fetch("".concat(c,"movie/").concat(n,"/credits?api_key=").concat(o)).then((function(n){return n.json()}))},a=function(n){return fetch("".concat(c,"movie/").concat(n,"/reviews?api_key=").concat(o)).then((function(n){return n.json()}))},s=function(n){return fetch("".concat(c,"search/movie?page=1&api_key=").concat(o,"&query=").concat(n)).then((function(n){return n.json()}))}},3200:function(n,t,e){e.d(t,{j:function(){return o}});var c=e(184),o=function(){return(0,c.jsx)("h2",{children:"Error loading movies"})}},5493:function(n,t,e){e.r(t);var c=e(9439),o=e(2791),r=e(5647),i=e(5906),u=e(7157),a=e(3200),s=e(184);t.default=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],f=t[1],h=(0,o.useState)(!0),l=(0,c.Z)(h,2),d=l[0],m=l[1],v=(0,o.useState)(!1),j=(0,c.Z)(v,2),p=j[0],g=j[1];return(0,o.useEffect)((function(){(0,r.Tg)().then((function(n){f(n.results)})).catch((function(n){g(!0),console.log(n)})).finally((function(){m(!1)}))}),[]),(0,s.jsxs)("div",{children:[d&&(0,s.jsx)(u.a,{}),p&&(0,s.jsx)(a.j,{}),e.length>0&&(0,s.jsx)(i.e,{movies:e})]})}}}]);
//# sourceMappingURL=493.3358c0b9.chunk.js.map