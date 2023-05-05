import { useFormik } from 'formik';
import React from 'react';

const FORMIK_LIB = () => {
    let formik=useFormik({
        initialValues: {
        name: '',
        email:''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input type="text" name='name' value={formik.values.name} onChange={formik.handleChange}/>
        <br />
        <input type="text" name='email' value={formik.values.email} onChange={formik.handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1> this is the value of name ->{formik.values.name}</h1>
      <h1>this is the value of email ->{formik.values.email}</h1>
      {/* <h1>{formik.values}</h1> */}
    </div>
  )
}

export default FORMIK_LIB;
