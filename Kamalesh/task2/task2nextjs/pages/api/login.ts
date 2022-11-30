import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    axios.get('http://localhost:8000/user')
    .then(function (response) {
        res.json({ messgae: response })
    })
    
}
