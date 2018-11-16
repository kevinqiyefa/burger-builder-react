import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burger-backend.firebaseio.com/'
});

export default instance;
