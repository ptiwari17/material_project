import { useFormik } from 'formik';
import React, { useState } from 'react';
import useCUSTOM from './CUSTOM_HOOKS';
import Schema from './Schema';

const FORMIK_LIB = () => {
  const [formData,setformData] = useState({});
    // let formik=useFormik({
    let {handleSubmit,handleChange,handleBlur,touched,values,errors}=useFormik({
        initialValues: {
        name: '',
        email:''
        },
        validationSchema: Schema,
        onSubmit: (values,action) => {
            // console.log(values);
            setformData(()=>{
              return values;
            });
            action.resetForm();
        }
    })
    useCUSTOM(formData);
  return (
    <div>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <form onSubmit={handleSubmit}>
        {/* <input type="text" name='name' value={formik.values.name} onChange={formik.handleChange}/> */}
        <input type="text" name='name' value={values.name} onBlur={handleBlur} onChange={handleChange}/>
        {/* <span style={{color: 'red'}}>{formik.errors.name}</span> */}
        {errors.name && touched.name?
        (<span style={{color: 'red'}}>{errors.name}</span>):null}
        <br />
        <input type="text" name='email' value={values.email} onBlur={handleBlur} onChange={handleChange} />
        {errors.email && touched.email?
        (<span style={{color: 'red'}}>{errors.email}</span>):null}
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1> this is the value of name:- {values.name}</h1>
      <h1>this is the value of email:- {values.email}</h1>
      <h1>{JSON.stringify(formData)}</h1>
    </div>
  )
}

export default FORMIK_LIB;
