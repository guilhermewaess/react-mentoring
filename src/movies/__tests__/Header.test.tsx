import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import Header from './../Header';

describe('Movies Header', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Header />)
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