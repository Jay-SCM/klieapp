// components/BioBox.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/BioBox.module.css';

const BioBox = () => {
  return (
    <div className={styles.bioBox}>
      <p>
        Lady Sylvanas Windrunner, formerly styled "the Dark Lady" and "the Banshee Queen", is the former Warchief of the Horde and former supreme ruler of the Forsaken, one of the most powerful factions of undead on Azeroth. In life, Sylvanas was the ranger-general of Silvermoon, whose leadership acumen and martial prowess were without equal.
      </p>
      <Link href="/Bios/Sylvanas">
        <button>BIO</button>
      </Link>
    </div>
  );
};

export default BioBox;




