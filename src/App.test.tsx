import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import * as React from 'react';
import * as configureStore from 'redux-mock-store';
import * as reduxPromise from 'redux-promise';
import App from './App';


describe('App', () => {
  let app: ShallowWrapper;
  let store: any;

  beforeEach(() => {
    store = configureStore([reduxPromise])({});
    app = shallow(<App store={store}/>);
  });
  it('should render', () => {
    expect(shallowToJson(app)).toMatchSnapshot();
  });
});
