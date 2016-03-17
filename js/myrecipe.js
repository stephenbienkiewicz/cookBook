$(document).ready(function(){

	$(".addbutton").click(function(){
		$(this).hide();
		$(".recipes").show(500);
	});

	$("#savename").click(function(){
		var name = $("#nameofrecipe").val();	
		$(".namerec").text(name);	
	});

	$("#save").click(function(){
		/*var list = $(".ing").text();*/
		var list = $("#ingredient").val(); //for forms you use val() instead of text to get the info
		$(".ing")
			.show()
			.add("<p>"+ list +"</p>").appendTo(".ing");
	});

	$("#savecook").click(function(){
		/*var list = $(".ing").text();*/
		var list = $("#cooking").val(); //for forms you use val() instead of text to get the info
		$(".cook")
			.show()
			.add("<p>"+ list +"</p>").appendTo(".cook");
	});

	$(".donebutton").click(function(){
		
		$(".recipes").hide(function(){
			$(".addbutton").show();
		});

	});
	
});