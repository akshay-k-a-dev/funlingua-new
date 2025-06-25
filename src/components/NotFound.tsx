import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  const handleReturnHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#E6E6FA' }}>
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated 404 */}
        <div className="mb-8 md:mb-12">
          <h1 
            className="text-8xl sm:text-9xl md:text-[12rem] font-bold leading-none animate-pulse"
            style={{ color: '#FFA500' }}
          >
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8 md:mb-12 space-y-4 md:space-y-6">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
            style={{ color: '#FFA500' }}
          >
            Oops! Page Not Found
          </h2>
          <p 
            className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed"
            style={{ color: '#8B5A96' }}
          >
            The page you're looking for seems to have wandered off
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="mb-8 md:mb-12 flex justify-center">
          <div className="relative">
            <div 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full opacity-20 animate-bounce"
              style={{ backgroundColor: '#FFA500' }}
            ></div>
            <div 
              className="absolute top-2 left-2 w-20 h-20 md:w-28 md:h-28 rounded-full opacity-30"
              style={{ backgroundColor: '#8B5A96' }}
            ></div>
          </div>
        </div>

        {/* Return Home Button */}
        <div className="space-y-4">
          <button
            onClick={handleReturnHome}
            className="group inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-full font-semibold text-lg md:text-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-300"
            style={{ 
              backgroundColor: '#FFA500', 
              color: '#E6E6FA'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E6E6FA';
              e.currentTarget.style.color = '#FFA500';
              e.currentTarget.style.border = '2px solid #FFA500';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFA500';
              e.currentTarget.style.color = '#E6E6FA';
              e.currentTarget.style.border = 'none';
            }}
          >
            <Home size={24} className="transition-transform duration-300 group-hover:scale-110" />
            Return Home
          </button>

          {/* Alternative Link */}
          <div className="mt-6">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-lg font-medium transition-all duration-300 hover:scale-105"
              style={{ color: '#8B5A96' }}
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: '#FFA500' }}></div>
        <div className="absolute top-20 right-16 w-12 h-12 rounded-full opacity-15 animate-bounce" style={{ backgroundColor: '#8B5A96' }}></div>
        <div className="absolute bottom-16 left-20 w-20 h-20 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: '#FFA500' }}></div>
        <div className="absolute bottom-32 right-10 w-14 h-14 rounded-full opacity-15 animate-bounce" style={{ backgroundColor: '#8B5A96' }}></div>
      </div>
    </div>
  );
};

export default NotFound;