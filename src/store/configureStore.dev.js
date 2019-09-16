import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from '../reducers';

// 리덕스 개발자도구 적용
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(
      createRootReducer(),
      compose(
        applyMiddleware(sagaMiddleware),
        devTools,
      ),
    ),
    runSaga: sagaMiddleware.run,
  };
}
