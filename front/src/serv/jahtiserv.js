import axios from "axios";
const baseURL = "/lost/thegame";

let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const login = async credentials => {
  const response = await axios.post(`${baseURL}/login`, credentials);
  return response.data;
};

const register = async credentials => {
  const response = await axios.post(`${baseURL}/register`, credentials);
  return response.data;
};

const getUser = async () => {
  const config = { headers: { Authorization: token } };
  const response = await axios.get(`${baseURL}`, config);
  return response.data;
};

const button = async myPoints => {
  const config = { headers: { Authorization: token } };
  const response = await axios.post(`${baseURL}`, myPoints, config);
  return response.data;
};

const resetUser = async points => {
  const config = { headers: { Authorization: token } };
  const response = await axios.patch(`${baseURL}/reset`, points, config);
  return response.data;
};

export default { setToken, login, register, getUser, button, resetUser };