//var map = L.map('map').setView(center: [40.640139, -74.026769], 11);
// var geojsonLayer = new L.GeoJSON.AJAX("data/2050.geojson");
// var geojsonLayer = new L.GeoJSON.AJAX("data/2020.geojson");
//var geojsonLayer = new L.GeoJSON.AJAX("data/sandy.geojson");        // uses leaflet-ajax plugin: to automate ajax accessing geojson file: https://github.com/calvinmetcalf/leaflet-ajax
	//geojsonLayer.addTo(map);



var map = L.map('map').setView([40.640139, -74.026769], 12);

var sandy = new L.GeoJSON.AJAX("data/sandy3.geojson", {
	color:'orange',
	weight:'1',
	opacity:'.2',
	fillOpacity: '.1',
	renderer: 'L.CANVAS'
	});

var twenty_twenty = new L.GeoJSON.AJAX("data/twenty3.geojson", {
	color:'blue',
	weight:'1',
	opacity:'.3',
	fillOpacity: '.1',
	renderer: 'L.CANVAS'
	});

var twenty_fifty = new L.GeoJSON.AJAX("data/fifty3.geojson", {
					color:'red',
					weight:'1',
					opacity:'.5',
					fillOpacity: '.1',
					renderer: 'L.CANVAS'
					});

var layerGroup = new L.LayerGroup();



var baseLayers = {								// CONTROLS FOR MAP POLYLINE LAYERS:
	"1. Flooded Areas during Hurricane Sandy (2011)": sandy,
	"2. Projected Sea Level Rise Due to Climate Change: 2020": twenty_twenty,
	"3. Projected Sea Level Rise Due to Climate Change: 2050": twenty_fifty,
	// "Hide All":
	};
L.control.layers(baseLayers).addTo(map).setPosition('topright');



	// MAP LAYER FOR TILES AND OSM AND MAPBOX LICENSING
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibTFyIiwiYSI6ImNqN2hsaGQ5MDFraWozNG10NGFrOTVrMXEifQ.wSOsUGJUsjMPl8GF-5b_yg', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.light'
	}).addTo(map);






$( function() {
	 $( "#accordion" ).accordion();
	 animate:100;
 } );

//  $( ".selector" ).accordion({
//    activate: function( event, ui ) {}
//  });
//
// $( ".selector" ).on( "accordionactivate", function( L.layers(baseLayers[0]).addTo(map), ui ) {} );

// $('#ui-id-3:visible').live(function(){
// 	sandy.addTo(map);
// });
// $(document("#ui-id-4").attr("aria-hidden", "false"){
// 	sandy.addTo(map);
// });
// $("#accordion").on(':visible:' "#ui-id-3", (function(){
// 	sandy.addTo(map);
// }));
// $("#accordion").click("#ui-id-5:visble", (function(){
// 	sandy.removeLayer(map),
// 	twenty_twenty.addTo(map);
// }));
$("#accordion h3:eq(1)").on("click", function(){
	sandy.addLayer(sandy).addTo(map);
	// $("#sidebar-wrapper").css("border-color", "orange")
})
$("#accordion h3:eq(2)").on("click", function(){
	layerGroup.clearLayers(),
	twenty_twenty.addTo(map);
	// $("#sidebar-wrapper").css("border-color", "blue")

})
$("#accordion h3:eq(3)").on("click", function(){
	layerGroup.clearLayers(),
	twenty_fifty.addTo(map);
})
// $("#accordion").click("#ui-id-7", (function(){
// 	twenty_fifty.addTo(map);
// }));

// http://www.sparkgeo.com/labs/bigleaflet/
// http://mapnik.org/
// https://github.com/calvinmetcalf/leaflet-ajax
// http://leafletjs.com/examples/layers-control/
