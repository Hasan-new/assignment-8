import React, { useEffect } from 'react';
import { useState } from 'react';
import Post from '../../Post/Post';

const Home = () => {
    const [ posts, setPosts] = useState([]);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => {
          setPosts(data);
         const id = data.map(posts => posts.title)
        })
  
    }, [])
    return (
        <div>
            {
                posts.slice( 0, 50).map(posts => <Post posts={posts}></Post>)
            }
        </div>
    );
};

export default Home;