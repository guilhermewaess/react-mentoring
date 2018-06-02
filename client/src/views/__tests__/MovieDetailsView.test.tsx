import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import MovieDetailsView from './../MovieDetailsView';


describe('MovieDetailsView', () => {
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
    component = shallow(<MovieDetailsView {...routeProps} />)
  });
  describe('when construct', () => {
    it('should render', () => {
      expect(shallowToJson(component)).toMatchSnapshot();
    });
  });
});