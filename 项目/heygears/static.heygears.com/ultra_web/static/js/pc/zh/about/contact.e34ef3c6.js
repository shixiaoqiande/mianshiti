webpackJsonp([23],{"5A/u":function(e,i,t){"use strict";(function(e){var i=t("XvBR");t("GSQ4"),t("cObT"),t("5wJx"),t("HUkS"),new i({el:"#conect",name:"conect",delimiters:["#{","}"],data:function(){return{isShowMask:!0,name:"",phone:"",email:"",company:"",position:"",country:"",trade:"",remark:"",emailUrl:"",isNameError:!1,name_error_text:"",isEmailError:!1,email_error_text:"",isSuccess:!1,mask_text:""}},created:function(){this.emailUrl=window.location.origin,console.log(this.emailUrl)},mounted:function(){this.address()},methods:{address:function(){var e=new qq.maps.LatLng(23.15638,113.46527),i=new qq.maps.LatLng(23.15338,113.49527),t=new qq.maps.Map(document.getElementById("map_box"),{center:e,zoom:14,panControl:!1,zoomControl:!1,disableDefaultUI:!0}),o=(new qq.maps.Marker({position:i,map:t}),new qq.maps.InfoWindow({map:t}));o.open(),o.setContent('<div class="mapMessage" style="max-width:700px;">广州黑格智造信息科技有限公司</div>'),o.setPosition(i)},verifyName:function(){return this.name?(this.isNameError=!1,!0):(this.isNameError=!0,this.name_error_text="请输入姓名",!1)},verifyEmail:function(){var e=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;return""==this.email?(this.isEmailError=!0,this.email_error_text="请输入邮箱",!1):e.test(this.email)?(this.isEmailError=!1,!0):(this.isEmailError=!0,this.email_error_text="请输入有效邮箱",!1)},sendEmail:function(){if(this.verifyName()&&this.verifyEmail()){var i=this;e.post(i.emailUrl+"/isEmail",{realname:i.name,email:i.email,phone:this.phone,company:i.company,position:i.position,country:i.country,trade:i.trade,remark:i.remark,subscription:""},function(e){console.log(e),i.isSuccess=!0,i.mask_text="您已提交成功！",setTimeout(function(){i.isSuccess=!1},3e3)})}},goToAccessories:function(){window.location.href="https://static.heygears.com/ultra_web/static/js/pc/zh/download.html"}}})}).call(i,t("gaCs"))},cObT:function(e,i){}},["5A/u"]);