import React, { useEffect, useRef } from 'react';
import { Users, BookOpen, Globe, Quote, Star, Target, Heart } from 'lucide-react';

const Philosophy: React.FC = () => {
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

  const levels = [
    {
      icon: Users,
      title: 'Foundation Level',
      subtitle: 'Breaking the Ice',
      description: '30-hour action-based foundation where you learn through doing, not just studying.',
      features: ['Overcome fear and hesitation', 'Build basic conversation skills', 'Develop confidence in speaking'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Intermediate Level',
      subtitle: 'Building Fluency',
      description: 'Grammar, public speaking, and advanced conversation techniques.',
      features: ['Master grammar naturally', 'Develop presentation skills', 'Expand vocabulary significantly'],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Globe,
      title: 'Advanced Level',
      subtitle: 'Global Readiness',
      description: 'IELTS/TOEFL preparation and global fluency techniques.',
      features: ['Prepare for international tests', 'Master advanced English idioms', 'Develop cross-cultural communication'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <>
      <div className="section-separator"></div>
      <section ref={sectionRef} className="section-padding bg-gradient-to-br from-off-white to-warm-light-orange/20">
        <div className="container mx-auto px-4">
          {/* Philosophy Header */}
          <div className="text-center mb-20 fade-in-section">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-orange to-primary-purple rounded-full mb-8 animate-bounce-in">
              <Quote className="text-white" size={36} />
            </div>
            <h2 className="text-responsive-lg font-bold mb-8 text-gradient">
              Philosophy of FunLingua
            </h2>
            <blockquote className="text-2xl lg:text-3xl italic text-charcoal-gray mb-12 leading-relaxed font-light">
              "We believe language is not just learned. It is lived."
            </blockquote>
            
            <div className="max-w-4xl mx-auto space-y-8 text-lg lg:text-xl text-charcoal-gray">
              <div className="fade-in-section animate-delay-200">
                <p className="leading-relaxed">
                  FunLingua stands for transformational, inclusive language learning rooted in everyday life. Our approach is designed for those who've long been silenced by fear, poor access, or traditional rote-based systems.
                </p>
              </div>
              
              <div className="fade-in-section animate-delay-300">
                <p className="leading-relaxed">
                  Whether it's a child in a CCI, a homemaker returning to work, or a youth navigating interviews, our program empowers learners to speak up with confidence and purpose.
                </p>
              </div>
              
              <div className="fade-in-section animate-delay-400">
                <div className="bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-2xl p-8 border-l-4 border-primary-orange">
                  <p className="font-semibold text-primary-purple leading-relaxed text-xl">
                    We don't believe in textbook fluency. We believe in real fluency — where English becomes a tool of connection, opportunity, and dignity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Journey Section */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-section animate-delay-500">
              <h3 className="text-responsive-md font-bold text-primary-purple mb-6">
                Our Learning Journey
              </h3>
              <p className="text-xl text-charcoal-gray leading-relaxed">
                English is not about correctness, but connection.
              </p>
            </div>
            
            <div className="grid gap-8 lg:gap-12">
              {levels.map((level, index) => (
                <div 
                  key={index}
                  className={`fade-in-section animate-delay-${(index + 6) * 100} relative`}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 card-hover relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${level.color} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2`}></div>
                    
                    {/* Level Number */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-purple rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg animate-bounce-in">
                      {index + 1}
                    </div>
                    
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      {/* Icon and Title */}
                      <div className="text-center lg:text-left">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-warm-light-orange to-primary-orange/20 rounded-full mb-6 animate-float">
                          <level.icon className="text-primary-orange" size={32} />
                        </div>
                        <h4 className="text-2xl font-bold text-primary-purple mb-2">
                          {level.title}
                        </h4>
                        <p className="text-primary-orange font-semibold text-lg">
                          {level.subtitle}
                        </p>
                      </div>
                      
                      {/* Description */}
                      <div className="lg:col-span-1">
                        <p className="text-charcoal-gray text-lg leading-relaxed mb-6">
                          {level.description}
                        </p>
                      </div>
                      
                      {/* Features */}
                      <div className="lg:col-span-1">
                        <ul className="space-y-4">
                          {level.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <Star className="text-primary-orange flex-shrink-0 mt-1" size={20} />
                              <span className="text-charcoal-gray leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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

export default Philosophy;