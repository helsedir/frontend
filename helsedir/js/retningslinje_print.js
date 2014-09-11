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