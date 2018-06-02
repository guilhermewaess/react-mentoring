jest.mock('axios');
import axios from 'axios';
import { getMovieById, getMovies } from '../moviesService';

describe('moviesService', () => {
  const baseUrl = 'http://react-cdp-api.herokuapp.com';
  let filter: any;
  let response: any;
  let result: any;
  let getMock: jest.Mock;

  beforeEach(() => {
    filter = {
      search: 'a',
    };
    getMock = axios.get as jest.Mock;
  });

  describe('when ask for getMovies', () => {
    beforeEach(async () => {
      response = {
        data: {
          data: 'data',
        },
      };
      getMock.mockResolvedValue(response);
      result = await getMovies(filter);
    });
    it('should call get with properly url and filters', () => {
      const url = `${baseUrl}/movies`;
      expect(getMock).toHaveBeenCalledWith(url, {
        params: filter,
      });
    });
    it('should return data from data', () => {
      expect(result).toEqual(response.data.data);
    });
  });

  describe('when ask for getMovieById', () => {
    let id: number;
    beforeEach(async () => {
      id = 100;
      response = {
        data: 'data',
      };
      getMock.mockResolvedValue(response);
      result = await getMovieById(id);
    });
    it('should call get with properly url and filters', () => {
      const url = `${baseUrl}/movies/${id}`;
      expect(getMock).toHaveBeenCalledWith(url);
    });
    it('should return data', () => {
      expect(result).toEqual(response.data);
    });
  });
});
