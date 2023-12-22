
// import Link from 'next/link';
// import styles from '../styles/Navbar.module.css';
//
// const Navbar = () => {
//     return (
//         <nav className={styles.navbar}>
//             <ul className={styles.navList}>
//                 <li className={styles.navItem}>
//                     <Link href="/">Home</Link>
//                 </li>
//                 <li className={styles.navItem}>
//                     <Link href="/about">About</Link>
//                 </li>
//                 <li className={styles.navItem}>
//                     <Link href="/contact">Contact</Link>
//                 </li>
//                 <li className={styles.navItem}>
//                     <Link href="/weather">Weather</Link>
//                 </li>
//                 <li className={styles.navItem}>
//                     <Link href="/page1">Page 1</Link>
//                 </li>
//                 <li className={styles.navItem}>
//                     <Link href="/page2">Page 2</Link>
//                 </li>
//                 <li className={styles.navItem}>
//                     <Link href="/page3">Page 3</Link>
//                 </li>
//                 <li className={styles.navItem}>
//                     <Link href="/page4">Page 4</Link>
//                 </li>
//                 <li className={styles.navItem}>
//                     <Link href="/page5">Page 5</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// };
//
// export default Navbar;


// adding dropdown menu for page3 and 1
// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                {/* Individual navigation items */}
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

                {/* Dropdown for Page 1 */}
                <li className={styles.navItem}>
                    <Link href="/page1">Page 1</Link>
                    {/* Dropdown list for Page 2 */}
                    <ul className={styles.dropdown}>
                        <li className={styles.dropdownItem}>
                            <Link href="/page2">Page 2</Link>
                        </li>
                    </ul>
                </li>

                {/* Dropdown for Page 3 */}
                <li className={styles.navItem}>
                    <Link href="/page3">Page 3</Link>
                    {/* Dropdown list for Page 4 and Page 5 */}
                    <ul className={styles.dropdown}>
                        <li className={styles.dropdownItem}>
                            <Link href="/page4">Page 4</Link>
                        </li>
                        <li className={styles.dropdownItem}>
                            <Link href="/page5">Page 5</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;



