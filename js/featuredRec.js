$(document).ready(function(){

	var delay=1000 //set delay in miliseconds
	var curindex=0

	var randomimages=new Array()

	    randomimages[0]="images/gallopinto.jpg"
	    randomimages[1]="images/stuffedpep.jpg"
	    randomimages[2]="images/arrozconleche.jpg"
	    randomimages[3]="images/conch.jpg"
	    randomimages[4]="images/pasta.jpg"

	var preload=new Array()

	for (n=0;n<randomimages.length;n++)
	{
	    preload[n]=new Image()
	    preload[n].src=randomimages[n]
	}

	$(".slide").prepend('<img class="slideshow" name="defaultimage" src="'+randomimages[Math.floor(Math.random()*(randomimages.length))]+'">')

	function rotateimage()
	{

	if (curindex==(tempindex=Math.floor(Math.random()*(randomimages.length)))){
	curindex=curindex==0? 1 : curindex-1
	}
	else
	curindex=tempindex

	    document.images.defaultimage.src=randomimages[curindex]
	}

	setInterval("rotateimage()",delay)

});