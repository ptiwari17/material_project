import { useFormik } from 'formik';
import React, { useState } from 'react';
import useCUSTOM from './CUSTOM_HOOKS';
import Schema from './Schema';
import styled,{createGlobalStyle} from 'styled-components';
const Wrapper = styled.section`
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: aqua;
                min-height:30vh;
                `;
const Input = styled.input `
              color: yellow;
              background-color:green;
              `
const Button = styled.button`
               color: ${(props)=>(props.primary ? 'red' : 'blue')};
               font-size: 40px;
               background-color:white;
               &:hover{
                background-color:yellow;
               }
               `
const Secondbutton = styled(Button)`
                background-color:#a61308;
                &:hover{
                  background-color:#7e98de;
                }
                `
export const  Globalstyled = createGlobalStyle`
               body{
                 background-color:#eaebe1;
               }`

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
    <>
     <Wrapper>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <form onSubmit={handleSubmit}>
        {/* <input type="text" name='name' value={formik.values.name} onChange={formik.handleChange}/> */}
        <label>Enter the Name </label>
        <Input type="text" name='name' value={values.name} onBlur={handleBlur} onChange={handleChange}/>
        {/* <span style={{color: 'red'}}>{formik.errors.name}</span> */}
        {errors.name && touched.name?
        (<span style={{color: 'red'}}>{errors.name}</span>):null}
        <br />
        <label>Enter the Email </label>

        <Input type="text" name='email' value={values.email} onBlur={handleBlur} onChange={handleChange} />
        {errors.email && touched.email?
        (<span style={{color: 'red'}}>{errors.email}</span>):null}
        <br /> <br />
        <label>Submit the form </label>
        <Button type="submit" primary>Submit</Button>
        <Button type="submit">Submit</Button>
        <Secondbutton type="submit">Submit</Secondbutton>
        <Secondbutton type="submit" primary>Submit</Secondbutton>
      </form>
      </Wrapper>
      <Wrapper>
      <h1> this is the value of name:- {values.name}</h1>
      <h1>this is the value of email:- {values.email}</h1>
      <h1>{JSON.stringify(formData)}</h1>
      </Wrapper>
    </>
  )
}

export default FORMIK_LIB;
