import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Crud_Read from './Crud_Read';
import Create_Post from './Create_Post';
import Crud_Edit from './Crud_Edit';

const Crud_Store = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element = {<Crud_Read />}></Route>
        <Route exact path='/create' element = {<Create_Post />}></Route>
        <Route exact path='/edit' element = {<Crud_Edit />}></Route>

      </Routes>
    </div>
  )
}

export default Crud_Store;
