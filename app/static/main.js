var map = L.map('map').setView([52.520008, 13.404954], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([ 52.535152,13.390206]).addTo(map)
    .bindPopup('Selct your favorite place')
    .openPopup();
    
L.Control.geocoder().addTo(map)
    


map.on('click', function(e){
    console.log(e);
    var lt = String(e.latlng.lat), ln = String(e.latlng.lng);
    console.log(`You selected ${ln},${lt} `);
    document.getElementById('lng').value = ln;
    document.getElementById('lat').value = lt;
})

