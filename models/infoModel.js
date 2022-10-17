import mongoose from "mongoose"

const infoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add title"]
    },
    content: {
        type: String,
        required: [true, "Please add content"]
    }
})

const Info = mongoose.models.Info || mongoose.model('Info', infoSchema)

export default Info