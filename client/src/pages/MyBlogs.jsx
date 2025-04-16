import React, { useState } from 'react'
import Sidebar from './../components/Sidebar';

export default function MyBlogs() {
  // get the token from local storage
  const token = sessionStorage.getItem('token');

  // axios GET with token in the header in useEffect
  axios.get('http://localhost:3000/myblogs', {
    Headers
  })
  // change state in the comp
  // render the blogs
  return (
    <div>
      <Sidebar />
      <div className="content">
        My Blogs
      </div>
    </div>
  )
}
