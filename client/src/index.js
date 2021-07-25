import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import storeReducer from './store/store';

const store = createStore(storeReducer);
store.subscribe(() => {
  //  console.log('Store Updated ', store.getState())
})
/**
 * HIDE console.log if not DEV MODE
 */
 //if(process.env.REACT_APP_ENV !== "development") console.log = () => {};

 const app = (
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
