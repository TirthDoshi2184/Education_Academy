import React, { useState, useEffect } from 'react';
import { Camera, Film, GraduationCap, Book, Users, Trophy } from 'lucide-react';



const Gallery = () => {
  const FloatingIcon = ({ icon: Icon, delay, position }) => (
    <div className={`absolute ${position} animate-floating opacity-20`} style={{ animationDelay: delay }}>
      <Icon size={32} className="text-white" />
    </div>
  );
  const [activeTab, setActiveTab] = useState('photos');
  const [videos, setVideos] = useState([]);
  const [counter, setCounter] = useState(0);

  // Cloudinary photos - replace with your actual Cloudinary URLs
  const photos = [
    {
      id: 1,
      url: "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567/students-classroom.jpg",
      alt: "Interactive Learning Session"
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567/graduation.jpg",
      alt: "Graduation Ceremony"
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567/lab-work.jpg",
      alt: "Advanced Lab Work"
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567/group-project.jpg",
      alt: "Collaborative Projects"
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567/awards.jpg",
      alt: "Achievement Ceremony"
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567/campus.jpg",
      alt: "Campus Life"
    }
  ];

  useEffect(() => {
    // Simulating fetching videos from local uploads folder
    const localVideos = [
      {
        id: 1,
        url: "/uploads/success-stories.mp4",
        thumbnail: "/uploads/thumbnails/success-stories.jpg",
        title: "Student Success Stories 2024"
      },
      {
        id: 2,
        url: "/uploads/campus-tour.mp4",
        thumbnail: "/uploads/thumbnails/campus-tour.jpg",
        title: "Virtual Campus Tour"
      },
      {
        id: 3,
        url: "/uploads/testimonials.mp4",
        thumbnail: "/uploads/thumbnails/testimonials.jpg",
        title: "Alumni Testimonials"
      },
      {
        id: 4,
        url: "/uploads/highlights.mp4",
        thumbnail: "/uploads/thumbnails/highlights.jpg",
        title: "Academic Highlights"
      }
    ];
    setVideos(localVideos);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => (prev < 3000 ? prev + 30 : prev));
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Animated Hero Section */}
      <div className="relative bg-[#00C2FF] overflow-hidden h-[500px]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full animate-wave opacity-10">
            <div className="absolute inset-0 bg-white rotate-45 transform scale-150"></div>
          </div>
        </div>

        {/* Floating Icons */}
        <FloatingIcon icon={GraduationCap} delay="0s" position="top-20 left-1/4" />
        <FloatingIcon icon={Book} delay="1s" position="top-40 right-1/4" />
        <FloatingIcon icon={Users} delay="2s" position="bottom-20 left-1/3" />
        <FloatingIcon icon={Trophy} delay="3s" position="bottom-40 right-1/3" />

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-6xl font-bold text-white animate-slideUp mb-6">
                Our Success
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                  Stories
                </span>
              </h1>
            </div>
            
            {/* Animated Counter */}
            <div className="mb-8 flex items-baseline space-x-2">
              <span className="text-4xl font-bold text-white animate-pulse">
                {counter.toLocaleString()}+
              </span>
              <span className="text-xl text-white/90">Successful Graduates</span>
            </div>

            {/* Animated Cards */}
            <div className="flex space-x-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg animate-fadeIn">
                <Camera className="text-white mb-2" />
                <span className="text-white">Gallery</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <Film className="text-white mb-2" />
                <span className="text-white">Videos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full" viewBox="0 0 1440 120">
            <path 
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0% { transform: translateY(0) rotate(45deg); }
          100% { transform: translateY(-50%) rotate(45deg); }
        }
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes slideUp {
          0% { transform: translateY(100%); }
          100% { transform: translateY(0); }
        }
        .animate-wave {
          animation: wave 15s linear infinite;
        }
        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center space-x-6 mb-12">
          <button
            onClick={() => setActiveTab('photos')}
            className={`px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
              activeTab === 'photos'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
              activeTab === 'videos'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Videos
          </button>
        </div>

        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo) => (
              <div key={photo.id} className="group relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-lg font-medium">{photo.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <video
                    src={video.url}
                    poster={video.thumbnail}
                    className="w-full h-64 object-cover"
                    controls
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;