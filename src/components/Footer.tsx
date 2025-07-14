import React from 'react';
import { Globe, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import logoImage from '../assets/logo.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-purple text-white">
      <div className="container mx-auto px-4 py-10 lg:py-11">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-7">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logoImage} 
                alt="FunLingua Logo" 
                className="h-8 lg:h-7 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white opacity-80 mb-6 lg:mb-5 text-base lg:text-sm">
              Where language fear ends and confidence begins.
            </p>
            <div className="flex gap-4 lg:gap-3">
              <a href="#" className="text-white hover:text-primary-orange transition-colors duration-200">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-primary-orange transition-colors duration-200">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white hover:text-primary-orange transition-colors duration-200">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-primary-orange transition-colors duration-200">
                <Youtube size={18} />
              </a>
              <a href="#" className="text-white hover:text-primary-orange transition-colors duration-200">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg lg:text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="opacity-80 hover:opacity-100 hover:text-primary-orange transition-colors duration-200 text-base lg:text-sm">Home</a></li>
              <li><a href="#about" className="opacity-80 hover:opacity-100 hover:text-primary-orange transition-colors duration-200 text-base lg:text-sm">About Us</a></li>
              <li><a href="#approach" className="opacity-80 hover:opacity-100 hover:text-primary-orange transition-colors duration-200 text-base lg:text-sm">Our Approach</a></li>
              <li><a href="#activities" className="opacity-80 hover:opacity-100 hover:text-primary-orange transition-colors duration-200 text-base lg:text-sm">Activities</a></li>
              <li><a href="#impact" className="opacity-80 hover:opacity-100 hover:text-primary-orange transition-colors duration-200 text-base lg:text-sm">Social Impact</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 hover:text-primary-orange transition-colors duration-200 text-base lg:text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg lg:text-base font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary-orange transition-colors duration-200 text-base lg:text-sm">Meet Our Trainers</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary-orange transition-colors duration-200 text-base lg:text-sm">See Our Impact</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary-orange transition-colors duration-200 text-base lg:text-sm">Enroll Now</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary-orange transition-colors duration-200 text-base lg:text-sm">FAQ</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary-orange transition-colors duration-200 text-base lg:text-sm">Careers</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-primary-orange transition-colors duration-200 text-base lg:text-sm">Blog</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg lg:text-base font-semibold mb-4">Our Blog</h3>
            <div className="space-y-4 lg:space-y-3">
              <div className="bg-white bg-opacity-10 rounded-lg p-3 lg:p-2 hover:bg-opacity-20 transition-all duration-200">
                <a href="#" className="text-sm lg:text-xs font-medium hover:text-primary-orange transition-colors">
                  10 Easy English Phrases for Everyday Conversations
                </a>
                <p className="text-xs lg:text-xs opacity-70 mt-1">May 12, 2025</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3 lg:p-2 hover:bg-opacity-20 transition-all duration-200">
                <a href="#" className="text-sm lg:text-xs font-medium hover:text-primary-orange transition-colors">
                  How to Think in English: Mental Tricks for Fluency
                </a>
                <p className="text-xs lg:text-xs opacity-70 mt-1">April 29, 2025</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-3 lg:p-2 hover:bg-opacity-20 transition-all duration-200">
                <a href="#" className="text-sm lg:text-xs font-medium hover:text-primary-orange transition-colors">
                  From Malayalam to English: Our Teaching Philosophy
                </a>
                <p className="text-xs lg:text-xs opacity-70 mt-1">April 15, 2025</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-12 lg:mt-10 pt-6 lg:pt-5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm lg:text-xs opacity-70 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FunLingua Language Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 lg:space-x-5 text-sm lg:text-xs opacity-70">
            <a href="#" className="hover:text-primary-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;