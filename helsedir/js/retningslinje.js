

jQuery(document).ready(function() {

  var width = jQuery(window).width();

  //if (width < 625) {
  	jQuery('.recommendation_intro').siblings('.recommendation_extras').addClass('hidden');
  	jQuery('.hide-on-narrow').nextAll().addClass('hidden');
  //}
  
  
  jQuery(window).resize(function () {
    var width = jQuery(window).width();

    //if (width < 625) {
      jQuery('.recommendation_intro').addClass('accordion');
      jQuery('.recommendation_intro.open').siblings('.recommendation_extras').removeClass('hidden');
      jQuery('.recommendation_intro.closed').siblings('.recommendation_extras').addClass('hidden');

      
    //}
    //else if(width >= 600){
    //  jQuery('.recommendation_intro').removeClass('accordion');
    //  jQuery('.recommendation_intro').siblings('.recommendation_extras').removeClass('hidden');  
    //}
  });

  jQuery(window).trigger('resize'); 
  
  jQuery('.recommendation_intro').addClass('closed');
  
  jQuery('.recommendation_intro').on('click', function() {
    var width = jQuery(window).width();
		//if (width < 625) {
			var element = jQuery(this);
      if (element.hasClass('open')) {
        element.siblings('.recommendation_extras').addClass('hidden');
        element.removeClass('open');
        element.addClass('closed');
      }
      else {
        element.siblings('.recommendation_extras').removeClass('hidden');
        element.removeClass('closed');
        element.addClass('open');
        var offset = $(this).offset().top;
        jQuery('html, body').animate({ scrollTop: offset }, 400); // Scroll to the correct section
      }
		//}
  });
  
  
  jQuery(".recommendation_tabs").easyResponsiveTabs({
  	type: 'default', //Types: default, vertical, accordion           
    width: 'auto', //auto or any custom width
    fit: true,   // 100% fits in a container
    closed: 'accordion', // Close the panels on start, the options 'accordion' and 'tabs' keep them closed in there respective view types
		activate: function() {}  // Callback function, gets called if tab is switched
   });
   
  
  jQuery(".pico_details_tabs").easyResponsiveTabs2({
  	type: 'default', //Types: default, vertical, accordion           
    width: 'auto', //auto or any custom width
    fit: true,   // 100% fits in a container
    closed: 'accordion', // Close the panels on start, the options 'accordion' and 'tabs' keep them closed in there respective view types
   });
   
   
   
   jQuery('#local-nav').affix({
   	offset: { top: $('#local-nav').offset().top }
	});
   
});