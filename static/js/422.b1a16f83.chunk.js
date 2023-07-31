"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[422],{422:function(n,e,t){t.r(e),t.d(e,{default:function(){return tn}});var i,r,o,a,c,l,s,u,d,x,p,m,h,f,b,g=t(2791),Z=t(4270),j=t(9434),w=t(9439),y=t(5705),v=t(6727),k=t(8174),C=(t(5462),t(6916)),z=function(n){return n.filter},_=function(n){return n.contacts.isLoading},q=function(n){return n.contacts.error},F=(0,C.P1)([function(n){return n.contacts.items},z],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),L=t(3634),N=t(168),P=t(5706),I=(0,P.Z)(y.l0)(i||(i=(0,N.Z)(["\n    margin-bottom: 35px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 10px;\n"]))),S=P.Z.label(r||(r=(0,N.Z)(["\n    display: flex;\n    flex-direction: column;\n    row-gap: 3px;\n    color: black;\n    min-width: 300px;\n    min-height: 30px;\n"]))),A=(0,P.Z)(y.gN)(o||(o=(0,N.Z)(["\n    min-height: 300px;\n    min-height: 30px;\n    padding: 2px 6px;\n    font-size: 16px;\n    outline: none;\n    border-radius: 5px;\n"]))),E=P.Z.button(a||(a=(0,N.Z)(["\n    padding: 5px 10px;\n    font-family: inherit;\n    font-size: 16px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 5px;\n\n    min-width: 140px;\n    min-height: 30px;\n    margin: 0;\n\n    background-color: white;\n    border: 2px solid black;\n    border-radius: 5px;\n    cursor: pointer;\n\n    &:hover{\n    color: white;\n    background-color: black;\n    border-color: white;\n    }\n"]))),K=(0,P.Z)(y.Bc)(c||(c=(0,N.Z)(["\n    font-size: 14px;\n    cursor: black;\n    max-width: 300px;\n"]))),B=t(1681),D=t(3329),G={name:"",number:""},J=v.Ry().shape({name:v.Z_().required("Name is required"),number:v.Z_().required("Phone numder is required").matches(/^[\d()+-]+$/,"Phone number must contain only 0-9 and these symbols: ( ) - +").min(8,"Phone number must be at least 8 characters")}),R=function(){var n=(0,j.I0)(),e=(0,j.v9)(F),t=(0,j.v9)(_),i=(0,g.useState)(!1),r=(0,w.Z)(i,2),o=r[0],a=r[1];return(0,D.jsx)(y.J9,{initialValues:G,onSubmit:function(t,i){if(a(!0),e.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))return k.Am.warn("".concat(t.name," is already in contacts."));n((0,L.uK)(t)).then((function(){a(!1)})),i.resetForm()},validationSchema:J,children:(0,D.jsxs)(I,{children:[(0,D.jsxs)(S,{children:["Name",(0,D.jsx)(A,{type:"text",name:"name"}),(0,D.jsx)(K,{name:"name",component:"div"})]}),(0,D.jsxs)(S,{children:["Number",(0,D.jsx)(A,{type:"tel",name:"number"}),(0,D.jsx)(K,{name:"number",component:"div"})]}),(0,D.jsxs)(E,{type:"submit",disabled:t&&o,children:[t&&o&&(0,D.jsx)(B.a,{}),"Add Contact"]})]})})},T=P.Z.ul(l||(l=(0,N.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    row-gap: 10px;\n"]))),V=P.Z.li(s||(s=(0,N.Z)(["\n    display: flex;\n    align-items: center;\n    column-gap: 10px;\n    color: black;\n"]))),Y=P.Z.button(u||(u=(0,N.Z)(["\n    min-width: 90px;\n    padding: 6px 12px;\n    \n    font-family: inherit;\n    font-size: 16px;\n\n    margin: 0;\n    margin-left: auto;\n\n    background-color: white;\n    border: 2px solid black;\n    border-radius: 4px;\n    cursor: pointer;\n"]))),$=P.Z.p(d||(d=(0,N.Z)(["\n    color: white;\n"]))),H=function(){var n=(0,j.I0)(),e=(0,j.v9)(F),t=(0,j.v9)(_),i=(0,j.v9)(q),r=(0,g.useState)(null),o=(0,w.Z)(r,2),a=o[0],c=o[1];return(0,g.useEffect)((function(){n((0,L.yF)())}),[n]),(null===e||void 0===e||!e.length)&&!i&!t?(0,D.jsx)($,{children:"No contacts added yet."}):i?(0,D.jsx)("p",{children:i}):(0,D.jsx)(T,{children:e.map((function(e,i){var r=e.id,o=e.name,l=e.phone;return(0,D.jsxs)(V,{children:[(0,D.jsxs)("div",{children:[i+1,"."]}),o,": ",l,(0,D.jsxs)(Y,{onClick:function(){c(r),n((0,L.GK)(r)).then((function(){c(null)}))},disabled:t&&a===r,children:[a===r&&(0,D.jsx)(B.a,{}),"Delete"]})]},r)}))})},M=P.Z.input(x||(x=(0,N.Z)(["\n    min-width: 300px;\n    min-height: 30px;\n    \n    margin-bottom: 15px;\n    padding: 2px 6px;\n    \n    font-size: 15px;\n    outline: none;\n    border-radius: 5px;\n\n"]))),O=t(1634),Q=function(){var n=(0,j.I0)(),e=(0,j.v9)(z);return(0,D.jsx)(M,{type:"text",value:e,onChange:function(e){return n((0,O.T)(e.target.value.trim()))}})},U=P.Z.div(p||(p=(0,N.Z)(["\n    display: flex;\n    flex-direction: column;\n    row-gap: 10px;\n    align-items: center;\n    padding: 20px;\n    border: 2px black solid;\n    border-radius: 5px;\n    min-width: 350px;\n"]))),W=P.Z.p(m||(m=(0,N.Z)(["\n    margin-bottom: 10px;\n    font-size: 24px;\n    font-weight: 700;\n    text-align: center;\n    color: white;\n"]))),X=P.Z.p(h||(h=(0,N.Z)(["\n    margin-bottom: 3px;\n    font-size: 18px;\n    text-align: center;\n    color: white;\n\n"]))),nn=P.Z.h1(f||(f=(0,N.Z)(["\n    margin-bottom: 20px;\n    font-size: 32px;\n    text-align: center;\n    color: white;\n    \n"]))),en=P.Z.div(b||(b=(0,N.Z)(["\n    display: flex;\n    align-items: center;\n    weight: 600px;\n    flex-direction: column;\n    margin: 0 auto;\n"])));function tn(){var n=(0,j.I0)();return(0,g.useEffect)((function(){n((0,L.yF)())}),[n]),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Z.q,{children:(0,D.jsx)("title",{children:"Your Contacts"})}),(0,D.jsxs)(en,{children:[(0,D.jsx)(nn,{children:"Phonebook"}),(0,D.jsx)(R,{}),(0,D.jsx)(W,{children:"Contacts"}),(0,D.jsxs)(U,{children:[(0,D.jsx)(X,{children:"Find contacts by name"}),(0,D.jsx)(Q,{}),(0,D.jsx)(H,{})]})]})]})}}}]);
//# sourceMappingURL=422.b1a16f83.chunk.js.map