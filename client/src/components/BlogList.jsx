import React from 'react'

function BlogList({posts}) {

  if(!posts.length){
  return<p className='text-white ml-38'>No Posts yet !</p>;
  }

  return (
    <div className='my-10'>
      <h1 className='text-white font-bold text-3xl ml-[10vw] my-5'> PUBLIC BLOGS</h1>
    <div className='w-[40vw] m-auto border-t border-l border-r border-white rounded p-4'>
      {
        posts.map((post,index)=>(
          <div key={index} className='my-3 p-4 rounded-md shadow-gray-500 shadow'>
            <h3 className='text-white'>{post.title}</h3>
            <hr className='text-white w-[15%] mt-1 mb-2'/>
            <p className='text-white'>{post.content}</p>
            <p className='text-end text-gray-500 mt-5 italic text-xs'>written by {post.author || 'author_name'}</p>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default BlogList

