import React, { useEffect, useState } from 'react'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'
import background from '/background3.jpeg'
import axios from 'axios';

function App() {
  const [posts , setPosts] = useState([]);
  useEffect(()=>{
    const fetchPosts = async ()=>{
    try {
      const res = await axios.get('https://blog-app-mern-stack-project.onrender.com/posts');
      setPosts(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  fetchPosts();
  },[]);
  return (
    <div className='w-[60%] border-black border  m-auto bg-black min-h-screen bg-no-repeat'
    style={{backgroundImage: `URL(${background})`}}
    >
      <BlogForm/>
      <BlogList posts={posts}/>
    </div>
  )
}

export default App
