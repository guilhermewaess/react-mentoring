import axios from 'axios';
const baseUrl = 'http://react-cdp-api.herokuapp.com';

export function getMovies(filter) {
  const url = `${baseUrl}/movies`;
  return axios
    .get(url, { params: filter })
    .then(response => response.data.data);
}

export function getMovieById(id) {
  const url = `${baseUrl}/movies/${id}`;
  return axios.get(url).then(response => response.data);
}
