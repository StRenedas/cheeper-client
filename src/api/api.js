import axios from 'axios';

const $axios = axios.create({
  baseURL: 'http://localhost:7777'
});

async function getUsers() {
  return await $axios.get('/');
}

async function getMessages(data) {
  return await $axios.post('/getmessagestime', data);
}

async function addUser(data) {
  return await $axios.post('/addUser', data);
}

async function addMessage(data) {
  return await $axios.post('/addMessage', data);
}

async function getFriends(data) {
  return await $axios.post('/getFriends', data);
}

async function getFriendsCount(data) {
  return await $axios.post('/countFriends', data);
}

export { getUsers, getMessages, addUser, addMessage, getFriends, getFriendsCount };
