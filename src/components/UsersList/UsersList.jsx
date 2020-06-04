import React from "react";
import "./UsersList.scss";
//
import User from "../../components/User";
import { validAvatar } from "../../services/utils"

const UersList = ({ users }) => {
  return (
    <section className="users-list" data-testid="users-list">
      {users.map((user) => {
        if (user.name && validAvatar(user.avatar)) {
          return <User key={user.id} infoUser={user} />;
        }
        return null
      })}
    </section>
  );
};

export default UersList;
