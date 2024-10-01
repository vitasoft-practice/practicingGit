import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import { usersData, userType } from './data'

export const GET = (req: NextApiRequest, res: NextApiResponse) => {
    return NextResponse.json(usersData)
}
