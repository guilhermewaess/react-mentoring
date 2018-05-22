jest.mock('./../../core/store/actions', () => ({
  getMovies: jest.fn().mockReturnValue({
    type: 'test',
  }),
}));

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
// import * as configureStore from 'redux-mock-store';
import * as reduxPromise from 'redux-promise';
import { getMovies } from './../../core/store/actions';
import MoviesContainer from './../MoviesContainer';

// work around the lack of definition file
const configureStore = require('redux-mock-store'); //tslint:disable-line

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

  it('should render', () => {
    expect(shallowToJson(component)).toMatchSnapshot();
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

  describe('when call onSearchHandler', () => {
    let event: any;
    let updateFilterSpy: any;
    beforeEach(() => {
      event = { preventDefault: jest.fn() };
      updateFilterSpy = jest.spyOn(instance, 'updateFilter');
      instance.onSearchHandler(event);
    });
    afterEach(() => {
      updateFilterSpy.mockRestore();
    });
    it('should preventDefault of event', () => {
      expect(event.preventDefault).toHaveBeenCalledTimes(1);
    });
    it('should update filter', () => {
      expect(instance.updateFilter).toHaveBeenCalledTimes(1);
    });
  });

  describe('when call onFilterChangeHandler', () => {
    let event: any;
    let updateFilterSpy: any;
    beforeEach(() => {
      event = {
        stopPropagation: jest.fn(),
        target: {
          dataset: { filterField: 'searchBy' },
          value: 'genre',
        },
      };
      updateFilterSpy = jest.spyOn(instance, 'updateFilter');
    });
    afterEach(() => {
      updateFilterSpy.mockRestore();
    });
    describe('with shouldSearch false', () => {
      beforeEach(() => {
        instance.onFilterChangeHandler(false, event);
      });
      it('should stop event propagation', () => {
        expect(event.stopPropagation).toHaveBeenCalledTimes(1);
      });
      it('should update state with new filter value', () => {
        expect(component.state().filter.searchBy).toEqual(event.target.value);
      });
      it('should not updateFilter', () => {
        expect(instance.updateFilter).not.toHaveBeenCalled();
      });
    });
    describe('with shouldSearch true', () => {
      beforeEach(() => {
        instance.onFilterChangeHandler(true, event);
      });
      it('should updateFilter', () => {
        expect(instance.updateFilter).toHaveBeenCalledTimes(1);
      });
    });
  });
});
