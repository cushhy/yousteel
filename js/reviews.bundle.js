!function(){"use strict";!function(){const e=window.location.pathname,n=document.querySelectorAll(".nav__link a");for(let t=0;t<n.length;t++)n[t].getAttribute("href")===e&&n[t].classList.add("active")}();const e=[{label:"Главная",url:"/index.html"},{label:"Отзывы",url:"/reviews.html/"}],n=document.querySelector(".breadcrumbs");e.forEach((function(t,l){l<e.length-1?n.innerHTML+='<a href="'+t.url+'">'+t.label+"</a><span> &gt; </span>":n.innerHTML+="<span>"+t.label+"</span>"}))}();