import axios from "axios";

const base = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : '' ;

export const addItem = async (item) => {
  const res = await axios.post(`${base}/api/items`, item);
  return res.data;
};
