jest.mock('./../../core/store/actions', () => ({
  getMovies: jest.fn().mockReturnValue({
    type: 'test'
  })
}));

import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import * as configureStore from 'redux-mock-store';
import * as reduxPromise from 'redux-promise';
import { getMovies } from './../../core/store/actions';
import MoviesContainer from './../Movies';

// jest.unmock('redux-mock-store');

describe('MoviesContainer', () => {
  let component: ShallowWrapper<any, any>;
  let instance: any;
  let props: any;
  let historySubscriptionCallback: any;
  let store: any;

  const helper = {
    createProps() {
      historySubscriptionCallback = jest.fn();
      const propsObject = {
        history: {
          listen: jest.fn(),
          push: jest.fn(),
        },
        location: { search: '?search=abc' },
        movies: [],
      };

      propsObject.history.listen.mockReturnValue(historySubscriptionCallback);

      return propsObject;
    },
  };

  beforeEach(() => {
    props = helper.createProps();
    store = configureStore([reduxPromise])({});
    component = shallow(<MoviesContainer store={store} {...props} />).dive();
    instance = component.instance();
  });

  describe('when construct', () => {
    it('should subscribe history with search function', () => {
      expect(instance.historySubscription).toEqual(historySubscriptionCallback);
    });
  });

  describe('when call componentDidMount', () => {
    beforeEach(() => {
      instance.componentDidMount();
    });
    it('should have state updated with query params', () => {
      expect(component.state()).toEqual({
        filter: {
          search: 'abc',
          searchBy: 'title',
          sortBy: 'release_date',
          sortOrder: 'asc',
        },
      });
    });
    it('should update queryStrings with new filter', () => {
      expect(props.history.push).toHaveBeenCalledWith({
        pathname: '/movies',
        search: 'search=abc&searchBy=title&sortBy=release_date&sortOrder=asc',
      });
    });
  });

  describe('when call componentWillUnmount', () => {
    beforeEach(() => {
      instance.componentWillUnmount();
    });
    it('should execute historySubscriptions', () => {
      expect(historySubscriptionCallback).toHaveBeenCalledTimes(1);
    });
  });

  describe('when call search', () => {
    beforeEach(() => {
      instance.search();
    });
    it('should call getMovies with current filter', () => {
      expect(getMovies).toHaveBeenCalledWith(component.state().filter);
    });
  });

});
