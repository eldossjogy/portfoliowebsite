import dbConnect from '../../../utils/dbConnect'
import Project from '../../../models/projectModel'
import { getSession } from "next-auth/react"
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function updateProject(req, res) {
  const session = await getSession({ req })
  if (session) {
    const { id, title , content, img, link, extlink } = req.body;
    await dbConnect()
    const info = await Project.findByIdAndUpdate( id, {title: title, content: content, img: img, link: link, extlink: extlink})
    res.json({info})
  } else {
    res.status(401)
  }
  res.end()
}