webpackJsonp([14],{"/lF7":function(t,e,i){"use strict";(function(t){var e=i("1ZIn"),a=function(t){return t&&t.__esModule?t:{default:t}}(e),s=i("XvBR");i("GSQ4"),i("IJTh"),i("5wJx"),i("HUkS");new s({el:"#joinList",name:"joinList",delimiters:["#{","}"],data:function(){return{joinlist:[],categorylist:[],kindlist:[],total:"",pagenum:1,page:1,pagesize:10,select_category_id:""}},updated:function(){},mounted:function(){this.getcategorylist(),this.getkindlist(),this.getjoinlist()},methods:{getkindlist:function(){var e=this;t.post("https://service.heygears.com/website-service/jobs/kindlist",{},function(t,i){"200"https://static.heygears.com/ultra_web/static/js/pc/zh/join/==t.code?e.kindlist=t.data:alert(t.message)})},getjoinlist:function(e,i,a,s,n){var o=this;switch(n){case"first":this.page=1;break;case"up":this.page>1&&(this.page-=1);break;case"page":this.page=a;break;case"down":this.page<this.pagenum&&(this.page+=1);break;case"last":a=Math.ceil(o.total/10),this.page=a;break;case"category":this.page=1,this.select_category_id=i;break;case"all":this.select_category_id=""}var l={uid:e,category_id:this.select_category_id,page:this.page,pagesize:10,status:2};t.post("https://service.heygears.com/website-service/jobs/list",l,function(t,e){if("200"==t.code||Array.isArray(t))if(Array.isArray(t))o.joinlist=t;else{o.joinlist=t.data,o.total=t.total_count,o.pagenum=Math.ceil(o.total/10);for(var i=0;i<o.joinlist.length;i++){o.joinlist[i].create_time=o.joinlist[i].create_time.substring(0,10);for(var a=0;a<o.kindlist.length;a++)if(o.joinlist[i].kind_id==o.kindlist[a].kind_id){o.joinlist[i].kind_name=o.kindlist[a].kind_name;break}}}else alert(t.message)})},getcategorylist:function(){var e=this;t.get("https://service.heygears.com/website-service/jobs/categorylist",function(t,i){"200"https://static.heygears.com/ultra_web/static/js/pc/zh/join/==t.code?e.categorylist=t.data:alert(t.message)})},tojoinDetail:function(t){window.location.href=a.default+t+"/joindetails.html"},goTomaterialDetail:function(t,e,i){window.localStorage.setItem("heygears_type",t),window.localStorage.setItem("heygears_name",e),window.localStorage.setItem("heygears_name_num",i),window.location.href=a.default+"/material/detail-"+i+".html"}}})}).call(e,i("gaCs"))},IJTh:function(t,e){}},["/lF7"]);