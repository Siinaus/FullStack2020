(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(0),u=t(2),i=t(14),r=t.n(i),a=t(3),s=function(e){var n=e.addPerson,t=e.handlePersonChange,u=e.handleNumberChange,i=e.name,r=e.number;return Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsxs)("div",{children:["Nimi: ",Object(c.jsx)("input",{type:"text",value:i,onChange:t})]}),Object(c.jsxs)("div",{children:["Numero: ",Object(c.jsx)("input",{type:"text",value:r,onChange:u})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"Lis\xe4\xe4"})})]})},o=function(e){var n=e.persons,t=e.removePerson;return Object(c.jsx)("div",{children:Object(c.jsx)("ul",{children:n.map((function(e){return Object(c.jsxs)("li",{children:[e.name,e.number,Object(c.jsx)("button",{onClick:function(){return t(e.name)},children:"Poista"})]},e.name)}))})})},j=t(4),l=t.n(j),d="/api/persons",b=function(){return l.a.get(d)},h=function(e){return l.a.post(d,e)},f=function(e){return l.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},m=function(e){var n=e.message;return null===n?null:null!==n?Object(c.jsx)("div",{className:"message",children:n}):void 0},O=function(){var e=Object(u.useState)([]),n=Object(a.a)(e,2),t=n[0],i=n[1],r=Object(u.useState)(""),j=Object(a.a)(r,2),l=j[0],d=j[1],O=Object(u.useState)(""),x=Object(a.a)(O,2),v=x[0],p=x[1],g=Object(u.useState)(null),P=Object(a.a)(g,2),y=P[0],C=P[1];Object(u.useEffect)((function(){b().then((function(e){i(e.data)}))}),[]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Puhelinluettelo"}),Object(c.jsx)("h2",{children:"Lis\xe4\xe4 uusi yhteystieto"}),Object(c.jsx)(m,{message:y}),Object(c.jsx)(s,{name:l,handlePersonChange:function(e){d(e.target.value)},handleNumberChange:function(e){p(e.target.value)},number:v,addPerson:function(e){e.preventDefault(),h({name:l,number:v}).then((function(e){i(t.concat(e.data)),d(""),p(""),C("Lis\xe4tty ".concat(e.data.name)),setTimeout((function(){C(null)}),3e3)}))}}),Object(c.jsx)("h2",{children:"Yhteystiedot"}),Object(c.jsx)(o,{persons:t,removePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Poistetaanko ".concat(n.name," ?"))&&f(e).then((function(n){i(t.filter((function(n){return e!==n.id})))}))}})]})};t(38);r.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b79bbc68.chunk.js.map