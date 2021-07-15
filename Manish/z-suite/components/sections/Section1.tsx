import React from 'react'
import Image from 'next/image'
import styles from '../../styles/section1.module.scss'
import Hstyles from '../../styles/Home.module.scss'
import Card from './Card'
import { secLists } from './secLists'
import zshop from '../../assets/z-group/icons/z-shop.png'
import zapp from '../../assets/z-group/icons/z-app.png'
import zpro from '../../assets/z-group/icons/z-pro.png'

// const secLists = [
//     {
//         id: 1,
//         Img: { zshop },
//         title: "Z Shop",
//         des: "Creating revenue streams"

//     },
//     {
//         id: 2,
//         Img: { zapp },
//         title: "Z App",
//         des: "Improving patient retention and outcomes"

//     },
//     {
//         id: 3,
//         Img: { zpro },
//         title: "Z Pro",
//         des: "Marketing and growing your practice"

//     },


// ]


const section1 = () => {

    return (
        <>

            <div className={Hstyles.container}>
                <div className={styles.section1}>

                    <div className={styles.title}>
                        <p>Z SUITE</p>
                        <h4>What is Z Suite ?</h4>
                    </div>
                    <div className={styles.des}>
                        <p>Z Suite is a unique technology solution for concierge and integrative medicine practices,aiding
                        </p>
                        <p> healthcare providers</p>
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
