"use strict";!function e(t,o,a){function n(r,s){if(!o[r]){if(!t[r]){var d="function"==typeof require&&require;if(!s&&d)return d(r,!0);if(i)return i(r,!0);throw new Error("Cannot find module '"+r+"'")}var l=o[r]={exports:{}};t[r][0].call(l.exports,function(e){var o=t[r][1][e];return n(o||e)},l,l.exports,e,t,o,a)}return o[r].exports}for(var i="function"==typeof require&&require,r=0;r<a.length;r++)n(a[r]);return n}({1:[function(e,t,o){function a(){jQuery(".project__cover").addClass("bottom--reappear").removeClass("bottom--disappear")}function n(){jQuery(".projects__name").addClass("fluid-type30-60").removeClass("fluid-type24-44"),jQuery(".projects__subhead").addClass("fluid-type14-20").removeClass("fluid-type12-16")}function i(){jQuery(".projects__name").addClass("fluid-type24-44").removeClass("fluid-type30-60"),jQuery(".projects__subhead").addClass("fluid-type12-16").removeClass("fluid-type14-20")}function r(){try{var e=document.getElementById("bottom__Link--Change");if(e.innerHTML="Next Project",null==e)throw"on case study page"}catch(e){console.log(e)}}function s(){document.getElementById("bottom__Link--Change").innerHTML="You seem cool, we should talk...",document.getElementById("bottom__Link--Change").href="mailto:hello@jacobdfrank.com?subject=Jacob, let’s talk"}function d(){k=window.innerHeight,Q=window.innerWidth,T=window.innerWidth/2,B=window.innerHeight/2,H=!0,c(),C.setSize(Q,k),g.aspect=Q/k,g.updateProjectionMatrix();document.getElementsByClassName("project__cover__image");g.aspect>=1.8?jQuery(".project__cover__image").addClass("project__cover__image--vh").removeClass("project__cover__image--vw"):jQuery(".project__cover__image").addClass("project__cover__image--vw").removeClass("project__cover__image--vh")}function l(){k=window.innerHeight,Q=window.innerWidth,h=new THREE.Scene,b=Q/k,y=25,f=1e5,g=new THREE.PerspectiveCamera(y,b,w,f),h.fog=new THREE.Fog(15021141,1,2500),g.position.x=0,g.position.z=1e3,g.position.y=0,C=new THREE.WebGLRenderer({alpha:!0,antialias:!0}),C.setSize(Q,k),C.shadowMap.enabled=!0;try{if(j=document.getElementById("ball"),j.appendChild(C.domElement),null==j)throw"ball not on page"}catch(e){console.log("ball doesn't exist")}window.addEventListener("resize",d,!1),document.addEventListener("mousemove",_,!1)}function m(){I=new THREE.AmbientLight(15021141,.1),L=new THREE.DirectionalLight(15021141,.95),L.position.set(250,-100,800),L.castShadow=!0,h.add(L),h.add(I)}function p(){R=new K,h.add(R.mesh)}function c(){window.innerWidth>=1e3?W=700:window.innerWidth<=400?W=1200:window.innerWidth>=400&&window.innerWidth<=1e3&&(W=1200-(window.innerWidth-400)/600*500),window.innerHeight<=480&&(W=1100-window.innerHeight)}function _(e){var t=T-e.clientX,o=B-e.clientY,a=Math.abs(Math.sqrt(t*t+o*o)),n=T,i=B,r=Math.abs(Math.sqrt(n*n+i*i));M=.3*(1-a/r)}function u(){R.moveWaves(),0===D&&0===F&&(g.position.z=W),2===D&&(q++,x-=S,g.position.z=W+x),1===F&&(q++,x+=S,g.position.z=W+x),q===A+50&&(1===F&&(F=3,document.getElementById("bottom__Link--Change").innerHTML="Work",document.getElementById("bottom__Link--Change").href="#page2"),2===D&&(D=3,cancelAnimationFrame(P),E=!0,document.getElementById("ball").style.display="none")),C.render(h,g),P=requestAnimationFrame(u)}function v(e){l(),p(),m(),u()}var h=void 0,g=void 0,y=void 0,b=void 0,w=void 0,f=void 0,C=void 0,j=void 0,E=!1,k=void 0,Q=void 0,T=window.innerWidth/2,B=window.innerHeight/2,I=void 0,L=void 0,M=.011,H=!1,W=void 0,R=void 0,S=-5,x=0,z=new THREE.SphereGeometry(60,40,30),N=void 0,O=void 0,P=void 0,q=void 0,F=void 0,D=void 0,G=void 0,Y=void 0;q=F=D=0;var A=35,J=void 0,V=$(".section").length,X=!0;G=!1;$("#fullpage").fullpage({anchors:["page1","page2","page3","page4","page5"],easing:"easeInOutQuad",slidesNavigation:!0,scrollOverflow:!0,scrollOverflowReset:!0,scrollOverflowResetKey:"amFjb2JkZnJhbmsuY29tXzY4dmMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT12OVc=",onLeave:function(e,t,o){$(this);if(Math.abs(e-t)>1?($.fn.fullpage.setScrollingSpeed(0),console.log("firsthit")):$.fn.fullpage.setScrollingSpeed(1200),"up"!=o&&"down"!=o||jQuery(".project__cover").addClass("bottom--disappear").removeClass("bottom--reappear"),1==e&&"down"==o){D=2,F=0,q=0,G=Y=!0,jQuery(".bottom__link__name__color").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".bottom__link__line").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".projects__name").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".projects__subhead").addClass("bottom--disappear").removeClass("bottom--reappear"),window.setTimeout(r,300),window.setTimeout(i,300);try{if(null==document.getElementById("ball"))throw"ball not there";document.getElementById("ball").style.opacity="0.0",document.getElementById("ball").style.transitionProperty="opacity",document.getElementById("ball").style.transitionDuration=".5s",document.getElementById("ball").style.transitionTimingFunction="ease-out"}catch(e){console.log(e)}}else 2==e&&"up"==o&&(F=1,D=0,document.getElementById("ball").style.display="",q=0,u(),E=!1,jQuery(".bottom__link__name__color").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".bottom__link__line").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".projects__name").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".projects__subhead").addClass("bottom--disappear").removeClass("bottom--reappear"),window.setTimeout(n,300),G=Y=!0,document.getElementById("ball").style.opacity="1",document.getElementById("ball").style.transitionProperty="opacity",document.getElementById("ball").style.transitionDuration="1s",document.getElementById("ball").style.transitionTimingFunction="ease-in");t!=V?(console.log("slide"+t),X=!0,J=t+1,document.getElementById("bottom__Link--Change").href="#page"+J.toString()):(jQuery(".bottom__link__name__color").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".bottom__link__line").addClass("bottom--disappear").removeClass("bottom--reappear"),window.setTimeout(s,300),G=!0),e==V&&(jQuery(".bottom__link__name__color").addClass("bottom--disappear").removeClass("bottom--reappear"),jQuery(".bottom__link__line").addClass("bottom--disappear").removeClass("bottom--reappear"),window.setTimeout(r,300),G=!0)},afterLoad:function(e,t){$(this);if(G&&(jQuery(".bottom__link__line").addClass("bottom--reappear").removeClass("bottom--disappear"),jQuery(".bottom__link__name__color").addClass("bottom--reappear").removeClass("bottom--disappear"),G=!1),Y&&(jQuery(".projects__name").addClass("bottom--reappear").removeClass("bottom--disappear"),jQuery(".projects__subhead").addClass("bottom--reappear").removeClass("bottom--disappear"),Y=!1),t==V)try{document.getElementById("bottom__link__lastLine").style.display="none"}catch(e){console.log("bottom Link Not On Home")}if(t!=V)try{document.getElementById("bottom__link__lastLine").style.display="block",document.getElementById("bottom__Link--Change").href="#page"+(t+1).toString()}catch(e){console.log("bottom Link Not On Home")}window.setTimeout(a,0)}}),$.fn.fullpage.setScrollingSpeed(1200),window.onload=function(){c(),window.innerWidth/window.innerHeight>=2?jQuery(".project__cover__image").addClass("project__cover__image--vh").removeClass("project__cover__image--vw"):jQuery(".project__cover__image").addClass("project__cover__image--vw").removeClass("project__cover__image--vh"),console.log("pageLoaded")};var K=function(){N=new THREE.MeshPhongMaterial({color:16777215,transparent:!0,opacity:1,shading:THREE.FlatShading}),O=z.vertices.length,this.waves=[];for(var e=0;e<O;e++){var t=z.vertices[e];this.waves.push({y:t.y,x:t.x,z:t.z,ang:Math.random()*Math.PI*.13,amp:4*Math.random(),speed:Math.random()*M})}this.mesh=new THREE.Mesh(z,N),this.mesh.receiveShadow=!0};K.prototype.moveWaves=function(){for(var e=this.mesh.geometry.vertices,t=e.length,o=0;o<t;o++){var a=e[o],n=this.waves[o];a.x=n.x+Math.sin(n.ang)*n.amp,a.y=n.y+Math.cos(n.ang)*n.amp,n.ang+=n.speed,n.speed=.03+Math.random()*M}this.mesh.geometry.verticesNeedUpdate=!0,R.mesh.rotation.z+=.001,this.mesh.geometry.radius+=60},$(function(){$("body").removeClass("fade-out")}),window.addEventListener("load",v,!1)},{}]},{},[1]);