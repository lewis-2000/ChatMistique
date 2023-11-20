document.addEventListener("DOMContentLoaded", function () {

    var loaded = false;
    function initializeCamera() {
        navigator.mediaDevices.getUserMedia({ video: true, audio:true })
            .then(function (stream) {
                
                playSound();
                var videoElement = document.getElementById('videoElement');
                var selfvideoElement = document.getElementById('self-videoElement');
                var videoLoadingElement = document.getElementById('loadingVideo');
    
                loaded = true;
                //playSound();
                videoLoadingElement.style.display = 'none';
    
                videoElement.srcObject = stream;
                selfvideoElement.srcObject = stream;
                selfvideoElement.style.border = " solid 1px #000";
                            
            })
            .catch(function (error) {
                console.error('Error accessing the camera:', error);
                videoLoadingElement.textContent = "Camera Permission denied.";
            });
    }
    var sound = new Audio("../assets/audio/phone-call-14472.mp3");
    
    function playSound() {
        sound.play();
    }

    function stopAudio() {
        sound.pause();
    }

    
    // Call the functions
    initializeCamera(); 

});
