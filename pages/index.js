// pages/index.js
import React from 'react';
import styles from '../styles/Home.module.css';

// Functional component representing the Home page
const Home = () => {
    return (
        // Main container for the Home page
        <div>
            {/* Heading displaying "blank page" */}
            <h1>blank page</h1>
            {/* Card with picture */}
            <div className={styles.card}>
                <img src={"/snowmoon.jpg"} alt="Snow moon" />
            </div>
            {/* Placeholder for any additional content on the Home page */}
        </div>
    );
};

// Exporting the Home component as the default export
export default Home;
