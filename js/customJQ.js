
$(".online").ready(function(){

	$("#throwbutton").click(function(){
		console.log("setgsrt");
		$("[style='border: 2px solid rgb(153, 192, 255); outline-style: outset; outline-color: rgb(153, 192, 255);']").hide(1000);

		$("[style='border: 2px solid rgb(153, 192, 255); outline-style: outset; outline-color: rgb(153, 192, 255);']").animate(
		{
			    width: "0%",
				opacity: 0,
				height: "0%",
				fontSize: "3em",
				borderWidth: "0px"

		}, 1000);
		
	});
	$("#keepbutton").click(function(){
	});
	$("#backbutton1").click(function(){
		
		window.location.href = "#foo";

	});
	$("#backbutton2").click(function(){
		
		window.location.href = "#bar";

	});
	$("#sellbutton").click(function(){
		
		window.location.href = "#sell";

	});
});	

	