import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import postRoutes from './routes/posts.js'
const app = express();

dotenv.config();

// middlewares setup
app.use(cors());
app.use(express.json());

// routes
app.use('/posts',postRoutes);

// connect to Database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})