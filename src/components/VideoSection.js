import React from 'react';
import '../App.css';
import './VideoSection.css';

function VideoSection() {
  return (
    <>
      <div className='video-container'>
        <video src='https://mpartial-data.s3.us-east-2.amazonaws.com/homepage.mp4' preload="auto" autoPlay loop muted />
        <div className="main_banner_text">
          Impartial, Remote, 3rd-Party,
          <br />
          Estimating Engine
        </div>
      </div>
    </>
  );
}

export default VideoSection;
