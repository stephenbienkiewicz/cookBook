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

		$("#nameofrecipe").val('');
		$("#ingredient").val('');
		$("#cooking").val('');
		$(".namerec").empty('');
		$(".ing").empty('');
		$(".cook").empty('');
		$(".ing").add('<span style="font-weight: bold">Ingredients:</span>').appendTo(".ing");
		$(".cook").add('<span style="font-weight: bold">Cooking Instructions:</span>').appendTo(".cook");
		$(".ing").hide();
		$(".cook").hide();
	});
	
	/*Clicking on recipe at the gallery, brings out recipe*/

	function showrecipe(elem) {

		var suffix = elem.match(/\d+/);
		var name = ".recipe" + suffix;

		$(name).fadeIn(500);
		
	}
	
	$(".img1").click(function(){showrecipe(".img1")});
	$(".img2").click(function(){showrecipe(".img2")});
	$(".img3").click(function(){showrecipe(".img3")});
	$(".img4").click(function(){showrecipe(".img4")});
	$(".img5").click(function(){showrecipe(".img5")});
	$(".img6").click(function(){showrecipe(".img6")});
	$(".img7").click(function(){showrecipe(".img7")});
	$(".img8").click(function(){showrecipe(".img8")});
	$(".img9").click(function(){showrecipe(".img9")});

	$(".closebutton").click(function(){
		$(".recipe").hide();
	});
});