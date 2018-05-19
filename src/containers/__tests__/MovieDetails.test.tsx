jest.mock('./../../core/store/actions', () => ({
  getMovies: jest.fn().mockReturnValue({
    type: 'test',
  }),
}));

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import * as reduxPromise from 'redux-promise';
import MovieDetails from './../MovieDetails';
const configureStore = require('redux-mock-store'); //tslint:disable-line

describe('MovieDetails', () => {
  let component: ShallowWrapper;
  let store: any;
  let instance: any;
  let props: any;

  const helper = {
    createProps() {
      return {
        match: { params: { id: '100' } },
        movies: [],
      };
    },
  };
  beforeEach(() => {
    props = helper.createProps();
    store = configureStore([reduxPromise])({});
    component = shallow(<MovieDetails {...store} {...props} />);
    instance = component.instance();
  });
  // describe('when there is no movies', () => {
    
  // });
});
