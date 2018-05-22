import { ActionTypes } from "../store/actions";

export interface IMovie {
  budget: number;
  genres: string[];
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: null;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface ICommonState {
  movie: IMovie;
}

export interface ICommonProps {
  movie: IMovie;
}

export interface IAction {
  type: ActionTypes,
  payload: any
}