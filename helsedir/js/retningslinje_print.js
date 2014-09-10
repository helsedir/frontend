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

/*function createTOC() {
	var x = document.createElement('ol');

	var toBeTOCced = getElementsByTagNames('h2,h3,h4');
	if (toBeTOCced.length < 2) return false;

	for (var i=0;i<toBeTOCced.length;i++) {

		var tmp = document.createElement('li');
		tmp.innerHTML = toBeTOCced[i].innerHTML;
		x.appendChild(tmp);

		if (toBeTOCced[i].nodeName == 'H3')
			tmp.className += 'h3';
		if (toBeTOCced[i].nodeName == 'H4')
			tmp.className += 'h4';
		if (toBeTOCced[i].nodeName == 'H5')
			tmp.className += 'h5';
		if (toBeTOCced[i].nodeName == 'H2') 
			tmp.className += 'h2';


		var headerId = toBeTOCced[i].id || 'link' + i;
		tmp.href = '#' + headerId;
		toBeTOCced[i].id = headerId;

		
	}
	console.log(x);
	return x;
}

var TOCstate = 'none';

function getElementsByTagNames(list,obj) {
	if (!obj) var obj = document;
	var tagNames = list.split(',');
	var resultArray = new Array();
	for (var i=0;i<tagNames.length;i++) {
		var tags = obj.getElementsByTagName(tagNames[i]);
		for (var j=0;j<tags.length;j++) {
			resultArray.push(tags[j]);
		}
	}
	var testNode = resultArray[0];
	if (!testNode) return [];
	if (testNode.sourceIndex) {
		resultArray.sort(function (a,b) {
				return a.sourceIndex - b.sourceIndex;
		});
	}
	else if (testNode.compareDocumentPosition) {
		resultArray.sort(function (a,b) {
				return 3 - (a.compareDocumentPosition(b) & 6);
		});
	}
	return resultArray;
}*/