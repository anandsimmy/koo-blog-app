import React, { useState, useEffect } from 'react';
import Post from './components/Post/Post';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let posts = await fetch('https://gorest.co.in/public/v1/posts');
      posts = await posts.json();
      setPosts(posts.data);
    };
    getData();
  }, []);

  return (
    <div className='App'>
      <div className='main-wrapper'>
        <h2 className='title'>KOO BLOG</h2>
        {posts.length ? (
          <div className='posts-container'>
            {posts.map((postItem) => {
              return <Post data={postItem} />;
            })}
          </div>
        ) : (
          <div className='loader'>Loading Posts..</div>
        )}
      </div>
    </div>
  );
};

export default App;
