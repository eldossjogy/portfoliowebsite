import dbConnect from '../../../utils/dbConnect'
import { getSession } from "next-auth/react"
import Info from '../../../models/infoModel'
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
 

export default async function addInfo(req, res) {
  const session = await getSession({ req })
  if (session) {
    try {
        const { title, content } = req.body;
        await dbConnect()
        const info = await Info.create(req.body)
        res.json({ info })
    }
    catch(err){
        res.status(400).json(err.message);
    }
  } else {
    res.status(401)
  }
  res.end()
}