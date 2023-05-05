var zoom = 1;

$(document).ready(function() {
    window.addEventListener('deviceorientation', function( event ) {
        deviceOrientationData = event;
        console.log(event);
        $("#debug").text("x: " + event.beta + ", y: " + event.gamma + ", z: " + event.alpha + ", ts: " + event.timeStamp);
    }, false);
});