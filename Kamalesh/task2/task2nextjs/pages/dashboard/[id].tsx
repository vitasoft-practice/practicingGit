import { useRouter } from "next/router"
import { useState , useEffect } from "react";
import axios from "axios";
export default function NavBar() {
    const router = useRouter()
    const patientId = router.query.id
    const [patientDetail,setPatientDetail] = useState([])
    useEffect(() => {

        async function getSinglePatientData() {
            //const response = await fetch('../api/login')
            //const resData = await response.json()
            //console.log("///////////////////",resData)
        const resData = await axios.get(`http://localhost:8000/patient/single/${patientId}`)
        console.log("response data",resData.data)
        const middlevar = await resData.data
        setPatientDetail(middlevar)
        console.log("patient data:",resData.data)
      }
      getSinglePatientData()
    },[router.query.id])
    return (
      <div className="patientDetail">
        Hiiii {patientId}
      </div>
    )
  }
  