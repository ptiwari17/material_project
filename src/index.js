import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Store';
import {Provider} from 'react-redux';
import FORMIK_LIB from './Components/FORMIK_LIB';
import Axios_get from './Crud Operation/Axios_get';
import Axios_Post from './Crud Operation/Axios_Post';
import Create_Post from './Crud Operation/Create_Post';
import { BrowserRouter } from 'react-router-dom';
import Crud_Store from './Crud Operation/Crud_Store';
// output will come in console
store.subscribe(() => console.log(store.getState()));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
     <Crud_Store />
  </BrowserRouter>
  </React.StrictMode>
);

