var map = L.map('mapid').setView([50.025, -125.257076], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

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


L.marker([49.995831, -125.258814], {
    icon: sideBikeIcon
}).addTo(map);

L.marker([50.0324449, -125.2441975], {
    icon: boatIcon
}).addTo(map).bindPopup("<img src=\"discovery-marina.png\"><h2>Discovery Marina</h2><p>Discovery Harbour Marina is a full service marina offering boat moorage, power, water, washrooms, showers, laundry facilities, parking (including boat trailers), and ice. Marine fuel is also available.</p>");

L.marker([50.0159652, -125.237579], {
    icon: frontBikeIcon
}).addTo(map);

var popup = L.popup();


var greenLoop = [
[50.030446610676194, -125.24493455886841],
[50.032210928862064, -125.24688720703124],
[50.033230895744616, -125.24862527847291],
[50.03382356925167, -125.2501058578491],
[50.034471366810685, -125.25257349014284],
[50.034471366810685, -125.25536298751831],
[50.03397518222964, -125.25722980499268],
[50.03357547425511, -125.25862455368042],
[50.03310684687554, -125.2601480484009],
[50.03283118157475, -125.26104927062988],
[50.03272091501134, -125.2617359161377],
[50.03262443156067, -125.2628946304321],
[50.03265199828064, -125.2635812759399],
[50.03153553346378, -125.2637743949890],
[50.03043282668518, -125.2637529373169],
[50.02952307453171, -125.2635383605957],
[50.02913711386621, -125.2636241912841],
[50.02869601216479, -125.2642250061035],
[50.02806192137138, -125.2652335166931],
[50.02756567056317, -125.2656412124633],
[50.02705562966726, -125.26583433151245],
[50.02657315356456, -125.26581287384032],
[50.02615959876196, -125.26561975479125],
[50.02559440143997, -125.26506185531618],
[50.02367819517118, -125.26300191879271 ],
[50.02206521409676, -125.26119947433472],
[50.02076927553599, -125.2599549293518],
[50.01954223765783, -125.25866746902466],
[50.01859091706178, -125.25789499282837],
[50.01784639215138, -125.25740146636961],
[50.01664685552821, -125.25716543197633],
[50.01562653644029, -125.25733709335327],
[50.01455104151456, -125.25768041610716],
[50.0132549002597, -125.25838851928711],
[50.01179325222318, -125.25911808013916],
[50.0105659851036, -125.25963306427002],
[50.00979375602025, -125.25969743728636],
[50.00869055009080, -125.25943994522095],
[50.00684262342671, -125.25901079177855],
[50.00489808656736, -125.25864601135252],
[50.0035051430135, -125.25832414627074],
[50.00238800070007, -125.25823831558226],
[50.00161564021822, -125.25843143463135],
];
var polyline = L.polyline(greenLoop, {
    color: '#28502E',
    smoothFactor: 0.1,
    weight: 8,
    opacity: 0.7
}).addTo(map);

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);



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