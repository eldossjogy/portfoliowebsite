import mongoose from "mongoose"

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add name"]
    },
    status: {
        type: String,
        required: [true, "Please add status"]
    },
    pfp: {
        type: String,
        required: [true, "Please add Link"]
    }
})

const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema)

export default Profile