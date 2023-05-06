import React,{useEffect} from 'react';

const useCUSTOM = (value) => {
  return (
    useEffect(() =>{
        console.log('this is from self made hook-',(value))
    },[value])
  )
}
export default useCUSTOM;