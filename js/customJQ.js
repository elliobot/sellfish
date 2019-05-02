
$(".online").ready(function(){

	$("#wantbutton").click(function(){

		$("[style='border: 2px solid rgb(153, 192, 255); outline-style: outset; outline-color: rgb(153, 192, 255);']").slideUp("slow");
		
	});
	$("#throwbutton").click(function(){
			
		$("[style='border: 2px solid rgb(153, 192, 255); outline-style: outset; outline-color: rgb(153, 192, 255);']").slideUp("slow");

	});
	
	
	$("#backbutton1").click(function(){
		
		window.location.href = "#foo";

	});
	$("#backbutton2").click(function(){
		
		window.location.href = "#bar";

	});
	$("#backbutton3").click(function(){
		
		window.location.href = "#bar";

	});

	$("#sellbutton").click(function(){
		
		window.location.href = "#sell";

	});
	$("#cartbutton").click(function(){
		
		window.location.href = "#cart";

	});
});	

	