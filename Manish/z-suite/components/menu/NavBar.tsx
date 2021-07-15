import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/NavBar.module.scss'
import { menuLists } from './MenuLists'
import logo from '../../assets/Logo/logo.png'

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
            <div className={styles.container}>

                <div className={styles.main__nav}>

                    <nav className={sticky ? `${styles.nav} ${styles.sticky}` : styles.nav}>

                        <div className={styles.logo}>
                            <Image src={logo} alt='Z Suite' height={54} width={169} />
                        </div>

                        <div className={click?`${styles.main__menu} ${styles.active}`:styles.main__menu}>
                            <ul className={styles.nav__items}>
                                {
                                    menuLists.map(menu => (
                                        <>
                                            <li key={menu.id} className={styles.menu__list}>
                                                <Link href={menu.route} >{menu.name}</Link>
                                                {/* <i class="fas fa-chevron-down"></i> */}
                                            </li>
                                        </>
                                    ))
                                }
                                <li className={styles.menu__list} >
                                    <Link href='/signIn'>Sign In</Link>
                                </li>
                            </ul>

                        </div>
                        <div className={styles.mobile__menu__btn} onClick={handleClick}>
                            {/* <span></span> */}
                            <i className={click?'fas fa-times':'fas fa-bars'}></i>
                        </div>


                    </nav>

                    <div className={styles.menu__middle}>
                        <h4>A technology solution to drive revenue,</h4>
                        <h4>retention,results and referrals</h4>
                    </div>

                    <div className={styles.menu__lower}>
                        <p>LEARN MORE</p>
                        <h4>HOW WE ARE</h4>
                    </div>


                </div>
            </div>

        </>
    )
}

export default NavBar
