"use strict";!function e(t,r,n){function o(i,l){if(!r[i]){if(!t[i]){var c="function"==typeof require&&require;if(!l&&c)return c(i,!0);if(a)return a(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var u=r[i]={exports:{}};t[i][0].call(u.exports,function(e){var r=t[i][1][e];return o(r||e)},u,u.exports,e,t,r,n)}return r[i].exports}for(var a="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){var n=!1,o=2,a=.3,i=void 0,l=document.getElementById("bubble"),c=l.getContext("2d"),s=3*Math.PI/20,u=2*Math.PI,d={x:l.width/4,y:l.height/4},v={breelCover:document.createElement("canvas"),gotpillsCover:document.createElement("canvas"),tawCover:document.createElement("canvas"),cells:document.createElement("canvas"),hawkesCover:document.createElement("canvas")},h=function(){document.querySelectorAll("[data-homeImage]").forEach(function(e){var t=document.getElementById("bubble");e.onmouseenter=function(){function r(){c<l&&(o+=5/l,c++,requestAnimationFrame(r))}var n=e.getAttribute("data-homeImage"),i=e.getAttribute("data-volume");t.classList.add("tease"),a=+i;var l=30,c=0;r(),m(v[n])},e.onmouseleave=function(){function e(){n<r&&(o-=5/r,n++,requestAnimationFrame(e))}var r=30,n=0;t.classList.remove("tease"),a=1,e(),m(!1)}})},m=function(e){var t=window.devicePixelRatio||1,r=0,v=["#C54143","#F8F8F8"],h=[];if(cancelAnimationFrame(i),1===window.devicePixelRatio&&(t=2),n||(c.scale(t,t),n=!0),e)c.fillStyle=c.createPattern(e,"no-repeat");else{var m=c.createRadialGradient(l.width/4,l.height/4,l.height/4,l.width/4,l.height/1.5,0);m.addColorStop(1,v[0]),m.addColorStop(0,v[1]),c.strokeStyle="transparent",c.fillStyle=m}!function e(){c.clearRect(0,0,l.width,l.height),c.beginPath();var t=.1*r;h.length=0;for(var n=0;n<20;n++)h.push(Math.sin(n/a+t)*o);for(var v=0;v<u;v+=s){var m=h[(v/s).toFixed(0)],f=d.x+(100+m)*Math.cos(v),g=d.y+(100+m)*Math.sin(v);c.lineTo(f,g)}c.closePath(),c.fill(),c.stroke(),r++,i=requestAnimationFrame(e)}()},f=function(){[{el:v.breelCover,src:"breelCover"},{el:v.gotpillsCover,src:"gotpillsCover"},{el:v.hawkesCover,src:"hawkesCover"},{el:v.tawCover,src:"tawCover"},{el:v.cells,src:"cells"}].forEach(function(e){var t=new Image,r=e.el.getContext("2d");t.src="images/"+e.src+".png",t.addEventListener("load",function(){e.el.width=2560,e.el.height=2560,r.drawImage(t,0,0,t.width,t.height,0,0,320,320)},!0),e.el.setAttribute("style","visibility: hidden; position: absolute; left: -9999em;"),document.body.appendChild(e.el),e.el.setAttribute("style","display: none")})};document.querySelector("canvas")&&(f(),m(!1,1)),h()},{}],2:[function(e,t,r){e("./bubble.js")},{"./bubble.js":1}]},{},[2]);