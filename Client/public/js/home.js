
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function (stream) {
    var videoElement = document.getElementById('videoElement');
    var selfvideoElement = document.getElementById('self-videoElement');
    var videoLoadingElement = document.getElementById('loadingVideo');

    videoLoadingElement.style.display = 'none';

    videoElement.srcObject = stream;
    selfvideoElement.srcObject = stream;
    selfvideoElement.style.border = " solid 1px #000";
  })
  .catch(function (error) {
    console.error('Error accessing the camera:', error);
    videoLoadingElement.InnertextContent = "Camera Permision denied.";
    
  });