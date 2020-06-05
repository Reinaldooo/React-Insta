import React from 'react';
import { Link } from 'react-router-dom';
//
import './styles.scss';
import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

function Topbar() {
  return (
    <header className="topbar" data-testid="topbar">
      <div className="container">
        <Link to="/" className="topbar__logo">
          <LogoSvg alt="Logo Instagram" />
        </Link>
        <div className="topbar__group">
          <button className="topbar__icon">
            <Link to="/users">
              <i className="fas fa-users" />
              <span>Users</span>
            </Link>
          </button>
          <button className="topbar__icon">
            <Link to="/newuser">
              <i className="fas fa-user-plus" />
              <span>New Account</span>
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
