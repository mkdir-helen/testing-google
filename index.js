function initMap(){
    console.log('hi');
    let options = {
        zoom: 8,
        center: {lat: 33.748997, lng: -84.387985}
    }
    let map = new google.maps.Map(document.getElementById('map'), options);

    //Add marker
    let marker = new google.maps.Marker({
        position: {lat:33.8487, lng: -84.3733},
        map:map,
        // icon: ''
    });

    let infoWindow = new google.maps.InfoWindow({
        content: '<h1>Our school ❤️</h1>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });

}

let API_URL = `https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&callback=initMap`;

let API_script = document.createElement('script');

console.log(API_script);
API_script.setAttribute('src', API_URL);
document.body.appendChild(API_script);