import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter  as Router} from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension"
import {createStore} from "redux"
import {Provider} from "react-redux"
import rootReducer from "./reducers"
const store = createStore(rootReducer,composeWithDevTools ());
ReactDOM.render(
  
    <Provider store={store}>
    <Router><App /></Router>
    </Provider>,
  
  document.getElementById('root')
   )



