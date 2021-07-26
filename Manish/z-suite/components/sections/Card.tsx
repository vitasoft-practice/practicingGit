import React from 'react'
import Image from 'next/image'
import styles from '../../styles/section1.module.scss';
import img from '../../assets/z-group/icons/z-shop.png'

const Card = ({ Img, title, des }: any) => {
    // console.log(Img);
    return (
        <>
            <div className={styles.sec__card}>
                <div className={styles.sec1__icon}>

                    {
                        Img
                    }
                    {/* <Image src={Img} alt={title} width={50} height={50} /> */}
                    {/* <Image src={img} alt={title} width={50} height={50} /> */}

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
