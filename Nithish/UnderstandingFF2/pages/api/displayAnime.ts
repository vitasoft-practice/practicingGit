import { NextApiRequest, NextApiResponse } from "next";
import { Anime } from "../../data";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.json(Anime);
}