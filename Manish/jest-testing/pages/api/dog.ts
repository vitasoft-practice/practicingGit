import type { NextApiRequest, NextApiResponse } from 'next'

const url = "https://dog.ceo/api/breeds/image/random";
export const getDog = async () => {
    const response = await fetch(url);
    return await response.json();
};



export default async (req: NextApiRequest,
    res: NextApiResponse) => {
    try {
        const dog = await getDog();
        res.statusCode = 200;
        res.json(dog);
    } catch (e) {
        res.statusCode = 500;
        res.json({ status: "error" });
    }
};