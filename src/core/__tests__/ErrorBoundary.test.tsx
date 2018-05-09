import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import ErrorBoundary from './../ErrorBoundary';

describe('ErrorBoundary', () => {
  let component: ShallowWrapper<ErrorBoundary>;
  beforeEach(() => {
    component = shallow(<ErrorBoundary children={<div>Children</div>} />);
  });
  describe('when construct', () => {
    it('should have state', () => {
      expect(component.state()).toEqual({ hasError: false });
    });
    it('should render with state.hasError false', () => {
      expect(shallowToJson(component)).toMatchSnapshot();
    });
  });
  // TODO: https://github.com/airbnb/enzyme/issues/1553
  // Test componentDidCatch in the future
  describe('when component catch an error', () => {
    beforeEach(() => {
      component.setState({ hasError: true});
    });
    it('should render with state.hasError true', () => {
      expect(shallowToJson(component)).toMatchSnapshot();
    });
  });
});
