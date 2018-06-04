jest.mock('./../../../services/moviesService', () => ({
  getMovies: jest.fn().mockReturnValue({})
}));
import { ActionTypes, getMovies } from "../../store/actions";
import * as moviesService from './../../../services/moviesService';

describe('actions', () => {
  let action: any;
  describe('getMovies', () => {
    let filter: any;
    beforeEach(() => {
      filter = {};
      action = getMovies(filter)
    });
    it('should have right type', () => {
      expect(action.type).toEqual(ActionTypes.getMovies);
    });
    it('should have payload equals the return of getMoviesService', () => {
      expect(action.payload).toEqual({});
    });
    it('should call getMoviesService with filter', () => {
      expect(moviesService.getMovies).toHaveBeenCalledWith(filter);
    });
  });
});