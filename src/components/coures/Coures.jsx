import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

const Coures = () => {
    const[data,setData]=useState([])
    const [error,setError]=useState('')
    

  async function  getData(){
    try{
        const response= await axios.get("http://localhost:8000/course")
       
        console.log(response)
       
        setData(response?.data)

    }catch(error){
        console.log("An error Occured",error.message)
       setError("Not Able to Fetch the data")

    }
    }

    useEffect(()=>{
        getData()

    },[])

  return (
    <>
  <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Best our Courses</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 cursor-pointer">
          { data && data.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={`/course/${product.id}`}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <a href={product.image}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.title}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">Rs.{product.price}</p>
              </div>
              </Link>
            </div>
            
          ))}
        </div>
      </div>
    </div>
      </>
        
    
   
    
  )
}

export default Coures
