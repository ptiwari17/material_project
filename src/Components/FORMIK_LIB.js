import { useFormik } from 'formik';
import React, { useState } from 'react';
import useCUSTOM from './CUSTOM_HOOKS';

const FORMIK_LIB = () => {
  const [formData,setformData] = useState({});
    let formik=useFormik({
        initialValues: {
        name: '',
        email:''
        },
        onSubmit: (values) => {
            // console.log(values);
            setformData(()=>{
              return values;
            });
        }
    })
    useCUSTOM(formData);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input type="text" name='name' value={formik.values.name} onChange={formik.handleChange}/>
        <br />
        <input type="text" name='email' value={formik.values.email} onChange={formik.handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1> this is the value of name:- {formik.values.name}</h1>
      <h1>this is the value of email:- {formik.values.email}</h1>
      <h1>{JSON.stringify(formData)}</h1>
    </div>
  )
}

export default FORMIK_LIB;
