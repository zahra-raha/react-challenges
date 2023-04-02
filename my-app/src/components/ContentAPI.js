import React, { Component } from "react";
import axios from 'axios'
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import API_KEY from "../secrets";
import Loader from "./Loader";

export class ContentAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: [],
            error: null,
        }
    }

    // componentDidMount(){
    //     axios.get("https://jsonplaceholder.typicode.com/posts/1")
    //     .then(response => {
    //         console.log(response);
    //         this.setState({
    //             posts: Array.isArray(response.data) ? response.data : [response.data] ,
    //         })
    //     })
    //     .catch(error => {
    //         this.setState({error: error.message})
    //     })
    // }

    componentDidMount() {
        this.fetchImages();
    }
    async fetchImages(){
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
        const fetchedPosts = response.data.hits;
        console.log(response);
        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts,
        })
    }

    handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = this.state.savedPosts.filter((post)=>{
            return post.user.toLowerCase().includes(name);
        })
        
        this.setState({
            posts: filteredPosts
        })
    }
    
    render() {
        return (
            <div className={css.Content}>
                
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor='searchinput'>Search</label>
                        <input 
                        type='search' 
                        id='searchinput' 
                        placeholder='By Author'
                        onChange={(e) => this.handleChange(e)}
                        />
                        <h4>posts found {this.state.posts.length}</h4>
                    </form>
                </div>

                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ?
                        <PostItemAPI savedPosts={this.state.posts} />
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default ContentAPI