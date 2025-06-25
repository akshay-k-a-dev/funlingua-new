import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-26 lg:pb-18 bg-gradient-to-br from-soft-lilac via-primary-purple/20 to-soft-lilac overflow-hidden min-h-screen lg:min-h-[80vh] flex items-center"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 md:opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)'
        }}
      ></div>
      
      {/* Background circles */}
      <div className="absolute top-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-62 lg:h-62 bg-primary-purple rounded-full opacity-15 blur-2xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-78 lg:h-78 bg-primary-orange rounded-full opacity-10 blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-7 leading-tight">
            <span className="text-primary-orange block sm:inline">Just Speak,</span>{' '}
            <span className="text-primary-purple block sm:inline">Have Fun!</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-6 sm:mb-8 lg:mb-9 text-primary-purple font-medium max-w-4xl mx-auto leading-relaxed px-2">
            Where language fear ends and confidence begins.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg mb-8 sm:mb-10 lg:mb-11 text-charcoal-gray max-w-3xl mx-auto leading-relaxed px-2">
            FunLingua helps people overcome their fear of English by speaking, laughing, and living the language.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 justify-center px-4 max-w-md sm:max-w-lg lg:max-w-lg mx-auto">
            <button className="bg-primary-purple hover:bg-primary-purple/90 text-white px-6 sm:px-8 lg:px-9 py-3 sm:py-4 lg:py-3 rounded-full font-semibold text-base sm:text-lg lg:text-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-2xl w-full sm:w-auto min-h-[44px] lg:min-h-[48px]">
              Get Started
            </button>
            <button className="bg-white text-primary-purple hover:bg-primary-orange hover:text-white border-2 border-primary-purple hover:border-primary-orange px-6 sm:px-8 lg:px-9 py-3 sm:py-4 lg:py-3 rounded-full font-semibold text-base sm:text-lg lg:text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 lg:gap-3 transform hover:-translate-y-1 hover:shadow-2xl w-full sm:w-auto min-h-[44px] lg:min-h-[48px]">
              <Play size={20} className="lg:w-5 lg:h-5" />
              Watch Videos
            </button>
          </div>
        </div>
      </div>
      
      <svg className="absolute bottom-0 left-0 right-0 w-full text-white h-12 sm:h-16 md:h-20 lg:h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
        <path fill="currentColor" fillOpacity="1" d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
      </svg>
    </section>
  );
};

export default Hero;