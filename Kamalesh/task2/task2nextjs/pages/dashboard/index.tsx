import NavBar from "../../components/navbar/navbar"
import Button from '@mui/material/Button';
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState , useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import styles from  "./doctorPatient.module.scss"
//export async function getServerSideProps(context){
//  const { params } = context
//  console.log(")((&^^%%%",params)
//  const resData = await axios.get('http://localhost:8000/patient/635dba395447d80c71395d0f')
//  //console.log("patients details: ", resData.data)
//  return{
//    props:{
//      patients: await resData.data
//    }
//  }
//}
export default function Dashboard() {
    const router =useRouter();
    const [patients , setPatients ] = useState([{
      Firstname:"",
      Middlename:"",
      Lastname:"",
      height:0,
      weight:0,
      phoneNumber:'',
      email:'',
      country:'',
      Address:'',
      _id:'',
      zipcode:'',
      state:''
    }])
    const doctor = useSelector((state:any) => state.user)
    const doctorId = doctor.user.doctorId
    useEffect(() =>{
      async function getPatientData() {
        const resData = await axios.get(`http://localhost:8000/patient/${doctorId}`)
        console.log("particular doctor patients:", resData.data)
        setPatients(resData.data)
      }
      getPatientData()
    },[])
    return (
      <div className="doctorPatient">
        <div className={styles.topbutton}>
        <Button onClick={() =>{
           router.push(`../dashboard/allPatients/allpatients`)
        }} sx={{
                  color: 'white',
                  background: 'black',
                  width: '100%',
                  margin: "0 auto",
                  '&:hover': {
                    background: 'linear-gradient(93.03deg, #20B2E3 -27.2%, #0ED9D4 135.73%)',
                    color: '#FFFFFF',
                  }
                  }}>All patients</Button>
        </div>
      <TableContainer className={styles.patientdoctorTable} component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight:700,borderBottom:5 }}>First Name</TableCell>
            <TableCell sx={{ fontWeight:700,borderBottom:5 }} align="left">Last Name</TableCell>
            <TableCell sx={{ fontWeight:700,borderBottom:5 }} align="left">email</TableCell>
            <TableCell sx={{ fontWeight:700,borderBottom:5 }} align="right">country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { borderBottom: 5 }}}
            >
              <TableCell ><Button variant="text" onClick={ () => {
                router.push(`../dashboard/${row._id}`)
              }}>{row.Firstname}</Button>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.Lastname}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
      
    )
  }

  

