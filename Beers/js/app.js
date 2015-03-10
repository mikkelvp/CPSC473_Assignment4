var main = function () {
	"use strict";

	$.getJSON("http://api.openbeerdatabase.com/v1/beers.json?callback=?", function (response) {
		response.beers.forEach(function (beer) {
			var $tr = $("<tr>").hide();
			var $tdName = $("<td>");
			var $tdDescription = $("<td>");
			var $tdAbv = $("<td>");
			var $tdBrewery = $("<td>");

			$tdName.text(beer.name);
			$tdDescription.text(beer.description);
			$tdAbv.text(beer.abv);
			$tdBrewery.text(beer.brewery.name);

			$tr.append($tdName);
			$tr.append($tdDescription);
			$tr.append($tdAbv);	
			$tr.append($tdBrewery);

			$("#beerTable").append($tr);
			$tr.fadeIn();
		});
	});
};

$(document).ready(main);