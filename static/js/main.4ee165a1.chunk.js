(this.webpackJsonpYPORTFOLIO=this.webpackJsonpYPORTFOLIO||[]).push([[0],{25:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var c=s(7),n=s(1),a=s(0);const i=Object(n.createContext)(),l=e=>{let{children:t}=e;const[s,c]=Object(n.useState)("light");Object(n.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");c(e.matches?"dark":"light"),e.addEventListener("change",(e=>{c(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(i.Provider,{value:[{themeName:s,toggleTheme:()=>{const e="dark"===s?"light":"dark";localStorage.setItem("themeName",e),c(e)}}],children:t})},r={homepage:"https://github.com/YATHAMSHA/YPORTFOLIO",title:"YS."},o={name:"Shaikjellu Yatham Shavali",role:"Full Stack Developer",description:"I'm a dedicated full-stack developer specializing in frontend technologies with 2+ years of experience,1+ years of internship experience. I excel in crafting responsive web interfaces using React, complemented by backend proficiency in Node.js and MongoDB, focusing on UI/UX design and performance optimization. Passionate about innovation, I thrive on overcoming challenges to deliver intuitive solutions that elevate user experiences and achieve business goals. Continuously learning and adapting to new trends, I'm committed to creating impactful web applications.",resume:"https://drive.google.com/file/d/1wGi_t9IlZmNTeEuKyHjUnN3wndWxDxiq/view",social:{linkedin:"https://www.linkedin.com/in/yatham024/",github:"https://github.com/YATHAMSHA"}},j=[{name:"CryptoTracker-app",description:"Designed and developed a responsive Crypto Tracker SPA using React for the frontend and Node.js with Express for the backend. The application fetches real-time cryptocurrency data from CoinMarketCap API, displaying prices and trends with interactive charts. Built for simplicity and usability, with a clean UI and smooth navigation.",stack:["React.js","Node.js","Express.js"],sourceCode:"https://github.com/YATHAMSHA/CryptoTracker-app"},{name:"Resume-builder",description:'The "Resume Builder" is a full-stack web app using React frontend and Node.js with Express.js backend. It enables users to input resume details, generating PDF resumes via html-pdf. CORS ensures secure data exchange. This project demonstrates proficiency in React for dynamic UIs and Node.js for efficient backend operations and PDF generation.',stack:["React.js","Node.js","Express.js"],sourceCode:"https://github.com/YATHAMSHA/Resume-builder"},{name:"Real-Time File Sharing App",description:'The "Real-Time File Sharing App" enables seamless file sharing between users in real-time. Built with HTML, CSS, JavaScript, and Socket.io-client on the frontend, and Node.js with Express.js and Socket.io on the backend, this project showcases dynamic real-time communication and efficient backend operations.',stack:["HTML","CSS"," JavaScript","Socket.io-client","Node.js","Express.js","Socket.io"],sourceCode:"https://github.com/YATHAMSHA/Real-time-File-Sharing-app"}],d=["HTML5","CSS3","JavaScript","React.Js","Redux","Node.Js","Express.Js","jQuery","Python","Java","MySQL","MongoDB","Rest API","WordPress","Material UI","Git"],h="yatham024@gmail.";var b=s(13),m=s.n(b),u=s(11),p=s.n(u),O=s(15),x=s.n(O),g=s(14),k=s.n(g);s(25);var f=()=>{const[{themeName:e,toggleTheme:t}]=Object(n.useContext)(i),[s,c]=Object(n.useState)(!1),l=()=>c(!s);return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:s?"flex":null},className:"nav__list",children:[j.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:l,className:"link link--nav",children:"Projects"})}):null,d.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:l,className:"link link--nav",children:"Skills"})}):null,h?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:l,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(a.jsx)(p.a,{}):Object(a.jsx)(m.a,{})}),Object(a.jsx)("button",{type:"button",onClick:l,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:s?Object(a.jsx)(k.a,{}):Object(a.jsx)(x.a,{})})]})};s(29);var v=()=>{const{homepage:e,title:t}=r;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(f,{})]})},N=s(8),_=s.n(N),S=s(16),w=s.n(S);s(30);var y=()=>{const{name:e,role:t,description:s,resume:c,social:n}=o;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:s&&s}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),n&&Object(a.jsxs)(a.Fragment,{children:[n.github&&Object(a.jsx)("a",{href:n.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(_.a,{})}),n.linkedin&&Object(a.jsx)("a",{href:n.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(w.a,{})})]})]})]})},A=s(6),C=s.n(A),T=s(17),R=s.n(T);s(32);var I=e=>{let{project:t}=e;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(a.jsx)("li",{className:"project__stack-item",children:e},C()())))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon source",children:Object(a.jsx)(_.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(R.a,{})})]})};s(33);var H=()=>j.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:j.map((e=>Object(a.jsx)(I,{project:e},C()())))})]}):null;s(34);var P=()=>d.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:d.map((e=>Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},C()())))})]}):null,M=s(18),E=s.n(M);s(35);var Y=()=>{const[e,t]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top","aria-label":"top",children:Object(a.jsx)(E.a,{fontSize:"large"})})}):null};s(36);var F=()=>h?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(h),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;s(37);var L=()=>Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/YATHAMSHA/YPORTFOLIO",className:"link footer__link",children:"Created By YATHAM"})});s(38);var J=()=>{const[{themeName:e}]=Object(n.useContext)(i);return Object(a.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(a.jsx)(v,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(y,{}),Object(a.jsx)(H,{}),Object(a.jsx)(P,{}),Object(a.jsx)(F,{})]}),Object(a.jsx)(Y,{}),Object(a.jsx)(L,{})]})};s(39);Object(c.render)(Object(a.jsx)(l,{children:Object(a.jsx)(J,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.4ee165a1.chunk.js.map