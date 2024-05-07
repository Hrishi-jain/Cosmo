import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto mt-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="text-gray-400">
              <li>Casual Make Up</li>
              <li>Hair Styling</li>
              <li>Skin Treatment</li>
              <li>Fashion Make Up</li>
              <li>Bridal Make Up</li>
              <li>Professional Photoshoots</li>
            </ul>
          </div>
          {/* Email */}
          <div>
            <h3 className="text-xl font-bold mb-4">Email</h3>
            <p className="text-gray-400">info@example.com</p>
          </div>
          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <p className="text-gray-400">425 6th Ave, New York, NY 10046, United States</p>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>Copyright © 2024 Sharmila’s Salon & Spa | Powered by Salon & Spa</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
