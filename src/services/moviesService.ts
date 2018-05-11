import axios from 'axios';
const baseUrl = 'http://react-cdp-api.herokuapp.com';

export function getAll() {
  const url = `${baseUrl}/movies`;
  return axios.get(url).then(response => response.data.data);
}