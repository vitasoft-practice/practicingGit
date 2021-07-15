import React from 'react'
import Section31 from './Section31'
import styles from '../../styles/section3.module.scss'
import Hstyles from '../../styles/Home.module.scss'
import Section32 from './Section32'
import Section33 from './Section33'

const Section3 = () => {
    return (
        <>
            <div className={styles.main__zgroup}>
                <div className={Hstyles.container}>
                    <div className={styles.group__section}>
                        <div className={styles.main__title}>
                            <h4>WHAT IS Z SUITE?</h4>
                        </div>

                        <Section31 />
                        <Section32 />
                        <Section33 />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Section3
