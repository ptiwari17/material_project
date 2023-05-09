import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Axios_get = () => {
    let base_url = 'https://jsonplaceholder.typicode.com/posts';
    const [my_Data,setData] = useState([])
    useEffect(()=> {
        Axios.get(base_url).then((response)=>{
            console.log(response.data);
            setData(response.data)
            console.log('for checking data in state that we made:-',my_Data);
        }).catch((error)=>{
            console.log("error is wrong url",error.data);
        });
    },[]);
    console.log('for checking data in state that we made outside useEffect:-',my_Data);

  return (
    <div>
      <h1>GET OPERATION USING AXIOS</h1>
      {/* <h1>{JSON.stringify(my_Data)}</h1> */}
      {/* <h2>{my_Data[1].title}</h2> */}
      <h2> 
      {
        my_Data.map((val)=>{
            const {userId,id,title,body} = val;
            return(
            <>   
            <h3>{userId}</h3>
            <h3>{id}</h3>
            {/* <h3>{title}</h3> */}
            <h3>{title.slice(0,10)}</h3>
            <h3>{body}</h3>
            <h3>{body.toUpperCase()}</h3>
            </>
            )
        })
      }
      </h2>
    </div>
  )
}

export default Axios_get;
