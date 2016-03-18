$(document).ready(function(){

	$("#submit").click(function(){

		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var message = $("#message").val();

		$(".contactform").reset();

		$(".messagename").add(name).appendTo(".messagename");



	});

});