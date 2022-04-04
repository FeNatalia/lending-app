import axios from 'axios';
// prettier-ignore
const base = process.env.NODE_ENV === "development" ? "http://localhost:8080" : "";

export const addItem = async item => {
  const res = await axios.post(`${base}/api/items`, item);
  return res.data;
};

export const getItems = async (keyword, city) => {
  const url = `${base}/api/items?q=${keyword}&city=${city}`;
  const res = await axios.get(url);
  return res.data;
};

export const addUser = async user => {
  const res = await axios.post(`${base}/api/users`, user);
  return res.data;
};