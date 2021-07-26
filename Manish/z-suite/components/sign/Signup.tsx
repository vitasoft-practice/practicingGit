import React from 'react'
import styles from '../../styles/signup.module.scss'
import Banner from './Banner'
import Link from 'next/link'
import SignupForm from './SignupForm'



const Signup = () => {
    return (
        <>
            <Banner />
            <div className={styles.main__signup}>
                <div className={styles.left__section}>
                    <div className={styles.main__form}>
                        <div className={styles.form__title}>

                            <h4>
                                <i className="fas fa-arrow-left"></i>

                                Marketing Services Interest Form
                            </h4>
                        </div>
                        <div className={styles.form__des}>
                            <p>Thanks for your interest in Z Pro Marketing Services. Please answer these brief questions about your practice and a Marketing Account Management Expert will be in touch with you within 1 business day. </p>
                        </div>
                        <div className={styles.form}>
                            {/* <form>

                                <label htmlFor="name">Your Name:</label>
                                <input type="text" placeholder="Enter Name" />
                            </form> */}

                            <SignupForm />

                        </div>
                    </div>

                </div>
                <div className={styles.right__section}>
                    <div className={styles.socials__links}>
                        <div className={styles.socials__link}>
                            <i className="far fa-envelope"></i>
                            <Link href="/support" >support@z-shop.com</Link>
                        </div>
                        <div className={styles.socials__link}>
                            <i className="fab fa-facebook-f"></i>
                            <Link href="/facebook" >Facebook</Link>

                        </div>
                        <div className={styles.socials__link}>
                            <i className="fab fa-instagram"></i>
                            <Link href="/insta" >Instagram</Link>
                        </div>
                        <div className={styles.socials__link}>
                            <i className="fab fa-linkedin-in"></i>
                            <Link href="/linkedin">Linkedin</Link>
                        </div>



                    </div>


                    <div className={styles.form__signin}>
                        <div className={styles.title}>
                            <h4>Already with Z Shop?</h4>
                        </div>
                        <div className={styles.des}>
                            <p>
                                Please
                                <Link href="/signin">sign in</Link>
                                with your Z Shop
                                account to get more information
                                about our marketing services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup
