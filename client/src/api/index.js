import axios from "axios";

const base = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : '' ;

export const addItem = async (item) => {
  console.log('Maybe here');
  const res = await axios.post(`${base}/api/items`, item);
  console.log('Hello Mama', res.data);
  return res.data;
};
