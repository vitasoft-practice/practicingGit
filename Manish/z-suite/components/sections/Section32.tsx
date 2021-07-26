import React from 'react'
import Image from 'next/image'
import zappicon from '../../assets/z-group/icons/z-app.png'
import zapp from '../../assets/z-group/z-app.png'
import styles from '../../styles/section3.module.scss'

const Section32 = () => {
    return (
        <>
            <div className={styles.zgroup}>

                <div className={styles.right__section}>
                    <div className={styles.title}>
                        <div className={styles.z__icons}>
                            <Image src={zappicon} alt='z-shop-icon' width={50} height={50} ḷayout="responsive" />
                        </div>
                        <h2>Z App</h2>
                
                    </div>
                    <div className={styles.zapp__content}>
                        <ul>
                            <li>
                                Track and communicate with patients anywhere, anytime
                            </li>
                            <li>
                                Customize goal setting and tracking to enhance personalized experience

                            </li>
                            <li>
                                Sync to Vibrant lab testing to reinforce healthier diet and lifestyle habits
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.left__section}>
                    <Image src={zapp} alt='z-shop-image' width={530} height={450} ḷayout="responsive"  />
                </div>
            </div>
        </>
    )
}

export default Section32
