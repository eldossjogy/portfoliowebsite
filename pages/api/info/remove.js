import dbConnect from '../../../utils/dbConnect'
import { getSession } from "next-auth/react"
import Info from '../../../models/infoModel'
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function removeInfo(req, res) {
  const session = await getSession({ req })
  if (session) {
    const { id } = req.body;
    await dbConnect()
    const info = await Info.findByIdAndDelete(id)
    res.json({ info })
  } else {
    res.status(401)
  }
  res.end()
}