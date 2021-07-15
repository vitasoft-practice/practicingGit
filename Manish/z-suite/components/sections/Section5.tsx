import React from 'react'
import styles from '../../styles/section5.module.scss'
import Hstyles from '../../styles/Home.module.scss'
import Link from 'next/link'

const Section5 = () => {
    return (
        <>
            <div className={styles.main__signup}>
                <div className={Hstyles.container}>
                    <div className={styles.signup}>
                        <div className={styles.title}>
                            <h4>How Do I Sign up for Z Suite services?</h4>
                        </div>
                        <div className={styles.content}>
                            <p>If you already have an existing provider account with Vibrant, click the Sign In <br />button below to log in to the portal and view directions for how to opt-in.</p>

                            <p>If you do not yet have a provider account with Vibrant,<br />
                                click the Create New Account button below to apply for one.</p>

                        </div>
                            <div className={styles.signup__btn}>
                                <ul className={styles.signup__list}>
                                    <li className={styles.signin}>
                                        <Link href='/signin'>Sign In</Link>
                                    </li>
                                    <li className={styles.signup}>
                                        <Link href='/signup'>Create New Account</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
        </>
            )
}

            export default Section5
