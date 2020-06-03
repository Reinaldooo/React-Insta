import React, { useState, useEffect } from "react";
import "./FeedRoute.scss";
//
import { fetchPosts } from "../../services/api";
import { randomizePosts } from "../../services/utils";
import Loading from "../../components/Loading";
import Posts from "../../containers/Posts";
import Stories from "../../containers/Stories";

const FeedRoute = () => {
  const [users, setUsers] = useState(null);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);

  const getUserById = (postUserId) =>
    users.find((user) => postUserId === user.id);

  useEffect(() => {
    let stories;
    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories").then(
      async (data) => {
        stories = await data.json();
      }
    );
    fetchPosts().then(({ users, posts }) => {
      // The fake api results are ordered by user, so i created this function
      // to "randomize" them making it more realistic
      posts = randomizePosts(posts);
      setStories(stories);
      setUsers(users);
      setPosts(posts);
    });
  }, []);

  return (
    <div data-testid="feed-route">
      {
        users ? (
          <>
            <Stories stories={stories} getUserById={getUserById} />
            <Posts posts={posts} getUserById={getUserById} />
          </>
        ) : (
          <Loading />
        )
      }
    </div>
  );
};

export default FeedRoute;
