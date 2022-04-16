import React from 'react'

const Post = ({ post }) => {
  return (
    <li>
      <span>{post.id}</span>
      {' : '}
      <span className="text-blue-500 hover:bg-gray-200 border-b border-blue-500 cursor-pointer">
        {post.title}
      </span>
    </li>
  )
}

export default Post
