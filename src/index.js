import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './styles/index.css';

import Thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import Reducers from "./reducers";

import registerServiceWorker from './registerServiceWorker';

let store = createStore(Reducers, applyMiddleware(Thunk));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
