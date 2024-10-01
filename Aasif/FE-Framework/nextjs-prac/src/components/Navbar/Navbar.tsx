'use client'

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>VITASOFT</h1>
        </div>
        <ul className={`${styles.navMenu} ${nav ? styles.active : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/counter">Counter 1</Link></li>
          <li><Link href="/counter/context">Counter 2</Link></li>
          <li><Link href="/form">form</Link></li>
          <li><Link href="/user/lazy_loading">lazy loading</Link></li>
        </ul>
        <div className={styles.hamburger} onClick={handleClick}>
          {nav ? '✖' : '☰'}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
