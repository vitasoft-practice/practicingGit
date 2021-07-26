import React from 'react'
import Image from 'next/image'
import zproicon from '../../assets/z-group/icons/z-pro.png'
import zpro from '../../assets/z-group/z-pro.png'
import styles from '../../styles/section3.module.scss'

const Section33 = () => {
    return (
        <>
            <div className={styles.zgroup}>
                <div className={styles.left__section}>
                    <Image src={zpro} alt='z-shop-image' width={500} height={345} ḷayout="responsive" />
                </div>
                <div className={styles.right__section}>
                    <div className={styles.title}>
                        <div className={styles.z__icons}>
                            <Image src={zproicon} alt='z-shop=icon' width={50} height={50} ḷayout="responsive"  />
                        </div>
                        <h2>Z Pro</h2>
                    </div>
                    <div className={styles.zpro__content}>
                        <ul>
                            <li>
                                Create demand for your services
                            </li>
                            <li>
                                Professional marketing to grow your practice
                            </li>
                            <li>
                                Customized to your practice’s needs and goals
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section33
