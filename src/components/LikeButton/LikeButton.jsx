import React, { useState } from "react";
import "./LikeButton.scss";

const LikeButton = ({ idx }) => {
  // First post will be liked just for aesthetic reasons
  const [liked, setLiked] = useState(idx === 0 ? true : false);

  const toggleLike = () => {
    setLiked(!liked)
  }

  return (
    <button onClick={toggleLike}>
      {
        liked ?
        <i className="fas fa-heart post__button"></i>
        :
        <i className="far fa-heart post__button"></i>
      }
    </button>
  );
};

export default LikeButton;
