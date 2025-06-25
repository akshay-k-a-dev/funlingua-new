import React, { useState, useEffect, useRef } from 'react';
import { Compass, Users, Clock, Camera, Heart, Home, Map, Play, Gamepad2 } from 'lucide-react';
import { ActivityProps } from '../types';

const activities: ActivityProps[] = [
  {
    title: 'Blind Walks',
    description: 'Build trust while communicating clearly with guided partner walks.',
    icon: 'Compass',
  },
  {
    title: 'Property Round',
    description: 'Present and describe objects around you to practice everyday vocabulary.',
    icon: 'Home',
  },
  {
    title: 'Rapid Rounds',
    description: 'Think fast and speak faster with timed conversation challenges.',
    icon: 'Clock',
  },
  {
    title: 'Vlog Sessions',
    description: 'Record, review, and refine your speaking skills with video logs.',
    icon: 'Camera',
  },
  {
    title: 'Buddy Activities',
    description: 'Partner up for cooperative language activities that build confidence.',
    icon: 'Users',
  },
  {
    title: 'Camp Mode',
    description: 'Immersive overnight experiences where only English is spoken.',
    icon: 'Heart',
  },
  {
    title: 'Transect Walk',
    description: 'Explore communities while learning and practicing situational English.',
    icon: 'Map',
  },
];

const LearningExperiences: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate activities
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % activities.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  
  const getIcon = (iconName: string, isActive = false) => {
    const iconProps = {
      size: 28,
      className: `transition-all duration-300 ${isActive ? 'text-white' : 'text-primary-orange'}`
    };

    switch (iconName) {
      case 'Compass':
        return <Compass {...iconProps} />;
      case 'Users':
        return <Users {...iconProps} />;
      case 'Clock':
        return <Clock {...iconProps} />;
      case 'Camera':
        return <Camera {...iconProps} />;
      case 'Heart':
        return <Heart {...iconProps} />;
      case 'Home':
        return <Home {...iconProps} />;
      case 'Map':
        return <Map {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Enhanced Section Divider */}
      <div className="section-divider">
        <div className="section-divider-content">
          <Gamepad2 className="section-divider-icon" />
        </div>
      </div>
      
      <section ref={sectionRef} id="activities" className="section-padding bg-gradient-to-br from-soft-lilac to-warm-light-orange/20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20 fade-in-section">
            <h2 className="text-responsive-lg font-bold mb-8 text-gradient">
              We Don't Just Teach. We Play.
            </h2>
            <p className="text-xl text-charcoal-gray max-w-3xl mx-auto leading-relaxed">
              Our unique activities make language learning an adventure, not a chore.
            </p>
          </div>
        
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Activity Showcase */}
              <div className="fade-in-section animate-delay-200 order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-2xl relative overflow-hidden h-96 flex items-center justify-center group">
                  {/* Background Animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 via-primary-purple/10 to-transparent animate-pulse"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary-orange/20 rounded-full animate-float"></div>
                  <div className="absolute bottom-6 left-6 w-6 h-6 bg-primary-purple/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                  
                  <div className="relative z-10 text-center p-8">
                    {/* Icon with Animation */}
                    <div className="mb-8 flex justify-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary-orange to-primary-purple rounded-full flex items-center justify-center animate-bounce-in shadow-lg">
                        {getIcon(activities[activeIndex].icon)}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-3xl font-bold mb-6 text-primary-purple animate-fade-in-up">
                      {activities[activeIndex].title}
                    </h3>
                    <p className="text-charcoal-gray text-lg leading-relaxed max-w-md mx-auto animate-fade-in-up animate-delay-200">
                      {activities[activeIndex].description}
                    </p>
                    
                    {/* Play Button */}
                    <button className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-primary-orange to-primary-purple text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                      <Play size={20} />
                      Try This Activity
                    </button>
                  </div>
                </div>
              </div>
            
              {/* Activity List */}
              <div className="fade-in-section animate-delay-400 order-1 lg:order-2">
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <button
                      key={index}
                      className={`w-full text-left p-6 rounded-2xl transition-all duration-500 flex items-center gap-6 group ${
                        index === activeIndex
                          ? 'bg-gradient-to-r from-primary-purple to-primary-orange text-white shadow-2xl scale-105 animate-pulse-glow'
                          : 'bg-white hover:bg-gradient-to-r hover:from-warm-light-orange hover:to-soft-lilac hover:shadow-xl card-hover'
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        index === activeIndex 
                          ? 'bg-white/20 shadow-lg' 
                          : 'bg-gradient-to-br from-warm-light-orange to-primary-orange/20 group-hover:scale-110'
                      }`}>
                        {getIcon(activity.icon, index === activeIndex)}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h4 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                          index === activeIndex ? 'text-white' : 'text-primary-purple'
                        }`}>
                          {activity.title}
                        </h4>
                        <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                          index === activeIndex ? 'text-white/90' : 'text-charcoal-gray'
                        }`}>
                          {activity.description}
                        </p>
                      </div>
                      
                      {/* Progress Indicator */}
                      {index === activeIndex && (
                        <div className="flex-shrink-0">
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                
                {/* Activity Counter */}
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
                    <span className="text-primary-purple font-semibold">
                      {activeIndex + 1} of {activities.length}
                    </span>
                    <div className="flex gap-1">
                      {activities.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === activeIndex ? 'bg-primary-orange' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearningExperiences;