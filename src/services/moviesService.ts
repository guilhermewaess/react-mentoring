import axios from 'axios';
const baseUrl = 'http://react-cdp-api.herokuapp.com';

export function getMovies(filter: any) {
  const url = `${baseUrl}/movies`;
  return axios
    .get(url, { params: filter })
    .then(response => response.data.data);
}

export function getMovieById(id: number) {
  const url = `${baseUrl}/movies/${id}`;
  return axios.get(url).then(response => response.data);
}
