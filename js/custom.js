$(document).ready(function(){
	/* Hide Section*/
	$(".red").click(function(){
		$(".red-box").hide();
	});
	$(".green").click(function(){
		$(".green-box").hide();
	});
	$(".yellow").click(function(){
		$(".yellow-box").hide();
	});
	$(".maroon").click(function(){
		$(".maroon-box").hide();
	});
	$(".aqua").click(function(){
		$(".aqua-box").hide();
	});
	

	/* Show Section*/
	$(".s-red").click(function(){
		$(".red-box").show();
	});
	$(".s-green").click(function(){
		$(".green-box").show();
	});
	$(".s-yellow").click(function(){
		$(".yellow-box").show();
	});
	$(".s-maroon").click(function(){
		$(".maroon-box").show();
	});
	$(".s-aqua").click(function(){
		$(".aqua-box").show();
	});

	/* All Show/hide Section*/
	$(".all-hide").click(function(){
		$(".all-box").hide();
		$(".hide-menu").hide();
	});
	$(".all-show").click(function(){
		$(".all-box").show();
	});
	$(".hide").hover(function(){
		$(".hide-menu").show();
	});
	$(".hide").mouseleave(function(){
		$(".hide-menu").hide();
	});

	/* command Show/hide Section*/
	$(".command").hide();
	$(".red-box").hover(function(){
		$(".command1").show();
	});
	$(".green-box").hover(function(){
		$(".command2").show();
	});
	$(".yellow-box").hover(function(){
		$(".command3").show();
	});
	$(".maroon-box").hover(function(){
		$(".command4").show();
	});
	$(".aqua-box").hover(function(){
		$(".command5").show();
	});



	$(".box").mouseleave(function(){
		$(".command").hide();
	});
	$(".command1 .bty").click(function(){
		$(".red-box").hide();
	});
	$(".command2 .bty").click(function(){
		$(".green-box").hide();
	});
	$(".command3 .bty").click(function(){
		$(".yellow-box").hide();
	});
	$(".command4 .bty").click(function(){
		$(".maroon-box").hide();
	});
	$(".command5 .bty").click(function(){
		$(".aqua-box").hide();
	});
	$(".btn").click(function(){
		$(".command").hide();
	});


});