import express from 'express'
import post from '../models/post.js'

const router = express.Router();

// sunmit post Route

  router.post('/', async (req,res)=>{
    const {title , content} = req.body;
    try {
      const newPost = await post.create({
        title,
        content,
        slug: title.toLowerCase().replace(/ /g, '-')
        });
        res.status(201).json({message: 'blog created successfully',blog: newPost});
    } catch (error) {
      console.error('Error: ',error);
      res.status(500).json({message:'server error'});
    }
  })

  // fetching all posts route to display
  router.get('/', async (req,res)=>{
    try {
      const posts = await post.find().sort({createdAt: -1}).limit(50);
      res.status(200).json(posts);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({message:'Internal server Error'});
    }
  })

  export default router;