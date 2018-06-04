import { actionTypes } from './actions';

const initialState = {
  movies: [],
};

export function reducers(state, action) {
  switch (action.type) {
    case actionTypes.getMovies:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return { ...state, ...initialState };
  }
}
