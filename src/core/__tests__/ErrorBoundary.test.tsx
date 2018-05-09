import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import ErrorBoundary from './../ErrorBoundary';

describe('ErrorBoundary', () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<ErrorBoundary children={<div>Children</div>} />, {
      lifecycleExperimental: true,
    });
  });
  describe('when construct', () => {
    it('should have state', () => {
      expect(component.state()).toEqual({ hasError: false });
    });
    it('should render with state.hasError false', () => {
      expect(shallowToJson(component)).toMatchSnapshot();
    });
  });

  describe('when component catch an error', () => {
    beforeEach(() => {
      // component.setState({ hasError: true });
      const instance = component.instance() as ErrorBoundary;
      instance.componentDidCatch('', '');
      component.update();
    });
    it('should setState with hasError true', () => {
      expect(component.state()).toEqual({ hasError: true });
    });
    it('should render with state.hasError true', () => {
      expect(shallowToJson(component)).toMatchSnapshot();
    });
  });
});
