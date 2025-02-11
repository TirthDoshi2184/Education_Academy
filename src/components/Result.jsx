"use client"

import { useState, useEffect } from "react"
import {
  Star,
  Award,
  Trophy,
  Book,
  Brain,
  ChevronRight,
  Users,
  ArrowUp,
  Puzzle,
  Layout,
  School,
  ChevronLeft,
} from "lucide-react"
import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import CountUp from "react-countup"

const ResultsPage = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [animate, setAnimate] = useState(false)
  const [selectedClass, setSelectedClass] = useState("10th")
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setAnimate(true)
  }, [])

  const students = {
    "10th": [
      {
        name: "Khevna",
        photoUrl: "https://res.cloudinary.com/drl7llkoc/image/upload/v1739278261/Khevna_10th_A-one_lhvsdu.jpg",
        school: "A-one School",
        standard: "10th Pre-Board",
        subjects: { maths: 98.75, science: 97.5 },
      },
      {
        name: "Moksh Shah",
        photoUrl: "https://res.cloudinary.com/drl7llkoc/image/upload/v1738858825/Student_2_y98qxj.jpg",
        school: "CN Vidhyalay School",
        standard: "10th Pre-Board",
        subjects: { maths: 95, science: 91.25 },
      },
      {
        name: "Shrey Shah",
        photoUrl: "https://res.cloudinary.com/drl7llkoc/image/upload/c_pad,w_5000,h_5000/v1738858825/Student_3_mk8dmk.jpg",
        school: "Navkar High School",
        standard: "10th Pre-Board",
        subjects: { maths: 97.5, science: 96.25 },
      },
    ],
    "9th": [
      {
        name: "Dev Sompura",
        photoUrl: "https://res.cloudinary.com/drl7llkoc/image/upload/v1739279943/Dev_9th_Divine_Life_xjwzza.jpg",
        school: "Divine Life High School",
        standard: "9th ",
        subjects: { maths: 94, science: 92 },
      },
      {
        name: "Yashvi Dave",
        photoUrl: "https://res.cloudinary.com/drl7llkoc/image/upload/v1739280582/Yashvi_Dave_9th_DivineLife-fotor-20250211185916_nxzlel.png",
        school: "Divine Life High School",
        standard: "9th",
        subjects: { maths: 92, science: 92 },
      },
      {
        name: "Priya Sharma",
        photoUrl: "/placeholder.svg?height=300&width=300",
        school: "St. Xavier's",
        standard: "9th",
        subjects: { maths: 94, science: 95 },
      },
    ],
  }

  const stats = {
    totalStudents: 3000,
    successRate: 98,
    averageScore: 85.5,
    topperScore: 98.5,
    districtsToppers: 50,
    yearsOfExperience: 15,
  }

  const learningPaths = [
    {
      title: "Science Excellence",
      icon: Brain,
      color: "bg-purple-500",
      features: ["Advanced Physics Lab", "Chemistry Practicals", "Biology Research"],
      stats: { students: 450, success: "95%" },
    },
    {
      title: "Mathematics Master",
      icon: Puzzle,
      color: "bg-blue-500",
      features: ["Problem Solving", "Competitive Math", "Logical Reasoning"],
      stats: { students: 380, success: "92%" },
    },
    {
      title: "Language Arts",
      icon: Book,
      color: "bg-green-500",
      features: ["Creative Writing", "Literature Analysis", "Public Speaking"],
      stats: { students: 320, success: "94%" },
    },
  ]

  const testimonials = [
    {
      name: "Anjali Mehta",
      batch: "2023",
      text: "The teaching methodology and personal attention helped me achieve my dream score. The practice sessions were invaluable.",
      rating: 5,
      photo: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Raj Kumar",
      batch: "2023",
      text: "The systematic approach to problem-solving and regular tests helped me improve consistently. Forever grateful for the guidance.",
      rating: 5,
      photo: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Priya Shah",
      batch: "2022",
      text: "The quality of education and dedication of teachers is unmatched. Proud to be a student here.",
      rating: 5,
      photo: "/placeholder.svg?height=100&width=100",
    },
  ]

  const itemsPerPage = 3
  const currentStudents = students[selectedClass]
  const totalPages = Math.ceil(currentStudents.length / itemsPerPage)

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages)
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentSlideData = () => {
    const startIndex = currentSlide * itemsPerPage
    return currentStudents.slice(startIndex, startIndex + itemsPerPage)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden"
      >
        <div className="absolute inset-0">
          {/* Animated Background Patterns */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/20"
                style={{
                  width: `${Math.random() * 300 + 50}px`,
                  height: `${Math.random() * 300 + 50}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-64">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              Shaping <span className="text-yellow-400">Future</span>
              <br />
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
                { icon: Award, value: stats.yearsOfExperience, label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Tilt className="bg-white/10 backdrop-blur-md rounded-xl p-6 transform transition-all duration-500 hover:scale-105">
                    <stat.icon className="w-8 h-8 text-yellow-400 mb-4" />
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      suffix="+"
                      className="text-4xl font-bold text-white mb-2"
                    />
                    <div className="text-white/80">{stat.label}</div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <ArrowUp className="w-6 h-6 text-white/80" />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-48 relative z-10 pb-20">
        {/* Top Performers Section with Class Filter */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Trophy className="text-yellow-500" />
            Top Performers
          </h2>

          <div className="flex justify-center gap-4 mb-8">
            {["9th", "10th"].map((classLevel) => (
              <motion.button
                key={classLevel}
                onClick={() => {
                  setSelectedClass(classLevel)
                  setCurrentSlide(0)
                }}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedClass === classLevel
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Class {classLevel}
              </motion.button>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {getCurrentSlideData().map((student, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                <Tilt className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl">
                  <div className="relative h-64">
                    <img
                      src={student.photoUrl || "/placeholder.svg"}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{student.name}</h3>
                      <p className="text-sm opacity-90">{student.school}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <School size={16} />
                      <span>Class {student.standard}</span>
                    </div>
                    <div className="space-y-3">
                      {Object.entries(student.subjects).map(([subject, score]) => (
                        <div key={subject} className="space-y-1">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600 capitalize">{subject}</span>
                            <span className="font-semibold">{score}%</span>
                          </div>
                          <motion.div
                            className="h-2 bg-gray-100 rounded-full overflow-hidden"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            <motion.div
                              className="h-full bg-blue-600 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${score}%` }}
                              transition={{ duration: 0.5, delay: 0.5 }}
                            />
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-4">
              <motion.button
                onClick={handlePrevSlide}
                className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                disabled={currentSlide === 0}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </motion.button>
              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "bg-blue-600 w-4" : "bg-gray-300"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
              <motion.button
                onClick={handleNextSlide}
                className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                disabled={currentSlide === totalPages - 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Learning Pathways Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Layout className="text-blue-600" />
            Learning Pathways
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Tilt className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl">
                  <div className={`${path.color} p-6 text-white`}>
                    <path.icon className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                    <div className="flex gap-4 text-white/90">
                      <div>
                        <CountUp
                          end={path.stats.students}
                          duration={2.5}
                          separator=","
                          className="text-2xl font-bold"
                        />
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
                        <motion.li
                          key={idx}
                          className="flex items-center gap-2"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.button
                      className="mt-6 w-full bg-gray-50 hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Star className="text-yellow-500" />
            Student Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Tilt className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.photo || "/placeholder.svg"}
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
                      <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-600">{testimonial.text}</p>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Success Story</h2>
            <p className="text-white/90 mb-8">
              Take the first step towards academic excellence. Contact us to learn more about our programs and admission
              process.
            </p>
            <div className="inline-flex gap-4">
              <motion.a
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
              <motion.a
                href="/aboutus"
                className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ResultsPage

