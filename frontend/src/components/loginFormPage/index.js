import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };
  const submitAsDemoUser = (e) => {
    e.preventDefault();
    setErrors({});
    const demoUser = {
      credential: 'yung-demo',
      password: 'password'
    }
    return dispatch(sessionActions.login(demoUser)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    )
  }

  return (
    <div id='login'>
      <div className='login-container'>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <div className='input-label'>
              <span>Username or Email</span>
              {errors.credential && <span className='errors'>{errors.credential}</span>}
            </div>
            <input
              placeholder="Username / Email"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label>
            <div className='input-label'>
              <span>Password</span>
            </div>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Log In</button>
          <button className='demo-button' onClick={submitAsDemoUser}>Log In as Demo User</button>
        </form>
      </div>
    </div>
  );
}

export default LoginFormPage;