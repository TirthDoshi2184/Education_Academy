import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, BookOpen, Trophy, Star,
  Users, GraduationCap, BrainCircuit, Target, Send,
  Calendar, CheckCircle2, MessageCircle, Globe
} from 'lucide-react';

const Contact = () => {
  const [hoverCard, setHoverCard] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState('paldi');

  const locations = {
    paldi: {
      address: "401,402,403 Shukh - Shanti Complex, Bhatta-Paldi, Paldi, Ahmedabad - 380007 (Near Dominos Pizza)",
      mapUrl: "https://www.google.com/maps?q=Sukh+Shanti+Complex,+Freniben+Desai+Marg,+Bhatta,+Paldi,+Ahmedabad,+Gujarat+380007&output=embed",
      phone: "+91 98256 29314",
      timing: "8:00 AM - 8:00 PM"
    },
    makarba: {
      address: "423,424 Nalanda Icon, Makarba, Ahmedabad, Gujarat 380051",
      mapUrl: "https://www.google.com/maps?q=Nalanda+Icon,+Makarba,+Ahmedabad,+Gujarat+380051&output=embed",
      phone: "+91 98256 29314",
      timing: "8:00 AM - 8:00 PM"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Enhanced Hero Section */}
      <div className="relative h-[70vh] overflow-hidden bg-[#007A8C]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#007A8C] to-[#005A6C] opacity-90" />
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${5 + Math.random() * 5}s infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              >
                <div className="w-8 h-8 bg-white opacity-5 rounded-full transform rotate-45" />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center space-y-6 px-4">
            <h1 className="text-6xl font-bold mb-6 animate-fadeIn">
              Get in Touch
            </h1>
            <p className="text-2xl opacity-90 max-w-2xl mx-auto mb-8">
              Your Journey to Academic Excellence Begins Here
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setSelectedBranch('paldi')}
                className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
                  selectedBranch === 'paldi'
                    ? 'bg-white text-[#007A8C]'
                    : 'bg-transparent border-2 border-white'
                }`}
              >
                Paldi Branch
              </button>
              <button
                onClick={() => setSelectedBranch('makarba')}
                className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
                  selectedBranch === 'makarba'
                    ? 'bg-white text-[#007A8C]'
                    : 'bg-transparent border-2 border-white'
                }`}
              >
                Makarba Branch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#007A8C]">Why Choose Vidhya Education?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "3000+ Students", text: "Join our growing community of successful students" },
              { icon: GraduationCap, title: "Expert Faculty", text: "Learn from Rajesh Sir's years of experience" },
              { icon: CheckCircle2, title: "Proven Results", text: "Consistent academic improvement" },
              { icon: Calendar, title: "Flexible Timing", text: "Convenient class schedules" }
            ].map((card, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#007A8C] transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-[#007A8C]/10 rounded-full group-hover:bg-[#007A8C]/20 transition-all duration-300">
                    <card.icon className="w-10 h-10 text-[#007A8C]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-600">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map and Branch Details Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Map */}
              <div className="h-[500px]">
                <iframe
                  src={locations[selectedBranch].mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Branch Details */}
              <div className="p-12 bg-gradient-to-br from-[#007A8C] to-[#005A6C] text-white">
                <h3 className="text-3xl font-bold mb-8">
                  {selectedBranch.charAt(0).toUpperCase() + selectedBranch.slice(1)} Branch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                    <p>{locations[selectedBranch].address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-4" />
                    <p>{locations[selectedBranch].phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 mr-4" />
                    <p>{locations[selectedBranch].timing}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4" />
                    <p>rajeshsirmaths@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-[#007A8C] to-[#005A6C] p-1 rounded-2xl shadow-xl">
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-8 text-center text-[#007A8C]">
                Send us a Message
              </h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#007A8C] focus:border-[#007A8C] transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#007A8C] focus:border-[#007A8C] transition-all duration-300"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#007A8C] focus:border-[#007A8C] transition-all duration-300"
                    placeholder="Your Email"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#007A8C] focus:border-[#007A8C] transition-all duration-300"
                    rows="4"
                    placeholder="Your Message"
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-[#007A8C] text-white py-4 rounded-lg hover:bg-[#006878] transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;