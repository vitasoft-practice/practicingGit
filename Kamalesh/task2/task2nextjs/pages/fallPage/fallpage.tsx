import Image from "next/image"
import React from "react"
import styles from  "./fallPage.module.scss"
import womenImage from "./womenImage.png"
import graph1 from "./graph1.png"
import graph2 from "./graph2.png"
import catalog from "./catalog.png"
import doctorPrescription from "./doctorPrescription.png"
export default function Fallpage() {
    return (
      <div className={styles.Fallpage}>
        <div className={styles.firstPageContent}>
                <div className={styles.leftsidePage}>
                    <div className={styles.leftPageHeader}>Your patients are on the web, you should be too.</div>
                    <div className={styles.leftPageContent}>Modernize your practice with cutting edge e-commerce technology, exclusively through Z Suite.</div>
                    <div className={styles.leftPageButton}>Try it Free</div>
                </div>
                <div className={styles.rightsidePage}>
                    <div className={styles.grid}>
                      <Image alt="woman image" className={styles.womenImage} src={womenImage} width="500" height="700" />
                      <Image alt="woman image" className={styles.graph1} src={graph1} width="200" height="200" />
                      <Image alt="woman image" className={styles.graph2} src={graph2} width="200" height="200" />
                      <Image alt="woman image" className={styles.doctorPrescription} src={doctorPrescription} width="200" height="200" />
                      <Image alt="woman image" className={styles.catalog} src={catalog} width="200" height="200" />
                    </div>
                </div>
                    
            </div>
      </div>
    )
  }
  