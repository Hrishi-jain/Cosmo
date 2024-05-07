import React from 'react'

const Product = () => {
  return (
    <div>
      products
      <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow p-6">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small/beautiful-girl-with-autumn-leaves-photo.jpg" alt="Product 1" className="w-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">Product 1</h3>
            <p className="text-gray-700">Description of product 1 goes here.</p>
          </div>
          {/* Product 2 */}
          <div className="bg-white rounded-lg shadow p-6">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small/beautiful-girl-with-autumn-leaves-photo.jpg" alt="Product 2" className="w-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">Product 2</h3>
            <p className="text-gray-700">Description of product 2 goes here.</p>
          </div>
          {/* Product 3 */}
          <div className="bg-white rounded-lg shadow p-6">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small/beautiful-girl-with-autumn-leaves-photo.jpg" alt="Product 3" className="w-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">Product 3</h3>
            <p className="text-gray-700">Description of product 3 goes here.</p>
          </div>
          {/* Add more products as needed */}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Product
