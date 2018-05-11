import { getAll } from './../../services/moviesService';

export enum ActionTypes {
  getMovies = '[Store] - Get Movies',
}

export function getMovies() {
  return {
    type: ActionTypes.getMovies,
    payload: getAll()
  }
}
