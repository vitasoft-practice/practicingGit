import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    
    const response = await axios.get(`http://localhost:8000/patient/single/${req.body.patientid}`)
    const responsedata = response.data
    res.status(200).json(responsedata)
  } catch (err) {
    console.log("unauthorized users :: ",err)
    res.status(500).json({message:"unauthorized"})
 }
}
  

