import Button from '@mui/material/Button';
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from "next/router";
export async function getServerSideProps(){

  const resData = await axios.get('http://localhost:8000/patient')
  console.log("All patients details: ", resData.data)
  return{
        props:{
          AllPatients: await resData.data
    }
  }
}
export default function NavBar({AllPatients}) {
    const router =useRouter();
    return (
      <div className="AllPatients">
        <TableContainer sx={{ maxWidth: 650,margin: "0 auto" }} component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight:700,borderBottom:5 }}>First Name</TableCell>
            <TableCell sx={{ fontWeight:700,borderBottom:5 }} align="right">Last Name</TableCell>
            <TableCell sx={{ fontWeight:700,borderBottom:5 }} align="left">email</TableCell>
            <TableCell sx={{ fontWeight:700,borderBottom:5 }} align="right">country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {AllPatients.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { borderBottom: 5 }}}
            >
              <TableCell ><Button variant="text" onClick={ () => {
                router.push(`../${row._id}`)
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
  