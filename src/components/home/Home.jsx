import React from 'react'


const Home = () => {
  return (
    <div className='font-extrabold text-center mt-10'>


<div className="flex items-center bg-pink-50 py-20 p-10 my-10 mx-10 justify-between">
  {/* Left Section */}
  <div className="w-1/2 text-left pr-8">
  <h3 className="text-7xl font-semibold mb-10">Passionate Beauticians in New York</h3>
  <p className="text-gray-500 mb-4">We are Passionate Beauticians and Makeup Artists Based in New York. Looking for the best beauty and spa services in town? Our team of experienced beauticians offers all the beauty services you’ve been waiting for.</p>
  <div className="flex justify-center">
    <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-200">Book Appointment</button>
  </div>
  </div>

  {/* Right Section */}
  <div className="w-1/2">
    <img src="https://images7.alphacoders.com/859/859512.jpg" alt="Product" className="w-full h-auto object-cover" />
  </div>
</div>


<div className="container mx-auto  px-4 ">
  <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
  <p className="text-gray-700 mb-8">Whether it is simple threading, haircuts, or a complete body massage, we serve you with all your beauty needs with the best products coupled with dedicated services on board.</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 my-20 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {/* Service 1: Make Up */}
    <div className="bg-white p-6 rounded-lg shadow">
      <img src="https://images7.alphacoders.com/859/859512.jpg" alt="Services" />
      <h3 className="text-xl font-semibold mb-2">Make Up</h3>
      <p className="text-gray-700">Professional makeup services for all occasions.</p>
    </div>
    {/* Service 2: Hair Color */}
    <div className="bg-white p-6 rounded-lg shadow">
      <img src="https://images7.alphacoders.com/859/859512.jpg" alt="Services" />
      <h3 className="text-xl font-semibold mb-2">Hair Color</h3>
      <p className="text-gray-700">Expert hair coloring services to enhance your look.</p>
    </div>
    {/* Service 3: Hair Cut */}
    <div className="bg-white p-6 rounded-lg shadow">
      <img src="https://images7.alphacoders.com/859/859512.jpg" alt="Services" />
      <h3 className="text-xl font-semibold mb-2">Hair Cut</h3>
      <p className="text-gray-700">Professional hair cutting and styling services.</p>
    </div>
    {/* Service 4: Hair Setting */}
    <div className="bg-white p-6 rounded-lg shadow">
      <img src="https://images7.alphacoders.com/859/859512.jpg" alt="Services" />
      <h3 className="text-xl font-semibold mb-2">Hair Setting</h3>
      <p className="text-gray-700">Hair setting and styling for special events.</p>
    </div>
    {/* Service 5: Professional Photoshoot */}
    <div className="bg-white p-6 rounded-lg shadow">
      <img src="https://images7.alphacoders.com/859/859512.jpg" alt="Services" />
      <h3 className="text-xl font-semibold mb-2">Professional Photoshoot</h3>
      <p className="text-gray-700">Capture your best moments with our professional photoshoot services.</p>
    </div>
    {/* Service 6: Skin Treatment */}
    <div className="bg-white p-6 rounded-lg shadow">
      <img src="https://images7.alphacoders.com/859/859512.jpg" alt="Services" />
      <h3 className="text-xl font-semibold mb-2">Skin Treatment</h3>
      <p className="text-gray-700">Skin treatments to keep your skin healthy and radiant.</p>
    </div>
    {/* Service 7: Fashion Make Up */}
    <div className="bg-white p-6 rounded-lg shadow">
      <img src="https://images7.alphacoders.com/859/859512.jpg" alt="Services" />
      <h3 className="text-xl font-semibold mb-2">Fashion Make Up</h3>
      <p className="text-gray-700">Fashion makeup services for runway and events.</p>
    </div>
    {/* Service 8: Bridal Make Up */}
    <div className="bg-white p-6 rounded-lg shadow">
      <img src="https://images7.alphacoders.com/859/859512.jpg" alt="Services" />
      <h3 className="text-xl font-semibold mb-2">Bridal Make Up</h3>
      <p className="text-gray-700">Bridal makeup services for your special day.</p>
    </div>
  </div>
</div>


<div className="flex items-center bg-pink-50 p-10 mx-10 justify-between">
  {/* Left Section */}
  <div className="w-1/2">
    <img src="https://images7.alphacoders.com/859/859512.jpg" alt="Product" className="w-full h-auto object-cover" />
  </div>
  <div className="w-1/2 text-left pl-10 pr-8">
  <h3 className="text-3xl pl-20 pt-10 font-semibold mb-10">About Me</h3>
  <p className="text-gray-500 px-16 mb-4">We are a team of 8 certified beauty professionals with over 10 years of experience and certifications that commend our work.
If you are looking for the best beauty services ranging from threading, facial, haircuts and more, you can walk in here. Graduating from the best beauty schools, and working with top beauty professionals we have mastered the skills of delivering the best beauty and spa services in town.
Over the years we have served hundreds of happy clients who trust us for their look for important occasions like weddings, corporate parties, concerts, events and more. So, whether it is a quick touch-up or detailed beauty therapies, we are here to help you.</p>
  <div className="flex justify-center">
    <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-200">Book Appointment</button>
  </div>
  </div>
</div>


<div className="container mx-auto px-4 py-8">
  <div className="text-center">
    <h2 className="text-2xl font-semibold mb-4">See Our Work!</h2>
    <p className="text-gray-700 mb-8">Here’s a quick look at the beauty transformations that we have worked on. Whether it is a temporary makeup or a complete makeover, you can trust us.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 my-20 mx-20 md:grid-cols-3 lg:grid-cols-3">
    {/* Service 1: Make Up */}
    <div className="bg-white p-6 rounded-lg shadow">
      <img src="https://images7.alphacoders.com/859/859512.jpg" alt="Services" />
    </div>
    {/* Service 2: Hair Color */}
    <div className="bg-white p-6 rounded-lg shadow">
      <img src="https://images7.alphacoders.com/859/859512.jpg" alt="Services" />
    </div>
    {/* Service 3: Hair Cut */}
    <div className="bg-white p-6 rounded-lg shadow">
      <img src="https://images7.alphacoders.com/859/859512.jpg" alt="Services" />
    </div>
    {/* Service 4: Hair Setting */}
    <div className="bg-white p-6 rounded-lg shadow">
      <img src="https://images7.alphacoders.com/859/859512.jpg" alt="Services" />
    </div>
    {/* Service 5: Professional Photoshoot */}
    <div className="bg-white p-6 rounded-lg shadow">
      <img src="https://images7.alphacoders.com/859/859512.jpg" alt="Services" />
    </div>
    {/* Service 6: Skin Treatment */}
    <div className="bg-white p-6 rounded-lg shadow">
      <img src="https://images7.alphacoders.com/859/859512.jpg" alt="Services" />
    </div>
  </div>
  </div>
</div>

<div className="container mx-auto px-4 py-8">
  <h2 className="text-2xl font-semibold mb-4">Our Clients Speak!</h2>
  <p className="text-gray-700 mb-8">Take a look at what our clients have to say about our work and dedication that keeps them coming back for more.</p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Review 1 */}
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center mb-4">
        <div className="text-yellow-500 mr-2">
          <i className="fas fa-star">⭐</i>
          <i className="fas fa-star">⭐</i>
          <i className="fas fa-star">⭐</i>
          <i className="fas fa-star">⭐</i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        <span className="text-gray-700">4/5</span>
      </div>
      <p className="text-gray-700 mb-4">Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi. Fert his. Recessit mentes praecipites locum gens erat.</p>
      <p className="text-gray-700">- Choure</p>
    </div>

    {/* Review 2 */}
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center mb-4">
        <div className="text-yellow-500 mr-2">
          <i className="fas fa-star">⭐</i>
          <i className="fas fa-star">⭐</i>
          <i className="fas fa-star">⭐</i>
          <i className="fas fa-star">⭐</i>
          <i className="fas fa-star">⭐</i>
        </div>
        <span className="text-gray-700">5/5</span>
      </div>
      <p className="text-gray-700 mb-4">Porttitor massa platea ac consequat consequat fusce phasellus in ut augue sed cras maecenas ultricies id aliquet ut nunc pretium sed purus.</p>
      <p className="text-gray-700">-Anamika </p>
    </div>
     {/* Review 3 */}
     <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center mb-4">
        <div className="text-yellow-500 mr-2">
          <i className="fas fa-star">⭐</i>
          <i className="fas fa-star">⭐</i>
          <i className="fas fa-star">⭐</i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        <span className="text-gray-700">3/5</span>
      </div>
      <p className="text-gray-700 mb-4">Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi. Fert his. Recessit mentes praecipites locum gens erat.</p>
      <p className="text-gray-700">- Hrishi Jain</p>
    </div>
  </div>
</div>


<div className="flex items-center bg-pink-50 p-10 mx-10 justify-between">
  
  {/* Left Section */}
  <div className="container mx-auto ">
  <p className="text-gray-700 px-24  text-left text-5xl">Enhance your beauty with cosmetics' grace, Makeup artistry, your unique face embrace..</p>
  <p className="text-gray-700 my-20">+1 234 567 890</p>
</div>

  <div className="w-full text-left pl-10 pr-8">
  <div className="container justify-between mx-auto  px-4 py-8">
      <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Call For Bookings and Arrange an Appointment</h2>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap mb-4">
          <div className="w-full">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your name" />
          </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
              <input type="tel" id="phone" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your phone number" />
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Preferred Date</label>
              <input type="date" id="date" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" placeholder="Enter your message"></textarea>
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>
      </div>
</div>
  </div>
</div>


    </div>
  )
}

export default Home
