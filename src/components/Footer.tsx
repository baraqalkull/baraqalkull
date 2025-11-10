import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="Baraq Al Kull Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-yellow-400 uppercase">
                  BARAQ AL KULL
                </h3>
                <p className="text-white text-sm">UAE's Trusted Company for Oilfield and Industrial Materials</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for oilfield and industrial materials in the UAE. 
              Quality products, reliable service, and technical expertise for industry professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[rgb(255,193,7)] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Baraq Al Kull Trading LLC,<br />
                  Ajman-UAE,<br />
                  TRN-105162773300003
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[rgb(255,193,7)] flex-shrink-0" />
                <p className="text-gray-300 text-sm">sales@baraqalkull.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Baraq Al Kull. All rights reserved.
          </p>
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Baraq Al Kull",
          "description": "UAE-based trading company specializing in oilfield and industrial materials",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "AE",
            "addressRegion": "Dubai"
          },
          "telephone": "+971-XX-XXX-XXXX",
          "email": "info@baraqalkull.com",
          "url": "/",
          "sameAs": [
            "https://linkedin.com/company/baraqalkull",
            "https://instagram.com/baraqalkull"
          ],
          "serviceArea": "United Arab Emirates",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Oilfield and Industrial Materials",
            "itemListElement": [
              "Safety & PPE Materials",
              "Fasteners & Fittings", 
              "Electrical Supplies",
              "Plumbing & Pipe Fittings",
              "Architectural Materials",
              "Power & Hand Tools"
            ]
          }
        })}
      </script>
    </footer>
  );
};

export default Footer;
