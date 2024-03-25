import React from 'react';
import '../stylesheets/background.css';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src={require('../assets/background.mp4')} type="video/mp4" />
      </video>
      <div className="overlay"></div>
    </div>
  );
}

export default VideoBackground;
