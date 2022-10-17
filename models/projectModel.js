import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add title"]
    },
    content: {
        type: String,
        required: [true, "Please add content"]
    },
    link: {
        type: String,
        required: [true, "Please add src link"]
    }, 
    img: {
        type: String,
        required: [true, "Please add image"]
    },
    extlink: {
        type: String,
    }
})

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema)

export default Project