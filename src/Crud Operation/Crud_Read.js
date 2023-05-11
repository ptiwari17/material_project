import React, { useState,useEffect } from 'react';
import Axios  from 'axios';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@mui/material';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';



const Crud_Read = () => {
    const base_url = 'https://6417d62d8e0487d453e548a0.mockapi.io/CRUD_PRACTICE';
    const [my_Data,setData] = useState([])
    const getData = () =>{
      Axios.get(base_url).then((response)=>{
        console.log(response.data);
        setData(response.data)
        console.log('for checking data in state that we made:-',my_Data);
    }).catch((error)=>{
        console.log("error is wrong url",error.data);
    });
    }

    useEffect(() =>{
        getData();
    },[]);
    console.log('for checking data in state that we made outside useEffect:-',my_Data);
    // Delete operation of CRUD
    const [openBox,setOpenBox] = useState(false)
    const openDialogue = () =>{
        setOpenBox(true);
    }
    const handleClose = () => {
    setOpenBox(false);
  };
  const handleDelete = (id) => {
    Axios.delete(`https://6417d62d8e0487d453e548a0.mockapi.io/CRUD_PRACTICE/${id}`)
    .then((response)=>{
      console.log('after delete operation',response.data);
      getData();
      setOpenBox(false);
    }
    
    )
  }
  console.log('for checking data in state after handleDelete:-',my_Data);
  const setDataTostorage = (id,Name,Age,Email) => {
    localStorage.setItem('id',id);
    localStorage.setItem('name',Name);
    localStorage.setItem('age',Age);
    localStorage.setItem('email',Email);
  }
  return (
    <div>
    <Link to={'/create'}>
    <Button variant="outlined" size='large'>Create</Button>
    </Link>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {my_Data && my_Data.map((row) => {
            return (
            <>
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.e_Name}</TableCell>
              <TableCell align="right">{row.e_Age}</TableCell>
              <TableCell align="right">{row.e_Email}</TableCell>
              <TableCell align="right">
              <Link to={"/edit"}>
              <Button variant="outlined" onClick={()=>setDataTostorage(row.id,row.e_Name,row.e_Age,row.e_Email)}>Edit</Button>
              </Link>
              </TableCell>
              <TableCell align="right">
              <Button variant="outlined"onClick={openDialogue}>Delete</Button>
              </TableCell>
            </TableRow>
            <Dialog
        open={openBox}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to Delete Data"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Data will permanentaly delete from device
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='error'>Disagree</Button>
          <Button onClick={()=> handleDelete(row.id)} autoFocus color='success'>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
    
      
    </div>
  )
}

export default Crud_Read;
// _.remove(array, {id:toDelete})