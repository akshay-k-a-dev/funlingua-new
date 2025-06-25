import React, { useState } from 'react';
import { Compass, Users, Clock, Camera, Heart, Home, Map } from 'lucide-react';
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
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass size={22} className="text-primary-orange lg:w-7 lg:h-7" />;
      case 'Users':
        return <Users size={22} className="text-primary-orange lg:w-7 lg:h-7" />;
      case 'Clock':
        return <Clock size={22} className="text-primary-orange lg:w-7 lg:h-7" />;
      case 'Camera':
        return <Camera size={22} className="text-primary-orange lg:w-7 lg:h-7" />;
      case 'Heart':
        return <Heart size={22} className="text-primary-orange lg:w-7 lg:h-7" />;
      case 'Home':
        return <Home size={22} className="text-primary-orange lg:w-7 lg:h-7" />;
      case 'Map':
        return <Map size={22} className="text-primary-orange lg:w-7 lg:h-7" />;
      default:
        return null;
    }
  };

  return (
    <section id="activities" className="py-8 sm:py-12 lg:py-14 bg-soft-lilac">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 lg:mb-5 text-primary-purple px-2">
            We Don't Just Teach. We Play.
          </h2>
          <p className="text-base sm:text-lg lg:text-lg text-charcoal-gray max-w-3xl mx-auto px-2 leading-relaxed">
            Our unique activities make language learning an adventure, not a chore.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Activity Showcase */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-9 relative overflow-hidden h-48 sm:h-64 lg:h-72 flex items-center justify-center order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-light-orange to-transparent opacity-20"></div>
              <div className="relative z-10 text-center">
                <div className="mb-4 sm:mb-6 lg:mb-7 flex justify-center">
                  {getIcon(activities[activeIndex].icon)}
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-5 text-primary-purple">
                  {activities[activeIndex].title}
                </h3>
                <p className="text-charcoal-gray text-base lg:text-base leading-relaxed max-w-md mx-auto">
                  {activities[activeIndex].description}
                </p>
              </div>
            </div>
            
            {/* Activity List */}
            <div className="grid gap-3 sm:gap-4 lg:gap-3 order-1 lg:order-2">
              {activities.map((activity, index) => (
                <button
                  key={index}
                  className={`text-left p-4 sm:p-5 lg:p-4 rounded-lg transition-all duration-300 flex items-center gap-4 lg:gap-4 w-full min-h-[60px] lg:min-h-[64px] group ${
                    index === activeIndex
                      ? 'bg-primary-purple text-white shadow-lg scale-105'
                      : 'bg-white hover:bg-warm-light-orange hover:shadow-md'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${index === activeIndex ? 'text-white' : 'text-primary-orange'}`}>
                    {getIcon(activity.icon)}
                  </div>
                  <span className="font-medium text-base sm:text-lg lg:text-base">{activity.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningExperiences;