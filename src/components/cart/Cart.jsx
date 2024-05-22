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
            console.log("cart details",response)
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
        <p>Cart</p>
     {data && data.map(item=>(
        <div key={item.id} className="">
            <div className="thumbmail">
                <img src={item?.thumbnail} alt={item?.title}/>
            </div>
            <div className="h-50 w-50 flex">
                <div className="image0">
                <img src={item?.images[0]} alt={item?.title}/>

                </div>
                <div className="image1">
                <img src={item?.images[1]} alt={item?.title}/>

                </div>
                <div className="image1">
                <img src={item?.images[2]} alt={item?.title}/>

                </div>
                <div className="image1">
                <img src={item?.images[3]} alt={item?.title}/>

                </div>
                

            </div>
            <div className="title">
                <div className="innertitel">
                    {item.title}
                </div>
            </div>
            <div className="innercontain">
                <p>Price:{item.price}</p>
                <p>Rating:{item.rating}</p>
                <p>view:{item.views}</p>
                <p>Description:`{item.description}</p>

            </div>

        </div>
        
     ))}
   
       
    </div>
  )
}

export default Cart



