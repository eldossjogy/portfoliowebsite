import dbConnect from '../../../utils/dbConnect'
import Info from '../../../models/infoModel'
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function getInfo(req, res) {
    await dbConnect()
    const info = await Info.find()
    res.json({info})
}
