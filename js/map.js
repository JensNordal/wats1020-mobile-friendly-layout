// Map.js ---> Script to run Leaflet.js map

//Set script to run after document load
$(document).ready(function() {


    //Create map and set home location
    var map = L.map('map-container').setView([47.608013, -122.335167], 14);

	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';


    //Create map layers and set attributes
    var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

    var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap"   target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a     href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img  src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
        subdomains: ['otile1','otile2','otile3','otile4']
});

    var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap"   target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a     href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img  src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
        subdomains: ['otile1','otile2','otile3','otile4']
});

    var mapLayers = {
        "Satellite": satLayer,
        "Map View": drawLayer,
        "Open Street Maps": osm
};

    L.control.layers(mapLayers).addTo(map);
        satLayer.addTo(map);


    //Add markers, circle, and polygon to identify key areas on map
    var marker = L.marker([47.608013, -122.335167]).addTo(map);
        marker.bindPopup('<b>Videophile Productions</b><br>1234 5th AVE<br>Seattle, WA.<br>98144');


	//Listen for clicks on map and return lat/long in popup
	var popup = L.popup();

	function onMapClick(e) {
    	popup
        	.setLatLng(e.latlng)
        	.setContent("You clicked the map at " + e.latlng.toString())
        	.openOn(map);
	}

	map.on('click', onMapClick);

});
