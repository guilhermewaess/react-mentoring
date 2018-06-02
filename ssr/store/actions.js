import * as moviesService from './../services/moviesService';

export const actionTypes = {
  getMovies: '[Store] - Get Movies',
}

export function getMovies(filter) {
  return {
    type: actionTypes.getMovies,
    payload: moviesService.getMovies(filter),
  };
}
