import React from 'react'
import css from "./css/Content.module.css"

function PostItemAPI(props) {
    var posts = props.savedPosts;
    return (
        posts.map(post =>{
          return (
            <div className='css.SearchItem' key={post.id}>
              <p>{post.type}</p>
              <p>{post.user}</p>
              <img src={post.webformatURL} />
              <p>Tags: {post.tags}</p>
          </div>
          )
      })
    )
 
}

export default PostItemAPI