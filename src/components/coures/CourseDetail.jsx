import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';
// import CheckOut from '../checkout/CheckOut';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';


const CourseDetail = () => {
  const [data,setData]=useState([]);
  const[cart,setCart]=useState([])
  const[error,setError]=useState('')
  const params=useParams()
  const dispatch=useDispatch()


  async function getData(id){
    try {
      const response= await axios.get(`http://localhost:8000/course/`+id);
      console.log("response",response)
      setData(response?.data);


    }catch(error){
      console.log(error)
      setError("not able to fectch data")

    }

  }

  useEffect(()=>{
    getData(params.id)

  },[params.id])

  async function addtocart(data){
    try {
        const response=await axios.post(`http://localhost:8000/cart`,data,{
            // body:JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
        console.log("cart item response",response)  
        setData(response?.data)
        
        
    } catch (error) {
        console.log(error)
        
    }


}

useEffect(()=>{
  dispatch(addtocart)
},[])

  const handelCart=(data)=>{
    dispatch(add(data))
    // add(data)
    addtocart(data)
    console.log("here is the code",data)
    

  }

  return (
    <>
    <div className="container mx-auto px-4 mt-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/3">
          <img src={data?.thumbnail} alt={data?.title} className="w-50px" />
          <div className="grid grid-cols-4 gap-2 mt-2">
            {/* {data.images && data.images.map((image, index) => (
              <img key={index} src={image[0]} alt={data.title} className="w-full h-24 object-cover" />
           
            ))} */}
                          {/* <img  src={data?.images} alt={data.title} className="w-full h-24 object-cover" />

               {console.log("data of images",data?.images[0])} */}

          </div>
        </div>
        <div className="w-full md:w-1/3 md:pl-4 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold">{data.title}</h2>
          <p className="text-gray-500 text-sm">Price: ${data.price}</p>
          <p className="text-gray-500 text-sm">Rating: {data.rating}</p>
          <p className="text-gray-500 text-sm">Views: {data.views}</p>
          <p className="mt-2">{data.description}</p>
          {/* <Link to='/checkout'> */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handelCart(data)}>
      Add TO Cart
    </button>
    {/* </Link> */}
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default CourseDetail
