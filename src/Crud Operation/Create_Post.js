import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, Typography } from '@mui/material';
import Axios  from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Create_Post() {
    const base_url = 'https://6417d62d8e0487d453e548a0.mockapi.io/CRUD_PRACTICE';
    const [empName,setempName] = useState('');
    const [empAge,setempAge] = useState();
    const [empEmail,setEmail] = useState('');
    const navigate = useNavigate();
    const RequestData = {
            e_Name : empName,
            e_Age : empAge,
            e_Email : empEmail
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('console is running',e);
        Axios.post(base_url,RequestData)
        .then(()=>{
            navigate('/')
        })
    }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch',height: '10ch' },
        backgroundColor:"azure"
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div sx = {{width:"100%",backgroundColor:"green"}} >
      
        <TextField
          required
          fullWidth={true}
        //   id="standard-required"
          id="fullWidth"
          type='text'
          label="Employee Name"
          defaultValue=""
          variant="standard"
          value={empName}
          onChange={(e)=>{setempName(e.target.value)}}
        />
        <br />
        <TextField
        //   id="standard-number"
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          value={empAge}
          onChange={(e)=>{setempAge(e.target.value)}}
        />
        <br />
        <TextField
        //   id="standard-helperText"
          label="Enter email"
          type='email'
          defaultValue=""
          helperText="Email is required"
          variant="standard"
          value={empEmail}
          onChange={(e)=>{setEmail(e.target.value)}}
        />
        <br />
        <Button variant="outlined" color='success' type = 'submit'>Submit</Button>
        <br /><br />
        <Link to={'/'}>
        <Button variant="outlined" type = 'submit' color='error' size='large'>Go back</Button>
        </Link>
      </div>
     
      <div>
        <Typography variant="h4" >{empName}</Typography>
        <Typography variant="h4" >{empAge}</Typography>
        <Typography variant="h4" >{empEmail}</Typography>
      </div>
      
    </Box>
    
  );
}