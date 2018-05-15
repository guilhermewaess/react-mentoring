import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import * as configureStore from 'redux-mock-store';
import MoviesContainer from './../Movies';

// jest.unmock('redux-mock-store');

describe('MoviesContainer', () => {
  let component: ShallowWrapper<any, any>;
  let props: any;
  let historySubscriptionCallback: any;
  let store: any;

  const helper = {
    createProps() {
      historySubscriptionCallback = jest.fn();
      const propsObject = {
        history: {
          listen: jest.fn(),
          push: jest.fn()
        },
        location: { search: '?search=abc' },
        getMovies: jest.fn(),
        movies: []
      };

      propsObject.history.listen.mockReturnValue(historySubscriptionCallback)

      return propsObject;
    }
  }

  beforeEach(() => {
    props = helper.createProps();
    store = configureStore()({});
    component = shallow(<MoviesContainer store={store} {...props} />).dive();
  });

  describe('when construct', () => {
    it('should have state updated with query params', () => {
      expect(component.state()).toEqual({
        filter: {
          search: 'abc',
          searchBy: 'title',
          sortBy: 'release_date',
          sortOrder: 'asc'
        },
      });
    });
    it('should subscribe history with search function', () => {
      const instance = component.instance() as any;

      expect(instance.historySubscription).toEqual(historySubscriptionCallback);
    });
    it('should update queryStrings with new filter', () => {
      expect(props.history.push).toHaveBeenCalledWith({
        pathname: '/movies',
        search: 'search=abc&searchBy=title&sortBy=release_date&sortOrder=asc'
      });
    });
  });
});
