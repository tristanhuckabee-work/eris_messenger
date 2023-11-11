import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './profileButton';
import * as sessionActions from '../../store/session';
import './navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='nav-right'>
        <button id='logout' onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    sessionLinks = (
      <div className='nav-right'>
        <NavLink id='login-button' to="/login">Log In</NavLink>
        <NavLink id='signup-button' to="/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <nav id='splash'>
      <h1>ERIS</h1>
      {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;