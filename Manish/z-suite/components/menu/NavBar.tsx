import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/NavBar.module.scss'
import Hstyles from '../../styles/Home.module.scss'
import { menuLists } from './MenuLists'
import logo from '../../assets/Logo/logo.png'
import flogo from '../../assets/Logo/f-logo.png'

const NavBar = () => {

    const [sticky, setSticky] = useState<boolean>(false);
    const [click, setClick] = useState<boolean>(false);
    const changeBgColor = () => {
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeBgColor);
    }, []);

    const handleClick = () => {
        setClick(!click);
    }
    return (
        <>
            {/* <div className={styles.container}> */}

            <div className={styles.main__nav}>

                <nav className={sticky ? `${styles.nav} ${styles.sticky}` : styles.nav}>

                    <div className={styles.logo}>
                        <Image src={logo} alt='Z Suite' height={54} width={169} />

                        <div className={styles.logo__abs}>
                            <Image src={flogo} alt='Z Suite' height={40} width={120} />
                        </div>
                    </div>

                    <div className={click ? `${styles.main__menu} ${styles.active}` : styles.main__menu}>
                        <ul className={styles.nav__items}>
                            {/* {
                                menuLists.map(menu => (
                                    <>
                                        <li key={menu.id} className={styles.menu__list}>
                                        // <li key={menu.id} className={menu.class}> 
                                            <Link href={menu.route} >{menu.name}</Link>
                                            
                                        </li>
                                    </>
                                ))
                            } */}

                            <li className={`${styles.menu__list} ${styles.dropdown}`}>
                                <Link href='/z-shop' >Z Shop</Link>
                                <i className="fas fa-chevron-down"></i>
                                <ul className={styles.sub__menu__list}>
                                    <li>
                                    <Link href='/z-app' >Lab Services</Link>
                                    </li>
                                    <li>
                                    <Link href='/z-app' >Supplement Dispensary</Link>
                                    </li>
                                    <li>
                                    <Link href='/z-app' >Provider Services</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.menu__list}>
                                <Link href='/z-app' >Z App</Link>
                            </li>
                            <li className={styles.menu__list}>
                                <Link href='/for-patient' >For Patient</Link>
                            </li>
                            <li className={styles.menu__list}>
                                <Link href='/support' >Support</Link>
                            </li>
                          
                            <li className={styles.menu__list} >
                                <Link href='/signIn'>Sign In</Link>
                            </li>
                        </ul>

                    </div>
                    <div className={styles.mobile__menu__btn} onClick={handleClick}>
                        {/* <span></span> */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>


                </nav>




            </div>

            {/* </div> */}

        </>
    )
}

export default NavBar
