import React, { useState, useEffect } from 'react';
//
import UsersList from '../../components/UsersList/UsersList';
import Loading from '../../components/Loading/Loading';

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
      .then((res) => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="container" data-testid="users-route">
      {users.length > 0 ? <UsersList users={users} /> : <Loading/>}
    </div>
  );
};

export default UsersRoute;
