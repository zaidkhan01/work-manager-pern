import axios from "axios";

let custom_axios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default custom_axios;
