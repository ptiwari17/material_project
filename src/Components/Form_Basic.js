import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const Form_Basic = () => {
    const[Inputs,setInputs] = useState({Name:'',
                                        Email:'', 
                                        Password:'',
                                       })
let {Name,Email,Password}=Inputs;
const HandleChange = (e) => {
  setInputs((prev)=>({
    [e.target.name]: [e.target.value]
}))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    };
  return (
    <>
    <form onSubmit={handleSubmit}>
        < TextField 
        type='text'
        name='name'
        value={Name}
        label='name'
        variant='standard'
        sx={{margin:"20px",width:"35%"}}
        onChange={HandleChange}
        />
        <br />
        < TextField 
        type='text'
        name='email'
        value={Email}
        label='Email'
        variant='standard'
        sx={{margin:"20px",width:"35%"}}
        onChange={HandleChange}
        />
        <br />
        < TextField 
        type='password'
        name='password'
        value={Password}
        label='Password'
        variant='standard'
        sx={{margin:"20px",width:"35%"}}
        onChange={HandleChange}
        />
        <br />
        < Button type='submit' value='Submit'  variant='contained'
        sx={{margin:"20px",width:"20%"}}

        >Submit</Button>
    </form>
  </>
  )
}
export default Form_Basic;
