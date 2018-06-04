import * as moviesService from './../../services/moviesService';

export enum ActionTypes {
  getMovies = '[Store] - Get Movies',
}

export function getMovies(filter: any) {
  return {
    type: ActionTypes.getMovies,
    payload: moviesService.getMovies(filter),
  };
}
