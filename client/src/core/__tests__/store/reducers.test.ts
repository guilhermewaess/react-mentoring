import { ActionTypes } from "../../store/actions";
import { reducers } from "../../store/reducers";

describe('reducers', () => {
  let result: any;
  let action: any;
  it('should return initialState with invalid type', () => {
    action = { type: 'undef' };
    result = reducers({}, action);
    expect(result).toEqual({ movies: [] });
  });
  it('should return state merged with movies from payload when type is getMovies', () => {
    const payload = [{}];
    action = { type: ActionTypes.getMovies, payload };
    result = reducers({}, action);
    expect(result).toEqual({ movies: payload });
  });
});