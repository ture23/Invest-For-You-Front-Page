$(document).ready(function(){
	/*omogucava izbacivanje sticky navigacije da bude uvjek prisutna kad se skrola prema dnu stranice*/
	
	$('.js--section-features').waypoint(function(direction){
		
		if (direction == "down"){
			$('nav').addClass('sticky');
		}
		else {
			$('nav').removeClass('sticky');
		}
	},{
  	offset: '60px'});
	
	
	/*scroll on buttens dva velika */
	
	$('.js--scroll-to-plann').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
	});
	$('.js--scroll-to-start').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
	});
	
	/*scroll on buttons iz main navi */
	
	/*
	$('.js--food-delivery').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
	});
	$('.js-how-it-works').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-steps').offset().top}, 1000);
	});
	$('.js-our-citiey').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-tities').offset().top}, 1000);
	});
	$('.js-sing-up').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
	});
	$('.js--logo').click(function(){
		$('html, body').animate({scrollTop: $('header').offset().top}, 1000);
	});
	*/
	
	/*nadjeno na internetu i prlagodjeno na nas kod u html-u sa href i id */
	// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
	/*LOGOO*/
	$('.js--logo').click(function(){
		$('html, body').animate({scrollTop: $('header').offset().top}, 1000);
	});
	/*za animaciju odredjenog elementa ili sekcije*/
	$('.js--wp-1').waypoint(function(direction) {
		$('.js--wp-1').addClass('animated fadeIn');
	},{
  	offset: '350px'})
	
	$('.js--wp-2').waypoint(function(direction) {
		$('.app-screen').addClass('animated fadeInUp');
	},{
  	offset: '350px'})
	
	$('.js--wp-3').waypoint(function(direction) {
		$('.js--wp-3-1').addClass('animated bounceInLeft');
	},{
  	offset: '400px'})
	
	$('.js--wp-3').waypoint(function(direction) {
		$('.js--wp-3-2').addClass('animated bounceInUp');
	},{
  	offset: '400px'})
	
	$('.js--wp-3').waypoint(function(direction) {
		$('.js--wp-3-3').addClass('animated bounceInDown');
	},{
  	offset: '400px'})
	
	$('.js--wp-3').waypoint(function(direction) {
		$('.js--wp-3-4').addClass('animated bounceInRight');
	},{
  	offset: '400px'})
	
	$('.js--wp-4').waypoint(function(direction) {
		$('.js--wp-4-1').addClass('animated bounceInLeft');
	},{
  	offset: '400px'})
	
	$('.js--wp-4').waypoint(function(direction) {
		$('.js--wp-4-2').addClass('animated zoomIn');
	},{
  	offset: '400px'})
	
	$('.js--wp-4').waypoint(function(direction) {
		$('.js--wp-4-3').addClass('animated bounceInRight');
	},{
  	offset: '400px'})
	
	
	
	/*******mobile navigation*****/
	/*sve sto treba da se otvara main nav i zatvara */
	
	$('.js-nav-icon').click(function(){
		var nav = $('.js--main-nav');
		var icon = $('.js-nav-icon i');
		nav.slideToggle(200);
		
		if (icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close');
			icon.removeClass('ion-navicon-round');
		}
		else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close');
		}
		
	})
	
	
	
	
	
	
});






