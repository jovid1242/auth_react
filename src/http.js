import axios from "axios";

const http = axios.create({
  baseURL: "https://test.it-planet.org/sso/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default http;
