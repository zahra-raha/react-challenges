import React from 'react'
import css from "./css/Content.module.css"

function PostItem(props) {
    var post = props.post;
  return (
    <div className='css.SearchItem'>
        <p>{post.title}</p>
        <p>{post.name}</p>
        <img src={post.image} />
        <p>{post.description}</p>
    </div>
  )
}

export default PostItem