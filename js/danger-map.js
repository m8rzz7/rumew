var dMap = L.map("map-div").setView([40.50026, -74.443788], 13.25);

var before = L.tileLayer(
  "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 0,
    maxZoom: 20,
    ext: "png",
  }
).addTo(dMap);

function onMapClick(e) {
alert('You clicked the map at ' + e.latlng);
}
dMap.on('click', onMapClick);

// location icons

var icon1 = L.icon({
  iconUrl: "images/SVG/utensils-solid.svg",
  iconSize: [24],
});
var icon2 = L.icon({
  iconUrl: "images/SVG/mug-saucer-solid.svg",
  iconSize: [24],
});
var icon3 = L.icon({
  iconUrl: "images/SVG/pizza-slice-solid.svg",
  iconSize: [20],
});

var icon4 = L.icon({
  iconUrl: "images/SVG/book-solid.svg",
  iconSize: [24],
});
var icon5 = L.icon({
  iconUrl: "images/SVG/compact-disc-solid.svg",
  iconSize: [20],
});
var icon6 = L.icon({
  iconUrl: 'images/SVG/film-solid.svg',
  iconSize: [24],
});

var icon7 = L.icon({
  iconUrl: "images/SVG/ppud.svg",
  iconSize: [24],
});
var icon8 = L.icon({
  iconUrl: 'images/SVG/person-hiking-solid.svg',
  iconSize: [24],
});
var icon9 = L.icon({
  iconUrl: "images/SVG/tree-city-solid.svg",
  iconSize: [30],
});


    
// locations markers
var marker1 = L.marker([40.479425, -74.436339], {
    title: "Harvest Cafe",
    alt: "map marker for harvest cafe",
    popup: "popup1",
    icon: icon1
}).addTo(dMap); //harvest
var marker2 = L.marker([40.49579, -74.44454], {
    title: "Khyber Coffee & Tea",
    alt: "map marker for khyber coffee & tea",
    popup: "popup2",
    icon: icon2
}).addTo(dMap); //khyber
var marker3 = L.marker([40.49941, -74.45321], {
    title: "RU Grill & Pizza",
    alt: "map marker for ru grill & pizza",
    popup: "popup3",
    icon: icon3
}).addTo(dMap); //rugrill

var marker4 = L.marker([40.523935, -74.458939],{
    title: "Paul Robeson Cultural Center",
    alt: "map marker for the Paul Robeson Cultural Center",
    popup: "popup4",
    icon: icon4
}).addTo(dMap); //prcc rad reads
var marker5 = L.marker([40.49907, -74.452343], {
    title:"Spina Records",
    alt: "map marker for spina records",
    popup: "popup5",
    icon: icon5
}).addTo(dMap); // spina records
var marker6 = L.marker([40.525388, -74.437366], {
    title: "Rutgers Cinema",
    alt: "map marker for rutgers cinema",
    popup: "popup6",
    icon: icon6
}).addTo(dMap); // ru cinema

var marker7 = L.marker([40.482662, -74.437108], {
    title: "Passion Puddle",
    alt: "map marker for passion puddle",
    popup: "popup7",
    icon: icon7
}).addTo(dMap); // passion puddle
var marker8 = L.marker([40.521028, -74.441704], {
    title: "Livingston Ecological Preserve",
    alt: "map marker for Livingston Ecological Preserve",
    popup: "popup8",
    icon: icon8
}).addTo(dMap); // eco preserve
var marker9 = L.marker([40.500712, -74.447338], {
    title: "Voorhees Mall",
    alt: "map marker for Voorhees Mall",
    popup: "popup9",
    icon: icon9
}).addTo(dMap); // voorhess trees

// location popups html and options


var popup1 =
  '<a href="#harvest-profile"><h4>Harvest Cafe</h4><img src="images/harvest1.jpg" width="200px" class="center"/></a>';

var popup2 = '<a href="#khyber-profile"><h4>Khyber Coffee  &#38; Tea House</h4> <img src="images/khyber.jpg" width="200px" class="center"/></a>';
var popup3 = '<a href="#rugrill-profile"><h4>RU Grill &#38; Pizza</h4> <img src="images/rugrill.jpeg" width="200px" class="center"/></a>';

var popup4 = '<a href="#radreads-profile"><h4><em>Radical Reads</em> at the PRCC</h4> <img src="images/mew-radreads.jpeg" width="200px" class="center"/></a>';
var popup5 = '<a href="#spina-profile"><h4>Spina Records</h4> <img src="images/spina.jpeg" width="200px" class="center"/></a>';
var popup6 = '<a href="#film-profile" ><h4>Rutgers Cinema</h4> <img src="images/rucinema.jpeg" width="200px" class="center"/></a>';

var popup7 = '<a href="#puddle-profile"><h4>Passion Puddle</h4> <img src="images/passpud.jpeg" width="200px" class="center"/></a>';
var popup8 = '<a href="#hike-profile"><h4>Livi Ecological Preserve</h4> <img src="images/ecoprev.jpeg" width="200px" class="center"/></a>';
var popup9 =
  '<a href="#tree-profile"><h4>Voorhees Mall</h4> <img src="images/mew-tree.jpeg" width="200px" class="center"/></a>';

var popupOptions = {maxWidth:264}

// location popups
marker1.bindPopup(popup1, popupOptions);
marker2.bindPopup(popup2, popupOptions);
marker3.bindPopup(popup3, popupOptions);
marker4.bindPopup(popup4, popupOptions);
marker5.bindPopup(popup5, popupOptions);
marker6.bindPopup(popup6, popupOptions);
marker7.bindPopup(popup7, popupOptions);
marker8.bindPopup(popup8, popupOptions);
marker9.bindPopup(popup9, popupOptions);
