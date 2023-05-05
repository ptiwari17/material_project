import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Store';
import {Provider} from 'react-redux';
import FORMIK_LIB from './Components/FORMIK_LIB';
// output will come in console
store.subscribe(() => console.log(store.getState()));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Provider store={store} > */}
    <FORMIK_LIB />
  {/* </Provider> */}
  </React.StrictMode>
);

