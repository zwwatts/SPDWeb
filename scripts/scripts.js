function setHover(fileName, image, hoversOn){
	hoversOn = hoversOn ? hoversOn : image;
	image.attr("src", "images/icons/inactive/" + fileName + ".png");
	hoversOn.mouseover(function() { 
		image.attr("src", "images/icons/active/" + fileName + ".png");
	});
	hoversOn.mouseout(function() {
		image.attr("src", "images/icons/inactive/" + fileName + ".png");
	});
}

function toggleTab(e){
	$(".page").hide();
	e.fadeIn(750);
}
function scrolled(scrollPx){

		 


}
$(window).scroll(function(){
		$("#smallsigphi").toggle(false);
		var p = $("#subtitle").offset();
		console.log(p.top);																				   
		if($(window).scrollTop() > p.top)
		{
			$("#smallsigphi").toggle(true);
		}
});