// components/SylvanasBio.js
import React from 'react';
import styles from '../styles/SylvanasBio.module.css';
import Card from './SylvanasBioCard';

const SylvanasBio = () => {
  return (
    <div>
      {/* Image Card */}
      <Card imageUrl="/sylvanas.jpg" title="Sylvanas Windrunner" />

      {/* Bio Box */}
      <div className={styles.bioBox}>
        <p>
          Lady Sylvanas Windrunner, formerly styled "the Dark Lady"
          and "throne, and World of Warcraft. However, Sylvanas has recently
          become more antagonistic, serving as one of the main antagonists
          (alongside N'Zoth) in Battle for Azeroth, and a major antagonist in
          Shadowlands.
        </p>
      </div>
    </div>
  );
};

export default SylvanasBio;
