!function(){"use strict";!function(){const n=window.location.pathname,e=document.querySelectorAll(".nav__link a");for(let t=0;t<e.length;t++)e[t].getAttribute("href")===n&&e[t].classList.add("active")}();const n=[{label:"Главная",url:"/index.html"},{label:"Гарантия",url:"/guaranty.html/"}],e=document.querySelector(".breadcrumbs");n.forEach((function(t,l){l<n.length-1?e.innerHTML+='<a href="'+t.url+'">'+t.label+"</a><span> &gt; </span>":e.innerHTML+="<span>"+t.label+"</span>"}))}();