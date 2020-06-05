import React from "react";
//
import "./styles.scss";
import { validAvatar } from "../../services/utils"
import User from "../../components/User";

function UersList({ users }) {
  return (
    <section className="users-list" data-testid="users-list">
      {
        users.map((user) => {
          if (user.name && validAvatar(user.avatar)) {
            return <User key={user.id} data={user} />;
          }
          return null
        })
      }
    </section>
  );
};

export default UersList;
