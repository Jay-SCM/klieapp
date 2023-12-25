// components/VideoPlayer.js
import React from 'react';
import styles from '../styles/VideoPlayer.module.css';

const VideoPlayer = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className={styles.videoContainer}>
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube Video Player"
        allowFullScreen
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        muted  
        className={styles.videoFrame}
      ></iframe>
    </div>
  );
};

export default VideoPlayer;



