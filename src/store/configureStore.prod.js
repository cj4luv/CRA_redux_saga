import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from '../reducers';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(
      createRootReducer(),
      compose(
        applyMiddleware(sagaMiddleware),
      ),
    ),
    runSaga: sagaMiddleware.run,
  };
}
