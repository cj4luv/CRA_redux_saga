import React from 'react';
import ReactDOM from 'react-dom';

// **** (1 - 1) Provider 불러오기
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './uxs.css';

import App from './App';

// import * as serviceWorker from './serviceWorker';

import rootSaga from './sagas/sagas';

// **** (2) 스토어를 만들고 현재 값 확인해보기
const store = configureStore();

const runSagas = () => {
  // sagas start
  console.log('start sagas');
  store.runSaga(rootSaga);
};

runSagas();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// we don't need Worker because of it's hybrid app project.
// serviceWorker.unregister();
