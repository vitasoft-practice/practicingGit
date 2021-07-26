import React from 'react'
import Image from 'next/image'
import styles from '../../styles/section1.module.scss'
import Card from './Card'
import { secLists } from './secLists'

const section1 = () => {

    return (
        <>

            <div className={styles.container}>
                <div className={styles.section1}>

                    <div className={styles.title}>
                        <p>Z SUITE</p>
                        <h4>What is Z Suite ?</h4>
                    </div>
                    <div className={styles.des}>
                        <p>Z Suite is a unique technology solution for concierge and integrative medicine practices,aiding
                            healthcare providers</p>
                        {/* <p> </p> */}
                    </div>
                    <div className={styles.main__card}>
                        {
                            secLists.map((list, index) => (

                                <Card key={index} Img={list.Img} title={list.title} des={list.des} />
                                
                            ))
                        }
                    </div>
                </div>
            </div>


        </>
    )
}

export default section1
