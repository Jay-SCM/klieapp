// components/Navbar.js
// import Link from 'next/link';
// const Navbar = () => {
//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <Link href="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link href="/about">About</Link>
//                 </li>
//                 <li>
//                     <Link href="/contact">Contact</Link>
//                 </li>
//                 <li>
//                     <Link href="/weather">Weather</Link>
//                 </li>
//                 <li>
//                     <Link href="/page1">page1</Link>
//                 </li>
//                 <li>
//                     <Link href="/page2">page2</Link>
//                 </li>
//                 <li>
//                     <Link href="/page3">page3</Link>
//                 </li>
//                 <li>
//                     <Link href="/page4">page4</Link>
//                 </li>
//                 <li>
//                     <Link href="/page5">page5</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// };
// export default Navbar;


// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/about">About</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/contact">Contact</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/weather">Weather</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/page1">Page 1</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/page2">Page 2</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/page3">Page 3</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/page4">Page 4</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/page5">Page 5</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
