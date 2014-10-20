function initialize() {
    var styles = [
		{
		    "featureType": "landscape.man_made",
		    "elementType": "geometry.stroke",
		    "stylers": [
				{ "visibility": "off" }
		    ]
		}, {
		    "featureType": "landscape.man_made",
		    "stylers": [
				{ "visibility": "off" }
		    ]
		}, {
		    "featureType": "road.highway",
		    "stylers": [
				{ "color": "#aaaaaa" },
				{ "weight": 8 },
				{ "visibility": "simplified" }
		    ]
		}, {
		    "featureType": "road.highway",
		    "elementType": "geometry.fill",
		    "stylers": [
				{ "visibility": "on" },
				{ "color": "#aaaaaa" }
		    ]
		}, {
		    "featureType": "road.highway",
		    "elementType": "geometry.stroke",
		    "stylers": [
				{ "visibility": "on" },
				{ "color": "#666666" },
				{ "weight": 1.6 }
		    ]
		}, {
		    "featureType": "road.highway",
		    "elementType": "labels.text.fill",
		    "stylers": [
				{ "visibility": "on" },
				{ "color": "#ffffff" }
		    ]
		}, {
		    "featureType": "road.highway",
		    "elementType": "labels.text.fill",
		    "stylers": [
				{ "visibility": "on" },
				{ "color": "#808080" }
		    ]
		}, {
		    "featureType": "road.highway",
		    "elementType": "labels.text.stroke",
		    "stylers": [
				{ "visibility": "on" },
				{ "color": "#ffffff" },
				{ "weight": 2.7 }
		    ]
		}, {
		    "featureType": "poi",
		    "elementType": "geometry.fill",
		    "stylers": [
				{ "color": "#bbbbbb" }
		    ]
		}, {
		    "featureType": "landscape",
		    "stylers": [
				{ "color": "#dddddd" }
		    ]
		}, {
		    "featureType": "road.arterial",
		    "elementType": "geometry.fill",
		    "stylers": [
				{ "color": "#ffffff" }
		    ]
		}, {
		    "featureType": "road.arterial",
		    "elementType": "geometry.fill",
		    "stylers": [
				{ "color": "#ffffff" }
		    ]
		}, {
		    "featureType": "road.arterial",
		    "elementType": "geometry.stroke",
		    "stylers": [
				{ "color": "#808080" },
				{ "weight": 1 }
		    ]
		}, {
		    "featureType": "road.local",
		    "elementType": "geometry.stroke",
		    "stylers": [
				{ "color": "#808080" },
				{ "weight": 1 }
		    ]
		}, {
		}
    ];

    var latLng = new google.maps.LatLng(59.917710, 10.739980);
    var mapOptions = {
        center: latLng,
        zoom: 17,
        styles: styles,
        scrollwheel: false,
        draggable: false
    };

    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

    var image = '/img/googlemaps_pin.png';

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: image
    });

    var contentString = '<p ><b>Helsedirektoratet</b></p>' +
        '<p >Universitetsgata 2, Oslo, Norge</p>' +
        '<a href="http://www.helsedirektoratet.no">helsedirektoratet.no</a>' +
        '<div><img jsvalues=".src:svImg" width="204" height="50" jstcache="11" src="https://cbks0.googleapis.com/cbk?output=thumbnail&amp;cb_client=apiv3&amp;v=4&amp;panoid=WrlXOEK46SMfn3nFGTa29g&amp;yaw=156.68235608599593&amp;w=204&amp;h=50&amp;thumb=2"></div>' +
        '<p >810 20 050</p>' +
        '<a href="https://plus.google.com/118275817650388008757/about?hl=no-NO">mer informasjon</a>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, this);
    });

    google.maps.event.addListener(marker, 'mouseover', function () {
        infowindow.open(map, this);
    });
}

$(document).ready(function () {
    google.maps.event.addDomListener(window, 'load', initialize);
});