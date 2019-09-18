$(document).ready(function () {
	$('.slider_welcome').slick({
		autoplay: true,
		autoplaySpeed: 4600,
		arrows: false,
		dots: true,
		customPaging: function(slider, i) {
			var network = ["intro","work","about","contacts"];
			var name = network[i];
			return '<div class=""><div class="slider_welcome_slide"><p><span>0'+(i+1)+' </span>'+name+'</p></div></div>';
		},
		draggable: false,
		pauseOnHover: false
	});
	$('.slider_quote').slick({
		prevArrow: $('.slider_quote_prev'),
        nextArrow: $('.slider_quote_next')
	});
	$('.slider_our_work').slick({
		prevArrow: $('.slider_our_work_prev'),
        nextArrow: $('.slider_our_work_next')
	});

	// ^^^^^^^^^^^для слайдера^^^^^^^^^^^^^^^
	$('.mobile-menu').click(function(event){
		event.preventDefault();
		$('body').addClass('open-menu');
	});
	$('.mobile-overlay').click(function(event){
		$('body').removeClass('open-menu');
	});

	//^^^^^^^^^^^^^^^для бокового меню^^^^^^^^^^^^^


	// $('[data-toggle="tooltip"]').tooltip()
	// $('[data-toggle="popover"]').popover()

	//^^^^^^^^^^^^^^^для акордеона^^^^^^^^^^^^^

	// $('.accordion_content_text').niceScroll({
 //    	cursorcolor: "#95e1d3"
 //    });

    $('#acc1').niceScroll({
    	cursorcolor: "#95e1d3"
    });
    $('#acc2').niceScroll({
    	cursorcolor: "#95e1d3"
    });
	$('#acc1').getNiceScroll().resize();
	$('#acc2').getNiceScroll().resize();

    // $("#collapseOne").niceScroll("#acc1",{cursorcolor:"#95e1d3", cursoropacitymin: 1});

});