var retningslinjer = {
	getData: function(url){
		var viewModel;
		$.getJSON(url, function(data){
			viewModel = ko.mapping.fromJS(data);
			console.log(viewModel);
			ko.mapping.fromJS(data, viewModel);
			ko.applyBindings(viewModel, document.getElementById("htmlTop"));

			printTableOfContents(data);
		});
	},

	printTableOfContents: function(data){
		console.log(data);
	}
};