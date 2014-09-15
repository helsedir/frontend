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

$(runJqueryUIStuff());

function runJqueryUIStuff(){
	$(function () {
	    //creates collapsible headings. The tag wrapping this class will get an angle icon
	    $(".accordion h2, .accordion h3, .accordion h4, .accordion h5").each(function () {
	        var collapseElement = $(this);
	        var contentToHide = collapseElement.next();
	        var parentTag = collapseElement.parent();
	        contentToHide.addClass(' visuallyhidden');
	        parentTag.addClass(' has-hidden-content');
	    });

	    //handles click events on collapsible headings
	    $(".accordion h2, .accordion h3, .accordion h4, .accordion h5").click(function () {
	        var collapseElement = $(this);
	        var contentToHide = collapseElement.next();
	        var parentTag = collapseElement.parent();
	        console.log("click");
	        if (!contentToHide.hasClass("visuallyhidden")) {
	            contentToHide.slideUp('fast', function () {
	                contentToHide.addClass('visuallyhidden')
	                    .slideDown(0);
	            });
	            parentTag.removeClass("has-visible-content");
	            parentTag.addClass("has-hidden-content");
	        } else {
	            contentToHide.slideUp(0, function () {
	                contentToHide.removeClass('visuallyhidden')
	                    .slideDown(500);
	            });
	            parentTag.addClass("has-visible-content");
	            parentTag.removeClass("has-hidden-content");
	        }
	    });

	    //creates collapsible headings based on screen size
	    $(window).on('load resize', function () {
	        var windowWidth = $(window).width();

	        if (windowWidth <= 599) {
	            $(".accordion_mobile h2").each(function () {
	                var $collapseElement = $(this);
	                var $contentToHide = $collapseElement.next();
	                var $parentTag = $collapseElement.parent();
	                if (!$contentToHide.hasClass('visuallyhidden') && !$parentTag.hasClass('has-visible-content') && !$parentTag.is('a')) {
	                    $contentToHide.addClass(' visuallyhidden');
	                    $parentTag.addClass(' has-hidden-content');
	                }
	            });
	            //stretch search field in header to window width on mobile screens
	            $('#mainsearch').css('width', windowWidth);
	        } else {
	            $(".accordion_mobile h2").each(function () {
	                var $collapseElement = $(this);
	                var $contentToHide = $collapseElement.next();
	                var $parentTag = $collapseElement.parent();
	                if (($contentToHide.hasClass('visuallyhidden') || $parentTag.hasClass('has-hidden-content')) && !$collapseElement.hasClass('accordion') && !$parentTag.is('a')) {
	                    $contentToHide.removeClass('visuallyhidden');
	                    $parentTag.removeClass('has-hidden-content');
	                } else if ($parentTag.hasClass('has-visible-content')) {
	                    $parentTag.removeClass('has-visible-content');
	                }
	            });
	        }
	    });
	    //handles click events on collapsible mobile headings
	    $(".accordion_mobile h2").click(function () {
	        var windowWidth = $(window).width();

	        if (windowWidth <= 599) {
	            var $header = $(this);
	            var $content = $header.next();
	            var $parent = $header.parent();
	            if (!$header.hasClass('accordion')) {
	                if ($parent.hasClass("has-hidden-content")) {
	                    $parent.addClass("has-visible-content");
	                    $parent.removeClass("has-hidden-content");
	                    $content.slideUp(0, function () {
	                        $content.removeClass('visuallyhidden')
	                            .slideDown(500);
	                    });
	                } else {
	                    $parent.removeClass("has-visible-content");
	                    $parent.addClass("has-hidden-content");
	                    $content.slideUp('fast', function () {
	                        $content.addClass('visuallyhidden')
	                            .slideDown(0);
	                    });
	                }
	            }
	        }
	    });
	    //styles tables. workaround for IE8
	    $('table.table_general tr:nth-child(2n+1)').addClass('odd');

	    $('#menushortcut').on('click', function () {
	        var expandedContent = $(".js-expand");
	        expandedContent.slideUp(0, function () {
	            expandedContent.removeClass('visuallyhidden')
	                .slideDown(500);
	        });
	        $('#tab_header1').focus();
	    });

	    //show/hide more news/conferences
	    $('.showmorenews').on('click', function () {
	        $(this).toggleClass('visuallyhidden').siblings().removeClass('visuallyhidden').slideUp(0).slideDown(700);
	    });

	    $('.order').on('click', function () {
	        $('.shoppingcartbutton').toggle(800);
	    });
	});
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
	  
	  
	  jQuery('.recommendation h2').on('click', function() {
	  	var wrapper = jQuery(this).parent().parent();
	  		slider(wrapper, wrapper.siblings('.text, .background_information'));
	  });

	 
		
		
}


/*function goFromSearchToRecommendation(destination, headline) {
	window.location.href = destination;
	
	$(window).bind("load", function() {
   alert("t");
	});
	
	//$(".container").find(".recommendation h1").addClass('open');
}*/

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

function typeahead(){
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
}

