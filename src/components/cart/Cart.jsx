import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cart = () => {
    const[data,setData]=useState([])
    async function getData(){
        try {
            const response=await axios.get(`http://localhost:8000/cart`,{
                headers: {'Content-Type': 'application/json'}
                // body:JSON.stringify(),
                // header:{'content-type':'application/json'}
            })
            console.log("cart",response)
            setData(response?.data)
            
            
        } catch (error) {
            console.log(error)
            
        }


    }
    useEffect(()=>{
        getData()

    },[])
  return (
    <div>
      cart
    <p>{data?.body?.thumbnail}</p>  
    {console.log("thumbnail",data?.thumbnail)}
<p> {data?.title}</p>
       
    </div>
  )
}

export default Cart



