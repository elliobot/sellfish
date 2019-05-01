
var map, infoWindow, currentItem, marker;
var pos = {
        lat: 0,
        lng: 0
      };
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 16
	});
	infoWindow = new google.maps.InfoWindow;
	title: 'Your location'
	
	
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
	
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
	});
	
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}
function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
function selectedItem()	{
	if (currentItem != null){	
		var x = document.getElementsByClassName("grid-item");
		var i;
		for (i = 0; i < x.length; i++) {
		  x[i].style.border = "2px solid black";
		  x[i].style.outlineStyle = "";
		  x[i].style.outlineColor = "";
		}
	}
	currentItem = this;
	this.style.border = "2px solid red";
	this.style.outlineStyle = "outset";
	this.style.outlineColor = "red";
	
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
	itemCost.innerHTML = "£" + document.getElementById("costField").value;

	itemSeller.className = "itemseller";
	itemSeller.innerHTML = document.getElementById("firstnameField").value;

	
	itemLocation.className = "itemlocation";
	

	

	div.appendChild(itemImage);
	div.appendChild(itemName);
	div.appendChild(itemCost);
	div.appendChild(itemSeller);
	div.appendChild(itemLocation);

	div.onclick = selectedItem;

	document.getElementById("itemList").appendChild(div);
	
}
	
	
document.getElementById("button").addEventListener("click", createDiv);



function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}
