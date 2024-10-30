import axios from "axios";

export const HOST_API = `https://api.mediastack.com/v1/news?access_key=${process.env.NEXT_PUBLIC_ACCESS_KEY}`;

const axiosInstance = axios.create({ baseURL: HOST_API });

axiosInstance.interceptors.request.use((config) => {
  //const token = localStorage.getItem("token");

  if (!config.baseURL) {
    config.baseURL = HOST_API;
  }
  return config;
});

export default axiosInstance;

export const fetcher = async () => {
  const res = await axios.get(
    `https://api.mediastack.com/v1/news?access_key=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
  );
  return res.data;
};
