import mongoose from "mongoose";

export interface IBlogSchema extends  mongoose.Document {
    title: string,
    image: string,

    description: string
}
const blogSchema  = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        min: 4
    },
    description: {
        type: String,
        required: true,
        min: 6
    },
    image: {
        type: String,
        default: ''
    }

}, {
    timestamps: true
})

const Blog = mongoose.model<IBlogSchema>('blog', blogSchema)

export default Blog;