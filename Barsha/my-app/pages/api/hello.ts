// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { withSentry } from "@sentry/nextjs";

type Data = {
  name: string
}

const handler=(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) =>{
  throw new Error("API throw error test")
  res.status(200).json({ name: 'Barsha Singha' })
}
export default withSentry(handler);