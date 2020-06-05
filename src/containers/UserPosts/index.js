import React from 'react';
//
import './styles.scss';
import Post from '../../components/Post';

function UserPosts({ posts }) {
  return (
    <div className="container" data-testid="user-posts">
      <section className="user-posts">
        { posts.length > 0
          ? posts.map((post) => (
            <Post
              post={post}
              key={post.id}
            />
          ))
          : (
            <div className="no-posts">
              <span className="no-posts__content">Não há publicações deste usuário</span>
            </div>
          )
        }
      </section>
    </div>
  );
}

export default UserPosts;
