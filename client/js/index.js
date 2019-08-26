import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import {Routerss} from './routes';
import configureStore from './store/configureStore.js';

export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <Routerss/>
  </Provider>
  , document.getElementById('root'));
