document.addEventListener('DOMContentLoaded', function() {
    // Sound for Earls Kitchen
    var earlsKitchenSound = new Audio('path_to_kitchen_sound.mp3');
    var earlsKitchenElement = document.getElementById('earls-kitchen');
    earlsKitchenElement.addEventListener('mouseover', function() {
        earlsKitchenSound.play();
    });

    // Sound for Casa Myrna
    var casaMyrnaSound = new Audio('path_to_police_siren.mp3');
    var casaMyrnaElement = document.getElementById('casa-myrna');
    casaMyrnaElement.addEventListener('mouseover', function() {
        casaMyrnaSound.play();
    });
});
