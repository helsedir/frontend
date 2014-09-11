var retningslinjer = {
	getData: function(url){
		var viewModel;
		$.getJSON(url, function(data){
			viewModel = ko.mapping.fromJS(data);
			ko.mapping.fromJS(data, viewModel);
			ko.applyBindings(viewModel, document.getElementById("htmlTop"));
			
			//$('#toc').html(createTOC());
			//console.log(createTOC());
		});
	}
};

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
		local: [{"keyword":"antibiotika"}, {"keyword":"amming"}, {"keyword":"sepsis"},{"keyword":"blodforgiftning"},{"keyword":"nervesystemet"},{"keyword":"abdomen"},{"keyword":"øvre luftveier"},{"keyword":"nedre luftveier"},{"keyword":"urinveier"},{"keyword":"hjertekirurgi"}]
		//prefetch: '../data/antibiotika.json'
	});
 
	antibiotika.initialize();
 
	$('#search_input_retningslinjer .typeahead').typeahead({
		hint: false,
  	highlight: true
	},
	{
  name: 'antibiotika',
  displayKey: 'keyword',
  source: antibiotika.ttAdapter()
	});
	
	
	$('#search_input_retningslinjer').bind('typeahead:selected', function(obj, datum, name) {      
        window.location.href = 'soeketreff.html';
	});
	
	$(document).on('typeahead:opened', function(event, datum) {
  	var width = $(event.target).width();
		$('.tt-dropdown-menu').width(width);
	});
	
	window.localStorage.clear();
	
	prettyPrint();
  epj(); 
});


function goFromSearchToRecommendation(destination, headline) {
	window.location.href = destination;
	
	$(window).bind("load", function() {
   alert("t");
	});
	
	//$(".container").find(".recommendation h1").addClass('open');
}

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

function prettyPrint() {
	if($("article").is(".printable")){
		/*$(".closed").addClass("open");
		$(".closed").removeClass("closed");*/
	
		$(".visuallyhidden").removeClass("visuallyhidden");
	}
}

function epj() {
	if($("article").is(".epj")){
		/*$(".closed").addClass("open");
		$(".closed").removeClass("closed");*/
	
		$(".text.visuallyhidden, .background_information.visuallyhidden").removeClass("visuallyhidden");
	}
}