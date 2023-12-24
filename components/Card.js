// components/Card.js
import Link from 'next/link';
import styles from '../styles/Card.module.css';

const Card = ({ imageUrl, title, linkTo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <Link href={linkTo}>
          Go to {title} 
        </Link>
      </div>
    </div>
  );
};

export default Card;



