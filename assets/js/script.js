function updateView() {
    var mapElement = document.getElementById("map");
    mapElement.style.height = (document.body.clientHeight - document.getElementById("navbar").offsetHeight) + "px";
    mapElement.style.width = document.body.clientWidth + "px";

    var helpButton = document.getElementById("help-button");
    helpButton.style.left = (document.body.clientWidth - helpButton.offsetWidth) / 2 + "px";
}

function myMap() {
    updateView();

    var mapOptions = {
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(pos);

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
            });
        }, function() {
            console.log('error setting position')
        });
    } else {
        // Browser doesn't support Geolocation
        console.log('error browser is not supporting Geolocation');
    }
}

window.onresize = function () {
    updateView();
}
