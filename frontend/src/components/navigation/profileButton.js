import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const ulClassName = "profile-dropdown";

  return (
    <>
      <button>
        <i className="fas fa-user-circle" />
      </button>
      <div className="profile-dropdown">
        <div>{user.username}</div>
        <div>{user.email}</div>
        <div>
          <button id="logout" onClick={logout}>Log Out</button>
        </div>
      </div>
    </>
  );
}

export default ProfileButton;