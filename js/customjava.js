
var map, infoWindow;
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
  var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Your location'
  });
}
  // Try HTML5 geolocation.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    infoWindow.setPosition(pos);
    infoWindow.setContent('You are here!');
    infoWindow.open(map);
    map.setCenter(pos);
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
  });

} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
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
