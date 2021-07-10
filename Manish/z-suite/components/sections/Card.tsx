import React from 'react'
// import Image from 'next/image'
import styles from '../../styles/section1.module.scss';

const Card = ({ Img, title, des }: any) => {
    return (
        <>
            <div className={styles.sec__card}>
                <div className={styles.sec1__icon}>
                    {/* <Image src={Img} alt={title} width={50} height={50} /> */}
                    images
                </div>
                <div className={styles.content}>
                    <h4>
                        {title}
                    </h4>
                    <p>
                        {des}
                    </p>
                </div>
            </div>

        </>
    )
}

export default Card
