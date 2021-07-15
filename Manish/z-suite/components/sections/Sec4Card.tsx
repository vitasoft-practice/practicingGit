import React from 'react'
import Image from 'next/image'
import img from '../../assets/section4/002-hook.png'
import styles from '../../styles/section4.module.scss'

const Sec4Card = ({ content }: any) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__icon}>
                    <Image src={img} alt="icons" width={50} height={50} />
                </div>

                <div className={styles.card__content}>
                    <p>{content}</p>
                </div>
            </div>
        </>
    )
}

export default Sec4Card
