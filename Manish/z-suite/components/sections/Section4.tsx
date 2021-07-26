import React from 'react'
import Image from 'next/image'
import img from '../../assets/section4/002-hook.png'
import styles from '../../styles/section4.module.scss'
import Hstyles from '../../styles/Home.module.scss'
import Sec4Card from './Sec4Card'
import { lists } from './sec4Lists'

const Section4 = () => {
    return (
        <>
            <div className={styles.main__experience}>
                <div className={Hstyles.container}>
                    <div className={styles.main__experiences}>
                        <div className={styles.title}>
                            <h4>The Z Suite Experience
                            </h4>
                        </div>
                        <div className={styles.main__card}>
                            {
                                lists.map(list => (
                            
                                        <Sec4Card key={list.id} Img={list.Img} content={list.des} />
                                 
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4
