var retningslinjer = {
	getData: function(url){
		var viewModel;
		$.getJSON(url).done(function(data){
			viewModel = ko.mapping.fromJS(data);
			ko.mapping.fromJS(data, viewModel);
			ko.applyBindings(viewModel, document.getElementById("htmlTop"));
			
			//$('#toc').html(createTOC());
			//console.log(createTOC());
		});
	},
	addIndex: function(){
		var indices = [];
		// jQuery will give all the HNs in document order
		jQuery('article h2,h3,h4,h5,h6').each(function(i,e) {
		    var hIndex = parseInt(this.nodeName.substring(1)) - 2;
		    // just found a levelUp event
		    if (indices.length - 1 > hIndex) {
		      indices= indices.slice(0, hIndex + 1 );
		    }

		    // just found a levelDown event
		    if (indices[hIndex] === undefined) {
		       indices[hIndex] = 0;
		    }

		    // count + 1 at current level
		    indices[hIndex]++;

		    // display the full position in the hierarchy
		    
		    jQuery(this).prepend(indices.join(".")+" ");

		});
	}
};
