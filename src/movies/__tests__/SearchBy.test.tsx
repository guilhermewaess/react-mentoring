import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import SearchBy from './../SearchBy';

describe('Movies SearchBy', () => {
  let component: ShallowWrapper;
  let props: any;

  describe('when construct', () => {
    beforeEach(() => {
      props = {
        onSearch: jest.fn(),
        handleFilterChange: jest.fn(),
        filter: {
          searchBy: 'title',
        },
      };
      component = shallow(<SearchBy {...props} />);
    });
    it('should render', () => {
      expect(shallowToJson(component)).toMatchSnapshot();
    });
  });
});
