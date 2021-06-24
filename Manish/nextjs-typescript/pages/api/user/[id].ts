import type { NextApiRequest, NextApiResponse } from 'next'
import { usersData } from './index'
interface userType {
    id: number;
    name: string;
    role: string;
}

const user = (req: NextApiRequest, res: NextApiResponse) => {

    const userId = req.query.id;

    console.log(userId);

    const result = usersData.filter((data: any) => {

        return data.id === parseInt(userId)
    })
    if (result.length > 0) {
        res.status(200).json(result[0])
    } else {
        res.status(400).json({ error: 'id not found' })
    }


}

export default user;