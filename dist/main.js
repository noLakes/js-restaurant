(()=>{"use strict";const e=()=>{const e=document.querySelector(".content-container"),t=document.createElement("h1");t.classList.add("title"),t.innerHTML="Restaurant Name";const n=document.createElement("p");n.classList.add("description"),n.innerHTML="A small about section describing the restaurant",e.appendChild(t),e.appendChild(n)};(()=>{const e=document.querySelector(".main-container");e.innerHTML="";const t=document.createElement("div"),n=document.createElement("div"),c=document.createElement("div");t.classList.add("header-container"),n.classList.add("content-container"),c.classList.add("footer-container");const a=document.createElement("ul");a.classList.add("site-nav");const i=document.createElement("li");i.innerHTML="Title",i.id="header-title",a.appendChild(i);const d=document.createElement("li");d.innerHTML="Home",d.id="home",d.classList.add("active"),a.appendChild(d);const o=document.createElement("li");o.innerHTML="Menu",o.id="menu",a.appendChild(o);const r=document.createElement("li");r.innerHTML="Contact",r.id="contact",a.appendChild(r),t.appendChild(a);const s=document.createElement("a");s.id="author",s.innerHTML="@noLakes",s.href="https://github.com/noLakes",c.appendChild(s),e.appendChild(t),e.appendChild(n),e.appendChild(c)})();let t="home";e();const n=document.querySelector(".content-container");function c(e){e.target.classList.contains("active")||(Array(...e.target.parentNode.children).forEach((e=>e.classList.remove("active"))),e.target.classList.add("active"))}function a(c){if(c.target.id!==t){switch(n.innerHTML="",c.target.id){case"home":e();break;case"menu":(()=>{const e=document.querySelector(".content-container"),t=document.createElement("h1");t.innerHTML="MENU",e.appendChild(t)})();break;case"contact":(()=>{const e=document.querySelector(".content-container"),t=document.createElement("h1");t.innerHTML="CONTACT",e.appendChild(t)})()}t=c.target.id}}document.querySelectorAll(".site-nav li").forEach((e=>{"header-title"!==e.id&&(e.addEventListener("click",c),e.addEventListener("click",a))}))})();