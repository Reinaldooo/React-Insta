import React, { useState, useEffect } from 'react';
//
import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';
import Loading from '../../components/Loading';
import { validAvatar } from "../../services/utils"

const ProfileRoute = ({ match }) => {
  const [user, setUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchName = match.params.username

  useEffect(() => {
    let user;
    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${searchName}`)
      .then(response => response.json())
      .then(data => {
        user = data[0]
      })
      .then(() => {
        fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${user.id}/posts`)
        .then(data => data.json())
        .then(posts => {
          setUser(user)
          setUserPosts(posts);
          setIsLoading(false)
        });
      })
  }, [searchName]);

  const { name, avatar, username, email } = user

  return (
    <div data-testid="profile-route">
      {
        validAvatar(avatar) &&
        <UserProfile
        name={name}
        avatar={avatar}
        username={username}
        email={email}
        />
      }

      {
        isLoading
        ? (<Loading />)
        : <UserPosts posts={userPosts} />
      }
    </div>
  );
};

export default ProfileRoute;
