import React from 'react'
import styles from '../../styles/slider.module.scss'
import Hstyles from '../../styles/Home.module.scss'
import Image from 'next/image'
import sliderImg from '../../assets/slider/slider-1.png'

const Slider = () => {
    return (
        <>
            <div className={styles.slider}>
                <Image src={sliderImg} alt="slider-img" width={1500} height={650} ḷayout="responsive" />
                <div className={styles.container}>
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

export default Slider
