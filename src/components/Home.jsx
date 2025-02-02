import React, { useState, useEffect } from 'react';
import { Book, GraduationCap, MapPin, UserCheck, Clock, Star, Award, Brain, Target, Users, Calendar } from 'lucide-react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const subjects = [
    "Mathematics", "Science", "Social Science", 
    "English", "Gujarati", "Sanskrit", "Hindi"
  ];

  const gradeLevels = ["7th", "8th", "9th", "10th"];

  const testimonials = [
    { name: "Parent", text: "Outstanding results for my child!" },
    { name: "Student", text: "Concepts become so easy to understand" },
    { name: "Parent", text: "Best coaching institute in the area" }
  ];

  const teacherAchievements = [
    { icon: Users, text: "3000+ Students Mentored" },
    { icon: Calendar, text: "15+ Years Experience" },
    { icon: Target, text: "98% Success Rate" },
  ];

  const features = [
    { title: "Small Batch Sizes", description: "Personalized attention with limited students per batch" },
    { title: "Daily Practice", description: "Regular worksheets and practice sessions" },
    { title: "Regular Tests", description: "Weekly assessments to track progress" },
    { title: "Doubt Sessions", description: "Dedicated time for clearing doubts" }
  ];


  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Animated Hero Section */}
      <div className="relative bg-gradient-to-r from-[#00ACC1] to-[#007A8C] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20"></div>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              <Book className="w-8 h-8 opacity-20" />
            </div>
          ))}
        </div>
        <div className={`container mx-auto px-4 py-24 relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 animate-pulse">VIDHYA EDUCATION</h1>
            <p className="text-2xl mb-8 opacity-90">Nurturing Minds, Building Futures</p>
            <div className="flex items-center justify-center space-x-6">
              <MapPin className="w-8 h-8 animate-bounce" />
              <span className="text-xl">Paldi & Makarba Area</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: UserCheck, count: "3000+", label: "Students Taught", color: "from-[#00ACC1] to-[#007A8C]" },
              { icon: Book, count: "7", label: "Subjects Offered", color: "from-[#FF9800] to-[#E65100]" },
              { icon: GraduationCap, count: "4", label: "Grade Levels", color: "from-[#00ACC1] to-[#007A8C]" }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-8 rounded-xl bg-gradient-to-r ${stat.color} text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              >
                <stat.icon className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                <h3 className="text-4xl font-bold mb-2">{stat.count}</h3>
                <p className="text-xl">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* Enhanced Teacher Section */}
       <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#00ACC1] mb-4">Meet Our Expert Teacher</h2>
            <p className="text-xl text-gray-600">Learn from the best in academics</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Teacher Photo and Quick Info */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-[#00ACC1] transform rotate-6 rounded-2xl"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                  <div className="aspect-w-4 aspect-h-5 mb-6">
                    <div className="w-full h-[600px] bg-[url('https://res.cloudinary.com/drl7llkoc/image/upload/v1738507440/Profile_photo_algkf8.jpg')] rounded-xl bg-cover bg-center"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-[#00ACC1] mb-2">Rajesh Sir</h3>
                    <p className="text-gray-600 mb-4">Lead Academic Director</p>
                    <div className="flex justify-center space-x-4">
                      {['M.Sc.', 'Teaching Expert'].map((credential) => (
                        <span key={credential} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                          {credential}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
     {/* Achievement Cards */}
     <div className="grid grid-cols-2 gap-4">
                {teacherAchievements.map((achievement, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <achievement.icon className="w-8 h-8 text-[#FF9800] mb-4" />
                    <p className="text-gray-800 font-medium">{achievement.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Teacher Details and Subjects */}
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h4 className="text-2xl font-bold text-[#00ACC1] mb-6">Teaching Philosophy</h4>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  With over 15 years of teaching experience, Rajesh Sir brings a unique blend of traditional and modern teaching methods. His approach focuses on building strong fundamentals while making learning engaging and enjoyable for students.
                </p>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#00ACC1] mb-4">Expertise Areas</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {subjects.map((subject, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg hover:bg-[#00ACC1] hover:text-white transition-all group">
                        <Book className="w-6 h-6 group-hover:animate-bounce" />
                        <span className="font-medium">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Teaching Features */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-[#00ACC1]">Teaching Features</h4>
                <div className="grid grid-cols-1 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <h5 className="text-xl font-bold text-[#FF9800] mb-2">{feature.title}</h5>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Subjects Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#00ACC1] mb-4">Our Comprehensive Curriculum</h2>
            <p className="text-xl text-gray-600">Expert guidance in all major subjects</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div 
                key={subject}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ACC1] to-[#007A8C] rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:-translate-y-2 transition-transform">
                  <div className="flex items-center justify-between mb-6">
                    <Book className="w-12 h-12 text-[#FF9800] group-hover:animate-bounce" />
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                      All Grades
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{subject}</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#FF9800]" />
                      <span>Comprehensive Study Material</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#FF9800]" />
                      <span>Regular Practice Tests</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#FF9800]" />
                      <span>Doubt Clearing Sessions</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add a Teaching Methodology Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#00ACC1] mb-4">Our Teaching Methodology</h2>
            <p className="text-xl text-gray-600">What makes our approach unique</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Conceptual Learning",
                description: "Focus on understanding core concepts rather than memorization"
              },
              {
                icon: Users,
                title: "Interactive Sessions",
                description: "Engaging discussions and participatory learning environment"
              },
              {
                icon: Target,
                title: "Goal-Oriented",
                description: "Structured approach to achieve academic excellence"
              },
              {
                icon: Clock,
                title: "Regular Assessment",
                description: "Continuous evaluation and performance tracking"
              }
            ].map((method, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#00ACC1] rounded-full flex items-center justify-center mb-6">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Photo Gallery */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#00ACC1] mb-16">Our Academy Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={`/api/placeholder/${400}/${300}`}
                    alt={`Academy photo ${i}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold">Learning Moments</h3>
                    <p className="text-sm opacity-90">Capturing the joy of education</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="bg-[#00ACC1] text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What People Say</h2>
          <div className="relative max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transform transition-all duration-500 ${
                  index === activeTestimonial 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-full opacity-0'
                }`}
              >
                <div className="text-center">
                  <p className="text-2xl italic mb-6">"{testimonial.text}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Grade Levels Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#00ACC1] mb-16">Grade Levels</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {gradeLevels.map((grade) => (
              <div 
                key={grade}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ACC1] to-[#007A8C] rounded-xl transform rotate-6 group-hover:rotate-0 transition-transform"></div>
                <div className="relative p-8 bg-white rounded-xl text-center transform group-hover:-translate-y-2 transition-all">
                  <GraduationCap className="w-12 h-12 mx-auto mb-4 text-[#FF9800] group-hover:animate-bounce" />
                  <h3 className="text-2xl font-bold text-[#00ACC1]">{grade}</h3>
                  <p className="mt-2 text-gray-600">Standard</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      {/* <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#00ACC1] mb-16">Visit Our Branches</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {['Paldi', 'Makarba'].map((branch) => (
              <div 
                key={branch}
                className="relative group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF9800] opacity-20 rounded-full transform translate-x-8 -translate-y-8"></div>
                <MapPin className="w-12 h-12 text-[#FF9800] mb-6" />
                <h3 className="text-2xl font-bold mb-4">{branch} Branch</h3>
                <p className="text-gray-600 mb-6">Providing quality education in the heart of {branch}</p>
                <button className="bg-gradient-to-r from-[#00ACC1] to-[#007A8C] text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;