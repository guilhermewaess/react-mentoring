jest.mock('./core/store', () => ({
  store: { 
    subscribe: jest.fn(), 
    dispatch: jest.fn(),
    getState: jest.fn(),
  }
}));

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import App from './App';

describe('App', () => {
  let app: ShallowWrapper;

  beforeEach(() => {
    app = shallow(<App />);
  });
  it('should render', () => {
    expect(shallowToJson(app)).toMatchSnapshot();
  });
});
