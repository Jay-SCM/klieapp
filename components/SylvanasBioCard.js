// components/SylvanasBioCard.js

import React from 'react';
import styles from '../styles/SylvanasBioCard.module.css';

const SylvanasBioCard = ({ imageUrl, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
    </div>
  );
};

export default SylvanasBioCard;

