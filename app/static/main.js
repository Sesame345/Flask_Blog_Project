var map = L.map('map').setView([52.520008, 13.404954], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([ 52.535152,13.390206]).addTo(map)
    .bindPopup('Find the location')
    .openPopup();
    L.Control.geocoder().addTo(map);

