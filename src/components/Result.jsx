import React, { useState, useEffect } from 'react';
import { Star, GraduationCap, Award, Trophy, Medal, Book, Brain, ChevronRight, Users, Sparkles, ArrowUp, Calendar, Target, Puzzle, Layout, School, ChevronLeft } from 'lucide-react';

const ResultsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [animate, setAnimate] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const topPerformers = [
    {
      name: "Priya Sharma",
      photoUrl: "https://res.cloudinary.com/drl7llkoc/image/upload/v1738507440/Profile_photo_algkf8.jpg",
      school: "Delhi Public School",
      standard: "10th",
      score: 98.5,
      year: "2023",
      rank: 1,
      achievements: ["District Topper", "Math Olympiad Gold"],
      subjects: { maths: 80, science: 98, english: 97 }
    },
    {
      name: "Rahul Patel",
      photoUrl: "https://res.cloudinary.com/drl7llkoc/image/upload/v1737003489/atwoje89b9tx00geclh0.jpg",
      school: "St. Xavier's School",
      standard: "10th",
      score: 97.8,
      year: "2023",
      rank: 2,
      achievements: ["School Topper", "Science Fair Winner"],
      subjects: { maths: 98, science: 99, english: 96 }
    },
    {
      name: "Meera Singh",
      photoUrl: "/api/placeholder/300/300",
      school: "Modern School",
      standard: "10th",
      score: 97.5,
      year: "2023",
      rank: 3,
      achievements: ["Mathematics Champion", "Coding Expert"],
      subjects: { maths: 97, science: 98, english: 98 }
    },
    {
      name: "Arun Kumar",
      photoUrl: "/api/placeholder/300/300",
      school: "City Montessori",
      standard: "10th",
      score: 96.8,
      year: "2023",
      rank: 4,
      achievements: ["Science Olympiad Gold", "Debate Champion"],
      subjects: { maths: 95, science: 97, english: 98 }
    },
    {
      name: "Zara Syed",
      photoUrl: "/api/placeholder/300/300",
      school: "International School",
      standard: "10th",
      score: 96.5,
      year: "2023",
      rank: 5,
      achievements: ["Literary Award", "Quiz Champion"],
      subjects: { maths: 94, science: 96, english: 99 }
    },
    {
      name: "Karthik Raj",
      photoUrl: "/api/placeholder/300/300",
      school: "Kendriya Vidyalaya",
      standard: "10th",
      score: 96.2,
      year: "2023",
      rank: 6,
      achievements: ["Computer Science Wizard", "Innovation Award"],
      subjects: { maths: 96, science: 97, english: 95 }
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(topPerformers.length / itemsPerPage);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentSlideData = () => {
    const startIndex = currentSlide * itemsPerPage;
    return topPerformers.slice(startIndex, startIndex + itemsPerPage);
  };
  const learningPaths = [
    {
      title: "Science Excellence",
      icon: Brain,
      color: "bg-purple-500",
      features: ["Advanced Physics Lab", "Chemistry Practicals", "Biology Research"],
      stats: { students: 450, success: "95%" }
    },
    {
      title: "Mathematics Master",
      icon: Puzzle,
      color: "bg-blue-500",
      features: ["Problem Solving", "Competitive Math", "Logical Reasoning"],
      stats: { students: 380, success: "92%" }
    },
    {
      title: "Language Arts",
      icon: Book,
      color: "bg-green-500",
      features: ["Creative Writing", "Literature Analysis", "Public Speaking"],
      stats: { students: 320, success: "94%" }
    }
  ];
  const stats = {
    totalStudents: 3000,
    successRate: 98,
    averageScore: 85.5,
    topperScore: 98.5,
    districtsToppers: 50,
    yearsOfExperience: 15
  };

  const achievements = [
    {
      year: "2023",
      highlights: [
        "100% Success Rate in Board Exams",
        "15 District Toppers",
        "State Level Recognition"
      ]
    },
    {
      year: "2022",
      highlights: [
        "98% Success Rate",
        "12 District Toppers",
        "Best Coaching Award"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Anjali Mehta",
      batch: "2023",
      text: "Rajesh Sir's teaching methodology and personal attention helped me achieve my dream score. The practice sessions were invaluable.",
      rating: 5,
      photo: "https://res.cloudinary.com/drl7llkoc/image/upload/v1738507440/Profile_photo_algkf8.jpg"
    },
    {
      name: "Raj Kumar",
      batch: "2023",
      text: "The systematic approach to problem-solving and regular tests helped me improve consistently. Forever grateful for the guidance.",
      rating: 5,
      photo: "/api/placeholder/100/100"
    },
    {
      name: "Priya Shah",
      batch: "2022",
      text: "The quality of education and dedication of teachers is unmatched. Proud to be a student of Vidhya Education.",
      rating: 5,
      photo: "/api/placeholder/100/100"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-[#007A8C] overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated Background Patterns */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/20"
                style={{
                  width: `${Math.random() * 300 + 50}px`,
                  height: `${Math.random() * 300 + 50}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-64">
          <div className={`transform transition-all duration-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              Shaping <span className="text-[#FFA500]">Future</span><br />
              Leaders
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-12">
              Experience excellence in education with our outstanding results and dedicated teaching methodology
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { icon: Users, value: stats.totalStudents, label: "Students Taught" },
                { icon: Trophy, value: stats.successRate, label: "Success Rate" },
                { icon: Star, value: stats.districtsToppers, label: "District Toppers" },
                { icon: Award, value: stats.yearsOfExperience, label: "Years Experience" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-md rounded-xl p-6 transform transition-all duration-500 hover:scale-105 ${
                    animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-8 h-8 text-[#FFA500] mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}+</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowUp className="w-6 h-6 text-white/80" />
        </div>
      </div>

       {/* Main Content */}
         {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-48 relative z-10 pb-20">
        {/* Top Performers Section with Slider */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentSlideData().map((student, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 ${
                  animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative w-full h-48">
                  <div className="absolute inset-0">
                    <img
                      src={student.photoUrl}
                      alt={student.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center top' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="absolute top-4 right-4 bg-[#FFA500] text-white px-3 py-1 rounded-full font-bold">
                    Rank #{student.rank}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{student.name}</h3>
                    <p className="text-sm opacity-90">{student.school}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <School size={16} />
                    <span>Class {student.standard}</span>
                    <span>•</span>
                    <span>{student.year}</span>
                  </div>

                  <div className="space-y-3">
                    {Object.entries(student.subjects).map(([subject, score]) => (
                      <div key={subject} className="space-y-1">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600 capitalize">{subject}</span>
                          <span className="font-semibold">{score}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#007A8C] rounded-full transition-all duration-500"
                            style={{ width: `${score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {student.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="bg-[#007A8C]/10 text-[#007A8C] text-sm px-3 py-1 rounded-full"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrevSlide}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'bg-[#007A8C] w-4' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNextSlide}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              disabled={currentSlide === totalPages - 1}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
            {/* New Learning Pathways Section (Replacing Timeline) */}
            <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Layout className="text-[#007A8C]" />
            Learning Pathways
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 ${
                  animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`${path.color} p-6 text-white`}>
                  <path.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                  <div className="flex gap-4 text-white/90">
                    <div>
                      <div className="text-2xl font-bold">{path.stats.students}</div>
                      <div className="text-sm">Students</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{path.stats.success}</div>
                      <div className="text-sm">Success Rate</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {path.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-gray-50 hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Star className="text-[#FFA500]" />
            Student Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl ${
                  animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">Batch {testimonial.batch}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#FFA500] text-[#FFA500]"
                    />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#007A8C] rounded-xl shadow-lg p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Success Story</h2>
            <p className="text-white/90 mb-8">
              Take the first step towards academic excellence. Contact us to learn more about our programs and admission process.
            </p>
            <div className="inline-flex gap-4">
              <button className="bg-white text-[#007A8C] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFA500] hover:text-white transition-colors">
                Contact Us
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#007A8C] transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default ResultsPage;