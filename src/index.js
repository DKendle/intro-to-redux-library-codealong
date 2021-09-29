// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import counterReducer from './reducers/counterReducer.js';
import App from './App';
import './index.css';
import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(
    counterReducer,
    composeWithDevTools()
  )


ReactDOM.render(<App store={store}/>, document.getElementById('root'));
