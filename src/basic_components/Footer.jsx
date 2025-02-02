import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const subjects = [
    { name: "Mathematics", icon: "📐", path: "/subjects/mathematics" },
    { name: "Science", icon: "🔬", path: "/subjects/science" },
    { name: "Social Science", icon: "🌍", path: "/subjects/social-science" },
    { name: "English", icon: "📚", path: "/subjects/english" },
    { name: "Gujarati", icon: "📖", path: "/subjects/gujarati" },
    { name: "Sanskrit", icon: "🏛️", path: "/subjects/sanskrit" },
    { name: "Hindi", icon: "📝", path: "/subjects/hindi" }
  ];

  const locations = [
    {
      area: "Paldi",
      address: "123 Paldi Main Road, Ahmedabad",
      phone: "+91 98765 43210",
      landmark: "Near City Mall"
    },
    {
      area: "Makarba",
      address: "456 Makarba Circle, Ahmedabad",
      phone: "+91 98765 43211",
      landmark: "Opposite Central Park"
    }
  ];

  const socialLinks = [
    { icon: Facebook, link: "https://facebook.com/vidhyaeducation", color: "#1877f2", name: "Facebook" },
    { icon: Instagram, link: "https://instagram.com/vidhyaeducation", color: "#e4405f", name: "Instagram" },
    { icon: Twitter, link: "https://twitter.com/vidhyaeducation", color: "#1da1f2", name: "Twitter" }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="relative bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {/* Decorative Top Pattern */}
      <div className="absolute top-0 left-0 w-full h-24 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="#ffffff" 
            fillOpacity="0.1"
          />
        </svg>
      </div>

      {/* Featured Section */}
      <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Stats */}
          <div className="relative p-6 bg-gradient-to-br from-blue-800/50 to-blue-900/50 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400/10 rounded-full transform translate-x-16 -translate-y-16"></div>
            <h3 className="text-2xl font-bold mb-2">10+ Years</h3>
            <p className="text-blue-200">Of Excellence in Education</p>
          </div>
          
          <div className="relative p-6 bg-gradient-to-br from-blue-800/50 to-blue-900/50 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full transform translate-x-16 -translate-y-16"></div>
            <h3 className="text-2xl font-bold mb-2">95% Success</h3>
            <p className="text-blue-200">Rate in Board Exams</p>
          </div>
          
          <div className="relative p-6 bg-gradient-to-br from-blue-800/50 to-blue-900/50 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full transform translate-x-16 -translate-y-16"></div>
            <h3 className="text-2xl font-bold mb-2">3000+ Students</h3>
            <p className="text-blue-200">Guided Successfully</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="transform hover:scale-105 transition duration-500">
              <h2 className="text-3xl font-bold relative inline-block">
                <span className="bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
                  VIDHYA EDUCATION
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-transparent"></span>
              </h2>
              <p className="mt-4 text-blue-100 leading-relaxed">
                Empowering students with quality education and comprehensive learning since 2013. Under the expert guidance of Rajesh Sir, we've helped shape the future of over 600 students.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-blue-500 rounded-lg opacity-70 group-hover:opacity-100 blur transition duration-300"></div>
                  <div className="relative p-2 bg-blue-950 rounded-lg transform group-hover:scale-110 group-hover:rotate-6 transition duration-300">
                    <social.icon className="w-5 h-5" style={{ color: social.color }} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Subjects Grid */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold relative inline-block">
              <span className="relative z-10">Our Subjects</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400"></span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {subjects.map((subject) => (
                <a
                  key={subject.name}
                  href={subject.path}
                  className="flex items-center space-x-2 p-3 rounded-lg bg-blue-900/30 hover:bg-blue-800/40 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <span className="text-xl">{subject.icon}</span>
                  <span className="text-blue-100">{subject.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 relative inline-block">
                <span className="relative z-10">Class Standards</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400"></span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[7, 8, 9, 10].map((grade) => (
                  <a
                    key={grade}
                    href={`/standard/${grade}`}
                    className="group relative p-4 bg-blue-900/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative text-center transform group-hover:scale-105 transition duration-300">
                      <span className="text-2xl font-bold text-orange-400">{grade}</span>
                      <span className="text-sm ml-1">th Standard</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold relative inline-block">
                <span className="relative z-10">Quick Contact</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400"></span>
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:info@vidhyaeducation.com"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-blue-900/30 hover:bg-blue-800/40 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span className="text-blue-100">info@vidhyaeducation.com</span>
                </a>
                <a 
                  href="tel:+919876543210"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-blue-900/30 hover:bg-blue-800/40 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span className="text-blue-100">+91 98765 43210</span>
                </a>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold relative inline-block">
              <span className="relative z-10">Our Branches</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400"></span>
            </h3>
            <div className="space-y-4">
              {locations.map((location) => (
                <div 
                  key={location.area}
                  className="group relative p-4 bg-blue-900/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative space-y-2 transform group-hover:scale-[1.02] transition-transform duration-300">
                    <h4 className="font-semibold text-orange-400 flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{location.area} Branch</span>
                    </h4>
                    <p className="text-sm text-blue-100">{location.address}</p>
                    <p className="text-sm text-blue-100">{location.landmark}</p>
                    <p className="text-sm text-blue-100">{location.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-blue-600/10 blur-xl"></div>
          <div className="relative bg-blue-900/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
              <p className="text-blue-100 mb-6">Join our community and receive updates about new batches, study materials, and educational resources.</p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-blue-950/50 border border-blue-400/30 focus:outline-none focus:border-orange-400 placeholder-blue-300/50 text-white"
                  required
                />
                <button 
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg font-medium text-white hover:from-orange-500 hover:to-orange-600 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Enhanced Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-blue-400/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-blue-100">
              © {new Date().getFullYear()} Vidhya Education. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="text-sm text-blue-100 hover:text-orange-400 transition duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframes for wave animation in your CSS */}
      <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-wave {
          animation: wave 15s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;