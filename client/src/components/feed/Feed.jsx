import { useState, useEffect } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios"

export default function Feed() {

  // WORKING ON THIS PORTION 
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
  //   const fetchPosts = async () => {
  // //     const res = axios.get('/api/posts/timeline/669ad97b49d21533d6b445dc')
  // // .then(response => {
  // //   console.log(response.data); // Should log an array of posts
  // // })
  // // .catch(error => {
  // //   console.error('Error fetching posts:', error);
  // // });



  //     const res = await axios.get("/api/posts/timeline/669ad97b49d21533d6b445dc")
  //     console.log(res)
  //   }
  //   fetchPosts();
  }, [])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
      </div>
    </div>
  );
}
