import React from 'react'
import Image from 'next/image'
import zshopicon from '../../assets/z-group/icons/z-shop.png'
import zshop from '../../assets/z-group/z-shop.png'
import styles from '../../styles/section3.module.scss'

const Section31 = () => {
    return (
        <>
            <div className={styles.zgroup}>
                <div className={styles.left__section}>
                    <Image src={zshop} alt='z-shop-image' width={530} height={330} ḷayout="responsive" />
                </div>
                <div className={styles.right__section}>
                    <div className={styles.title}>
                        <div className={styles.z__icons}>
                        <Image src={zshopicon} alt='z-shop-icon' width={60} height={60} ḷayout="responsive" /> 
                        </div>
                       
                        <h2>Z Shop provides solutions to:</h2>
                    </div>
                    <div className={styles.zshop__content}>
                        <ul>
                            <li>
                                EffortLessly create revenue streams
                            </li>
                            <li>
                                Sell your products and services to wider client base
                            </li>
                            <li>
                                Set in minutes and fully integrated with vibrant labs
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section31
