import React from 'react';
import { Award, Users, Calendar, Star } from 'lucide-react';

const SuccessStories: React.FC = () => {
  return (
    <section className="py-16 md:py-18 lg:py-17 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-14 lg:mb-14">
          <h2 className="text-2xl md:text-4xl lg:text-3xl font-bold mb-4 text-primary-purple">
            Our Success Stories
          </h2>
          <p className="text-base md:text-lg lg:text-base text-charcoal-gray max-w-2xl mx-auto">
            Real transformations from learners who found their voice through FunLingua.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10">
          {/* DDI Residential Camp */}
          <div className="bg-soft-lilac rounded-lg p-6 md:p-8 lg:p-7 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-orange p-2 rounded-full">
                <Users className="text-white" size={18} />
              </div>
              <h3 className="text-lg md:text-xl lg:text-lg font-bold text-primary-purple">
                DDI Residential Camp
              </h3>
            </div>
            
            <p className="text-charcoal-gray text-sm lg:text-xs mb-4">
              <em>Loyola Extension Services</em>
            </p>
            
            <div className="space-y-3 lg:space-y-2 text-sm md:text-base lg:text-sm text-charcoal-gray mb-6 lg:mb-5">
              <div className="flex items-start gap-2">
                <Star className="text-primary-orange flex-shrink-0 mt-1" size={14} />
                <span>13 learners from grassroots backgrounds</span>
              </div>
              <div className="flex items-start gap-2">
                <Calendar className="text-primary-orange flex-shrink-0 mt-1" size={14} />
                <span>6-day camp with Manglish-Drama-Vlog-English sessions</span>
              </div>
              <div className="flex items-start gap-2">
                <Award className="text-primary-orange flex-shrink-0 mt-1" size={14} />
                <span>Created & performed original English stories like "Hyden the Phoenix"</span>
              </div>
              <div className="flex items-start gap-2">
                <Users className="text-primary-orange flex-shrink-0 mt-1" size={14} />
                <span>Practiced blind walks, transect walks, interview rounds, and anchored a final event</span>
              </div>
            </div>
            
            <div className="bg-white p-4 lg:p-3 rounded-lg">
              <p className="text-primary-purple font-semibold text-sm md:text-base lg:text-sm">
                "From hesitant speakers to confident storytellers in just 6 days!"
              </p>
            </div>
          </div>

          {/* Salvation Army CDC */}
          <div className="bg-warm-light-orange rounded-lg p-6 md:p-8 lg:p-7 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-purple p-2 rounded-full">
                <Award className="text-white" size={18} />
              </div>
              <h3 className="text-lg md:text-xl lg:text-lg font-bold text-primary-purple">
                Salvation Army CDC
              </h3>
            </div>
            
            <p className="text-charcoal-gray text-sm lg:text-xs mb-4">
              <em>6-Month Journey</em>
            </p>
            
            <div className="space-y-3 lg:space-y-2 text-sm md:text-base lg:text-sm text-charcoal-gray mb-6 lg:mb-5">
              <div className="flex items-start gap-2">
                <Star className="text-primary-orange flex-shrink-0 mt-1" size={14} />
                <span>2 CCIs (Boys & Girls) trained every Sunday</span>
              </div>
              <div className="flex items-start gap-2">
                <Users className="text-primary-orange flex-shrink-0 mt-1" size={14} />
                <span>Activities: Guided tours, Onam skits, shopping roleplays, classroom enactments</span>
              </div>
              <div className="flex items-start gap-2">
                <Award className="text-primary-orange flex-shrink-0 mt-1" size={14} />
                <span>Grand Finale led completely by children—from stage scripts to anchoring</span>
              </div>
              <div className="flex items-start gap-2">
                <Star className="text-primary-orange flex-shrink-0 mt-1" size={14} />
                <span>Winners like Vishal, Monisha, and Hanna emerged with visible transformation</span>
              </div>
            </div>
            
            <div className="bg-white p-4 lg:p-3 rounded-lg">
              <p className="text-primary-purple font-semibold text-sm md:text-base lg:text-sm">
                "FunLingua empowered institutionalized children to see English as a friend, not a fear."
              </p>
            </div>
          </div>
        </div>

        {/* Recognition Section */}
        <div className="mt-12 md:mt-14 lg:mt-13 text-center">
          <div className="bg-primary-purple text-white rounded-lg p-6 md:p-8 lg:p-7 max-w-4xl mx-auto">
            <Award className="text-primary-orange mx-auto mb-4" size={44} />
            <h3 className="text-xl md:text-2xl lg:text-xl font-bold mb-4">
              We Are Now a Recognized Startup!
            </h3>
            <p className="text-base md:text-lg lg:text-base mb-4">
              FunLingua Language Academy Private Limited is officially recognized by the Government of India under the Startup India initiative, certified by the Department for Promotion of Industry and Internal Trade (DPIIT).
            </p>
            <div className="grid sm:grid-cols-3 gap-4 lg:gap-3 text-sm lg:text-xs">
              <div>
                <strong>Certificate No:</strong><br />DIPP208626
              </div>
              <div>
                <strong>Date of Recognition:</strong><br />16-12-2024
              </div>
              <div>
                <strong>Industry Sectors:</strong><br />Education & EdTech
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;