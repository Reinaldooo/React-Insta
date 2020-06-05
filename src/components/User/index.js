import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ data })  => {
  const {avatar, name, username } = data;
  return (
    <article className="post" data-testid="user">
      <header className="post__header">
        <Link to={`/users/${username}`} className="user">
          <div className="user__thumb">
            <img src={avatar} alt="" />
          </div>

          <div className="user__name">
            {name && name.length > 20 ? name.substring(0,20)+"..." : name}
          </div>
        </Link>
      </header>
    </article>
  )
};

export default User;
