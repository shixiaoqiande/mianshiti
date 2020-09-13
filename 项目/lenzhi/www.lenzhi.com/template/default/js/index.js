$("#owl-flash").owlCarousel({
        items : 1,
        lazyLoad : true,
		autoPlay:true,
		itemsDesktop : [1199, 1],
        itemsDesktopSmall : [979, 1],
        itemsTablet : [768, 1],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
		//rewindNav:false,
         navigation : true
      });
	  $("#owl-demo5").owlCarousel({
        items : 1,
        lazyLoad : true,
		autoPlay:false,
		itemsDesktop : [1199, 1],
        itemsDesktopSmall : [979, 1],
        itemsTablet : [768, 1],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
		//rewindNav:false,
         navigation : true
      });
	   $("#owl-demo6").owlCarousel({
        items : 1,
        lazyLoad : true,
		autoPlay:false,
		itemsDesktop : [1199, 1],
        itemsDesktopSmall : [979, 1],
        itemsTablet : [768, 1],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
		//rewindNav:false,
         navigation : true
      });
	   $("#owl-demo7").owlCarousel({
        items : 3,
        lazyLoad : true,
		autoPlay:true,
		itemsDesktop : [1199, 3],
        itemsDesktopSmall : [979, 2],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 2],
		//rewindNav:false,
         navigation : true
      });
	  $("#owl-demo7 .owl-item").hover(function(){
	  	 $("#owl-demo7 .owl-item").find("dd").removeClass("active");
	 	$(this).find("dd").addClass("active");
	  })
	  $("#owl-demo8").owlCarousel({
        items : 3,
        lazyLoad : true,
		autoPlay:true,
		itemsDesktop : [1199, 3],
        itemsDesktopSmall : [979, 2],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479,1],
		//rewindNav:false,
         navigation : true
      });