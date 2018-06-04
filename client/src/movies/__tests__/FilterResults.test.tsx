import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import FilterResults from './../FilterResults';

describe('Movies FilterResults', () => {
  let component: ShallowWrapper;
  let props: any;

  beforeEach(() => {
    props = {
      filter: {
        orderBy: 'orderBy',
        sortBy: 'desc',
      },
      onFilterChange: jest.fn(),
      movies: []
    }
    component = shallow(<FilterResults {...props} />)
  });

  describe('when construct', () => {
    it('should render component', () => {
      expect(shallowToJson(component)).toMatchSnapshot();
    });
    it('should render MoviesFound properly', () => {
      const moviesFound = component.find('MoviesFound').shallow();
      expect(shallowToJson(moviesFound)).toMatchSnapshot();
    });
    it('should render SortyBy properly', () => {
      const sortBy = component.find('SortBy').shallow();
      expect(shallowToJson(sortBy)).toMatchSnapshot();
    });
    it('should render OrderBy properly', () => {
      const orderBy = component.find('OrderBy').shallow();
      expect(shallowToJson(orderBy)).toMatchSnapshot();
    });
  });
});