import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/section2.module.scss';
import Hstyles from '../../styles/Home.module.scss';
import revenue from '../../assets/section2/revenue.png';
import result from '../../assets/section2/result.png';
import retention from '../../assets/section2/customer.png';
import referrals from '../../assets/section2/affiliate-marketing.png';
import res from '../../assets/z-group/z-app.png'
const Section2 = () => {
    const [click, setClick] = useState<string>('rev')
    const clicked = (value: string) => {
        setClick(value)
    }
    return (
        <>
            <div className={styles.tab__group}>
                <div className={Hstyles.container}>
                    <div className={styles.main__tab}>
                        <ul className={styles.tab__list}>
                            <li
                                onClick={() => clicked('rev')}
                                className={click === 'rev' ? styles.active : ''}>
                                <Image src={revenue} alt="revenue-img" height={25} width={18} />
                                Revenue
                            </li>
                            <li className={click === 'res' ? styles.active : ''}
                                onClick={() => clicked('res')}>
                                <Image src={result} alt="result-img" height={25} width={18} />
                                Results
                            </li>
                            <li className={click === 'ret' ? styles.active : ''}
                                onClick={() => clicked('ret')}>
                                <Image src={retention} alt="retention-img" height={25} width={18} />
                                Retension
                            </li>
                            <li className={click === 'ref' ? styles.active : ''}
                                onClick={() => clicked('ref')}>
                                <Image src={referrals} alt="referrals-img" height={25} width={18} />

                                Referrals
                            </li>
                        </ul>

                        <div
                            className={click === 'rev' ? `${styles.tab__content} ${styles.active}` : styles.tab__content}>
                            <div className="tab__1">
                                <div className={styles.tab__des}>
                                    <p>Fitting seamlessly into Vibrant’s existing lab platform framework, Z Suite technology acts as an extension of both the patient’s lab reports and as a premium feature and extension of the healthcare provider’s practice.</p>
                                    <p>By offering a premium collaborative experience for the patient, healthcare providers are able to standout from the crowd and operate competitively in their industry while providing an enhanced patient experience.
                                    </p>
                                    <p>How can Z Suite technology impact your practice’s revenue? Z Suite privides a number of opportunities to monetize what you are already doing in your practice, and to build new revenue streams that help your patients see better results while building your practice.

                                    </p>
                                </div>

                                <div className={styles.tab__img}>
                                    <Image src={res} alt="referrals-img" height={500} width={620} />
                                </div>
                            </div>
                        </div>
                        <div className={click === 'res' ? `${styles.tab__content} ${styles.active}` : styles.tab__content}>
                            <div className="tab__2">
                                <div className={styles.tab__des}>
                                    <p>2Fitting seamlessly into Vibrant’s existing lab platform framework, Z Suite technology acts as an extension of both the patient’s lab reports and as a premium feature and extension of the healthcare provider’s practice.</p>
                                </div>
                                <div className={styles.tab__img}>
                                    <Image src={res} alt="referrals-img" height={500} width={620} />
                                </div>
                            </div>
                        </div>
                        <div className={click === 'ret' ? `${styles.tab__content} ${styles.active}` : styles.tab__content}>
                            <div className="tab__3">
                                <div className={styles.tab__des}>
                                    <p>3Fitting seamlessly into Vibrant’s existing lab platform framework, Z Suite technology acts as an extension of both the patient’s lab reports and as a premium feature and extension of the healthcare provider’s practice.</p>
                                </div>
                                <div className={styles.tab__img}>
                                    <Image src={res} alt="referrals-img" height={500} width={620} />
                                </div>
                            </div>
                        </div>
                        <div className={click === 'ref' ? `${styles.tab__content} ${styles.active}` : styles.tab__content}>
                            <div className="tab__4">
                                <div className={styles.tab__des}>
                                    <p>4Fitting seamlessly into Vibrant’s existing lab platform framework, Z Suite technology acts as an extension of both the patient’s lab reports and as a premium feature and extension of the healthcare provider’s practice.</p>
                                </div>
                                <div className={styles.tab__img}>
                                    <Image src={res} alt="referrals-img" height={500} width={620} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Section2
