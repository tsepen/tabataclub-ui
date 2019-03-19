import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const middelwares = [];

export default () =>
  createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(...middelwares))
  );
