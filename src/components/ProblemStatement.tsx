import React, { useEffect, useRef } from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';

const ProblemStatement: React.FC = () => {
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

  const problems = [
    "Thinking in Malayalam… pause… and searching for English words.",
    "Having the thoughts, but not the right words.",
    "Staying silent due to fear of being wrong."
  ];

  return (
    <>
      <div className="section-separator"></div>
      <section ref={sectionRef} className="section-padding bg-gradient-to-br from-white to-soft-lilac/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 fade-in-section">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-orange to-primary-purple rounded-full mb-8 animate-bounce-in">
                <AlertCircle className="text-white" size={32} />
              </div>
              <h2 className="text-responsive-lg font-bold mb-6 text-gradient">
                Sound Familiar?
              </h2>
              <p className="text-xl text-charcoal-gray leading-relaxed">
                You're not alone in this struggle. Millions face these exact challenges every day.
              </p>
            </div>

            {/* Problem Cards */}
            <div className="space-y-8 mb-16">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className={`fade-in-section animate-delay-${(index + 2) * 100} glass-effect rounded-2xl p-8 shadow-xl card-hover`}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-orange to-primary-purple flex items-center justify-center text-white font-bold text-xl animate-scale-in">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-charcoal-gray leading-relaxed">
                        {problem}
                      </p>
                    </div>
                    <ArrowRight className="text-primary-orange opacity-50 animate-float" size={24} />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Solution Statement */}
            <div className="fade-in-section animate-delay-500">
              <div className="bg-gradient-to-r from-primary-purple to-primary-orange rounded-2xl p-8 text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 text-shadow">
                  FunLingua is built for people like you.
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  We understand your journey because we've been there too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemStatement;