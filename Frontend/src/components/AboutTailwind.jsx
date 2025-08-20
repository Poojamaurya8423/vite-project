import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="about-text">
            <h2 className="text-4xl font-bold text-amber-800 mb-6">About Sankar Milan Vatika</h2>
            <p className="text-lg text-gray-700 mb-4">
              Nestled in the heart of nature, Sankar Milan Vatika is a premier marriage lawn venue located at 
              <span className="font-semibold text-amber-700"> Madhupur - Majhui Rd, Madhupur, Majhui, Uttar Pradesh 231216</span>. 
              We have been creating magical wedding experiences.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our sprawling 2-acre lush green lawn provides the perfect canvas for your dream wedding. 
              We believe every love story deserves a beautiful beginning, and our dedicated team works 
              tirelessly to ensure your special day is nothing short of perfection.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-800">10+ Years Experience</h3>
                  <p className="text-gray-600">Creating memorable weddings since 2014</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-800">Natural Beauty</h3>
                  <p className="text-gray-600">Surrounded by lush greenery and flowers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-800">Expert Team</h3>
                  <p className="text-gray-600">Professional wedding planners and staff</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Sankar Milan Vatika Lawn" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
