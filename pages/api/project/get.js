import dbConnect from '../../../utils/dbConnect'
import Project from '../../../models/projectModel'
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function getProject(req, res) {
    await dbConnect()
    const project = await Project.find()
    res.json({project})
}
