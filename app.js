// Instantiate map
var map = L.map('map').setView([38.9038829, -77.0360032], 15);

// Add tile layer to map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,

    // Replace the below properties with your `Map ID` and `Default Public Token` values you saved earlier, respectively.
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
}).addTo(map);

// Market
var generalAssembly = L.marker( [38.9048542, -77.0339403] ).addTo( map );

// Create a pop-up.
generalAssembly.bindPopup(
  "<h3>General Assembly DC</h3><p>1133 15th St., NW</p><p>8th Floor</p><p>Washington, DC 20005</p>"
)

// Circle
var dupontCircle = L.circle([38.9111048, -77.042613,15], 500, {
    color: 'pink',
    fillColor: 'red',
    fillOpacity: 0.5
}).addTo(map);

// Polygon
var washington = L.polygon([
    [38.934347, -77.119758],
    [38.995421, -77.041006],
    [38.892885, -76.909599],
    [38.791605, -77.038860]
]).addTo(map);



//////////////////////////////////////
////////////// Events ////////////////
//////////////////////////////////////

// Need to define the popup that will appear after a click.
var clickPopup = L.popup();

// Now define when and how `clickPopup` will appear.
map.on( "click", function( event ){
  popup
  .setLatLng( event.latlng )
  .setContent( "Coordinates: " + event.latlng.toString() )
  .openOn( map );
})



//////////////////////////////////////
///////////// GeoJSON ////////////////
//////////////////////////////////////

// We're saving a GeoJSON object to a variable.
var monumentTrail = {
  "type": "Feature",

  // Can set "properties" to whatever we want.
  "properties": {
    "name": "Monuments Trail",
    "city": "Washington, DC",
    "numStops": 5
  },

  // Set geometry type here.
  "geometry": {
    "type": "MultiLineString",
    "coordinates": [
      [[-77.0352791,38.8894838], [-77.050176,38.8892686]],
      [[-77.050176,38.8892686], [-77.0364707,38.8813726]],
      [[-77.0364707,38.8813726], [-77.0090505,38.8899389]]
    ]
  }
}
