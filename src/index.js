import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import axios from 'axios'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import  App from './App';
import './index.css';
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  if (localStorage.jwt) {
    fetch(`http://localhost:4000/ping`, {
      method: 'post',
      headers: {
        Authorization: `${localStorage.jwt}`,
        }
      }).
      then(res => res.json()).
      then(res => {
        let log = false
        if (res.logged_in === "true") {
          log = true
        }
        store.dispatch({type: 'SET_LOGIN', payload: log})
      }).catch(function(err) {
      })
    }

  ReactDOM.render(
      <Provider store={store} >
        <App />
      </Provider>,
    document.getElementById('root')
  );
