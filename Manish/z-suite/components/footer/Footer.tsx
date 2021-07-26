import React from 'react'
import styles from '../../styles/footer.module.scss'
import Image from 'next/image'
import logo from '../../assets/Logo/logo.png'
import flogo from '../../assets/Logo/f-logo.png'
import Link from 'next/link'
import Hstyles from '../../styles/Home.module.scss'

const Footer = () => {
    return (
        <>
            <footer className={styles.main__footer}>
                <div className={styles.container}>
                    <div className={styles.footer}>
                        <div className={`${styles.vertical__line} ${styles.about}`}>
                            <div className={styles.flogo}>
                                <Image src={logo} alt='Z Suite' height={54} width={169} />
                                <div className={styles.flogo__abs}>
                                    <Image src={flogo} alt='Z Suite' height={50} width={120} />
                                </div>
                            </div>

                            <div className={styles.singup__btn}>
                                <Link href='/signup'>Sign Up</Link>
                            </div>

                        </div>
                        <div className={`${styles.vertical__line} ${styles.address}`}>
                            <div className={styles.title}>
                                <h4>Address</h4>
                            </div>
                            <div className={styles.content}>
                                <p>1020 Howard Ave,Ste B <br />
                                    San Carlos,CA <br />
                                    94070 USA</p>
                            </div>
                        </div>
                        <div className={`${styles.vertical__line} ${styles.hours}`}>
                            <div className={styles.title}>
                                <h4>Hours Of Operations</h4>
                            </div>
                            <div className={styles.content}>
                                <p> Mon-Fri: 9AM - 9PM EST<br />
                                    Sat-Sun: Closed
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.vertical__line} ${styles.info}`}>
                            <div className={styles.title}>
                                <h4>Information</h4>
                            </div>
                            <div className={styles.content}>
                                <ul>
                                    <li>
                                        <Link href='/regulatory-docs'>Regulatory Documents</Link>
                                    </li>
                                    <li>
                                        <Link href='/policy'>Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className={styles.copyright}>
                        <p>&copy;Copyright 2021 ZSHOP.All Rights Reserved. </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

