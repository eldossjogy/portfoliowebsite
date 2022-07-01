import dbConnect from '../../../utils/dbConnect'
import Info from '../../../models/infoModel'
import { getSession } from "next-auth/react"
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    const { id, title , content } = req.body;
    await dbConnect()
    const info = await Info.findByIdAndUpdate(id, {title: title, content: content})
    res.json({info})
  } else {
    res.status(401)
  }
  res.end()
}