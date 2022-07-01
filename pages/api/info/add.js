import dbConnect from '../../../utils/dbConnect'
import { getSession } from "next-auth/react"
import Info from '../../../models/infoModel'
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
 

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    try {
        const { title, content } = req.body;
        console.log("CONNECTING TO MONGO")
        await dbConnect()
        console.log("CONNECTED TO MONGO")
        console.log("Create Doc")
        const info = await Info.create(req.body)
        console.log(info)
        console.log("Created Doc")
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