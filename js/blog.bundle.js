!function(){"use strict";(function(){const e=window.location.pathname,t=document.querySelectorAll(".nav__link a");for(let n=0;n<t.length;n++)t[n].getAttribute("href")===e&&t[n].classList.add("active")})(),function(){const e=document.querySelector(".header__search input"),t=document.querySelector(".search__modal");document.addEventListener("click",(function(n){n.target!==e&&n.target!==t&&(t.style.display="none")})),e.addEventListener("click",(function(){t.style.display="block"===t.style.display?"none":"block"}));const n=document.querySelector(".user__cart"),l=document.querySelector(".cart__modal");document.addEventListener("click",(function(e){e.target!==n&&e.target!==l&&(l.style.display="none")})),n.addEventListener("click",(function(){l.style.display="block"===l.style.display?"none":"block"}))}();const e=[{label:"Главная",url:"/index.html"},{label:"Блог",url:"/blog.html/"}],t=document.querySelector(".breadcrumbs");e.forEach((function(n,l){l<e.length-1?t.innerHTML+='<a href="'+n.url+'">'+n.label+"</a><span> &gt; </span>":t.innerHTML+="<span>"+n.label+"</span>"})),function(){const e=document.querySelector(".scrolltop");window.addEventListener("scroll",(function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?e.style.display="block":e.style.display="none"})),e.addEventListener("click",(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}))}()}();