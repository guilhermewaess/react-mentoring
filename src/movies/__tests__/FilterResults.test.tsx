import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import FilterResults from './../FilterResults';

describe('Movies FilterResults', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<FilterResults movies={[]} />)
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
  });
});