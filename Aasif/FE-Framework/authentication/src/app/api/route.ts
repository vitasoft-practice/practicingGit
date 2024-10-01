import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export function GET(req: NextApiRequest, res: NextApiResponse) {
    return NextResponse.json("hello, I'm a dummy GET request created in next")
}