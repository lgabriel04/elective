import React, { useState, useRef } from 'react';
import './CameraApp.css';

function CameraApp() {
  const [stream, setStream] = useState(null);
  const videoRef = useRef();
  const canvasRef = useRef();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(stream);
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const takePicture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas dimensions to match video dimensions
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Capture the current frame from the video feed
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  };

  const saveImage = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL('image/png');

    // Trigger download by creating an anchor element
    const anchor = document.createElement('a');
    anchor.href = image;
    anchor.download = 'captured_image.png';
    anchor.click();
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  return (
    <div>
      {stream ? (
        <div>
          <video ref={videoRef} autoPlay playsInline />
          <button
            className="camera-button"
            onClick={takePicture}
            style={{ backgroundColor: '#ff7f50' }} // Customize the button color
          >
            Take Picture
          </button>
          <button
            className="camera-button"
            onClick={saveImage}
            style={{ backgroundColor: '#ff7f50' }} // Customize the button color
          >
            Save Image
          </button>
          <button
            className="camera-button"
            onClick={stopCamera}
            style={{ backgroundColor: '#ff7f50' }} // Customize the button color
          >
            Stop Camera
          </button>
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
      ) : (
        <button
          className="camera-button"
          onClick={startCamera}
          style={{ backgroundColor: '#ff7f50' }} // Customize the button color
        >
          Scan your notes
        </button>
      )}
    </div>
  );
}

export default CameraApp;
