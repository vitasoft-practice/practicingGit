import type { NextApiRequest, NextApiResponse } from 'next'
import { usersData } from '../data';
import { NextResponse } from 'next/server';

export const GET = (req: NextApiRequest, { params }: { params: { id: string } }) => {
    
    const userId = params.id;

    const result = usersData.find((data: any) => {

        return data.id === parseInt(userId)
    })
    if (result) {
        return NextResponse.json(result)
    } else {
        return NextResponse.error()
    }
}