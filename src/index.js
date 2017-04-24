import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { ConnectedApp } from './App';
import { restoreAccount } from './actions/account';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  restoreAccount(store)

  ReactDOM.render(
      <Provider store={store} >
        <Router history={browserHistory}>
          <Route path="/(:filter)" component={ConnectedApp}/>
        </Router>
      </Provider>,
    document.getElementById('root')
  );
