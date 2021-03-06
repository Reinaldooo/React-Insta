import React from "react";
import { Link } from "react-router-dom";
//
import "./styles.scss";
import LikeButton from "../LikeButton"

function Post({ data, user, idx }) {
  const { comments, imageUrl } = data;

  const genRandom = () => (Math.random() * 20 + 2).toFixed()

  return (
    <article className="post" data-testid="post">
      {user && (
        <header className="post__header">
          <div className="user">
            <Link to={`/users/${user.username}`} className="user__thumb">
              <img src={user.avatar} alt={user.name} />
            </Link>
            <Link to={`/users/${user.username}`} className="user__name">
              {user.username}
            </Link>
          </div>
        </header>
      )}

      <figure className="post__figure">
        <img src={imageUrl} alt="" />
      </figure>

      {user && (
        <div className="post__info">
          <div className="post__buttons">
            <div className="post__buttons__left">
              <LikeButton idx={idx}/>
              <i className="far fa-comment post__button"></i>
              <i className="far fa-paper-plane post__button"></i>
            </div>
            <div className="post__buttons__right">
              <i className="far fa-bookmark post__button"></i>
            </div>
          </div>
          <div className="post__likes">
            Liked by <strong>{comments[0].name}</strong> and <strong>{genRandom()} others</strong>
          </div>
          <div className="post__description">
            <strong>{user.username}</strong> {comments[0].comment}
          </div>
          <div className="post__comments">
            View all {comments.length} comments
          </div>
          <div className="post__timestamp">{genRandom()} hours ago</div>
        </div>
      )}
    </article>
  );
};

export default Post;
