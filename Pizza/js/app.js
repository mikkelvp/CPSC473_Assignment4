var main = function () {
	"use strict";

	var map;
	var service;
	var csuf = new google.maps.LatLng(33.882558, -117.883016);
	var request = {
		location: csuf,
		radius: '100',
		query: 'pizza'
	};

	map = new google.maps.Map({
		center: csuf,
		zoom: 8
	});
	service = new google.maps.places.PlacesService(map);
	service.textSearch(request, callback);

	function callback(results, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			results.forEach( function(place) {
				var $tr = $("<tr>");
				var $tdName = $("<td>");
				var $tdAddress = $("<td>");
				var $tdOpen = $("<td>");

				$tdName.text(place.name);
				$tdAddress.text(place.formatted_address);
				$tdOpen.text(place.opening_hours.open_now);

				$tr.append($tdName);
				$tr.append($tdAddress);
				$tr.append($tdOpen);

				$("#pizzaTable").append($tr);
			});
		}
	}
};


$(document).ready(main);