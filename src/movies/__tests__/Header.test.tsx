import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Header from './../Header';

describe('Movies Header', () => {
  let component: ShallowWrapper;
  let props: any;

  beforeEach(() => {
    props = {
      onSearch: jest.fn(),
      handleFilterChange: jest.fn(),
      filter: {
        search: 'searchValue'
      }
    }
    component = shallow(<Header {...props} />)
  });

  describe('when construct', () => {
    it('should render component', () => {
      expect(shallowToJson(component)).toMatchSnapshot();
    });
    it('should render SearchInput properly', () => {
      const searchInput = component.find('SearchInput').shallow();
      expect(shallowToJson(searchInput)).toMatchSnapshot();
    });
  });
});