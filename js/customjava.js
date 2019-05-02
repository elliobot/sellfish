
var map, infoWindow, currentItem, marker ;
var i = 0;
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
  navigator.geolocation.getCurrentPosition(function(position) {
    pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    map.setCenter(pos);
	
	marker = new google.maps.Marker({
		position: {lat: pos.lat, lng: pos.lng},
		map: map,
	
		draggable: true,
		animation: google.maps.Animation.DROP
		
	});
	marker.addListener('mouseup', function() {
		map.setCenter(marker.getPosition());
		document.getElementById("locationField").value = marker.position;
	});
	document.getElementById("button").addEventListener("click", createDiv);

  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}
function addToCart() {
	

    var original = currentItem;
	original.id = "cartitem" + ++i; // there can only be one element with an ID
	original.className = "grid-item";
	original.style.display = 'block';
	document.getElementById("cartList").appendChild(original);

}
function selectedItem()	{
	if (currentItem != null){	
		var x = document.getElementById("itemList");
		var i;
		for (i = 0; i < x.length; i++) {
		  x[i].style.border = "2px solid black";
		  x[i].style.outlineStyle = "";
		  x[i].style.outlineColor = "";
		}
	}
	currentItem = this;
	this.style.border = "2px solid black";
	this.style.borderColor = "rgb(153, 192, 255)";

	this.style.outlineStyle = "outset";
	this.style.outlineColor = "rgb(153, 192, 255)";
	
}
function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#selectedImage')
                        .attr('src', e.target.result)
                        .width(150)
                        .height(150)
                };

                reader.readAsDataURL(input.files[0]);
            }
}  
function createDiv()	{
	

	var div = document.createElement('div');
	var itemImage = document.createElement('img');
	var itemName = document.createElement('h1');
	var itemCost = document.createElement('p');
	var itemSeller = document.createElement('p');
	var itemLocation = document.createElement('p');

	div.style.border = "2px solid black";
	div.className = "grid-item";
		
	itemImage.className = "itemimage";
	itemImage.src = document.getElementById("selectedImage").src;

	itemName.className = "itemname";
	itemName.innerHTML = document.getElementById("nameField").value;
	
	itemCost.className = "itemcost";
	if (document.getElementById("costField").value != null)
	{
		itemCost.innerHTML = "£" + document.getElementById("costField").value;
	}
	itemSeller.className = "itemseller";
	itemSeller.innerHTML = document.getElementById("firstnameField").value;

	
	itemLocation.className = "itemlocation";
	itemLocation.innerHTML = document.getElementById("locationField").value;


	

	div.appendChild(itemImage);
	div.appendChild(itemName);
	div.appendChild(itemCost);
	div.appendChild(itemSeller);
	div.appendChild(itemLocation);

	div.onclick = selectedItem;

	document.getElementById("itemList").appendChild(div);
	
}

	



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
