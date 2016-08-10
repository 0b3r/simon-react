import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

export default () => {
  const middlewares = [];

  // if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  // }

  const store = createStore(
    rootReducer, 
    applyMiddleware(...middlewares)
  );

  return store;
}
