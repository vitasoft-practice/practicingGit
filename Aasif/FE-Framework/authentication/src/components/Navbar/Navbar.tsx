'use client'

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logoutImg from './image.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const router = useRouter()

  const handleClick = () => setNav(!nav);

  const handleLogout = async () => {
    document.cookie = "token=;";
    router.push("/login");
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1><Link href="/">VITASOFT</Link></h1>
        </div>
        <ul className={`${styles.navMenu} ${nav ? styles.active : ''}`}>
          <li><Link href="/user">Users</Link></li>
          <li><Link href="/counter">Counter 1</Link></li>
          <li><Link href="/counter/context">Counter 2</Link></li>
          <li><Link href="/form">form</Link></li>
          <li><Link href="/user/lazy_loading">lazy loading</Link></li>
          <li onClick={handleLogout} className={styles.logout}>Logout <Image src={logoutImg} alt='icon' width={10} height={15} style={{paddingTop: '5px'}}/></li>
        </ul>
        <div className={styles.hamburger} onClick={handleClick}>
          {nav ? '✖' : '☰'}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
