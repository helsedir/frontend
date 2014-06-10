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

    var infowindow = new google.maps.InfoWindow({
        content: 'Helsedirektoratet\ Universitetsgata 2\ 0164 Oslo\ Norge',
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, this);
    });

    google.maps.event.addListener(marker, 'mouseover', function () {
        infowindow.open(map, this);
    });

    google.maps.event.addListener(marker, 'mouseout', function () {
        infowindow.close();
    });
}

$(document).ready(function () {
    google.maps.event.addDomListener(window, 'load', initialize);
});