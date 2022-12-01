$('.prod-slick').slick({
    rtl:true,
	slidesToShow: 3,
	slidesToScroll:2,
	arrows:false,
    dots: true,
	responsive: [
		 {
		   breakpoint: 1024,
		   settings: {
			 slidesToShow: 2,
			 slidesToScroll: 1,
			 infinite: true,
			 dots: true
		   }
		 },
		 {
		   breakpoint: 768,
		   settings: {
			 slidesToShow: 1,
			 slidesToScroll: 1
		   }
		 },
	   ]
  });
  