(this["webpackJsonptimlaitw.github.io"]=this["webpackJsonptimlaitw.github.io"]||[]).push([[0],{18:function(e,a,t){e.exports=t(30)},23:function(e,a,t){},24:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(15),c=t.n(i),r=(t(23),t(24),t(2)),o=t(1);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(17);var m=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],i=a[1],c=function(){return i(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(r.b,{to:"/",className:"navbar-logo",onClick:c},"T.LAI",l.a.createElement("i",{class:"fas fa-dice-d6"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return i(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{to:"/resume",className:"nav-links",onClick:c},"Resume")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{to:"/projects",className:"nav-links",onClick:c},"Projects")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{to:"/gallery",className:"nav-links",onClick:c},"Gallery")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{to:"/contact",className:"nav-links",onClick:c},"Contact"))))))},u=[{link:"https://github.com/timlaitw",label:"Github",icon:"fab fa-github"},{link:"https://www.linkedin.com/in/tailin-lai/",label:"Linkedin",icon:"fab fa-linkedin"},{link:"https://www.facebook.com/tailin08/",label:"FaceBook",icon:"fab fa-facebook-f"},{link:"https://www.instagram.com/tailinlai/",label:"Instagram",icon:"fab fa-instagram"},{link:"mailto:timlai1208@gmail.com",label:"Email",icon:"fas fa-envelope"}],d=function(){return l.a.createElement("footer",{className:"footer",id:"footer"},l.a.createElement(r.b,{to:"/",className:"ftr-logo"},"T.LAI ",l.a.createElement("i",{class:"fas fa-dice-d6"})),l.a.createElement("ul",{className:"ftr-menu"},l.a.createElement("small",{class:"website-rights"},"T.LAI \xa9 2020"),u.map((function(e){return l.a.createElement("li",{key:e.label,className:"ftr-item"},l.a.createElement("a",{href:e.link},l.a.createElement("i",{class:e.icon})))}))))},p=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement("div",{id:"wrapper"},e.children),l.a.createElement(d,null))},g=function(e){var a=e.data;return l.a.createElement("div",null,l.a.createElement("img",{className:"photo",key:a.id,src:a.src,alt:a.title,width:"60%",height:"40%"}))},E=[{id:1,title:"Fuji Color 200",src:"/img/Fuji_Color_200/001.jpg"},{id:2,title:"Fuji Color 200",src:"/img/Fuji_Color_200/002.jpg"},{id:3,title:"Fuji Color 200",src:"/img/Fuji_Color_200/003.jpg"}],h=[{id:1,title:"Fuji Simple Ace 400",src:"/img/Fuji_SimpleAce_400/001.jpg"},{id:2,title:"Fuji Simple Ace 400",src:"/img/Fuji_SimpleAce_400/002.jpg"}],f=[{id:1,title:"Kodak Gold 200",src:"/img/Kodak_Gold_200/001.jpg"},{id:2,title:"Kodak Gold 200",src:"/img/Kodak_Gold_200/002.jpg"},{id:3,title:"Kodak Gold 200",src:"/img/Kodak_Gold_200/003.jpg"}],b=["Fuji Simple Ace","Fuji Color","Kodak Gold"],v=function(){return l.a.createElement(p,null,l.a.createElement("h1",{className:"gallery"},"Photo Album"),l.a.createElement("article",{className:"post",id:"gallery"},l.a.createElement("div",{className:"link-container"},b.map((function(e){return l.a.createElement("h5",{key:e},l.a.createElement("a",{href:"#".concat(e)},e))}))),l.a.createElement("h5",{className:"section",id:"Fuji Simple Ace"},"Fuji Simple Ace 200"),h.map((function(e){return l.a.createElement(g,{data:e})})),l.a.createElement("h5",{className:"section",id:"Fuji Color"},"Fuji Color 200"),E.map((function(e){return l.a.createElement(g,{data:e})})),l.a.createElement("h5",{className:"section",id:"Kodak Gold"},"Kodak Gold 200"),f.map((function(e){return l.a.createElement(g,{data:e})}))))},k=function(){return l.a.createElement(p,null,l.a.createElement("h1",{className:"contacts"},"CONTACT"),l.a.createElement("article",{className:"post",id:"contact"},l.a.createElement("h3",null,l.a.createElement("a",{href:"mailto:timlai1208@gmail.com"},"Email me!")),l.a.createElement("p",null,"Feel free to get in touch."),l.a.createElement("ul",{className:"icons"},u.map((function(e){return l.a.createElement("li",{key:e.label},l.a.createElement("a",{href:e.link},l.a.createElement("i",{class:e.icon})))})))))},y=function(e){e.location;return l.a.createElement(p,null,l.a.createElement("h1",{className:"home"},"Welcome!"),l.a.createElement("article",{className:"post",id:"home"},l.a.createElement("div",{className:"subtitle"},l.a.createElement("h5",null,"A RESPONSIVE, REACT APP WRITTEN WITH JAVASCRIPT.")),l.a.createElement("p",null,"Welcome to my website built with React JS. Please feel free to read more on ",l.a.createElement(r.b,{to:"/resume"},"my resume"),", or check out my ",l.a.createElement(r.b,{to:"/projects"},"projects"),", "," ",l.a.createElement(r.b,{to:"/album"},"photo album"),", or ",l.a.createElement(r.b,{to:"/contact"},"contact me"))))},w=function(){return l.a.createElement("div",{className:"not-found"},l.a.createElement("h1",null,"Page Not Found."),l.a.createElement("p",null,"Return to ",l.a.createElement(r.b,{to:"/"},"index"),"."))},N=function(e){var a=e.data;return l.a.createElement("article",{className:"project-container"},l.a.createElement("div",{className:"project-title",id:"project-title"},l.a.createElement("h3",null,l.a.createElement("a",{href:a.link},a.title))),l.a.createElement("p",{className:"date"}," ",a.date),l.a.createElement("div",{className:"description"},l.a.createElement("p",null,a.desc)))},S=[{title:"Personal Website",subtitle:"PersonalWebsite",link:"https://timlaitw.github.io",image:"/img/testing.jpg",date:"On-going",desc:"What you are looking at rn is what it is. Deploy a React JS App on Github user pages with multiple information pages about myself."},{title:"Stock Tracker",subtitle:"StockTrackingApplication",link:"https://github.com/TimLaiTW/Python-Crawler/tree/master/Stock_Price_Tracking",image:"/img/testing.jpg",date:"May. 2020",desc:"Used Python and its library BeautifulSoup to create an online stock crawlerenabling sending the notification email if the subscribed stock price goes down or upthan the setting price to the users."},{title:"Elderly Care Application",subtitle:"ElderlyCareApplication",link:"",image:"/img/testing.jpg",date:"Jun. 2019",desc:"Built a new healthcare application for seniors on WeChat mini program with JavaScript and HTML-liked language WXML tointegrated API with construction, UI design and performance improvement."},{title:"Pizza Ordering System",subtitle:"PizzaOrdering",link:"",image:"/img/testing.jpg",date:"Sep. 2018",desc:"Built a Pizza Ordering System with MVC architecture by utilizing MySQL database, php and JSON as back-end development.Implemented REST webservices with JavaScript, HTML and CSS with essential features as front-end layout"}],j=function(){return l.a.createElement(p,null,l.a.createElement("h1",{className:"projects"},"Projects!"),l.a.createElement("article",{className:"post",id:"project"},l.a.createElement("div",{className:"subtitle"},l.a.createElement("h5",null,"Just for fun")),S.map((function(e){return l.a.createElement(N,{data:e,key:e.title})}))))},C=function(e){var a=e.data;return l.a.createElement("article",{className:"container"},l.a.createElement("h3",{className:"school"},l.a.createElement("a",{href:a.link},a.school)),l.a.createElement("h4",{className:"degree"},a.degree,", earned ",l.a.createElement("span",{className:"date"},a.year)),l.a.createElement("p",{className:"location"},a.location))},A=function(e){var a=e.data;return l.a.createElement("div",{className:"education"},l.a.createElement("div",{className:"section",id:"education"},l.a.createElement("h3",null,"Education")),a.map((function(e){return l.a.createElement(C,{data:e,key:e.school})})))},T=function(e){var a=e.data;return l.a.createElement("article",{className:"container"},l.a.createElement("h4",{className:"company"},a.position," | ",l.a.createElement("a",{href:a.link},a.company,", ",a.location)),l.a.createElement("p",{className:"date"},a.daterange),l.a.createElement("div",{className:"description"},a.points.map((function(e){return l.a.createElement("ul",null,l.a.createElement("li",{className:"description-item"},e))}))))},P=function(e){var a=e.data;return l.a.createElement("div",{className:"experience"},l.a.createElement("div",{className:"section",id:"experience"},l.a.createElement("h3",null,"Experience")),a.map((function(e){return l.a.createElement(T,{data:e,key:e.company})})))},F=function(e){var a=e.bgcolor,t=e.completed,n={height:"100%",width:"".concat(t,"%"),backgroundColor:a,borderRadius:"inherit",textAlign:"right"};return l.a.createElement("div",{style:{height:5,width:"90%",backgroundColor:"#e0e0de",borderRadius:50,margin:20}},l.a.createElement("div",{style:n}))},L=function(e){var a=e.data;return l.a.createElement("article",{className:"container"},l.a.createElement("h4",{className:"skills"},a.title),l.a.createElement("div",{className:"App"},l.a.createElement(F,{key:a.title,bgcolor:a.color,completed:a.competency,title:a.title})))},M=function(e){var a=e.data;return l.a.createElement("div",{className:"keyskills"},l.a.createElement("div",{className:"section",id:"skills"},l.a.createElement("h3",null,"Skills")),a.map((function(e){return l.a.createElement(L,{data:e,key:e.title})})))},J=[{school:"University of Massachusetts, Boston",degree:"M.S. Computer Science",link:"https://www.umb.edu",year:"Dec 2019",location:"Boston, MA"},{school:"Fu Jen Catholic University",degree:"B.E. Electrical Engineering",link:"https://www.fju.edu.tw",year:"June 2015",location:"New Taipei City, Taiwan"}],I=[{company:"Mustard Seed Capital LLC",location:"Boston, MA",position:"Website Engineer",link:"",daterange:"March 2020 - Present",points:["Designing and building website with features in JavaScript library React and Spring framework.","Completed development process for web app, including writing design docs, going through design reviews, and launching internally."]},{company:"University of Massachusetts Boston",location:"Boston, MA",position:"Software Engineer",link:"https://www.umb.edu",daterange:"June 2019 - November 2019",points:["Analyzed user behavior, preference and needs in New England area to improve user engagement with health care application.","Completed entire development process for app. Including writing design documents, implementation of front-end using JavaScript,HTML and CSS, going through design review, and launching internally."]},{company:"University of Massachusetts Boston",location:"Boston, MA",position:"C.S. Tutor",link:"https://www.umb.edu",daterange:"May 2019 - August 2019",points:["Broke down complex problems to individual learning levels.","Analyzed student comprehension and prepared goals."]},{company:"Compal Electronics, Inc",location:"Taipei, Taiwan",position:"B.I.O.S. Software Engineer",link:"https://www.compal.com",daterange:"October 2015 - April 2017",points:["Developed, tested and launched BIOS code in C and Assembly language, contributed to an overall 20+% reduction of the technical issues with collaborated with project managers, QA team and multiple function teams from internal and external.","Participated in multiple Dell XPS and Inspiron projects simultaneously in entire production process and managed software team to accelerate manufacturing process 15+%."]},{company:"D-Link",location:"Taipei, Taiwan",position:"Data analytics engineer",link:"https://us.dlink.com/en/consumer",daterange:"November 2014 - August 2015",points:["Forecasted sales of existing products within 3 and 5 years by utilized R in data sets analysis and developed algorithms to make data more readable and useful for future marketing strategies.","Building internal training program for networking (TCP/IP) technology and Internet routers/firewalls."]}],B=[{title:"Java",competency:80,color:"#696969",category:["Web Development","Languages","Java"]},{title:"Python",competency:80,color:"#696969",category:["Languages","Python"]},{title:"Javascript",competency:80,color:"#696969",category:["Web Development","Languages","Javascript"]},{title:"HTML/CSS",competency:70,color:"#696969",category:["Web Development","Languages"]},{title:"MySQL",competency:70,color:"#696969",category:["Web Development","Databases","Languages"]},{title:"React",competency:70,color:"#696969",category:["Web Development","Javascript"]},{title:"C",competency:50,color:"#696969",category:["Languages"]},{title:"R",competency:50,color:"#696969",category:["Languages"]}],W=["Education","Experience","Skills"],_=function(){return l.a.createElement(p,null,l.a.createElement("h1",{className:"resume"},"About Me!"),l.a.createElement("article",{className:"post",id:"resume"},l.a.createElement("div",{className:"subtitle"},l.a.createElement("div",{className:"link-container"},W.map((function(e){return l.a.createElement("h5",{key:e},l.a.createElement("a",{href:"#".concat(e.toLowerCase())},e))})))),l.a.createElement("div",{className:"resume-section"},l.a.createElement(A,{data:J}),l.a.createElement(P,{data:I}),l.a.createElement(M,{data:B}))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(r.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:y}),l.a.createElement(o.a,{path:"/gallery",component:v}),l.a.createElement(o.a,{path:"/projects",component:j}),l.a.createElement(o.a,{path:"/contact",component:k}),l.a.createElement(o.a,{path:"/resume",component:_}),l.a.createElement(o.a,{component:w,status:404})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.2331fa72.chunk.js.map