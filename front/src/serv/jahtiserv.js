import axios from "axios";
const baseURL = "/thegame";

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

export default { setToken, login, register };