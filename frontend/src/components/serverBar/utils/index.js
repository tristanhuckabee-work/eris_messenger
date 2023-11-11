export const getServerURL = (owner, serverName) => {
  let url = '';
  owner.split('').forEach((char, idx) => {
    let hexCC = owner
      .charCodeAt(idx)
      .toString(16);
    url += hexCC;
  });
  serverName.split('').forEach((char, idx) => {
    let hexCC = serverName
      .charCodeAt(idx)
      .toString(16);
    url += hexCC;
  });
  return url;
};
export const getImageURL = (url, file) => {
  if (url) {
    return url;
  }
  return 'parse file here and upload to place';
}

export default {getServerURL, getImageURL};