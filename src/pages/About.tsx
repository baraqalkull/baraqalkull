import React from 'react';
import { Building2, Users, Award, Globe, Eye, Target, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Building2 className="h-8 w-8" />, value: "5+", label: "Years Experience" },
    { icon: <Users className="h-8 w-8" />, value: "100+", label: "Satisfied Clients" },
    { icon: <Award className="h-8 w-8 text-[rgb(255,193,7)]" />, value: "1000+", label: "Products Available" },
    { icon: <Globe className="h-8 w-8" />, value: "UAE", label: "Coverage Area" },
  ];

  return (
    <>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-900 mb-6">About Baraq Al Kull</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for oilfield and industrial material solutions across the UAE
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="about.webp"
                alt="Industrial oilfield operations and equipment in UAE"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Who We Are</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Baraq Al Kull is a UAE-based trading company dedicated to supplying a full range of 
                  oilfield-related materials to companies across the region. We specialize in providing 
                  high-quality products including fasteners, PPE safety materials, electrical components, 
                  architectural fittings, plumbing supplies, and both power and hand tools.
                </p>
                <p>
                  Our strength lies in our extensive sourcing network, technical knowledge, and commitment 
                  to client satisfaction. Whether you need bulk supply or custom procurement, our team 
                  ensures timely delivery and dependable service — making us the preferred partner for 
                  industry professionals.
                </p>
              </div>
            </div>
          </div>


          {/* Our Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Approach</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[rgb(255,193,7)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-[rgb(255,193,7)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
                    <p className="text-gray-600">
                      We source only the highest quality materials that meet and exceed international 
                      industry standards for safety and performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Client-Centric Service</h3>
                    <p className="text-gray-600">
                      Our team works closely with clients to understand specific requirements and 
                      provide tailored solutions for every project.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Network</h3>
                    <p className="text-gray-600">
                      Our extensive supplier network ensures consistent availability and competitive 
                      pricing across our full product range.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                alt="Professional industrial team working with safety equipment in UAE"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <VisionMission />
    </>
  );
};

const VisionMission: React.FC = () => {
  const missionPoints = [
    "Deliver top-grade industrial materials that meet and exceed industry standards",
    "Build long-term partnerships through trust, transparency, and technical expertise",
    "Continuously expand our product line to meet evolving industry demands"
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Vision & Mission</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guiding principles that drive our commitment to excellence in the industrial materials sector
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-stone-900">Our Vision</h2>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  "To be a leading, reliable supplier of oilfield and industrial materials in the region, 
                  known for delivering quality, efficiency, and integrity in every transaction."
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/8090054/pexels-photo-8090054.jpeg"
                  alt="Industrial vision and future of oilfield operations in UAE"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.pexels.com/photos/6196677/pexels-photo-6196677.jpeg"
                  alt="Mission-driven industrial safety and quality standards in UAE"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[rgb(255,193,7)] rounded-full flex items-center justify-center mr-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <div className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-[rgb(255,193,7)] mt-1 flex-shrink-0" />
                      <p className="text-lg text-gray-700 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide every aspect of our business operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                Uncompromising commitment to providing materials that meet the highest industry standards
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[rgb(255,193,7)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                Consistent delivery and dependable service that our clients can trust
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                Transparent business practices and honest communication in all our relationships
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;