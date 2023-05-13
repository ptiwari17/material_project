import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// // import store from './Store';
// import {Provider} from 'react-redux';
import FORMIK_LIB,{Globalstyled} from './Components/FORMIK_LIB';
// import Globalstyled from './Components/GlobalStyle';
// import Axios_get from './Crud Operation/Axios_get';
// import Axios_Post from './Crud Operation/Axios_Post';
// import Create_Post from './Crud Operation/Create_Post';
// import { BrowserRouter } from 'react-router-dom';
// import Crud_Store from './Crud Operation/Crud_Store';
// output will come in console
// store.subscribe(() => console.log(store.getState()));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Globalstyled />
     <FORMIK_LIB/>
  </React.StrictMode>
);

