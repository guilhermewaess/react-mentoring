import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import App from './App';


describe('App', () => {
  let app: ShallowWrapper<App>;
  beforeEach(() => {
    app = shallow(<App />);
  });

  it('should render', () => {
    expect(shallowToJson(app)).toMatchSnapshot();
  });
});
