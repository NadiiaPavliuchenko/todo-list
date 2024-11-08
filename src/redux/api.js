import axios from "axios";

// creating axios instance
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default api;
