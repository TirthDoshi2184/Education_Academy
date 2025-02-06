import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronRight, Book, Star, Trophy, Target, Users, Heart, Globe, 
  Cpu, Shield, Zap, Award, MapPin, Rocket, MessageSquare, BookOpen 
} from 'lucide-react';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Original Hero Section - Unchanged */}
      <section 
        ref={containerRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-[#007A8C]"
      >
        {/* Dynamic Background Patterns */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-40 h-40 bg-white/5 rounded-full"
            style={{
              left: `${mousePos.x * 100}%`,
              top: `${mousePos.y * 100}%`,
              transform: `translate(-50%, -50%) scale(${1 + (i % 3) * 0.5})`,
              transition: `transform ${0.5 + i * 0.1}s ease-out`,
              opacity: 0.1 - (i * 0.01)
            }}
          />
        ))}
        
        <div className="relative z-10 text-white text-center max-w-5xl mx-auto px-4">
          <h1 className="text-8xl font-bold mb-8 animate-float">
            Our Legacy
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {['Excellence', 'Innovation', 'Growth', 'Success'].map((word, i) => (
              <span
                key={word}
                className="text-2xl opacity-80"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {word}
              </span>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="w-20 h-1 bg-white/30" />
            <span className="text-xl">EST. 2010</span>
            <div className="w-20 h-1 bg-white/30" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-[#007A8C] mb-16">Why Choose Us?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
      {[
        { icon: Rocket, title: "Personalized Learning", stats: "Tailored Programs", description: "Custom learning paths designed for your success" },
        { icon: Users, title: "Expert Mentorship", stats: "50+ Expert Mentors", description: "Learn from industry veterans and professionals" },
        { icon: Trophy, title: "Proven Success", stats: "98% Success Rate", description: "Track record of excellence in education" }
      ].map((item) => (
        <div key={item.title} className="group relative w-full h-64 perspective">
          <div className="relative w-full h-full transition-transform duration-1000 group-hover:rotate-y-180"
               style={{ transformStyle: 'preserve-3d' }}>
            
            {/* Front Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#007A8C] to-[#009AAC] rounded-2xl flex flex-col items-center justify-center p-8 text-white"
                 style={{ backfaceVisibility: 'hidden' }}>
              <item.icon className="w-16 h-16 mb-6" />
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-lg opacity-90">{item.stats}</p>
            </div>

            {/* Back Card */}
            <div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 rotate-y-180"
                 style={{ backfaceVisibility: 'hidden' }}>
              <h3 className="text-2xl font-bold text-[#007A8C] mb-4">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Enhanced Timeline Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#007A8C] mb-16">Our Journey of Excellence</h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#007A8C] via-[#009AAC] to-orange-500" />
            {[
              { year: 2010, title: "Foundation", description: "Started with a vision to revolutionize education", icon: Book },
              { year: 2015, title: "First Milestone", description: "Writen Own Book of Maths", icon: Target },
              { year: 2019, title: "Award", description: "Best Mathematics Teacher Award", icon: Cpu },
              { year: 2025, title: "Expansion", description: "Opened New centers in the city", icon: MapPin },
            ].map((milestone, index) => (
              <div 
                key={milestone.year}
                className="relative pl-8 pb-12 group"
                onMouseEnter={() => setActiveSection(index)}
              >
                <div className="absolute left-0 w-4 h-4 -translate-x-1.5 rounded-full bg-white border-4 border-[#007A8C] group-hover:scale-150 transition-transform" />
                <div className="bg-white p-8 rounded-xl shadow-lg group-hover:shadow-2xl transition-all transform group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <milestone.icon className="w-8 h-8 text-[#007A8C]" />
                    <span className="text-[#007A8C] font-bold text-xl">{milestone.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-[#007A8C]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Student Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Software Engineer at Google",
                quote: "The personalized attention and comprehensive curriculum helped me achieve my dreams. The mentorship was invaluable.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Data Scientist at Amazon",
                quote: "The practical approach to learning and industry-focused curriculum gave me the edge I needed in my career.",
                rating: 5
              }
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 transform hover:scale-105 transition-transform">
                <div className="flex gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white text-lg mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20" />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-white/80 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Location Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#007A8C] mb-16">Our State-of-the-Art Centers</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { 
                area: "Paldi",
                features: ["Advanced Research Labs", "Digital Smart Classrooms", "Modern Library", "Student Lounge"],
                amenities: ["24/7 Access", "High-Speed Internet", "Conference Rooms"]
              },
              {
                area: "Makarba",
                features: ["Innovation Hub", "Collaborative Spaces", "Technical Labs", "Meditation Room"],
                amenities: ["Cafeteria", "Sports Facility", "Study Zones"]
              }
            ].map((center) => (
              <div key={center.area} className="transform-gpu transition-all duration-300 hover:scale-105">
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#007A8C] to-[#009AAC] rounded-2xl transform rotate-3 opacity-70" />
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <MapPin className="w-8 h-8 text-[#007A8C]" />
                      <h3 className="text-2xl font-bold text-[#007A8C]">{center.area} Center</h3>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {center.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                              <ChevronRight className="w-4 h-4 text-orange-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Amenities:</h4>
                        <ul className="space-y-2">
                          {center.amenities.map((amenity) => (
                            <li key={amenity} className="flex items-center gap-3">
                              <ChevronRight className="w-4 h-4 text-orange-500" />
                              <span>{amenity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .perspective { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;