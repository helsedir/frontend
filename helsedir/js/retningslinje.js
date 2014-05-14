

jQuery(document).ready(function() {

  var width = jQuery(window).width();

  //if (width < 625) {
  	jQuery('.recommendation_intro').siblings('.recommendation_text').addClass('hidden');
  	jQuery('.hide-on-narrow').nextAll().addClass('hidden');
  //}
  
  
  jQuery(window).resize(function () {
    var width = jQuery(window).width();

    //if (width < 625) {
      jQuery('.recommendation_intro').addClass('accordion');
      jQuery('.recommendation_intro.open').siblings('.recommendation_text').removeClass('hidden');
      jQuery('.recommendation_intro.closed').siblings('.recommendation_text').addClass('hidden');

      
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
        element.siblings('.recommendation_text, .recommendation_extras').addClass('hidden');
        element.removeClass('open');
        element.addClass('closed');
      }
      else {
        element.siblings('.recommendation_text, .recommendation_extras').removeClass('hidden');
        element.removeClass('closed');
        element.addClass('open');
        var offset = $(this).offset().top;
        jQuery('html, body').animate({ scrollTop: offset }, 400); // Scroll to the correct section
      }
		//}
  });
  
  jQuery('.show_kunnskapsgrunnlag').on('click', function() {
    var width = jQuery(window).width();
		//if (width < 625) {
			var element = jQuery(this);
      if (element.hasClass('open')) {
        element.siblings('.recommendation_kunnskapsgrunnlag').addClass('hidden');
        element.removeClass('open');
        element.addClass('closed');
        jQuery(this).text('Vis kunnskapsgrunnlaget');
      }
      else {
        element.siblings('.recommendation_kunnskapsgrunnlag').removeClass('hidden');
        element.removeClass('closed');
        element.addClass('open');
        jQuery(this).text('Skjul kunnskapsgrunnlaget');
      }
		//}
  });
  
  jQuery('.show_evidensprofil').on('click', function() {
    var width = jQuery(window).width();
		//if (width < 625) {
			var element = jQuery(this);
      if (element.hasClass('open')) {
        element.siblings('.evidensprofil').addClass('hidden');
        element.removeClass('open');
        element.addClass('closed');
        jQuery(this).text('Vis evidensprofilen');
      }
      else {
        element.siblings('.evidensprofil').removeClass('hidden');
        element.removeClass('closed');
        element.addClass('open');
        jQuery(this).text('Skjul evidensprofilen');
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
 
	/** Twitter typeahead **/
	var antibiotika = new Bloodhound({
  	datumTokenizer: Bloodhound.tokenizers.obj.whitespace('keyword'),
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		prefetch: '../data/antibiotika.json'
	});
 
	var diabetes = new Bloodhound({
  	datumTokenizer: Bloodhound.tokenizers.obj.whitespace('keyword'),
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		prefetch: '../data/diabetes.json'
	});
	
	var spedbarn = new Bloodhound({
  	datumTokenizer: Bloodhound.tokenizers.obj.whitespace('keyword'),
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		prefetch: '../data/spedbarn.json'
	});
 
	antibiotika.initialize();
	diabetes.initialize();
	spedbarn.initialize();
 
	$('#search_input_retningslinjer .typeahead').typeahead({
		hint: false,
  	highlight: true
	},
	{
  name: 'antibiotika',
  displayKey: 'keyword',
  source: antibiotika.ttAdapter(),
  templates: {
    header: '<h3 class="search_retningslinjetittel uppercase">Nasjonal faglig retningslinje for antibiotika</h3>'
  }
	},
	{
  name: 'diabetes',
  displayKey: 'keyword',
  source: diabetes.ttAdapter(),
  templates: {
    header: '<h3 class="search_retningslinjetittel uppercase">Nasjonal faglig retningslinje for diabetes</h3>'
  }
  },
  {
	name: 'spedbarn',
  displayKey: 'keyword',
  source: spedbarn.ttAdapter(),
  templates: {
    header: '<h3 class="search_retningslinjetittel uppercase">Nasjonal faglig retningslinje for spedbarnsernæring</h3>'
  }
	});
	
	
	$('#search_input_retningslinjer').bind('typeahead:selected', function(obj, datum, name) {      
        window.location.href = 'soeketreff.html';
	});
	
	$(document).on('typeahead:opened', function(event, datum) {
  	var width = $(event.target).width();
		$('.tt-dropdown-menu').width(width);
	});
	
	window.localStorage.clear();
	
   
});