import React, {useEffect, useState} from 'react'
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        setTimeout(()=>{
            console.log("useEffect called");
            setIsLoaded(true)
            setPosts(savedPosts);
        }, 2000)
    },[])
    const handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post)=>{
            return post.name.toLowerCase().includes(name);
        })
        
        setPosts(filteredPosts);
    }
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
                    onChange={(e) => handleChange(e)}
                    />
                    <h4>posts found {posts.length}</h4>
                </form>
            </div>

            <div className={css.SearchResults}>
                {
                    isLoaded ?
                    <PostItem savedPosts={posts} />
                    : <Loader />
                }
            </div>
        </div>
    )
}

export default ContentHooks