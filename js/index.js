$(document).ready(function(){

	function randomquotes() {

		var number = Math.ceil(Math.random()*8);

		var quotenumber = ".q" + number;

		$(quotenumber).fadeIn(500);

	}

	randomquotes();

});