import dbConnect from '../../../utils/dbConnect'
import Project from '../../../models/projectModel'
import { getSession } from "next-auth/react"
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function addProject(req, res){
  const session = await getSession({ req })
  if (session) {
    try {
        const { title, content, img, link } = req.body;
        console.log("CONNECTING TO MONGO")
        await dbConnect()
        console.log("CONNECTED TO MONGO")
        console.log("Create Doc")
        const project = await Project.create(req.body)
        console.log("Created Doc")
        res.json({ project })
    }
    catch (error) {
        console.log(error)
        res.json(error)
    }
  } else {
    res.status(401)
  }
  res.end()
}