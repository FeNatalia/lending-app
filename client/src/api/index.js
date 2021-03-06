import axios from "axios";
// prettier-ignore
const base = process.env.NODE_ENV === "development" ? "http://localhost:8080" : "";

export const addItem = async (item) => {
  const res = await axios.post(`${base}/api/items`, item);
  return res.data;
};

export const getItems = async (keyword, city, category) => {
  const url = `${base}/api/items?q=${keyword}&city=${city}&category=${category}`;
  const res = await axios.get(url);
  return res.data;
};
export const getItem = async (id) => {
  const res = await axios.get(`${base}/api/items/${id}`);
  return res.data;
};
export const addUser = async (user) => {
  const res = await axios.post(`${base}/api/users`, user);
  return res.data;
};

export const getUser = async (id) => {
  const url = `${base}/api/users/${id}`;
  const res = await axios.get(url);
  return res.data;
};
