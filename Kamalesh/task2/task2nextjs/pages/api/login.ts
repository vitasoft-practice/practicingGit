import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    
    const response = await axios.post('http://localhost:8000/login', JSON.parse(req.body))
    const responsedata = response.data
    console.log("response data: ",responsedata)
    if(responsedata && responsedata.message === "Authenticated"){
      res.status(200).json(responsedata)
    }
        } catch (err) {
          console.log("unauthorized users :: ",err)
          res.status(500).json({message:"unauthorized"})
  }
}
  

