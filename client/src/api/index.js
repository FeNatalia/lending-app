import axios from 'axios';
// prettier-ignore
const base = process.env.NODE_ENV === "development" ? "http://localhost:8080" : "";

export const addItem = async item => {
  const res = await axios.post(`${base}/api/items`, item);
  return res.data;
};

export const getAllItems = async () => {
  const res = await axios.get(`${base}/api/items`);
  return res.data;
};
export const getByCityName = async city => {
  const res = await axios.get(`${base}/api/items/?city=${city}`);
  return res.data;
};
