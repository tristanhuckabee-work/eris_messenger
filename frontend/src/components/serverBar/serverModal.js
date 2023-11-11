import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as serverActions from "../../store/servers";
import {getImageURL, getServerURL} from "./utils";
import './serverBar.css';

function ServerModal() {
  const dispatch = useDispatch();
  const servers = useSelector(state => state.servers);
  const sessionUser = useSelector(state => state.session.user);

  const [serverName, setServerName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});


  const submitServer = (e) => {
    e.preventDefault()
    const newServer = {
      name: serverName,
      image : getImageURL(imageURL, image),
      invite_url: getServerURL(sessionUser.username, serverName)
    }
    console.log(newServer);
    return;
  }

  return (
    <div className='server-modal'>
      <h2>Create a New Server</h2>
      <form onSubmit={submitServer}>
        <label>
          <div className='server-modal-label'>
            <span>Server Name</span>
            <span className='errors'>{errors.username && <span className="errors">{errors.name}</span>}</span>
          </div>

          <input
            type="text"
            value={serverName}
            onChange={(e) => setServerName(e.target.value)}
            required
          />
        </label>
        <label>
          <div className='server-modal-label'>
            <span>Image URL</span>
            <span className='errors'>{errors.url && <span className="errors">{errors.url}</span>}</span>
          </div>

          <input
            type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </label>
        or
        <label>
          <div className='server-modal-label'>
            <span>Server Image File</span>
            <span className='errors'>{errors.url && <span className="errors">{errors.url}</span>}</span>
          </div>

          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <button type='submit'>Create Server</button>
      </form>
    </div>
  );
}

export default ServerModal;