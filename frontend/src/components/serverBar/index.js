import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as serverActions from "../../store/servers";
import './serverBar.css';
import ServerModal from "./serverModal";

function ServerBar() {
  const dispatch = useDispatch();
  const servers = useSelector(state => state.servers);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(serverActions.readServers());
  }, [dispatch])

  const getServers = () => {
    let serverArray = [];
    for (let server in servers) {
      serverArray.push(
        <div className='serv' key={`server-${server}`}>
          <div className="noti"></div>
          <img src={`${servers[server].image}`} alt={`${servers[server].name}'s image`} />
        </div>
      );
    };
    return serverArray
  }
  const makeModal = () => {
    setShowModal(!showModal);
    return null;
  }
  const postModal = () => {
    return (
      <ServerModal />
    )
  }

  return (
    <nav id="servers">
      <div id="new-serv" onClick={makeModal}>
        <i className="fa fa-plus fa-2x"></i>
      </div>
      {showModal && postModal()}
      {servers && getServers()}
    </nav>
  );
}

export default ServerBar;