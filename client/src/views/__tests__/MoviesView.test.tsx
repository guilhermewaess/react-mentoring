import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import MoviesView from './../MoviesView';


describe('MoviesView', () => {
  let component: ShallowWrapper;
  let routeProps: any;

  const helper = {
    createRouteProps() {
      return {
        match: { url: '/baseUrl' }
      }
    }
  }

  beforeEach(() => {
    routeProps = helper.createRouteProps();
    component = shallow(<MoviesView {...routeProps} />)
  });
  describe('when construct', () => {
    it('should render', () => {
      expect(shallowToJson(component)).toMatchSnapshot();
    });
  });
});