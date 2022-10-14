import axios from "axios";

const $axios = axios.create({
  baseURL: "http://localhost:5555",
});

async function getTodos(axios = $axios) {
  return await axios.get("/");
}

async function saveTodos(axios = $axios, data) {
  return await axios.post("/save", data);
}

export { getTodos, saveTodos };
