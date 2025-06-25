import React, { useEffect, useRef } from 'react';
import { Play, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 bg-gradient-to-br from-soft-lilac via-primary-purple/20 to-soft-lilac overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 md:opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)'
        }}
      ></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-primary-purple rounded-full opacity-15 blur-2xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 bg-primary-orange rounded-full opacity-10 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary-orange rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary-purple rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-primary-orange rounded-full opacity-25 animate-bounce" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-section">
          {/* Main Heading */}
          <div className="fade-in-section">
            <h1 className="text-responsive-xl font-bold mb-6 leading-tight text-shadow">
              <span className="text-primary-orange block sm:inline animate-slide-in-left">Just Speak,</span>{' '}
              <span className="text-primary-purple block sm:inline animate-slide-in-right animate-delay-200">Have Fun!</span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="fade-in-section animate-delay-300">
            <p className="text-responsive-lg mb-8 text-primary-purple font-medium max-w-4xl mx-auto leading-relaxed px-2 text-shadow">
              Where language fear ends and confidence begins.
            </p>
          </div>
          
          {/* Description */}
          <div className="fade-in-section animate-delay-400">
            <p className="text-responsive-md mb-12 text-charcoal-gray max-w-3xl mx-auto leading-relaxed px-2">
              FunLingua helps people overcome their fear of English by speaking, laughing, and living the language.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="fade-in-section animate-delay-500">
            <div className="flex flex-col sm:flex-row gap-6 justify-center px-4 max-w-lg mx-auto">
              <button className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg transform hover:-translate-y-2 hover:shadow-2xl w-full sm:w-auto min-h-[56px] animate-pulse-glow">
                Get Started
              </button>
              <button className="bg-white text-primary-purple hover:bg-primary-orange hover:text-white border-2 border-primary-purple hover:border-primary-orange px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-3 transform hover:-translate-y-2 hover:shadow-2xl w-full sm:w-auto min-h-[56px] card-hover">
                <Play size={20} className="animate-bounce" />
                Watch Videos
              </button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="fade-in-section animate-delay-600">
            <div className="flex flex-col items-center mt-16">
              <p className="text-sm text-charcoal-gray mb-4 opacity-70">Discover Our Story</p>
              <ArrowDown className="text-primary-orange animate-bounce" size={24} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced SVG Wave */}
      <svg className="absolute bottom-0 left-0 right-0 w-full text-white h-16 md:h-20 lg:h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
            <stop offset="50%" stopColor="rgba(255,255,255,1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.9)" />
          </linearGradient>
        </defs>
        <path fill="url(#waveGradient)" d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
      </svg>
    </section>
  );
};

export default Hero;