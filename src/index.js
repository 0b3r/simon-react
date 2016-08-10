import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import createApp from './components/App';

const store = configureStore();
const App = createApp(React);

console.log(store.getState());

render(
  <App store={store} />,
  document.getElementById('root')
);