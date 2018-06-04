import { IAction } from "../interfaces";
import { ActionTypes } from "./actions";

const initialState = {
  movies: []
}

export function reducers(state: any, action: IAction) {
  switch (action.type) {
    case ActionTypes.getMovies:
      return {
        ...state,
        movies: action.payload
      }
    default:
      return {...state, ...initialState}
  }
}