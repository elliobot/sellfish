
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
var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Your location'
  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}
  
function createDiv()	{
	var div = document.createElement("div");
	div.style.border-width = "2";
	div.style.border = "2px solid black";
	div.style.background = "red";
	div.style.color = "white";
	
	
	div.innerHTML = "Hello";

	document.getElementById("itemList").appendChild(div);
	
    border-width: 2;
	border: 2px solid black;
	box-shadow: 5px 5px 5px grey;
	margin-left: 20%;
	margin-top: 30px;
	margin-right: 20%;
	margin-bottom: 50px;
	position: relative;
	text-align: center;
	background-color:white;
}
	
  


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}
