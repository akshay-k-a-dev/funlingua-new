import React from 'react';
import { Heart, School, Home, Users, MapPin, Monitor, Building, Bus } from 'lucide-react';

const trainingModels = [
  {
    icon: Building,
    title: 'Offline Center-Based Classes',
    description: 'Weekday & Weekend Batches at Centers in Peyad & Karamana'
  },
  {
    icon: Monitor,
    title: 'Online Inclusive Learning',
    description: 'For individuals with visual or physical challenges - Interactive Zoom + Buddy Systems'
  },
  {
    icon: Users,
    title: 'Community Workshops',
    description: 'In CCIs, slums, tribal belts, schools and colleges'
  },
  {
    icon: Bus,
    title: 'FunLingua Bus (Coming Soon)',
    description: 'Mobile learning lab to conduct demos, micro-sessions, street interactions'
  }
];

const SocialImpact: React.FC = () => {
  return (
    <section id="impact" className="py-8 sm:py-12 lg:py-14 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 lg:w-60 lg:h-60 bg-primary-orange opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 lg:w-52 lg:h-52 bg-primary-purple opacity-5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 lg:mb-5 text-primary-purple px-2">
              Real Language. Real People. Real Change.
            </h2>
            <p className="text-base sm:text-lg lg:text-lg text-charcoal-gray max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-9 px-2 leading-relaxed">
              We work with care homes, slums, tribal communities, and schools to build voice and confidence.
            </p>
            
            {/* Transform Quote */}
            <div className="bg-soft-lilac rounded-lg p-6 sm:p-8 lg:p-9 mb-8 sm:mb-12 lg:mb-14 max-w-5xl mx-auto">
              <blockquote className="text-lg sm:text-xl lg:text-xl italic text-primary-purple mb-4 lg:mb-5">
                "FunLingua is where English meets identity, dignity, and dialogue."
              </blockquote>
              <div className="text-base sm:text-lg lg:text-lg text-charcoal-gray space-y-3 lg:space-y-3">
                <p><strong>Our learners don't just improve English. They:</strong></p>
                <div className="grid sm:grid-cols-2 gap-2 lg:gap-2 text-left max-w-2xl mx-auto">
                  <div className="flex items-center gap-2 lg:gap-2">
                    <span className="text-primary-orange">•</span>
                    <span>Discover confidence</span>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-2">
                    <span className="text-primary-orange">•</span>
                    <span>Speak in front of audiences</span>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-2">
                    <span className="text-primary-orange">•</span>
                    <span>Take leadership roles</span>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-2">
                    <span className="text-primary-orange">•</span>
                    <span>Break stereotypes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Community Impact Icons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-8 sm:mb-12 lg:mb-14">
            <div className="bg-soft-lilac rounded-lg p-4 sm:p-6 lg:p-7 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-5 shadow-md">
                <Heart className="text-primary-orange" size={18} />
              </div>
              <h3 className="font-semibold text-primary-purple text-sm sm:text-base lg:text-base">Care Homes</h3>
            </div>
            
            <div className="bg-soft-lilac rounded-lg p-4 sm:p-6 lg:p-7 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-5 shadow-md">
                <Home className="text-primary-orange" size={18} />
              </div>
              <h3 className="font-semibold text-primary-purple text-sm sm:text-base lg:text-base">Slum Communities</h3>
            </div>
            
            <div className="bg-soft-lilac rounded-lg p-4 sm:p-6 lg:p-7 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-5 shadow-md">
                <Users className="text-primary-orange" size={18} />
              </div>
              <h3 className="font-semibold text-primary-purple text-sm sm:text-base lg:text-base">Tribal Villages</h3>
            </div>
            
            <div className="bg-soft-lilac rounded-lg p-4 sm:p-6 lg:p-7 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-white w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-5 shadow-md">
                <School className="text-primary-orange" size={18} />
              </div>
              <h3 className="font-semibold text-primary-purple text-sm sm:text-base lg:text-base">Local Schools</h3>
            </div>
          </div>

          {/* Training Models */}
          <div className="mb-8 sm:mb-12 lg:mb-14">
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-center mb-6 sm:mb-8 lg:mb-9 text-primary-purple">
              Our Training Models
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-7">
              {trainingModels.map((model, index) => (
                <div key={index} className="bg-white rounded-lg p-6 lg:p-7 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary-orange">
                  <div className="flex items-start gap-4 lg:gap-5">
                    <model.icon className="text-primary-orange flex-shrink-0 mt-1" size={22} />
                    <div>
                      <h4 className="font-semibold text-primary-purple mb-2 lg:mb-2 text-base sm:text-lg lg:text-lg">
                        {model.title}
                      </h4>
                      <p className="text-charcoal-gray text-sm sm:text-base lg:text-base leading-relaxed">
                        {model.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-primary-orange hover:bg-opacity-90 text-white px-6 sm:px-8 lg:px-9 py-3 sm:py-4 lg:py-3 rounded-full font-semibold text-base sm:text-lg lg:text-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1 min-h-[44px] lg:min-h-[48px]">
              Join a Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;