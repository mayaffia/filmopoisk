import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import {setupStore} from "./app/store/store";
import {Provider} from "react-redux";
import {applyMiddleware} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import {rootReducer} from "./app/store/store";


const store = setupStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>

);