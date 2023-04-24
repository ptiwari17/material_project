import React from 'react';
import {TextField,Button, Box} from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import {Increment,Decrement} from './actions/IncType';


function App() {
const myState = useSelector((state) => state.Inc_Dec);
const dispatch = useDispatch();
  return (
    <>
  {/* <form  > */}
  <Box  sx={{
        width: 300,
        height: 300,
        marginLeft:'500px',
        marginTop:'50px',
        justifyContent: 'center',
        backgroundColor: 'beige',
        '&:hover': {
          backgroundColor: 'Highlight',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
    <TextField variant='standard' fullwidth='true' type="text" value={myState} sx={{marginLeft:"40px",justifyContent:"center",textAlign:"center",paddingLeft:'20px'}} />
    <br />
    <Button type='submit' variant='contained' color='error' sx={{margin:"40px"}}  onClick={()=>dispatch(Increment())}>add</Button>
    <Button type='submit' variant='contained' color='warning' onClick={()=>dispatch(Decrement())}>Minus</Button>
  </Box>
  {/* </form> */}
    
    </>
  );
}

export default App;
