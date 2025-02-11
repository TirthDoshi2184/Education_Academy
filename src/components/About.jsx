import React, { useState, useRef, useEffect } from "react";
import {
  ChevronRight,
  Book,
  Star,
  Trophy,
  Target,
  Users,
  Heart,
  Globe,
  Cpu,
  Shield,
  Zap,
  Award,
  MapPin,
  Rocket,
  MessageSquare,
  BookOpen,
} from "lucide-react";

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

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
              opacity: 0.1 - i * 0.01,
            }}
          />
        ))}

        <div className="relative z-10 text-white text-center max-w-5xl mx-auto px-4">
          <h1 className="text-8xl font-bold mb-8 animate-float">Our Legacy</h1>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {["Excellence", "Innovation", "Growth", "Success"].map(
              (word, i) => (
                <span
                  key={word}
                  className="text-2xl opacity-80"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {word}
                </span>
              )
            )}
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="w-20 h-1 bg-white/30" />
            <span className="text-xl">EST. 2010</span>
            <div className="w-20 h-1 bg-white/30" />
          </div>
        </div>
      </section>

      {/* Why choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#007A8C] mb-16">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: Rocket,
                title: "Personalized Learning",
                stats: "Tailored Programs",
                description: "Custom learning paths designed for your success",
              },
              {
                icon: Users,
                title: "Expert Mentorship",
                stats: "50+ Expert Mentors",
                description: "Learn from industry veterans and professionals",
              },
              {
                icon: Trophy,
                title: "Proven Success",
                stats: "98% Success Rate",
                description: "Track record of excellence in education",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative w-full h-64 perspective"
              >
                <div
                  className="relative w-full h-full transition-transform duration-1000 group-hover:rotate-y-180"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Card */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#007A8C] to-[#009AAC] rounded-2xl flex flex-col items-center justify-center p-8 text-white"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <item.icon className="w-16 h-16 mb-6" />
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-lg opacity-90">{item.stats}</p>
                  </div>

                  {/* Back Card */}
                  <div
                    className="absolute inset-0 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 rotate-y-180"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <h3 className="text-2xl font-bold text-[#007A8C] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {item.description}
                    </p>
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
          <h2 className="text-4xl font-bold text-center text-[#007A8C] mb-16">
            Our Journey of Excellence
          </h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#007A8C] via-[#009AAC] to-orange-500" />
            {[
              {
                year: 2010,
                title: "Foundation",
                description: "Started with a vision to revolutionize education",
                icon: Book,
              },
              {
                year: 2015,
                title: "First Milestone",
                description: "Writen Own Book of Maths",
                icon: Target,
              },
              {
                year: 2019,
                title: "Award",
                description: "Best Mathematics Teacher Award",
                icon: Cpu,
              },
              {
                year: 2025,
                title: "Expansion",
                description: "Opened New centers in the city",
                icon: MapPin,
              },
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
                    <span className="text-[#007A8C] font-bold text-xl">
                      {milestone.year}
                    </span>
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
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Student Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Yashvi Dave",
                role: "9th Standard,Divine Life",
                quote:
                  "As being student of Rajesh Sir, I would like share my review and personal experience of Sir's tuition. I joined Vidhya Education Tuition in 8th grade. After joining the classes of Rajesh Sir, there was a lot of improvement in my maths and science subject, specially in maths there was a lot of improvement till in Class 7th, I got 35 up in maths out of 50 but after studying with Rajesh Sir, I got 45 up marks in Maths. Sir also arranges weekend lectures, parties and weekly test for improvement. He is very strict but have funny behaviour. He take care of all students and give us motivation also. He scold us for our better future. He also entertain us when we are too bored in class. Sir also make sure that every student understand all concepts. My Elder sister, Mahee Dave also completed her maths and science subject for Std 8th to 10th in Rajesh Sir's class. She is currently pursuing Degree in IT sector.I would really like to suggest everyone to join Vidhya Education classes of Rajesh Sir.",
                rating: 5,
              },
              {
                name: "Dev Sompura",
                role: "9th Standard, Divine Life",
                quote:
                "I am Dev Sompura, the 9th std student o Rajesh Sir's Tution Classes, My honest review as of being in touch with sir and the classes has absolutely been ten on ten, sir's friendly approach to the students and guidelines has always outed as a torch in the dark. His way of teaching us is very great. Contacting sir about the doubts on whatsapp always turns out to be helpful as he always solves our problems as soon as he sees it. He is of course very friendly with us but whenever the things come as of discipline, particularness he is always strict about it. He wants us to stay in disciplined and sharp all the time we visit the class. Also being very strict he is very particular about himself. Adding little fun to the class for else teaching in his style. He tries to simplify the  complex issues in science as much as possible so that we can get the demanded results. Working time on time with his process for making study fun is undoubtable. There are so many things that we can learn from him. Thank You.!"
                ,
                rating: 5,
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 transform hover:scale-105 transition-transform"
              >
                <div className="flex gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-white text-lg mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20" />
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
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
          <h2 className="text-4xl font-bold text-center text-[#007A8C] mb-16">
            Our State-of-the-Art Centers
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                area: "Paldi",
                features: [
                "Holistic Care",
                "Digital Classrooms",
                "Quiet Study Areas",
                "Counseling and Support Services",
                "Modern Education Technology"
                ],
                amenities: [
                  "Air Conditioning / Adequate Lighting",
                  "Comfortable Seating and Desks",
                  "Modern Technology : Smartboards",
                  "Study Materials"
                ],
              },
              {
                area: "Makarba",
                features: [
                  "Holistic Care",
                "Digital Classrooms",
                "Quiet Study Areas",
                "Counseling and Support Services",
                "Modern Education Technology"
                ],
                amenities: ["Air Conditioning / Adequate Lighting",
                  "Comfortable Seating and Desks",
                  "Modern Technology : Smartboards",
                  "Study Materials"],
              },
            ].map((center) => (
              <div
                key={center.area}
                className="transform-gpu transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#007A8C] to-[#009AAC] rounded-2xl transform rotate-3 opacity-70" />
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <MapPin className="w-8 h-8 text-[#007A8C]" />
                      <h3 className="text-2xl font-bold text-[#007A8C]">
                        {center.area} Center
                      </h3>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {center.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-3"
                            >
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
                            <li
                              key={amenity}
                              className="flex items-center gap-3"
                            >
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
        .perspective {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
