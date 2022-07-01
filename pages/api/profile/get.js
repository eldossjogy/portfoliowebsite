import dbConnect from '../../../utils/dbConnect'
import Profile from '../../../models/profileModel'
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function addTest(req, res) {
    await dbConnect()
    const info = await Profile.find()
    res.json({info})
}
