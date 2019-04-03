// var map = L.map('mapid').setView([50.025, -125.257076], 15);

var map = L.map('mapid', {
    center: [50.017003, -125.240807],
    zoom: 14,
    scrollWheelZoom: false
});


var smallMap = L.map('smallMap', {
    center: [50.017003, -125.240807],
    zoom: 10,
    scrollWheelZoom: false
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(smallMap);

var mapIcon = L.Icon.extend({
    options: {
        iconSize: [50, 75], // size of the icon
        iconAnchor: [25, 75], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -76] // point from which the popup should open relative to the iconAnchor
    }
})

var sideBikeIcon = new mapIcon({
    iconUrl: 'side_bike_marker.png'
})
boatIcon = new mapIcon({
    iconUrl: 'boat_marker.png'
})
frontBikeIcon = new mapIcon({
    iconUrl: 'front_bike_marker.png'
})


L.marker([50.000348, -125.258939], {
    icon: sideBikeIcon
}).addTo(map).bindPopup("<img src=\"images/beaver_lodge_trails.png\"><div class=\"popup-text\"><h2>Beaver Lodge Trails</h2><p>Built near the city of Campbell River, this winding network of trails and pathways is home to many runners, walkers, cyclists and even equestrians. Snow free most of the year, the trails are a great place for winter and night riding or bringing beginner riders to help build their skills. Recent trail work and improvements have been occurring through the park.</p></div>");

L.marker([50.033277, -125.243906], {
    icon: boatIcon
}).addTo(map).bindPopup("<img src=\"images/discovery-marina.png\"><div class=\"popup-text\"><h2>Discovery Marina</h2><ul><li>Address: 1434 Ironwood St, Campbell River, BC V9W 5T5</li><li>Hours:  Open 8 a.m. ⋅ Closes 6 p.m.</li><li>Phone: (250) 287-2614</li></ul><p>Discovery Harbour Marina is a full service marina offering boat moorage, power, water, washrooms, showers, laundry facilities, parking (including boat trailers), and ice. Marine fuel is also available.</p></div>");

L.marker([50.015838, -125.234754], {
    icon: frontBikeIcon
}).addTo(map).bindPopup("<img src=\"images/sequoia_park.png\"><div class=\"popup-text\"><h2>Sequoia Park</h2><p>The bright orange Torii Gate prominently displayed at Sequoia Park was a gift from our sister city of Ishikari, Japan. It is the first authentic Torii gate on Canadian soil, beach access, picnic tables and benches, a stop on the Rotary Sea Walk.</p></div>");

L.marker([49.995038, -125.228734], {
    icon: frontBikeIcon
}).addTo(map).bindPopup("<img src=\"images/rotary-beach-park.jpg\"><div class=\"popup-text\"><h2>Rotary Beach Park</h2><p>This quaint little stop along the Rotary Sea Walk is home to many driftwood carvings, picnic tables, benches and wash rooms; it is a great place for a family picnic. Here you will find the Sally Campbell River Sea Walk Park Rotary Beach park Vancouver IslandWellman memorial garden, with tributes to many of our dearly departed friends and neighbours and because it is on the Rotary Seawalk course there are fantastic ocean views.</p></div>");

L.marker([50.000071, -125.230413], {
    icon: frontBikeIcon
}).addTo(map).bindPopup("<img src=\"images/50th_parallel.jpg\"><div class=\"popup-text\"><h2>50th Parallel Marker</h2><p>This 50th parallel marker was placed by the Rotary Club. It is on the Seawalk, another Rotary project. It is just one of many things to enjoy as you stroll along. At the official unveiling, the Rotary invited anyone who was celebrating their 50th birthday or 50th wedding anniversary that year to be part of the official photo.</p></div>");


L.marker([49.978457, -125.245556], {
    icon: frontBikeIcon
}).addTo(map).bindPopup("<img src=\"images/NIC-Campbell-river.jpg\"><div class=\"popup-text\"><h2>North Island College</h2><ul><li>Address: 1685 S Dogwood St, Campbell River, BC V9W 8C1</li><li>Hours:  Open 8 a.m. ⋅ Closes 8 p.m.</li><li>Phone: (250) 923-9700</li></ul><p>There are two NIC facilities in Campbell River: the Campbell River campus and the Vigar Vocational Centre.The Campbell River campus is shared with a high school, Timberline Secondary School – the only shared college/high school facility in Canada.</p></div>");

L.marker([49.965439, -125.208524], {
    icon: frontBikeIcon
}).addTo(map).bindPopup("<img src=\"images/willow-point-estuary.png\"><div class=\"popup-text\"><h2>Willow Point Estuary</h2><p>Wonderful beach, great ambience most days as people are appreciating the ocean and mountain views at all times of the year. There is always driftwood all along the shoreline to light beach fires, also providing places to sit.</p></div>");




var popup = L.popup();


var polyline = L.polyline(coords, {
    color: '#28502E',
    smoothFactor: 0.1,
    weight: 8,
    opacity: 0.7
}).addTo(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);



// var planes = [
//     ["Discovery Marina", 50.0324449, -125.2441975],
//     ["Sequoia Park", 50.0159652, -125.237579],
//     ["Beaver Lodge Park", 49.9859959, -125.2619886]

// ];

// for (var i = 0; i < planes.length; i++) {
//     marker = new L.marker([planes[i][1], planes[i][2]])
//         .bindPopup(planes[i][0])
//         .addTo(map);
// }

//         L.Routing.control({
//   waypoints: [
//     L.latLng(50.0324449, -125.2441975),
//     L.latLng(50.0159652, -125.237579)
//   ]
// }).addTo(mymap);