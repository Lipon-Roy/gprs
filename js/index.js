const display = document.getElementById('display');

(function() {
    getLocation();
})();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, null, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    } else {
        display.innerHTML = 'Geolocation is not supported by this browser';
    }
}

function showPosition(position) {
    display.innerHTML = "Latitude: " + position.coords.latitude + "</br>" + "Longitude: " + position.coords.longitude;
}