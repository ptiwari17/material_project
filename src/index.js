import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Store';
import {Provider} from 'react-redux';
import FORMIK_LIB from './Components/FORMIK_LIB';
import Axios_get from './Crud Operation/Axios_get';
import Axios_Post from './Crud Operation/Axios_Post';
// output will come in console
store.subscribe(() => console.log(store.getState()));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Provider store={store} > */}
    <Axios_Post />
  {/* </Provider> */}
  </React.StrictMode>
);

