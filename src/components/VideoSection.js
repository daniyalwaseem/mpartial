import React from 'react';
import '../App.css';
import './VideoSection.css';

function VideoSection() {
  return (
    <>
      <div className='video-container'>
        <video src='https://mpartial-data.s3.us-east-2.amazonaws.com/homepage.mp4' type="video/mp4" preload="auto" autoPlay loop muted playsinline />
          <div className="main_banner_text">
            Impartial, Remote, 3rd-Party,
            <br />
            Estimating Engine
          </div>
          <div id="slide_down" className="slider_down_btn"></div>
      </div>
    </>
  );
}

export default VideoSection;
