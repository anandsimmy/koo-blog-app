import React from 'react';
import './Post.css';

const Post = ({ data: { title, body } }) => {
  return (
    <div className='post-container'>
      <div className='post-title'>
        <span className='title-text'>{title}</span>
      </div>
      <p className='post-body'>{body}</p>
    </div>
  );
};

export default Post;
