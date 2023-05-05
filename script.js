var zoom = 1;

$(document).ready(function() {
    window.addEventListener('deviceorientation', function( event ) {
        deviceOrientationData = event;
        console.log(event);
        $("#debug-gyro").html("x: " + event.beta + ",</br>y: " + event.gamma + ",</br>z: " + event.alpha + ",</br>ts: " + event.timeStamp);
        $("#heading").css("transform", "rotate("+event.gamma+"deg)");
    }, false);
    navigator.geolocation.watchPosition(showPosition);

});

function showPosition(position){
    $("#debug-gps").html("Latitude: " + position.coords.latitude + "</br>Longitude: " + position.coords.longitude);
}