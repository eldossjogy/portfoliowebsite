import dbConnect from '../../../utils/dbConnect'
import Profile from '../../../models/profileModel'
import { getSession } from "next-auth/react"
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    const { id, name , status, pfp } = req.body;
    await dbConnect()
    const info = await Profile.findByIdAndUpdate(id, {name: name, status: status, pfp: pfp})
    if (info === null){
      const info = await Profile.create(req.body)
      console.log(info)
    }
    res.json({info})
  } else {
    res.status(401)
  }
  res.end()
}