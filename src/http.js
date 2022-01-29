import axios from "axios";

const http = axios.create({
  baseURL: "https://test.it-planet.org/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
const user = JSON.parse(localStorage.getItem("user"));
http.defaults.headers.common = {
  Authorization: "Bearer " + user.token,
};

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.common = {
      Authorization: "Bearer " + user.token,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default http;
