import React, { useState } from "react";
//
import "./UserForm.scss";
import { validAvatar } from "../../services/utils";
import SuccessMessage from "../../components/SuccessMessage";

const UserForm = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInput = (event, field) => {
    const { value } = event.target;
    var options = {
      name() {
        setName(value);
      },
      avatar() {
        setAvatar(value);
      },
      username() {
        setUsername(value);
      },
      email() {
        setEmail(value);
      },
    };
    options[field]();
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = JSON.stringify({
      name,
      avatar,
      username,
      email,
    });
    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newUser,
      // This is hardcoded because the fakiApi don't accept new users anymore
    }).then(() => setSuccess(true));
  };

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {
                  validAvatar(avatar)
                    ? 
                    <img src={avatar} alt="" />
                    : 
                    <img
                      src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                      alt=""
                    />
                }
              </div>

              {
                name && 
                  <p className="user__name">
                    {name}
                    <span>@{username}</span>
                  </p>                
              }
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              value={name}
              placeholder="Seu nome"
              onChange={(event) => handleInput(event, "name")}
            />

            <label>Usuário</label>
            <input
              type="text"
              value={username}
              placeholder="@usuario"
              onChange={(event) => handleInput(event, "username")}
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="email@provedor.com"
              onChange={(event) => handleInput(event, "email")}
            />

            <label>Url da Imagem de Perfil</label>
            <input
              type="text"
              placeholder="http://..."
              onChange={(event) => handleInput(event, "avatar")}
            />

            <button type="button" onClick={handleAddUser}>
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      {success && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;
