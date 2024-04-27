import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_ADDR,
  withCredentials: true,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
  },
});

instance.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => Promise.reject(error),
);

export const getRequestAPI =
  (baseURL) =>
  (...path) =>
  (config) => {
    const url = `/${baseURL}`.concat(`/${path}`.repeat(path.length));

    return instance({ ...config, url });
  };

export default instance;
