import React from 'react';

import Post from '../../components/Post';

export default function Posts({ posts, getUserById }) {
  return (
    <div className="container" data-testid="posts">
      <section className="feed">
        { posts.length && posts.map((post, idx) => (
            <Post
              data={post}
              user={getUserById(post.userId)}
              key={post.id}
              idx={idx}
            />
          ))
        }
      </section>
    </div>
  );  
}
