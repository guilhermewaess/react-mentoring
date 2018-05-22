jest.mock('redux-persist/lib/storage', () => ({}));
jest.mock('redux-persist', () => (
  {
    persistReducer: jest.fn().mockReturnValue(jest.fn()),
    persistStore: jest.fn().mockReturnValue({})
  }
))
import { persistor, store } from './../../store';

describe('StoreIndex', () => {
  it('should return configured store', () => {
    expect(store).toMatchSnapshot();
  });
  it('should return configured persistor', () => {
    expect(persistor).toMatchSnapshot();
  });
});