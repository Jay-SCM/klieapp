// components/Footer.js
import Link from 'next/link';
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        // Main footer container
        <footer className={styles.footer}>
            <div>
                {/* Footer heading */}
                <h3 className={styles['footer-heading']}>BigFooterBigGood</h3>
                {/* Footer navigation list */}
                <ul className={styles['footer-list']}>
                    {/* Individual items in the footer navigation */}
                    <li className={styles['footer-list-item']}>
                        <Link href="/contact" className={styles['footer-link']}>Contact</Link>
                    </li>
                    <li className={styles['footer-list-item']}>
                        <Link href="/location" className={styles['footer-link']}>Location</Link>
                    </li>
                    <li className={styles['footer-list-item']}>
                        <Link href="/social" className={styles['footer-link']}>Social</Link>
                    </li>
                </ul>
            </div>
            {/* Copyright information */}
            <p>&copy; one Footer to Rule them All</p>
        </footer>
    );
};

export default Footer;



