import axios from "axios";

const api = axios.create({
  //baseURL: "https://rocketseat-node.herokuapp.com/api"
  baseURL: "https://api-lanches.herokuapp.com/api/v1"
});

export default api;
