(this["webpackJsonpgoogle-books"]=this["webpackJsonpgoogle-books"]||[]).push([[0],{12:function(e,t,o){},13:function(e,t,o){},15:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var n=o(6),c=o.n(n),r=o(2),a=o.n(r),s=o(3),i=o(4),l=o(1);function u(e){return j.apply(this,arguments)}function j(){return(j=Object(s.a)(a.a.mark((function e(t){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(t)).then((function(e){return e.json()}));case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o(12),o(13);var b=o(0),d=function(e){var t,o,n,c=e.book.volumeInfo;return Object(b.jsxs)("div",{className:"BookCard",children:[Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:c.previewLink,target:"_blank",rel:"noreferrer",className:"BookCard__link",children:Object(b.jsx)("img",{className:"BookCard__img",src:(null===(t=c.imageLinks)||void 0===t?void 0:t.thumbnail)||"https://ruslania.com/pictures/books_photos/30/309288/9785917615868_l.jpg",alt:"Book cover"})})}),Object(b.jsxs)("div",{className:"BookCard__info",children:[Object(b.jsx)("p",{className:"BookCard__info--category",children:(null===(o=c.categories)||void 0===o?void 0:o.filter((function(e){return e[0]})))||"No category"}),Object(b.jsx)("h3",{className:"BookCard__info--title",children:c.title}),Object(b.jsx)("p",{className:"BookCard__info--autor",children:(null===(n=c.authors)||void 0===n?void 0:n.map((function(e){return e})).join(", "))||"Author unknown"})]})]})},p=function(e){e.totalBook;var t=e.allBook;return Object(b.jsx)("div",{className:"BookList",children:Object(b.jsx)("ul",{className:"BookList__list",children:t&&t.map((function(e){return Object(b.jsx)("li",{className:"BookList__list--item",children:Object(b.jsx)(d,{book:e})},e.id)}))})})},h=(o(15),function(){var e=Object(l.useState)(""),t=Object(i.a)(e,2),o=t[0],n=t[1],c=Object(l.useState)([]),r=Object(i.a)(c,2),j=r[0],d=r[1],h=Object(l.useState)(""),m=Object(i.a)(h,2),f=m[0],k=m[1],_=function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(f);case 2:t=e.sent,d(t.items),n(t.totalItems);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"App__header",children:[Object(b.jsx)("h1",{className:"App__title",children:"Search for books"}),Object(b.jsxs)("form",{className:"App__form",onSubmit:function(e){e.preventDefault()},children:[Object(b.jsx)("input",{type:"text",className:"App__form--item",placeholder:"Search book",value:f,onChange:function(e){k(e.target.value)}}),Object(b.jsx)("button",{className:"App__form--item",onClick:function(){_()},children:"Search"})]}),Object(b.jsx)("h2",{className:"BookList__count",children:o>0?"Found ".concat(o," results"):"Not found any book"})]}),Object(b.jsx)(p,{totalBook:o,allBook:j})]})});c.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3e5f4642.chunk.js.map