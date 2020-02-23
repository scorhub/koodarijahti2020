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
  console.log('register async')
  const response = await axios.post(`${baseURL}/register`, credentials);
  return response.data;
};

export default { setToken, login, register };