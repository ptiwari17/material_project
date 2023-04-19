import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, FormGroup, FormHelperText, Radio, Switch, TextField } from '@mui/material';

const Form_Basic = () => {
    const[Inputs,setInputs] = useState({Name:'',
                                        Email:'', 
                                        Password:'',
                                        Check:true,
                                       })
let {Name,Email,Password,Check}=Inputs;
const HandleChange = (e) => {
  setInputs(()=>{
    return{[e.target.name]: e.target.value
}})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    };
const handleSwitch=()=> {
  setInputs((prev)=>({
    ...prev, Check : !Check
  }));
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
        <FormGroup>
         < FormControlLabel 
         label="i agree" 
         labelPlacement='top'
         control={<Switch color='error' onChange={handleSwitch}/>} 
         value={Check}
         sx={{margin:"20px",width:"35%"}}
        />
        < FormHelperText sx={{margin:"20px",width:"35%",textSize:"100px"}}
        >We'll never share your data
        </ FormHelperText>
        </FormGroup>
        <br />
        < Button type='submit' value='Submit'  variant='contained'
        sx={{margin:"20px",width:"20%"}}>Submit</Button>
    </form>
  </>
  )
}
export default Form_Basic;
