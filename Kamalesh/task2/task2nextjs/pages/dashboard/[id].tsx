import { useRouter } from "next/router"
import { useState , useEffect } from "react";
import axios from "axios";
import styles from  "./singlePatient.module.scss"
export default function NavBar() {
    const router = useRouter()
    const patientId = router.query.id
    const [patientDetail,setPatientDetail] = useState([{}])
    useEffect(() => {

        async function getSinglePatientData() {
            //const response = await fetch('../api/login')
            //const resData = await response.json()
            //console.log("///////////////////",resData)
        const resData = await axios.get(`http://localhost:8000/patient/single/${patientId}`)
        
        const middlevar = await resData.data
        console.log("response data",middlevar)
        setPatientDetail(resData.data)
      }
      getSinglePatientData()
    },[])
    return (
      <div className="hello">
        {patientDetail.map((row:any) => (
          <div key={row._id} className={styles.mainContainer}>
            
            <div className={styles.infoContainer}>
              <div className={styles.squareWrapper}>
                <div className={styles.square}></div>
                <div className={styles.squareRight}></div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoHeader}> Name </div>
                <div className={styles.infoContent}>{row.Firstname} </div>
                <div className={styles.infoContent}> {row.Middlename}</div>
                <div className={styles.infoContent}> {row.Lastname}</div>
              </div>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.squareWrapper}>
                <div className={styles.square}></div>
                <div className={styles.squareRight}></div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoHeader}> Address </div>
                <div className={styles.infoContent}>{row.Address} </div>
                <div className={styles.infoContent}> {row.state}</div>
                <div className={styles.infoContent}> {row.country}</div>
              </div>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.squareWrapper}>
                <div className={styles.square}></div>
                <div className={styles.squareRight}></div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoHeader}> Physical Details: </div>
                <div className={styles.infoContent}>Height: {row.height} </div>
                <div className={styles.infoContent}>Weight: {row.weight}</div>
              </div>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.squareWrapper}>
                <div className={styles.square}></div>
                <div className={styles.squareRight}></div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoHeader}> Contact </div>
                <div className={styles.infoContent}>{row.phoneNumber} </div>
                <div className={styles.infoContent}> {row.email}</div>
              </div>
            </div>
          </div>
          ))}
      </div>
    )
  }
  