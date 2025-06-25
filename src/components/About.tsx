import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-8 sm:py-12 lg:py-14 bg-warm-light-orange bg-opacity-30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Content */}
            <div className="order-1 lg:order-2">
              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-7 text-primary-purple px-2">
                We Create Confident Speakers
              </h2>
              
              {/* Transformation Story */}
              <div className="space-y-4 lg:space-y-5 text-base md:text-lg lg:text-lg text-charcoal-gray mb-6 sm:mb-8 lg:mb-9 px-2">
                <div className="bg-white/70 p-4 lg:p-5 rounded-lg border-l-4 border-primary-orange">
                  <p className="leading-relaxed font-medium text-primary-purple mb-2">
                    The Transformation Journey:
                  </p>
                  <p className="leading-relaxed">
                    Learners at FunLingua move from <em>"I can't speak"</em> to hosting live events. Children enact skits in English, homemakers present topics in groups, and jobseekers conduct mock interviews with confidence.
                  </p>
                </div>
                
                <div className="bg-white/70 p-4 lg:p-5 rounded-lg border-l-4 border-primary-purple">
                  <p className="leading-relaxed font-medium text-primary-purple mb-2">
                    Our Methodology:
                  </p>
                  <p className="leading-relaxed">
                    Through daily feedback, reflection, peer support, and joyful practice, English becomes a lived skill. We don't just teach rules—we invite learners to play, act, walk, observe, and speak English naturally.
                  </p>
                </div>
              </div>
              
              {/* Impact Statistics */}
              <div className="mb-6 lg:mb-7">
                <h3 className="text-lg lg:text-lg font-semibold text-primary-purple mb-4 lg:mb-5 text-center lg:text-left">
                  Our Impact in Numbers
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 max-w-lg lg:max-w-2xl">
                  <div className="bg-white p-4 sm:p-5 lg:p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="text-2xl sm:text-3xl lg:text-3xl font-bold text-primary-orange mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                    <div className="text-charcoal-gray text-sm sm:text-base lg:text-base">Years Experience</div>
                  </div>
                  <div className="bg-white p-4 sm:p-5 lg:p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="text-2xl sm:text-3xl lg:text-3xl font-bold text-primary-orange mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
                    <div className="text-charcoal-gray text-sm sm:text-base lg:text-base">Students Taught</div>
                  </div>
                  <div className="bg-white p-4 sm:p-5 lg:p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="text-2xl sm:text-3xl lg:text-3xl font-bold text-primary-orange mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                    <div className="text-charcoal-gray text-sm sm:text-base lg:text-base">Expert Trainers</div>
                  </div>
                  <div className="bg-white p-4 sm:p-5 lg:p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="text-2xl sm:text-3xl lg:text-3xl font-bold text-primary-orange mb-2 group-hover:scale-110 transition-transform duration-300">30+</div>
                    <div className="text-charcoal-gray text-sm sm:text-base lg:text-base">Communities Impacted</div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-primary-purple/10 p-4 lg:p-5 rounded-lg border border-primary-purple/20">
                <p className="text-primary-purple font-semibold text-base lg:text-base text-center lg:text-left">
                  Ready to transform your English speaking confidence? 
                  <span className="block mt-2 text-sm lg:text-sm font-normal">
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
                    className="w-full object-cover h-48 sm:h-64 md:h-80 lg:h-86 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Floating Secondary Image */}
                <div className="absolute -bottom-4 -right-4 lg:-bottom-5 lg:-right-5 bg-white p-3 lg:p-3 rounded-lg shadow-xl max-w-[120px] lg:max-w-[150px] hover:shadow-2xl transition-all duration-300 group">
                  <img 
                    src="https://images.pexels.com/photos/8423095/pexels-photo-8423095.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1" 
                    alt="Interactive learning activities and group discussions" 
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary-orange rounded-full animate-pulse"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-purple/20 rounded-full blur-sm"></div>
                <div className="absolute top-1/4 -right-2 w-6 h-6 bg-primary-orange/30 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;