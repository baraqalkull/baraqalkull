import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-[rgb(255,193,7)]" />,
      title: "Quality Assured",
      description: "All products meet international industry standards with comprehensive quality control."
    },
    {
      icon: <Clock className="h-8 w-8 text-[rgb(255,193,7)]" />,
      title: "Timely Delivery",
      description: "Reliable supply chain ensures prompt delivery across the UAE region."
    },
    {
      icon: <Users className="h-8 w-8 text-[rgb(255,193,7)]" />,
      title: "Expert Support",
      description: "Technical expertise and professional guidance for all your material needs."
    },
    {
      icon: <Award className="h-8 w-8 text-[rgb(255,193,7)]" />,
      title: "Trusted Partner",
      description: "Established reputation with industry professionals and long-term client relationships."
    }
  ];

  const productCategories = [
    {
      title: "Safety & PPE Materials",
      description: "Complete range of personal protective equipment",
      image: "https://images.pexels.com/photos/6196677/pexels-photo-6196677.jpeg "
    },
    {
      title: "Fasteners & Fittings",
      description: "High-grade nuts, bolts, and specialized fittings",
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg"
    },
    {
      title: "Power & Hand Tools",
      description: "Professional tools from leading brands",
      image: "https://images.pexels.com/photos/11398216/pexels-photo-11398216.jpeg"
    }
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1650436986857-83a895e46daa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwb2lsZmllbGQlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU5MDc3NDg5fDA&ixlib=rb-4.1.0&q=80&w=1080")',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:items-start justify-between w-full">
          {/* Left Content */}
          <div className="text-white max-w-2xl mb-12 lg:mb-0">
            
            <h1 className="text-5xl md:text-6xl  leading-tight mb-6">
              Premium <span className="text-yellow-400">Oilfield</span>{" "}
              <span className="text-yellow-400">Materials</span> & Equipment
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10">
              Baraq Al Kull FZE LLC delivers comprehensive solutions for
              oilfield operations across the UAE. From safety equipment to
              industrial components, we ensure quality and reliability when it
              matters most.
            </p>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-400 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/Products"
                className="px-6 py-3 bg-white/20 text-white font-semibold rounded-lg shadow hover:bg-white/30 transition-colors"
              >
                Explore Products
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white max-w-sm w-full shadow-lg">
            <h3 className="text-xl font-semibold mb-6">
              Why Industry Leaders Choose Us
            </h3>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start">
                <span className="text-[rgb(255,193,7)] mr-2">•</span>
                Extensive regional supplier network
              </li>
              <li className="flex items-start">
                <span className="text-[rgb(255,193,7)] mr-2">•</span>
                Deep technical expertise & consultation
              </li>
              <li className="flex items-start">
                <span className="text-[rgb(255,193,7)] mr-2">•</span>
                Guaranteed timely delivery
              </li>
              <li className="flex items-start">
                <span className="text-[rgb(255,193,7)] mr-2">•</span>
                Custom procurement solutions
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/about.webp"
                alt="Baraq Al Kull industrial operations and oilfield materials in UAE"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                About Baraq Al Kull
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Baraq Al Kull is a UAE-based trading company dedicated to supplying a full range of 
                oilfield-related materials to companies across the region. We specialize in providing 
                high-quality products including fasteners, PPE safety materials, electrical components, 
                architectural fittings, plumbing supplies, and both power and hand tools.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our strength lies in our extensive sourcing network, technical knowledge, and commitment 
                to client satisfaction. Whether you need bulk supply or custom procurement, our team 
                ensures timely delivery and dependable service.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-[rgb(255,193,7)] text-white font-semibold rounded-lg hover:bg-[rgb(255,193,7)]/80 transition-colors duration-300 shadow-lg"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From safety equipment to specialized tools, we provide comprehensive 
              solutions for the oilfield and industrial sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={category.image}
                  alt={`${category.title} - Industrial materials and equipment`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-200">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-[rgba(255,193,7,1)] text-white font-semibold rounded-lg hover:bg-[rgba(255,193,7,1)]/80 transition-colors duration-300"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-20 px-1 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-start-1 md:col-end-4 pb-8 pt-4 rounded-3xl">
        <div className="bg-blue-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready To Buy Products ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get in touch today to discuss your material requirements and discover how we can support your projects with quality products and reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-[rgb(255,193,7)] text-white font-semibold rounded-lg hover:bg-[rgb(255,193,7)]/80 transition-colors duration-300"
            >
          Request Quote
            </a>
            <a
              href="/About"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
