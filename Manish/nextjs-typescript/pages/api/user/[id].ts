import type { NextApiRequest, NextApiResponse } from 'next'


const user = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ hello: 'world'})
    // , method: req.method })
}

export default user;