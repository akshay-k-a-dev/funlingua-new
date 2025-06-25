import React, { useEffect, useRef } from 'react';
import { MessageSquare, Megaphone, BookOpen, Star, Users, Zap, Heart, Award, Target, ArrowRight, Sparkles } from 'lucide-react';
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
    description: 'We use games, storytelling, role plays, and real-world activities to make English fun and approachable.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Users,
    title: 'Inclusive for All',
    description: 'Our programs welcome everyone—students, jobseekers, homemakers, and marginalized groups.',
    color: 'from-blue-400 to-purple-500'
  },
  {
    icon: Zap,
    title: 'Confidence-First Approach',
    description: 'Our focus isn\'t just language, it\'s voice. We empower learners to express themselves on stage.',
    color: 'from-green-400 to-teal-500'
  },
  {
    icon: Heart,
    title: 'Affordable & Accessible',
    description: 'We keep costs low so that learning remains within reach for everyone.',
    color: 'from-pink-400 to-red-500'
  },
  {
    icon: Award,
    title: 'Proven, Scalable Model',
    description: 'With successful implementations across multiple settings, our curriculum is designed for replication.',
    color: 'from-indigo-400 to-blue-500'
  },
  {
    icon: Target,
    title: 'Real-World Application',
    description: 'From interviews to public speaking, our learners use English in real situations.',
    color: 'from-purple-400 to-pink-500'
  }
];

const Approach: React.FC = () => {
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

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare size={32} className="text-white" />;
      case 'Megaphone':
        return <Megaphone size={32} className="text-white" />;
      case 'BookOpen':
        return <BookOpen size={32} className="text-white" />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Enhanced Section Divider */}
      <div className="section-divider">
        <div className="section-divider-content">
          <Sparkles className="section-divider-icon" />
        </div>
      </div>
      
      <section ref={sectionRef} id="approach" className="section-padding bg-gradient-to-br from-off-white to-soft-lilac/30">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-20 fade-in-section">
            <h2 className="text-responsive-lg font-bold mb-8 text-gradient">
              What We Do Differently
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl lg:text-3xl text-primary-purple font-semibold mb-8 text-shadow">
                30 Hours. 3 Rounds. A Lifetime of Confidence.
              </p>
              <p className="text-xl text-charcoal-gray leading-relaxed mb-12">
                FunLingua isn't an ordinary language program. It's a creative, confidence-first ecosystem that transforms lives.
              </p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid sm:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
            {[
              { title: '30-Hour Experiential Training', desc: 'Based on the Manglish-Broken English-English model.' },
              { title: 'Activity-Based Learning', desc: 'Drama, vlogs, buddy walks, skits, public functions.' },
              { title: 'Inclusion at the Core', desc: 'Programs for visually impaired, wheelchair users, and children in need.' },
              { title: 'Train-the-Trainer System', desc: 'Empowering local volunteers and homemakers to become facilitators.' }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`fade-in-section animate-delay-${(index + 2) * 100} bg-white rounded-2xl p-8 shadow-lg card-hover border-l-4 border-primary-orange`}
              >
                <h4 className="text-xl font-bold text-primary-purple mb-4">{feature.title}</h4>
                <p className="text-charcoal-gray leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Geometric Separator */}
          <div className="geometric-separator mb-20"></div>

          {/* 3-Stage Process */}
          <div className="mb-20 fade-in-section animate-delay-600">
            <div className="text-center mb-16">
              <h3 className="text-responsive-md font-bold text-primary-purple mb-6">
                Our 3-Stage Transformation
              </h3>
              <p className="text-xl text-charcoal-gray">
                A proven pathway from silence to confidence
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Connection Line - Desktop Only */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-primary-orange via-primary-purple to-primary-orange transform -translate-y-1/2 rounded-full opacity-20"></div>

              <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 relative z-10">
                {stages.map((stage, index) => (
                  <div 
                    key={index}
                    className={`fade-in-section animate-delay-${(index + 7) * 100} bg-white rounded-2xl shadow-xl relative overflow-hidden group card-hover`}
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-soft-lilac/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Stage Number */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-purple rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg animate-bounce-in">
                      {index + 1}
                    </div>
                    
                    <div className="p-8 relative z-10">
                      {/* Icon */}
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-orange to-primary-purple rounded-full flex items-center justify-center mb-6 mx-auto animate-float">
                        {getIcon(stage.icon)}
                      </div>
                      
                      {/* Content */}
                      <div className="text-center">
                        <h4 className="text-2xl font-bold mb-4 text-primary-purple">
                          {stage.title}
                        </h4>
                        <p className="text-charcoal-gray leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Arrow for flow */}
                    {index < stages.length - 1 && (
                      <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                        <ArrowRight className="text-primary-orange animate-float" size={24} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wave Separator */}
          <div className="wave-separator mb-20">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="url(#gradient1)"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="url(#gradient2)"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="url(#gradient3)"></path>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F58220" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#6A1B9A" stopOpacity="0.3"/>
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6A1B9A" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#F58220" stopOpacity="0.5"/>
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F58220"/>
                  <stop offset="100%" stopColor="#6A1B9A"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Unique Strengths */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 fade-in-section animate-delay-1000">
              <h3 className="text-responsive-md font-bold mb-8 text-gradient">
                Our Unique Strengths
              </h3>
              <p className="text-xl text-charcoal-gray max-w-4xl mx-auto leading-relaxed">
                At FunLingua, we combine innovation with inclusivity to create a learning experience that is joyful, transformative, and deeply rooted in real-life application.
              </p>
            </div>
            
            <div className="grid-auto-fit">
              {uniqueStrengths.map((strength, index) => (
                <div 
                  key={index} 
                  className={`fade-in-section animate-delay-${(index + 11) * 100} bg-white rounded-2xl shadow-xl relative overflow-hidden group card-hover`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${strength.color} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="p-8 relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${strength.color} rounded-full mb-6 animate-bounce-in`}>
                      <strength.icon className="text-white" size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-primary-purple mb-4">
                      {strength.title}
                    </h4>
                    <p className="text-charcoal-gray leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Approach;