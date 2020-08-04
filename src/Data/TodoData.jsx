import axios from 'axios';

const baseUrl = 'https://5e9ec500fb467500166c4658.mockapi.io/todos'
const todos = axios.get(baseUrl);


export default todos;