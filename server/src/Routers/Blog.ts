import express, {Request, response, Response, Router} from "express";
import Blog, {IBlogSchema} from "../Models/Blog";
import { ObjectId} from "mongodb";

const blog : Router = express.Router();



//fetch all blogs;

blog.get('/blogs', async (req : Request, res : Response) => {
    try {
        const blogs : IBlogSchema[] = await Blog.find({});
        res.status(200).send(blogs)
    }
    catch (e) {
        res.status(500).send(e)
    }
})

// update a blog

blog.patch('/blog/:id', async (req : Request, res : Response) => {
        const updates : string[] = Object.keys(req.body);
        const id = req.params.id;
        const allowUpdates : string[] = ['title', 'description', 'image'];
        // check if the updates field exists in the db
    const isValidUpdate : boolean = updates.every(update => allowUpdates.includes(update));
        if (!isValidUpdate) return res.status(404).send({message: 'Invalid Updates'});
        try {
            //check if the blog exists
            const existingBlog : IBlogSchema | null = await Blog.findById(id);
            if (!existingBlog) return  res.status(404).send({message: 'Blog doesnt exist'})
            updates.forEach(update => (existingBlog as any)[update] = req.body[update])
            await existingBlog!.save()
            res.status(200).send(existingBlog)
        }
        catch (e) {
            res.status(500).send(e)
        }
})

//delete a blog

blog.delete('/blog/:id', async (req : Request, res: Response) => {
    const id = req.params.id
    try {
      const deletedBlog =  await  Blog.findByIdAndDelete(id);
        res.status(200).send(deletedBlog)
    }
    catch (e) {
        res.status(500).send(e)
    }
})


// create a blog

blog.post('/blog', async (req : Request, res : Response) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.status(201).send(blog)
    }
    catch (e) {
        res.status(500).send(e)
    }
})

//fetch a blog by id
blog.get('/blog/:id', async (req : Request, res : Response) => {
    const id = req.params.id;
    try {
        const blog : IBlogSchema | null = await Blog.findById(id);
        res.status(200).send(blog)
    }
    catch (e) {
        res.status(404).send(e)
    }
})

export default blog;