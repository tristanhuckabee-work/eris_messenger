import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import './splashPage.css'
import './homePage.css';
import ServerBar from "../serverBar";

function HomePage() {
  const sessionUser = useSelector(state => state.session.user);
  if (sessionUser) {
    return (
      <div id='homePage'>
        <ServerBar />
      </div>
    )
  }

  return (
    <div id='splashPage'>
      <section>
        <h2>What is ERIS?</h2>
        <p>You've used discord before, you know...</p>
      </section>
    </div>
  );
}

export default HomePage;