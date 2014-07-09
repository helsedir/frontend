

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
        //jQuery(this).text(jQuery(this).text().split("Skjul").join("Vis"));
        jQuery(this).find('span').text(jQuery(this).text().split("Skjul").join("Vis"));      
      }
      else {
        element.siblings('.recommendation_kunnskapsgrunnlag').removeClass('hidden');
        element.removeClass('closed');
        element.addClass('open');
        //jQuery(this).text(jQuery(this).text().split("Vis").join("Skjul"));
        jQuery(this).find('span').text(jQuery(this).find('span').text().split("Vis").join("Skjul"));  
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
  	type: 'accordion', //Types: default, vertical, accordion           
    width: 'auto', //auto or any custom width
    fit: true,   // 100% fits in a container
    closed: 'accordion', // Close the panels on start, the options 'accordion' and 'tabs' keep them closed in there respective view types
		activate: function() {}  // Callback function, gets called if tab is switched
   });
   
  
  jQuery(".pico_details_tabs").easyResponsiveTabs2({
  	type: 'accordion', //Types: default, vertical, accordion           
    width: 'auto', //auto or any custom width
    fit: true,   // 100% fits in a container
    closed: 'accordion', // Close the panels on start, the options 'accordion' and 'tabs' keep them closed in there respective view types
   });
 
	/** Twitter typeahead **/
	var antibiotika = new Bloodhound({
  	datumTokenizer: Bloodhound.tokenizers.obj.whitespace('keyword'),
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		local: [{"keyword":"antibiotika"}, {"keyword":"sepsis"},{"keyword":"blodforgiftning"},{"keyword":"nervesystemet"},{"keyword":"abdomen"},{"keyword":"øvre luftveier"},{"keyword":"nedre luftveier"},{"keyword":"urinveier"},{"keyword":"hjertekirurgi"}]
		//prefetch: '../data/antibiotika.json'
	});
 
	var diabetes = new Bloodhound({
  	datumTokenizer: Bloodhound.tokenizers.obj.whitespace('keyword'),
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		local: [{"keyword":"diabetes"}, {"keyword":"antibiotika"}, {"keyword":"type I"},{"keyword":"type II"},{"keyword":"intravenøst"},{"keyword":"insulin"}]
		//prefetch: '../data/diabetes.json'
	});
	
	var spedbarn = new Bloodhound({
  	datumTokenizer: Bloodhound.tokenizers.obj.whitespace('keyword'),
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		local: [{"keyword":"amming"},{"keyword":"ernæring"},{"keyword":"melk"}]
		//prefetch: '../data/spedbarn.json'
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
    header: '<h3 class="hContent search_retningslinjetittel uppercase">Nasjonal faglig retningslinje for antibiotika</h3>'
  }
	},
	{
  name: 'diabetes',
  displayKey: 'keyword',
  source: diabetes.ttAdapter(),
  templates: {
    header: '<h3 class="hContent search_retningslinjetittel uppercase">Nasjonal faglig retningslinje for diabetes</h3>'
  }
  },
  {
	name: 'spedbarn',
  displayKey: 'keyword',
  source: spedbarn.ttAdapter(),
  templates: {
    header: '<h3 class="hContent search_retningslinjetittel uppercase">Nasjonal faglig retningslinje for spedbarnsernæring</h3>'
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
	
	
	$('[data-toggle="popover_grading"]').popover({
    html: true,
    content: '<div class="popoverText"><h4>Svak</h4><p>Fordelene ved å følge anbefalingen vil for de fleste være større enn eventuelle ulemper. Ulike valg kan være riktig for ulike pasienter, og helse- og omsorgspersonell må hjelpe til med å vurdere hva som er riktig i den enkelte situasjon.</p><h4>Sterk</h4><p>Fordelene ved å følge anbefalingen vil for de fleste være klart større enn eventuelle ulemper. Pasienter og helse- og omsorgspersonell vil, i de fleste situasjoner, mene det er riktig å følge anbefalingen.</p></div>',
    trigger: 'hover',
        'placement': 'left'
	});
	
	$('[data-toggle="popover_medicament"]').popover({
    html: true,
    trigger: 'hover',
        'placement': 'top'
	});
	
   
});