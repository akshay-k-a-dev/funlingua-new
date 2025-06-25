import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  contactNumber: string;
  email: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  contactNumber: '',
  email: '',
  message: '',
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(initialFormData);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-18 bg-soft-lilac">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold mb-4 text-primary-purple px-2">
            Contact Us
          </h2>
          <p className="text-base md:text-lg lg:text-base text-charcoal-gray max-w-2xl mx-auto px-2 leading-relaxed">
            Have questions or ready to start your language journey? We're here to help!
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:gap-10">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-7 mb-6 sm:mb-8">
                <div className="space-y-6 lg:space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="bg-warm-light-orange p-3 lg:p-2 rounded-full flex-shrink-0">
                      <MapPin className="text-primary-orange" size={18} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-base font-semibold text-primary-purple mb-2">Our Centers</h3>
                      <div className="space-y-2 text-charcoal-gray text-sm sm:text-base lg:text-sm">
                        <div>
                          <strong>Peyad:</strong> Singapore Tower, VP18/516C, Thiruvananthapuram
                        </div>
                        <div>
                          <strong>Karamana:</strong> Address coming soon
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-warm-light-orange p-3 lg:p-2 rounded-full flex-shrink-0">
                      <Phone className="text-primary-orange" size={18} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-base font-semibold text-primary-purple mb-2">Phone / WhatsApp</h3>
                      <p className="text-charcoal-gray text-sm sm:text-base lg:text-sm">
                        8281858400
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-warm-light-orange p-3 lg:p-2 rounded-full flex-shrink-0">
                      <Mail className="text-primary-orange" size={18} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-base font-semibold text-primary-purple mb-2">Email Address</h3>
                      <p className="text-charcoal-gray text-sm sm:text-base lg:text-sm break-all">
                        funlingualanguageacademy@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31542.066266337443!2d76.9222958!3d8.5563756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bedd0b2ca985%3A0x445a7a609114be0!2sPeyad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1653044767153!5m2!1sen!2sin" 
                  width="100%" 
                  height="230" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="FunLingua Academy Location"
                  className="sm:h-58"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-7">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                      <p className="font-semibold">Thank you for your message!</p>
                      <p>We'll get back to you soon.</p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary-purple hover:text-primary-orange transition-colors min-h-[44px] px-4 py-2"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal-gray mb-2">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 lg:py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent text-base lg:text-sm min-h-[44px] lg:min-h-[40px]"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="contactNumber" className="block text-sm font-medium text-charcoal-gray mb-2">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 lg:py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent text-base lg:text-sm min-h-[44px] lg:min-h-[40px]"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal-gray mb-2">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 lg:py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent text-base lg:text-sm min-h-[44px] lg:min-h-[40px]"
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal-gray mb-2">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 lg:py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent text-base lg:text-sm resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <div className="space-y-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-primary-orange text-white py-3 sm:py-4 lg:py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-base lg:text-sm min-h-[44px] lg:min-h-[40px] ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'
                        }`}
                      >
                        {isSubmitting ? 'Sending...' : (
                          <>
                            <Send size={16} /> Send Message
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        className="w-full bg-primary-purple text-white py-3 sm:py-4 lg:py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300 text-base lg:text-sm min-h-[44px] lg:min-h-[40px]"
                      >
                        Invite FunLingua to Your Campus
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;