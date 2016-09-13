$(document).ready(
function()
{
	
	var t;
	Intervalfunc();
	
	$("#gauche").on('click', function() {
		Intervalfunc();
		
		$("#slideshow ul").animate(
		{marginLeft:-480},
		2000,
		function(){
			$(this).find("li:first").before($(this).find("li:last"));
			$(this).css({marginLeft: 0});
		});
	});
	
	$("#droite").on('click', function() {
		Intervalfunc();
		
		$("#slideshow ul").animate(
		{marginLeft:-480},
		2000,
		function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft: 0});
		});
	});
	
	function Intervalfunc() {
		clearInterval(t);
		t = setInterval(
			function(){
				$("#slideshow ul").
				animate({marginLeft:-480},
				1000,
				function(){
					$(this).find("li:last").after($(this).find("li:first"));
					$(this).css({marginLeft: 0});
				})     
			},3000
		);
	}
});
