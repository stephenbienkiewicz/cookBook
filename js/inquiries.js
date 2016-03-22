$(document).ready(function(){

	$("#submit").click(function(){

		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var message = $("#message").val();

		if(name === "" || email === "" || phone === "" || message === ""){
		
			$(".incomplete").show();
		
		} else {

			$(".popup").show();

			$(".messageemail").html("Email: " + email);
			$(".messagephone").html("Phone number: " + phone);
			$(".Message").html("Message: " + message);
			$(".messagename").html("<p>Message sent!</p> Thank you "+ name + "!");

		}

	});

	$(".btn").click(function(){
		$(".popup").hide();
	});

});