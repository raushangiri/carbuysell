import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-lg bg-white p-2">
                <Car className="h-6 w-6 text-[#0A2342]" />
              </div>
              <div>
                <span className="text-white">YourCar</span>
                <p className="text-xs text-gray-300">Find. Compare. Drive.</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Your trusted partner in finding the perfect car. Browse, compare, and buy with confidence.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/listings" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Buy Cars
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Sell Your Car
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Compare Cars
                </Link>
              </li>
              <li>
                <Link to="/loan-insurance" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Loan & Insurance
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Car Valuation</li>
              <li>Test Drive Booking</li>
              <li>Car Insurance</li>
              <li>Car Loans</li>
              <li>Extended Warranty</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>123 Car Street, Auto Plaza, Mumbai 400001, India</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+91 1800-123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>support@yourcar.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 YourCar. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
