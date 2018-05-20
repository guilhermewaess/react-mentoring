jest.mock('./../../core/store/actions', () => ({
  getMovies: jest.fn().mockReturnValue({
    type: 'test',
  }),
}));
jest.mock('./../../services/moviesService', () => ({
  getMovieById: jest.fn(),
}));

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import * as reduxPromise from 'redux-promise';
import { IMovie } from '../../core/interfaces';
import { getMovies } from './../../core/store/actions';
import { getMovieById } from './../../services/moviesService';
import MovieDetails from './../MovieDetails';
const configureStore = require('redux-mock-store'); //tslint:disable-line

describe('MovieDetailsContainer', () => {
  let component: ShallowWrapper<any, any>;
  let store: any;
  let instance: any;
  let props: any;
  let movie1: IMovie;
  let movie2: IMovie;
  let spy: jest.Mock;

  const helper = {
    createProps() {
      return {
        match: { params: { id: '100' } },
      };
    },
    createMovie(id: number) {
      return {
        budget: 10,
        genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
        id,
        overview: 'We all...',
        poster_path:
          'https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg',
        release_date: '2019-04-05',
        revenue: 0,
        runtime: null,
        tagline: '',
        title: 'Shazam!',
        vote_average: 0,
        vote_count: 5,
      };
    },
  };
  beforeEach(() => {
    props = helper.createProps();
    movie1 = helper.createMovie(100);
    movie2 = helper.createMovie(200);
    spy = getMovieById as jest.Mock;
    spy.mockReset();
    spy.mockResolvedValue(movie1);
  });
  describe('when there is no movies on store', () => {
    beforeEach(() => {
      store = configureStore([reduxPromise])({ movies: [] });
      component = shallow(<MovieDetails store={store} {...props} />).dive();
      instance = component.instance();
    });
    it('should render loading', () => {
      expect(shallowToJson(component)).toMatchSnapshot();
    });
    it('should request movieById from service', () => {
      expect(getMovieById).toHaveBeenCalledWith(Number(props.match.params.id));
    });
    describe('and service resolve with success', () => {
      it('should setState with movie', async done => {
        await component.update();
        expect(component.state().movie).toEqual(movie1);
        done();
      });
      it('should get moviesByGenres', () => {
        expect(getMovies).toHaveBeenCalledWith({
          search: component.state().movie.genres[0],
          searchBy: 'genres',
          sortBy: 'release_date',
          sortOrder: 'asc',
        });
      });
    });
  });

  describe('when there is movies on store', () => {
    beforeEach(() => {
      store = configureStore([reduxPromise])({ movies: [movie1, movie2] });
      component = shallow(<MovieDetails store={store} {...props} />).dive();
      instance = component.instance();
    });
    it('should render component', () => {
      expect(shallowToJson(component)).toMatchSnapshot();
    });
    it('should not request movieById from service', () => {
      expect(getMovieById).not.toHaveBeenCalled();
    });
    it('should get movie by id from store', () => {
      component.update();
      expect(component.state().movie).toEqual(movie1);
    });
  });

  describe('when component willReceiveProps', () => {
    beforeEach(() => {
      store = configureStore([reduxPromise])({ movies: [movie1, movie2] });
      component = shallow(<MovieDetails store={store} {...props} />).dive();
      instance = component.instance();
    });
    describe('and the movieId on newProps is same', () => {
      beforeEach(() => {
        instance.componentWillReceiveProps(props);
      });
      it('should do nothing', () => {
        component.update();
        expect(component.state().movie).toEqual(movie1);
      });
    });
    describe('and the movieId on newProps is different', () => {
      beforeEach(() => {
        props.match.params.id = 200;
        instance.componentWillReceiveProps(props);
      });
      it('should get movie by id from store', () => {
        component.update();
        expect(component.state().movie).toEqual(movie2);
      });
    });
  });
});
