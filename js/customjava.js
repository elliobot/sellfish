
var map, infoWindow, currentItem, marker ;
var userLng, userLat;
var j = 0;
var pos = {
        lat: 0,
        lng: 0
      };
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 16
	});

	
	
}
  // Try HTML5 geolocation.
if (navigator.geolocation) {
	//Run geolocator
	navigator.geolocation.getCurrentPosition(function(position) {
		pos = {
		  lat: position.coords.latitude,
		  lng: position.coords.longitude
		};
		
		//set the variables as the users location
		userLng = position.coords.latitude;
		userLat = position.coords.longitude;
		
		//set initial map center as the users location
		map.setCenter(pos);
		
		marker = new google.maps.Marker({
			//set the initial marker position as the user location
			position: {lat: pos.lat, lng: pos.lng},
			map: map,
		
			//allows the marker to be dragged and dropped
			draggable: true,
			animation: google.maps.Animation.DROP
			
		});
		
		//when the mouse has stopped dragging the marker
		marker.addListener('mouseup', function() {
			//set map center at the new location
			map.setCenter(marker.getPosition());
			
			//put info in a hidden textbox
			document.getElementById("locationField").value = marker.position;
		});
		
		//when the create button is pressed, run the createDiv func
		document.getElementById("button").addEventListener("click", createDiv);

  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}
//function to move object to the cart page
function addToCart() {
	
	//set the new item as the one selected
    var original = currentItem;
	
	//give it a unique ID
	original.id = "cartitem" + ++j; // there can only be one element with an ID
	
	//set the class as a grid item
	original.className = "grid-item";
	original.style.display = 'block';
	
	//clone the div to the cart page's grid
	document.getElementById("cartList").appendChild(original);

}

//a failed attempt at getting the difference between 2 coordinates

	//function distanceAway() {
	//	var R = 6371e3; // metres
	//	var φ1 = userLat.toRadians();
	//	var φ2 = lat2.toRadians();
	//	var Δφ = (lat2-userLat).toRadians();
	//	var Δλ = (lon2-userLng).toRadians();
	//	//var radLat1 = lat1.toRadians();
	//	//var radLat2 = lat2.toRadians();
	//	//var radDiff1 = (lat2-lat1).toRadians();
	//	//var radDiff2 = (lon2-lon1).toRadians();
	//	
	//	var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
	//			Math.cos(φ1) * Math.cos(φ2) *
	//			Math.sin(Δλ/2) * Math.sin(Δλ/2);
	//	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	//
	//	var d = R * c;
	//}
	
//a function to select the item clicked and de-select every other item
function selectedItem()	{
	//set x as the amount of items 
	var x = document.getElementsByClassName("grid-item");

	//for each item 
	for (var i = 0; i < x.length; i++) {
	
		//set their border to the default black with null outline
		  x[i].style.border = "2px solid black";
		  x[i].style.outlineStyle = "";
		  x[i].style.outlineColor = "";
	
	}
	
	//the currently selected item set
	currentItem = this;
	
	//style the object to have a highlighted border with an outset bevel
	this.style.border = "2px solid black";
	this.style.borderColor = "rgb(153, 192, 255)";

	this.style.outlineStyle = "outset";
	this.style.outlineColor = "rgb(153, 192, 255)";

}
//a function to set and dispaly the image uploaded
function readURL(input) {
			//if there is an image available
            if (input.files && input.files[0]) {
				//create a reader
                var reader = new FileReader();

				//when reader loaded
                reader.onload = function (e) {
					//set the img object as the selected image with dimentions 150x150
                    $('#selectedImage')
                        .attr('src', e.target.result)
                        .width(150)
                        .height(150)
                };

				//read the first image loaded by the reader
                reader.readAsDataURL(input.files[0]);
            }
}  
// the function to submit the item listing form
function createDiv()	{
	
	//create the heirarchy of objects within in the div
	var div = document.createElement('div');
	var itemImage = document.createElement('img');
	var itemName = document.createElement('h1');
	var itemCost = document.createElement('h2');
	var itemSeller = document.createElement('h2');
	var itemLocation = document.createElement('a');

	//set border style and class of the div
	div.style.border = "2px solid black";
	div.className = "grid-item";
		
	//collect the image from the uploaded image
	itemImage.className = "itemimage";
	itemImage.src = document.getElementById("selectedImage").src;

	itemName.className = "itemname";
	itemName.innerHTML = document.getElementById("nameField").value;
	
	
	itemCost.className = "itemcost";
	
	//if there is a number inputted in the field
	if (document.getElementById("costField").value != null)
	{
		//set the item cost as the number inserted with a £ sign
		itemCost.innerHTML = "Cost: £" + document.getElementById("costField").value;
	}
	//the name of seller grabbed from the login form
	itemSeller.className = "itemseller";
	itemSeller.innerHTML = "Sold By " + document.getElementById("firstnameField").value;

	//set the itemlocation field as invisible
	itemLocation.className = "itemlocation";
	itemLocation.innerHTML = document.getElementById("locationField").value;
	itemLocation.style.visibility = "hidden";
	
	//validation check that all the needed fields are filled
	if(document.getElementById("nameField").value == "" || document.getElementById("selectedImage").src == "" || document.getElementById("costField").value == "" || document.getElementById("firstnameField").value == ""){
		alert("Please input missing data.");

	}
	else{
	//if there are no errors with the field validation, append the objects into the heirarchy
	div.appendChild(itemImage);
	div.appendChild(itemName);
	div.appendChild(itemCost);
	div.appendChild(itemSeller);
	div.appendChild(itemLocation);
	div.onclick = selectedItem;
	

	//create the div object in the itemlist grid
	document.getElementById("itemList").appendChild(div);
	alert("Item Created!");


	
	}
}

//A bold attempt at having the accellarometer shake hide the selected object
	//window.addEventListener('devicemotion', function(event) {
	//	console.log(event.acceleration.x + ' m/s2');
	//	if(event.acceleration.x > 0.5)
	//	{
	//	currentItem.visibility = "hidden";
	//	}
	//});

//handles errors in the geolocating
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	if (setPosition)
	{
	  infoWindow.setPosition(pos);
	  infoWindow.setContent(browserHasGeolocation ?
							'Error: The Geolocation service failed.' :
							'Error: Your browser doesn\'t support geolocation.');
	  infoWindow.open(map);
	}
}
