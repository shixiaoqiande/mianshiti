webpackJsonp([3],{GR6h:function(e,t,o){e.exports=o.p+"static/imgs/2akbtqh.jpg"},MFFn:function(e,t,o){e.exports=o.p+"static/imgs/1WdDGW7.jpg"},dgM2:function(e,t,o){e.exports=o.p+"static/imgs/24GCcoz.jpg"},gOmY:function(e,t){},rT1w:function(e,t,o){"use strict";(function(e){var t=o("XvBR");o("GSQ4"),o("gOmY"),o("5wJx"),o("HUkS");var s=o("xxhh"),n=o("vKX7"),i=o("wOFm"),a=o("dgM2"),c=o("MFFn"),d=o("GR6h");new t({el:"#index",name:"index",delimiters:["#{","}"],data:function(){return{indexBgimg:"",indexBgimgs:"",indexBgimgBool:!0,fadeInBool2:!1,fadeInBool2s:!1,fadeInBool3:!1,fadeInBool3s:!1}},updated:function(){},mounted:function(){this.indexBgimg=i,this.indexBgimgs=i,this.handleScroll(),window.addEventListener("scroll",this.handleScroll,!0);var t=this;this.resizeFn(),e(window).resize(function(){t.resizeFn()})},methods:{resizeFn:function(){var t=document.body.innerWidth,o=document.body.offsetHeight;e(".section1").css({width:t+"px",height:o+"px"}),e(".section2,.section3").css({width:t+"px",height:o+30+"px"})},handleScroll:function(){var e=this,t=document.documentElement.scrollTop||document.body.scrollTop,o=document.getElementsByClassName("section2")[0].offsetTop-200,s=document.getElementsByClassName("section3")[0].offsetTop-200;t>o&&(this.fadeInBool2=!0,setTimeout(function(){e.fadeInBool2s=!0},800)),(t>s||t>2200)&&(this.fadeInBool3=!0,setTimeout(function(){e.fadeInBool3s=!0},800))},goToAccessories:function(){window.location.href="https://static.heygears.com/ultra_web/static/js/pc/zh/equipmentDLP.html"},linkTo:function(e){"case1"==e?window.localStorage.setItem("caseName","case1"):"case2"==e?window.localStorage.setItem("caseName","case2"):"case3"==e?window.localStorage.setItem("caseName","case3"):"case4"==e?window.localStorage.setItem("caseName","case4"):"case5"==e?window.localStorage.setItem("caseName",""):"case6"==e&&window.localStorage.setItem("caseName","case6"),window.location.href="https://static.heygears.com/ultra_web/static/js/pc/zh/case.html"},changebg:function(t){e(".curveName").removeClass("active"),e(".curveName").eq(t-1).addClass("active"),this.indexBgimgBool=!this.indexBgimgBool;var o="";switch(t){case 1:o=s;break;case 2:o=n;break;case 3:o=i;break;case 4:o=a;break;case 5:o=c;break;case 6:o=d}this.indexBgimgBool?this.indexBgimg=o:this.indexBgimgs=o,e(".section3").css({background:"url("+o+") no-repeat center #121011","background-size":"cover",transition:"https://static.heygears.com/ultra_web/static/js/pc/zh/index/0.5s"})}}})}).call(t,o("gaCs"))},vKX7:function(e,t,o){e.exports=o.p+"static/imgs/VlFjdS9.jpg"},wOFm:function(e,t,o){e.exports=o.p+"static/imgs/3HCa3bk.jpg"},xxhh:function(e,t,o){e.exports=o.p+"static/imgs/32M9cM2.jpg"}},["rT1w"]);