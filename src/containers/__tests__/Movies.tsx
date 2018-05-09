import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import { IMovie } from '../../core/interfaces';
import Movies from './../Movies';

describe('Movies', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Movies />);
  });

  describe('when construct', () => {
    it('should have state', () => {
      expect(component.state()).toEqual({
        movies: [
          {
            budget: 0,
            genres: ['Action', 'Adventure', 'Science Fiction'],
            id: 447365,
            overview:
              "The third film based on Marvel's Guardians of the Galaxy.",
            poster_path:
              'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
            release_date: '2020-05-01',
            revenue: 0,
            runtime: null,
            tagline: '',
            title: 'Guardians of the Galaxy Vol. 3',
            vote_average: 0,
            vote_count: 9,
          },
          {
            budget: 0,
            genres: ['Action', 'Adventure', 'Science Fiction'],
            id: 447366,
            overview:
              "The third film based on Marvel's Guardians of the Galaxy.",
            poster_path:
              'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
            release_date: '2020-05-01',
            revenue: 0,
            runtime: null,
            tagline: '',
            title: 'Guardians of the Galaxy Vol. 3',
            vote_average: 0,
            vote_count: 9,
          },
          {
            budget: 0,
            genres: ['Action', 'Adventure', 'Science Fiction'],
            id: 447367,
            overview:
              "The third film based on Marvel's Guardians of the Galaxy.",
            poster_path:
              'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
            release_date: '2020-05-01',
            revenue: 0,
            runtime: null,
            tagline: '',
            title: 'Guardians of the Galaxy Vol. 3',
            vote_average: 0,
            vote_count: 9,
          },
          {
            budget: 0,
            genres: ['Action', 'Adventure', 'Science Fiction'],
            id: 447368,
            overview:
              "The third film based on Marvel's Guardians of the Galaxy.",
            poster_path:
              'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
            release_date: '2020-05-01',
            revenue: 0,
            runtime: null,
            tagline: '',
            title: 'Guardians of the Galaxy Vol. 3',
            vote_average: 0,
            vote_count: 9,
          },
        ],
      });
    });
    it('should render', () => {
      expect(shallowToJson(component)).toMatchSnapshot();
    });
  });
});
