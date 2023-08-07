const display = document.getElementById('display');

const positionObj = {
    lat: 24.5821173,
    lon: 90.3776532
};

(function() {
    getLocation();
})();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        display.innerHTML = 'Geolocation is not supported by this browser';
    }
}

function showPosition(position) {
    positionObj.lat = position.coords.latitude;
    positionObj.lon = position.coords.longitude;
}

function contact() {
    fetch("https://by-cycle-rider.vercel.app/cycle/contact", {
        method: 'POST',
        body: JSON.stringify(positionObj),
        headers: {
            'content-type': 'application/json',
            'identity': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjeWNsZU5hbWUiOiJQaG9lbml4IiwiY3ljbGVJZCI6IjY0YzdhYTNmOTdiODA3YWI2MWFkNmM1OSIsImlhdCI6MTY5MDg1NDQ3NiwiZXhwIjoxNjk4NjMwNDc2fQ.HCYu59GVPsfWaesGcNQihqUTUew6J9pLazsyfRS1acI'
        }
    }).then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

setInterval(contact, 3000);