import React, {useState, useEffect} from 'react'
import axios from 'axios'
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import API_KEY from "../secrets";
import Loader from "./Loader";

function ContentAPIHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);

    const fetchImages = async ()=> {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
        const fetchedPosts = response.data.hits;
        console.log(response);
        setIsLoaded(true);
        setPosts(fetchedPosts);
        setSavedPosts(fetchedPosts);
    }
    useEffect(()=>{
        fetchImages();
    },[])
    const handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post)=>{
            return post.user.toLowerCase().includes(name);
        })
        
        setPosts(filteredPosts)
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
                    <PostItemAPI savedPosts={posts} />
                    : <Loader />
                }
            </div>
        </div>
    )
}

export default ContentAPIHooks