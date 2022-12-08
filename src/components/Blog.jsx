import React from 'react'
import { useState, useEffect } from 'react';


function Blog() {
  const [myBlogs, setMyBlogs] = useState([]);

  const fetchBlog = async () => {
    const response = await fetch("http://127.0.0.1:3000/blogs");
    const data = await response.json();
    return setMyBlogs(data);
  }

  useEffect(() => {
    fetchBlog();
  },[])

  
  return (
    <div className='bg-yellow-100'>
        <div className='text-5xl font-bold flex justify-center pt-10 mb-5 text-yellow-700'>Latest Blog Posts</div>

  {myBlogs.map((myBlog, index) => (
<div className='mx-7 inline-flex'>
  <div className='mb-5'>
<article class="rounded-lg border border-gray-100 shadow-sm w-96 overflow-hidden">
  <img
    alt="Office"
    src={myBlog.image}
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6 bg-white">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900 " key={myBlog.id}>
        {myBlog.title}
      </h3>
    </a>

    <p class="mt-2 text-base leading-relaxed text-gray-500 line-clamp-3" key={myBlog.id}>
      {myBlog.description}
    </p>

    <a
      href="#"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Find out more

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </a>
  </div>
</article>
</div>
</div>
))}

    </div>
    
  )
}

export default Blog