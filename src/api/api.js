import axios from "axios";

const $axios = axios.create({
  baseURL: "http://localhost:7777",
});

async function getUsers(axios = $axios) {
  return await axios.get("/");
}

async function getMessages(data, axios = $axios) {
  return await axios.post("/getmessagestime", data);
}

async function addUser(data, axios = $axios) {
  return await axios.post("/addUser", data);
}

async function addMessage(data, axios = $axios) {
  return await axios.post("/addMessage", data);
}

async function getFriends(data, axios = $axios) {
  return await axios.post("/getFriends", data);
}

async function getFriendsCount(data, axios = $axios) {
  return await axios.post("/countFriends", data);
}
/*async function saveTodos(axios = $axios, data) {
  return await axios.post("/save", data);
}*/

export {
  getUsers,
  getMessages,
  addUser,
  addMessage,
  getFriends,
  getFriendsCount,
};
