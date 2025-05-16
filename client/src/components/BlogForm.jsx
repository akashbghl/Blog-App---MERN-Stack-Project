import React, { useState } from 'react'
import axios from 'axios'

function BlogForm() {
  const [form, setForm] = useState({
    title: '',
    content: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://blog-app-mern-stack-project.onrender.com/posts', form);
      alert('Blog posted successfully!')
      setForm({title:'',content:''})
    }
    catch(error) {
      console.error('Error posting blog: ',error)
      alert('Failed to post your blog')
    }
  }
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit} className='flex-col justify-center'>
        <h1 className='text-white text-3xl mt-10 mx-1 mb-3 font-bold '>📝 Write a Blog</h1>
        <hr className='text-white w-[20vw]' />
        <input type="text"
          className='text-white shadow px-6 py-2 rounded w-[40vw] mt-5 mb-2 border-gray-100 border'
          name='title'
          placeholder='Enter Title of your Blog'
          value={form.title}
          onChange={handleChange}
          required
        /> <br />
        <textarea
          rows='5'
          className='text-white shadow px-6 py-2 rounded w-[40vw] border-gray-100 border'
          name="content"
          placeholder='Enter the content of your blog'
          value={form.content}
          onChange={handleChange}
          required
        ></textarea><br />
        <button type='submit' className='shadow bg-gray-100 text-gray-700 px-10 py-1 w-[50%] my-2 rounded cursor-pointer'>POST</button>
      </form>
    </div>
  )
}

export default BlogForm
