import dbConnect from '../../../utils/dbConnect'
import Project from '../../../models/projectModel'
import { getSession } from "next-auth/react"
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function addProject(req, res) {
  const session = await getSession({ req })
  if (session) {
    try {
      const { title, content, img, link } = req.body;
      // if (title == null || content == null || img == null || link == null) { res.json({ message: "Missing Components" }) }
      await dbConnect()
      const project = await Project.create(req.body)
      res.json({ project })
    }
    catch (error) {
      res.json(error)
    }
  } else {
    res.status(401)
  }
  res.end()
}