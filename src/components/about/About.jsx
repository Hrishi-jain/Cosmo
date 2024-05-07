import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold my-24 pb-24 text-center">About Us</h2>
        <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h2 className="text-3xl font-semibold mb-4">Who are we?</h2>
      <p className="text-gray-700 mb-4">We are a team of 8 certified beauty professionals with extensive experience, known to have covered major concerts and events in town. We are known for the affordable and hassle-free services that we offer to all our clients who’ve been trusting us for years. So, if you are looking for a combination of reasonable and professional beauty services, you won’t regret coming to us. We’ve mastered the art of understanding client requirements and delivering the best.</p>
    </div>
    <div>
      <img src="https://static.displate.com/280x392/displate/2023-12-14/0e8bf99c32274f779851ee93b367ae8b_247fa401e8831ffd3eb34b159e2332f3.jpg" alt="About Image" className="w-100 h-100 rounded-lg" />
    </div>
  </div>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis, nisi nec congue tristique, eros lectus posuere dolor, nec varius libero justo sed orci. Integer vel mi vitae nunc rutrum eleifend. Suspendisse potenti.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis, nisi nec congue tristique, eros lectus posuere dolor, nec varius libero justo sed orci. Integer vel mi vitae nunc rutrum eleifend. Suspendisse potenti.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
