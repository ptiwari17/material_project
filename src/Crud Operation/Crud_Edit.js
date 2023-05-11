import React, { useEffect, useState } from 'react';
import {Typography,TextField,Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Box} from '@mui/material';

import Axios  from 'axios';
import { Link,useNavigate } from 'react-router-dom';


const Crud_Edit = () => {
    const base_url = 'https://6417d62d8e0487d453e548a0.mockapi.io/CRUD_PRACTICE';
    const [id,setId] = useState(0);
    const [Name,setName] = useState('');
    const [Age,setAge] = useState('');
    const [Email,setEmail] = useState('');
    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));
    },[]);
    const navigate = useNavigate();
    const RequestData = {
            e_Name : Name,
            e_Age : Age,
            e_Email : Email
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('console is running',e);
        Axios.put(`https://6417d62d8e0487d453e548a0.mockapi.io/CRUD_PRACTICE/${id}`,RequestData)
        .then(()=>{
            navigate('/')
        })
    }
  return (
    <>
    <div>
    <Link to={'/'}>
    <Button variant="outlined" size='large' color='error'>Go Back</Button>
    </Link>
    </div>
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
          value={Name}
          onChange={(e)=>{setName(e.target.value)}}
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
          value={Age}
          onChange={(e)=>{setAge(e.target.value)}}
        />
        <br />
        <TextField
        //   id="standard-helperText"
          label="Enter email"
          type='email'
          defaultValue=""
          helperText="Email is required"
          variant="standard"
          value={Email}
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
        <Typography variant="h4" >{Name}</Typography>
        <Typography variant="h4" >{Age}</Typography>
        <Typography variant="h4" >{Email}</Typography>
      </div>
      
    </Box>
    
    </>
  )
}

export default Crud_Edit;
