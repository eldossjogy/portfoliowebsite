import dbConnect from '../../../utils/dbConnect'
import Project from '../../../models/projectModel'
import { getSession } from "next-auth/react"
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    const { id } = req.body;
    await dbConnect()
    const project = await Project.findByIdAndDelete(id)
    res.json({project})
  } else {
    res.status(401)
  }
  res.end()
}