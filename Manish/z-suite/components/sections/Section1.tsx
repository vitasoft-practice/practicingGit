import React from 'react'
import Image from 'next/image'
import styles from '../../styles/section1.module.scss'
import Card from './Card'
// import { secLists } from './secLists'

import zshop from '../../assets/z-shop.png'
import zapp from '../../assets/z-app.png'
import zpro from '../../assets/z-pro.png'

const secLists = [
    {
    id:1,
    // Img:'../../assets/z-shop.png',
    Img:{zshop},
    title:"Z Shop",
    des:"Creating revenue streams"

},
{
    id:2,
    Img:{zapp},
    // Img:'../../assets/z-zapp.png',
    title:"Z App",
    des:"Improving patient retention and outcomes"

},
{
    id:3,
    Img:{zpro},
    // Img:'../../assets/z-pro.png',
    title:"Z Pro",
    des:"Marketing and growing your practice"

},


]


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
                        </p>
                        <p> healthcare providers</p>
                    </div>
                    <div className={styles.main__card}>
                        {
                            secLists.map(list => (
                                <Card key={list.id}  title={list.title} des={list.des} />
                            ))
                        }
                    </div>
                </div>
            </div>


        </>
    )
}

export default section1
