import type { NextApiRequest, NextApiResponse } from 'next'
export const usersData = [
    {
        id: 1,
        name: 'Anish Kumar',
        role: 'junior web Developer'
    },
    {
        id: 2,
        name: 'Anish',
        role: 'junior web full stack '
    },
    {
        id: 3,
        name: 'Sanish',
        role: 'web Developer'
    },
    {
        id: 4,
        name: 'Satish',
        role: 'junior web Developer'
    },
    {
        id: 5,
        name: 'Tanish',
        role: 'junior web Developer'
    }
]


const users = (req: NextApiRequest, res: NextApiResponse) => {
    // res.status(200).json({ hello: 'world', method: req.method })
    res.status(200).json(usersData)

}

export default users;