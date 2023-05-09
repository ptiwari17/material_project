import React, { useState } from 'react';
import Axios from 'axios';

const Axios_Post = () => {
    let base_url = "https://jsonplaceholder.typicode.com/posts"
    const [my_title,setMytitle] = useState("");
    const [my_body,setMybody] = useState("");
    let requestdata = {
        title: my_title,
        body: my_body
    }
    Axios.post(base_url, requestdata)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    }
    );
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" value={my_title} onChange={(e)=>setMytitle(e.target.value)} />
        <input type="text" value={my_body} onChange={(e)=>setMybody(e.target.value)} />
        <button type='submit'> Submit</button>
    </form>
      
    </div>
  )
}

export default Axios_Post
