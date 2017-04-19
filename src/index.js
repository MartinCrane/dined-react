import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import axios from 'axios'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import  App from './App';
import  { accountPing } from './actions/account';
import './index.css';
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  accountPing(store)

  ReactDOM.render(
      <Provider store={store} >
        <App />
      </Provider>,
    document.getElementById('root')
  );
