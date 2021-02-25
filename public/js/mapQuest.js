function initMap() {
	// add your code here
	L.mapquest.key = "Z8uIRmEmrjyf9oj3cfmlCC6w26PFg7aA";

	//'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map',{
	    center: [32.88, -117.236],
		layers : L.mapquest.titleLayer ('map'),
		zoom: 12,
		zoomControl: false
	});
	//Add marker to the map
	L.marker([32.88, -117.236]).addTo(map);
}