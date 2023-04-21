import React, { useState } from 'react';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Switch, TextField } from '@mui/material';

const Form_Basic = () => {
    const[Inputs,setInputs] = useState({Name:'',
                                        Email:'', 
                                        Password:'',
                                        Check:true,
                                        Courses:'',
                                        Gender:'',
                                       })
let {Name,Email,Password,Check,Courses}=Inputs;
const HandleChange = (e) => {
  setInputs(()=>{
    return{[e.target.name]: e.target.value
}})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[5].value);
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
        type='email'
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
        
        < FormControl sx={{margin:"20px",width:"35%"}}> 
        < InputLabel>Courses</InputLabel>
        < Select value={Courses} name='Courses' onChange={HandleChange} >
        < MenuItem value={'React'}>React</MenuItem>
        < MenuItem value={'Python'}>Python</MenuItem>
        < MenuItem value={'Html'}>Html</MenuItem>
        < MenuItem value={'css'}>css</MenuItem>
        </Select>
        </FormControl>
        {/* </FormGroup> */}
        <FormControl>
          <FormLabel sx={{margin:"20px",width:"35%"}}>Gender</FormLabel>
          <RadioGroup  name='Gender' onChange={HandleChange} label='gender' sx={{margin:"0px",width:"35%" , display:"inline"}}>
            <FormControlLabel value={'male'} label="male" control={<Radio />} />
            <FormControlLabel value={'female'} label="female" control={<Radio />} />
            <FormControlLabel value={'other'} label="other" control={<Radio />} />
          </RadioGroup>
        </FormControl>
        </FormGroup>
        <br />
        < Button type='submit' value='Submit'  variant='contained'
        sx={{margin:"2px",width:"20%"}}>Submit</Button>
        < FormHelperText sx={{margin:"20px",width:"35%",textSize:"100px"}}
        >We'll never share your data
        </ FormHelperText>
    </form>
  </>
  )
}
export default Form_Basic;
