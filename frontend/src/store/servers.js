import { csrfFetch } from "./csrf";

const CREATE = "servers/create";
const READ   = "servers/get";
const UPDATE = "servers/edit";
const DELETE = "servers/delete";

const create_server   = (payload) => {
  return { type: CREATE, payload };
}
const get_all_servers = (payload) => {
  return { type: READ,   payload };
}
const update_server   = (payload) => {
  return { type: UPDATE, payload };
}
const delete_server   = (payload) => {
  return { type: DELETE, payload };
}

export const createServer = (server) => async (dispatch) => {
  const {name, image, invite_url} = server;
  const res = await csrfFetch('/api/servers/', {
    method: 'POST',
    body: JSON.stringify(server)
  });
  const data = await res.json();

  if (res.ok) {
    dispatch(create_server(data));
  }

  return data;
}
export const readServers = () => async (dispatch) => {
  const res = await csrfFetch('/api/servers/');
  const data = await res.json();

  if (res.ok) {
    dispatch(get_all_servers(data));
  }

  return data;
}
export const updateServer = (server) => async (dispatch) => {
  const {serverId, name, image, invite_url} = server;
  const res = await csrfFetch(`/api/servers/${serverId}`, {
    method: 'PATCH',
    body: JSON.stringify(server)
  });
  const data = await res.json();

  if (res.ok) {
    dispatch(update_server(data));
  }

  return data;
}
export const deleteServer = (serverId) => async (dispatch) => {
  const res = await csrfFetch(`/api/servers/${serverId}`)
  const data = await res.json();

  if (res.ok) {
    dispatch(delete_server(serverId));
  }

  return data;
}

const serverReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case CREATE:
      newState[action.payload.serverId] = action.payload;
      return newState;
    case READ:
      action.payload.forEach(server => {
        newState[server.id] = server;
      });
      return newState;
    case UPDATE:
      newState[action.payload.serverId] = action.payload;
      return newState;
    case DELETE:
      delete newState[action.payload.serverId];
      return newState;
    default:
      return state;
  }
};

export default serverReducer;