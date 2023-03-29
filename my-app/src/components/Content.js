import React, { Component } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoaded: false,
      }
    }
    getData() {
        console.log("set data")
        setTimeout(() => {
            this.setState({
                isLoaded: true,
            })
        }, 2000);
    }

    componentDidMount() {
        console.log("did mount")
        this.getData();
        
    }
  render() {
    console.log("render");
    return (
      <div className='css.Content'>
        <div className='css.TitleBar'>
            <h1>My Photos</h1>
        </div>
        <div className='css.SearchResults'>
        {
            !this.state.isLoaded ? <Loader /> : (
                savedPosts.map(post =>{
                    return (
                        <PostItem key={post.image} post={post}/>
                    )
                })
            )
                        
        }
        </div>
      </div>
    )
  }
}

export default Content