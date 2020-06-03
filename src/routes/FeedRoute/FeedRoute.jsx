import React, { useState, useEffect } from 'react';
import './FeedRoute.scss';
//
import { fetchPosts } from "../../services/api"
import { randomizePosts } from "../../services/utils"
import Loading from '../../components/Loading';
import Posts from '../../containers/Posts';
import Stories from '../../containers/Stories';


const FeedRoute = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1);

  const getUserPostById = (postUserId) => users.find(user => postUserId === user.id);

  useEffect(() => {
    let stories;
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
      .then(async (data) => {
        stories = await data.json()
      })    
    fetchPosts()
      .then(({ users, posts }) => {
        posts =  randomizePosts(posts)
        setStories(stories)
        setUsers(users)
        setPosts(posts)
      })
  }, [])

  return (
    <div data-testid="feed-route">
      {(stories.length && users.length) && (
        <Stories
          stories={stories}
          getUserHandler={getUserPostById}
        />
      )}

      {!users.length
        ? (<Loading />)
        : (
          <Posts
            posts={posts}
            getUserHandler={getUserPostById}
          />)
      }
    </div>
  );
};

export default FeedRoute;
