import React from 'react';
import { Home, ArrowLeft, Globe } from 'lucide-react';

const NotFound: React.FC = () => {
  const handleReturnHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-soft-lilac via-primary-purple/10 to-warm-light-orange/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 bg-primary-purple rounded-full opacity-10 blur-2xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 md:w-56 md:h-56 bg-primary-orange rounded-full opacity-10 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary-orange rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary-purple rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-primary-orange rounded-full opacity-25 animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 right-10 w-4 h-4 bg-primary-purple rounded-full opacity-35 animate-bounce" style={{ animationDelay: '2.5s' }}></div>

      <div className="text-center max-w-2xl mx-auto relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Globe size={48} className="text-primary-orange animate-bounce-in" />
          <span className="text-3xl font-bold">
            <span className="text-primary-orange">Fun</span>
            <span className="text-primary-purple">Lingua</span>
          </span>
        </div>

        {/* Animated 404 */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold leading-none text-gradient animate-pulse-glow">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8 md:mb-12 space-y-4 md:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-primary-orange animate-fade-in-up">
            Oops! Page Not Found
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-primary-purple animate-fade-in-up animate-delay-200">
            The page you're looking for seems to have wandered off on a language adventure!
          </p>
          <p className="text-base sm:text-lg text-charcoal-gray animate-fade-in-up animate-delay-300">
            Don't worry, let's get you back to learning English the fun way.
          </p>
        </div>

        {/* Decorative Quote */}
        <div className="mb-8 md:mb-12 animate-fade-in-up animate-delay-400">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary-orange/20">
            <p className="text-primary-purple italic text-lg font-medium">
              "Even when lost, every step is a learning opportunity!"
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 animate-fade-in-up animate-delay-500">
          <button
            onClick={handleReturnHome}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-orange to-primary-purple text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-semibold text-lg md:text-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 card-hover"
          >
            <Home size={24} className="transition-transform duration-300 group-hover:scale-110" />
            Return to FunLingua Home
          </button>

          {/* Alternative Link */}
          <div className="mt-6">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-lg font-medium text-primary-purple hover:text-primary-orange transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </div>

        {/* Fun Learning Tip */}
        <div className="mt-12 animate-fade-in-up animate-delay-600">
          <div className="bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-xl p-4 border border-primary-purple/20">
            <p className="text-sm text-charcoal-gray">
              <strong className="text-primary-purple">Fun Fact:</strong> Getting lost is just another way to discover new paths - just like learning English!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;