import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const FranchiseApplicationWebsite = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let redirect = useNavigate();

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Fixed Navigation - Enhanced with smoother transitions and better contrast */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center mr-3 shadow-md">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <h1 className="text-2xl font-bold text-blue-700">Franchise Hub</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className={`font-medium transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}>Home</a>
              <a href="#services" className={`font-medium transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}>Services</a>
              <a href="#about" className={`font-medium transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}>About Us</a>
              <a href="#process" className={`font-medium transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}>Process</a>
              <a href="#contact" className={`font-medium transition-colors duration-300 ${scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}>Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <input 
                type="button" 
                value="Login" 
                className={`hidden md:inline-block transition-colors duration-300 font-medium ${scrolled ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-blue-200'}`} 
                onClick={() => redirect("/login")}
              />
              <button 
                className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu - Enhanced with smooth animations */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg animate-fadeIn">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                <a href="#home" className="text-gray-800 hover:text-blue-600 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Home</a>
                <a href="#services" className="text-gray-800 hover:text-blue-600 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Services</a>
                <a href="#about" className="text-gray-800 hover:text-blue-600 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>About Us</a>
                <a href="#process" className="text-gray-800 hover:text-blue-600 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Process</a>
                <a href="#contact" className="text-gray-800 hover:text-blue-600 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                <a href="#login" className="text-blue-600 hover:text-blue-700 font-medium" onClick={() => setMobileMenuOpen(false)}>Login</a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Enhanced with better gradients and animations */}
      <section id="home" className="pt-32 pb-24 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <div className="animate-fadeIn">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-blue-300 inline-block transform hover:scale-105 transition-transform duration-500">UNLOCK</span> <br />
                  <span className="text-purple-300 inline-block transform hover:scale-105 transition-transform duration-500">YOUR BUSINESS</span> <br />
                  <span className="text-white inline-block transform hover:scale-105 transition-transform duration-500">POTENTIAL</span>
                </h2>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Your gateway to successful franchise ownership - Apply, Get Approved, and Start Operating Your Dream Business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="button" 
                    value="Apply Now" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition transform hover:-translate-y-1 hover:shadow-xl cursor-pointer" 
                    onClick={() => redirect("/applynow")}
                  />
                  <a href="#services" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-medium px-8 py-3 rounded-lg transition transform hover:-translate-y-1 hover:shadow-lg text-center">
                    Our Services
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <img 
                  src="/pics/franchisehub.png"
                    
                  alt="Franchise Success" 
                  className="relative z-10 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced with better hover effects */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 text-center shadow-md transform transition duration-500 hover:-translate-y-2 hover:shadow-xl border-b-4 border-transparent hover:border-blue-500">
              <div className="text-blue-600 text-4xl font-bold mb-2">98%</div>
              <p className="text-gray-600 uppercase tracking-wide text-sm font-medium">Success Rate</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 text-center shadow-md transform transition duration-500 hover:-translate-y-2 hover:shadow-xl border-b-4 border-transparent hover:border-purple-500">
              <div className="text-purple-600 text-4xl font-bold mb-2">24/7</div>
              <p className="text-gray-600 uppercase tracking-wide text-sm font-medium">Expert Support</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 text-center shadow-md transform transition duration-500 hover:-translate-y-2 hover:shadow-xl border-b-4 border-transparent hover:border-green-500">
              <div className="text-green-600 text-4xl font-bold mb-2">500+</div>
              <p className="text-gray-600 uppercase tracking-wide text-sm font-medium">Franchises Launched</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced with better cards */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Comprehensive Franchise Support</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end services to ensure your franchise journey is successful from start to finish
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📝",
                title: "Application Assistance",
                description: "We guide you through every step of the application process, ensuring all documentation is perfect."
              },
              {
                icon: "🏢",
                title: "Location Analysis",
                description: "Our experts analyze potential locations to identify the best spot for your franchise business."
              },
              {
                icon: "💰",
                title: "Financing Options",
                description: "Access to preferred lenders and assistance with securing the capital you need."
              },
              {
                icon: "🎓",
                title: "Training Programs",
                description: "Comprehensive operational training for you and your staff to ensure a successful launch."
              },
              {
                icon: "📊",
                title: "Business Planning",
                description: "Detailed business plan development and financial projections to set you up for success."
              },
              {
                icon: "📢",
                title: "Marketing Support",
                description: "Proven marketing strategies and branded materials to attract customers from day one."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transition duration-500 transform hover:-translate-y-2 hover:shadow-xl group">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Enhanced with better number indicators */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider">OUR PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple 3-step process to franchise ownership
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {[
              {
                step: 1,
                title: "Apply",
                description: "Complete our simple online application form. Our team will review your application and contact you within 48 hours.",
                icon: "🖋️"
              },
              {
                step: 2,
                title: "Get Approved",
                description: "Meet with our franchise consultants, review franchise options, and complete the approval process and get the login details.",
                icon: "✅"
              },
              {
                step: 3,
                title: "Start Operating",
                description: "Receive comprehensive training, set up your location, and launch your franchise business with our full support by maintaing all your records of your ongoing franhise on our website.",
                icon: "🚀"
              }
            ].map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 flex-1 relative group transition duration-500 hover:shadow-xl border-l-4 border-transparent hover:border-blue-500">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <div className="text-4xl mb-4 pt-4 transition-transform duration-300 transform group-hover:scale-110">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced with better form styling */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider">CONTACT US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about franchise opportunities? Our team is ready to help you.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition duration-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="franchise-inquiry">Franchise Inquiry</option>
                    <option value="application-help">Application Help</option>
                    <option value="financing">Financing Questions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Your Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition transform hover:-translate-y-1 hover:shadow-lg w-full md:w-auto"
                  onClick={()=>{alert("Message Sent")}}
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white rounded-lg shadow-md p-8 h-full hover:shadow-xl transition duration-500">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="bg-blue-700 rounded-full p-3 mr-4 group-hover:bg-blue-600 transition duration-300 shadow-md">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-200 group-hover:text-white transition duration-300">Our Location</h4>
                      <p className="text-white mt-1">BCE, Ajit road <br />Bathinda, Punjab</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="bg-blue-700 rounded-full p-3 mr-4 group-hover:bg-blue-600 transition duration-300 shadow-md">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-200 group-hover:text-white transition duration-300">Call Us</h4>
                      <p className="text-white mt-1">+91 7009507421</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="bg-blue-700 rounded-full p-3 mr-4 group-hover:bg-blue-600 transition duration-300 shadow-md">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-200 group-hover:text-white transition duration-300">Email Us</h4>
                      <p className="text-white mt-1">vaibhavjethi819@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced with better image styling */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-300 rounded-lg transform translate-x-4 translate-y-4 opacity-30"></div>
                <img 
                  src="/pics/aboutus.png" 
                  alt="About Our Franchise Business" 
                  className="rounded-lg shadow-lg relative z-10 transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <span className="text-blue-300 font-semibold tracking-wider">ABOUT US</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Empowering Entrepreneurs 
              </h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Franchise Hub was founded with a simple mission: to make franchise ownership accessible, 
                sustainable, and profitable for entrepreneurs from all backgrounds. With over a decade of 
                experience, we've helped more than 500 business owners achieve their dreams of independence.
              </p>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our team of franchise experts provides personalized guidance through every step of your 
                journey, from initial application to grand opening and beyond. We believe in your success 
                and are committed to helping you achieve it.
              </p>
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition transform hover:-translate-y-1 hover:shadow-lg inline-block">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced with better spacing and hover effects */}
      <footer className="py-10 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Franchise Hub</h3>
              <p className="text-gray-400">Empowering Entrepreneurs </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#home" className="hover:text-blue-400 transition duration-300">Home</a>
              <a href="#services" className="hover:text-blue-400 transition duration-300">Services</a>
              <a href="#about" className="hover:text-blue-400 transition duration-300">About Us</a>
              <a href="#process" className="hover:text-blue-400 transition duration-300">Process</a>
              <a href="#apply" className="hover:text-blue-400 transition duration-300">Apply Now</a>
              <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            &copy; 2025 Franchise Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FranchiseApplicationWebsite;