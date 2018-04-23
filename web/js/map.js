function myMap() {
	var mapOptions = {
		center: new google.maps.LatLng(43.6, 3.72),
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.HYBRID
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
