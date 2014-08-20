

jQuery(document).ready(function() {

	jQuery('.header_wrapper').siblings('.text').addClass('visuallyhidden');
	jQuery('.gradingInfo').addClass('visuallyhidden');
	jQuery('.recommendationGrading').addClass('closed');

  jQuery(window).resize(function () {
      jQuery('.header_wrapper').addClass('accordion');
      jQuery('.accordion.open').siblings('.text').removeClass('visuallyhidden');
      jQuery('.accordion.closed').siblings('.text').addClass('visuallyhidden');

  });

  jQuery(window).trigger('resize'); 
  jQuery('.header_wrapper').addClass('closed');
  
  
  jQuery('.recommendation h1').on('click', function() {
  	var wrapper = jQuery(this).parent().parent();
  		slider(wrapper, wrapper.siblings('.text, .background_information'));
  });
  
  jQuery('.recommendationGrading').on('click', function() {
  		slider(jQuery(this), jQuery(this).parent().siblings('.gradingInfo'));
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
	
	
	$('[data-toggle="popover_grading"]').popover({
    html: true,
    content: '<div class="popoverText"><h4>Svak</h4><p>Fordelene ved å følge anbefalingen vil for de fleste være større enn eventuelle ulemper. Ulike valg kan være riktig for ulike pasienter, og helse- og omsorgspersonell må hjelpe til med å vurdere hva som er riktig i den enkelte situasjon.</p><h4>Sterk</h4><p>Fordelene ved å følge anbefalingen vil for de fleste være klart større enn eventuelle ulemper. Pasienter og helse- og omsorgspersonell vil, i de fleste situasjoner, mene det er riktig å følge anbefalingen.</p></div>',
    trigger: 'hover',
        'placement': 'right'
	});
	
	$('[data-toggle="popover_medicament"]').popover({
    html: true,
    trigger: 'hover',
        'placement': 'top'
	});
	
   
});

  function slider(accordion, areaToExpand) {
	  if(accordion.hasClass('open')){
		  areaToExpand.slideUp('fast', function () {
			  areaToExpand.addClass('visuallyhidden').slideDown(0);
		  });
		  accordion.removeClass('open');
		  accordion.addClass('closed');
	  } else {
		  areaToExpand.slideUp(0, function () {
			  areaToExpand.removeClass('visuallyhidden').slideDown(500);
		  });
		  accordion.removeClass('closed');
		  accordion.addClass('open');
	  }
  }