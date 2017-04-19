import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import axios from 'axios'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { ConnectedApp } from './App';
import  { accountRestore } from './actions/account';
import './index.css';
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  accountRestore(store)

  ReactDOM.render(
      <Provider store={store} >
        <ConnectedApp />
      </Provider>,
    document.getElementById('root')
  );
