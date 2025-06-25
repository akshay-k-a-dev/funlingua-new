import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const [counters, setCounters] = useState({
    years: 0,
    students: 0,
    trainers: 0,
    communities: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const numbersRef = useRef<HTMLDivElement>(null);

  const targetValues = {
    years: 5,
    students: 1000,
    trainers: 15,
    communities: 30
  };

  const animateCounter = (
    key: keyof typeof counters,
    target: number,
    duration: number = 2000
  ) => {
    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);

      setCounters(prev => ({
        ...prev,
        [key]: currentValue
      }));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Start animations with slight delays for staggered effect
            setTimeout(() => animateCounter('years', targetValues.years, 1500), 200);
            setTimeout(() => animateCounter('students', targetValues.students, 2000), 400);
            setTimeout(() => animateCounter('trainers', targetValues.trainers, 1800), 600);
            setTimeout(() => animateCounter('communities', targetValues.communities, 1600), 800);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (numbersRef.current) {
      observer.observe(numbersRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="about" className="py-8 sm:py-12 lg:py-12 bg-warm-light-orange bg-opacity-30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Content */}
            <div className="order-1 lg:order-2">
              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-bold mb-4 sm:mb-6 lg:mb-5 text-primary-purple px-2">
                We Create Confident Speakers
              </h2>
              
              {/* Transformation Story */}
              <div className="space-y-4 lg:space-y-3 text-base md:text-lg lg:text-sm text-charcoal-gray mb-6 sm:mb-8 lg:mb-6 px-2">
                <div className="bg-white/70 p-4 lg:p-3 rounded-lg border-l-4 border-primary-orange">
                  <p className="leading-relaxed font-medium text-primary-purple mb-2 lg:mb-1 text-sm lg:text-xs">
                    The Transformation Journey:
                  </p>
                  <p className="leading-relaxed text-sm lg:text-xs">
                    Learners at FunLingua move from <em>"I can't speak"</em> to hosting live events. Children enact skits in English, homemakers present topics in groups, and jobseekers conduct mock interviews with confidence.
                  </p>
                </div>
                
                <div className="bg-white/70 p-4 lg:p-3 rounded-lg border-l-4 border-primary-purple">
                  <p className="leading-relaxed font-medium text-primary-purple mb-2 lg:mb-1 text-sm lg:text-xs">
                    Our Methodology:
                  </p>
                  <p className="leading-relaxed text-sm lg:text-xs">
                    Through daily feedback, reflection, peer support, and joyful practice, English becomes a lived skill. We don't just teach rules—we invite learners to play, act, walk, observe, and speak English naturally.
                  </p>
                </div>
              </div>
              
              {/* Impact Statistics */}
              <div className="mb-6 lg:mb-5" ref={numbersRef}>
                <h3 className="text-lg lg:text-sm font-semibold text-primary-purple mb-4 lg:mb-3 text-center lg:text-left">
                  Our Impact in Numbers
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-3 max-w-lg lg:max-w-md">
                  <div className="bg-white p-4 sm:p-5 lg:p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="text-2xl sm:text-3xl lg:text-xl font-bold text-primary-orange mb-2 lg:mb-1 group-hover:scale-110 transition-transform duration-300">
                      {counters.years}+
                    </div>
                    <div className="text-charcoal-gray text-sm sm:text-base lg:text-xs">Years Experience</div>
                  </div>
                  <div className="bg-white p-4 sm:p-5 lg:p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="text-2xl sm:text-3xl lg:text-xl font-bold text-primary-orange mb-2 lg:mb-1 group-hover:scale-110 transition-transform duration-300">
                      {counters.students}+
                    </div>
                    <div className="text-charcoal-gray text-sm sm:text-base lg:text-xs">Students Taught</div>
                  </div>
                  <div className="bg-white p-4 sm:p-5 lg:p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="text-2xl sm:text-3xl lg:text-xl font-bold text-primary-orange mb-2 lg:mb-1 group-hover:scale-110 transition-transform duration-300">
                      {counters.trainers}+
                    </div>
                    <div className="text-charcoal-gray text-sm sm:text-base lg:text-xs">Expert Trainers</div>
                  </div>
                  <div className="bg-white p-4 sm:p-5 lg:p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="text-2xl sm:text-3xl lg:text-xl font-bold text-primary-orange mb-2 lg:mb-1 group-hover:scale-110 transition-transform duration-300">
                      {counters.communities}+
                    </div>
                    <div className="text-charcoal-gray text-sm sm:text-base lg:text-xs">Communities Impacted</div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-primary-purple/10 p-4 lg:p-3 rounded-lg border border-primary-purple/20">
                <p className="text-primary-purple font-semibold text-base lg:text-xs text-center lg:text-left">
                  Ready to transform your English speaking confidence? 
                  <span className="block mt-2 lg:mt-1 text-sm lg:text-xs font-normal">
                    Join thousands who've already discovered their voice with FunLingua.
                  </span>
                </p>
              </div>
            </div>
            
            {/* Images */}
            <div className="order-2 lg:order-1">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img
                    src="https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1"
                    alt="Students learning together in an engaging classroom environment"
                    className="w-full object-cover h-48 sm:h-64 md:h-80 lg:h-64 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Floating Secondary Image */}
                <div className="absolute -bottom-4 -right-4 lg:-bottom-3 lg:-right-3 bg-white p-3 lg:p-2 rounded-lg shadow-xl max-w-[120px] lg:max-w-[110px] hover:shadow-2xl transition-all duration-300 group">
                  <img 
                    src="https://images.pexels.com/photos/8423095/pexels-photo-8423095.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1" 
                    alt="Interactive learning activities and group discussions" 
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -left-2 w-4 h-4 lg:w-3 lg:h-3 bg-primary-orange rounded-full animate-pulse"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 lg:w-6 lg:h-6 bg-primary-purple/20 rounded-full blur-sm"></div>
                <div className="absolute top-1/4 -right-2 w-6 h-6 lg:w-5 lg:h-5 bg-primary-orange/30 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;