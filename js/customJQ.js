$(document).ready(function(){
	$("#throwbutton").click(function(){
		console.log("setgsrt");
		$("[style='border: 2px solid red; outline-style: outset; outline-color: red;']").hide(1000);

		$("[style='border: 2px solid red; outline-style: outset; outline-color: red;']").animate(
		{
			    width: "0%",
				opacity: 0,
				height: "0%",
				fontSize: "3em",
				borderWidth: "0px"

		}, 1000);
		
	});
});	

	