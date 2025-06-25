import React from 'react';
import { MessageSquare, Megaphone, BookOpen, Star, Users, Zap, Heart, Award, Target } from 'lucide-react';
import { StageProps } from '../types';

const stages: StageProps[] = [
  {
    title: 'Manglish',
    description: 'Start with Malayalam + English using skits, games, and real talks.',
    icon: 'MessageSquare',
  },
  {
    title: 'Broken English',
    description: 'Speak only in English — mistakes allowed. Break the silence.',
    icon: 'Megaphone',
  },
  {
    title: 'English',
    description: 'Fluency and vocabulary through role plays and simulations.',
    icon: 'BookOpen',
  },
];

const uniqueStrengths = [
  {
    icon: Star,
    title: 'Fun-Based, Fear-Free Learning',
    description: 'We use games, storytelling, role plays, and real-world activities to make English fun and approachable.'
  },
  {
    icon: Users,
    title: 'Inclusive for All',
    description: 'Our programs welcome everyone—students, jobseekers, homemakers, and marginalized groups.'
  },
  {
    icon: Zap,
    title: 'Confidence-First Approach',
    description: 'Our focus isn\'t just language, it\'s voice. We empower learners to express themselves on stage.'
  },
  {
    icon: Heart,
    title: 'Affordable & Accessible',
    description: 'We keep costs low so that learning remains within reach for everyone.'
  },
  {
    icon: Award,
    title: 'Proven, Scalable Model',
    description: 'With successful implementations across multiple settings, our curriculum is designed for replication.'
  },
  {
    icon: Target,
    title: 'Real-World Application',
    description: 'From interviews to public speaking, our learners use English in real situations.'
  }
];

const Approach: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare size={30} className="text-primary-orange lg:w-9 lg:h-9" />;
      case 'Megaphone':
        return <Megaphone size={30} className="text-primary-orange lg:w-9 lg:h-9" />;
      case 'BookOpen':
        return <BookOpen size={30} className="text-primary-orange lg:w-9 lg:h-9" />;
      default:
        return null;
    }
  };

  return (
    <section id="approach" className="py-8 sm:py-12 lg:py-14 bg-off-white">
      <div className="container mx-auto px-4">
        {/* What We Do Differently */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 lg:mb-5 text-primary-purple px-2">
            What We Do Differently
          </h2>
          <p className="text-lg sm:text-xl lg:text-xl text-charcoal-gray max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-9 px-2">
            30 Hours. 3 Rounds. A Lifetime of Confidence.
          </p>
          <div className="max-w-5xl mx-auto text-base md:text-lg lg:text-lg text-charcoal-gray space-y-4 lg:space-y-5 px-2">
            <p className="leading-relaxed">
              FunLingua isn't an ordinary language program. It's a creative, confidence-first ecosystem that includes:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-5 mt-6 lg:mt-7 text-left">
              <div className="bg-white p-4 lg:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <strong className="text-primary-purple">30-Hour Experiential Training:</strong> Based on the Manglish-Broken English-English model.
              </div>
              <div className="bg-white p-4 lg:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <strong className="text-primary-purple">Activity-Based Learning:</strong> Drama, vlogs, buddy walks, skits, public functions.
              </div>
              <div className="bg-white p-4 lg:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <strong className="text-primary-purple">Inclusion at the Core:</strong> Programs for visually impaired, wheelchair users, and children in need.
              </div>
              <div className="bg-white p-4 lg:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <strong className="text-primary-purple">Train-the-Trainer System:</strong> Empowering local volunteers and homemakers to become facilitators.
              </div>
            </div>
          </div>
        </div>

        {/* 3-Stage Process */}
        <div className="mb-8 sm:mb-12 lg:mb-14">
          <div className="relative max-w-6xl mx-auto">
            {/* Connection Line - Desktop Only */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-orange to-primary-purple transform -translate-y-1/2 rounded-full"></div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-10 relative z-10">
              {stages.map((stage, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 lg:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-soft-lilac opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
                  
                  <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center relative z-10">
                    <div className="bg-warm-light-orange w-12 h-12 sm:w-16 sm:h-16 lg:w-14 lg:h-14 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {getIcon(stage.icon)}
                    </div>
                    
                    <div className="flex-1 lg:flex-none">
                      <h3 className="text-lg sm:text-xl lg:text-lg font-bold mb-2 sm:mb-3 lg:mb-3 text-primary-purple">
                        {stage.title}
                      </h3>
                      <p className="text-charcoal-gray text-sm sm:text-base lg:text-sm leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                    
                    {/* Stage Number */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-9 lg:h-9 bg-primary-purple rounded-full flex items-center justify-center flex-shrink-0 lg:absolute lg:-top-3 lg:-right-3">
                      <span className="text-sm sm:text-base lg:text-base font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Unique Strengths */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-4 lg:mb-5 text-primary-purple px-2">
              Our Unique Strengths
            </h3>
            <p className="text-base md:text-lg lg:text-lg text-charcoal-gray max-w-4xl mx-auto px-2 leading-relaxed">
              At FunLingua, we combine innovation with inclusivity to create a learning experience that is joyful, transformative, and deeply rooted in real-life application.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {uniqueStrengths.map((strength, index) => (
              <div key={index} className="bg-white rounded-lg p-6 lg:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <strength.icon className="text-primary-orange mb-4 lg:mb-5 group-hover:scale-110 transition-transform duration-300" size={26} />
                <h4 className="text-lg lg:text-lg font-semibold text-primary-purple mb-3 lg:mb-3">
                  {strength.title}
                </h4>
                <p className="text-charcoal-gray text-sm lg:text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;