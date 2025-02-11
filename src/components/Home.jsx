import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import {
  Book,
  GraduationCap,
  MapPin,
  UserCheck,
  Clock,
  Brain,
  Target,
  Users,
  Calendar,
  Lightbulb,
  CheckCircle,
  ChevronDown,
} from "lucide-react"
import { Tilt } from "react-tilt"
import CountUp from "react-countup"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-cube"

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    setIsVisible(true)
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const subjects = [
    { name: "Mathematics", icon: Brain, color: "bg-blue-500" },
    { name: "Science", icon: Lightbulb, color: "bg-green-500" },
    { name: "Social Science", icon: Users, color: "bg-yellow-500" },
    { name: "English", icon: Book, color: "bg-red-500" },
    { name: "Gujarati", icon: Book, color: "bg-purple-500" },
    { name: "Sanskrit", icon: Book, color: "bg-pink-500" },
    { name: "Hindi", icon: Book, color: "bg-indigo-500" },
  ]

  const gradeLevels = ["7th", "8th", "9th", "10th"]

  const testimonials = [
    {
      name: "Priya Patel",
      role: "Parent",
      text: "Vidhya Education has transformed my child's academic performance. The personalized attention and innovative teaching methods have made a significant difference.",
    },
    {
      name: "Rahul Shah",
      role: "Student",
      text: "Thanks to Vidhya Education, complex concepts have become easy to understand. The interactive sessions and practical approach to learning have boosted my confidence.",
    },
    {
      name: "Meera Desai",
      role: "Parent",
      text: "Choosing Vidhya Education was the best decision for my child's education. The dedicated teachers and comprehensive curriculum have ensured excellent results.",
    },
  ]

  const teacherAchievements = [
    { icon: Users, text: "3000+ Students Mentored", color: "bg-blue-100 text-blue-600" },
    { icon: Calendar, text: "15+ Years Experience", color: "bg-green-100 text-green-600" },
    { icon: Target, text: "98% Success Rate", color: "bg-red-100 text-red-600" },
  ]

  const features = [
    { title: "Small Batch Sizes", description: "Personalized attention with limited students per batch", icon: Users },
    { title: "Daily Practice", description: "Regular worksheets and practice sessions", icon: CheckCircle },
    { title: "Regular Tests", description: "Weekly assessments to track progress", icon: Clock },
    { title: "Doubt Sessions", description: "Dedicated time for clearing doubts", icon: Lightbulb },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Animated Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-r from-[#00ACC1] to-[#007A8C] text-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-20"></div>
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ x: 0, y: 0, rotate: 0 }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Book className="w-8 h-8 opacity-20" />
            </motion.div>
          ))}
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFA500]">
                VIDHYA EDUCATION
              </span>
            </h1>
            <p className="text-2xl mb-8 opacity-90">Nurturing Minds, Building Futures</p>
            <motion.div className="flex items-center justify-center space-x-6" whileHover={{ scale: 1.05 }}>
              <MapPin className="w-8 h-8" />
              <span className="text-xl">Paldi & Makarba Area</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-10 h-10 text-white opacity-80" />
        </motion.div>
      </motion.div>

      {/* Animated Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: UserCheck, count: 3000, label: "Students Taught", color: "from-[#00ACC1] to-[#007A8C]" },
              { icon: Book, count: 7, label: "Subjects Offered", color: "from-[#FF9800] to-[#E65100]" },
              { icon: GraduationCap, count: 4, label: "Grade Levels", color: "from-[#4CAF50] to-[#2E7D32]" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Tilt
                  className={`text-center p-8 rounded-xl bg-gradient-to-r ${stat.color} text-white transform transition-all duration-300 hover:shadow-2xl`}
                >
                  <stat.icon className="w-16 h-16 mx-auto mb-4" />
                  <CountUp
                    end={stat.count}
                    duration={2.5}
                    separator=","
                    suffix="+"
                    className="text-4xl font-bold mb-2"
                  />
                  <p className="text-xl">{stat.label}</p>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Teacher Section */}
      <motion.div
        className="py-24 bg-gray-50"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#00ACC1] mb-4">Meet Our Expert Teacher</h2>
            <p className="text-xl text-gray-600">Learn from the best in academics</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Teacher Photo and Quick Info */}
            <div className="space-y-8">
              <Tilt className="relative">
                <div className="absolute inset-0 bg-[#00ACC1] transform rotate-6 rounded-2xl"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                  <div className="aspect-w-4 aspect-h-5 mb-6">
                    <div className="w-full h-[600px] bg-[url('https://res.cloudinary.com/dne8hhrez/image/upload/v1738690123/WhatsApp_Image_2025-02-04_at_22.55.22_3a91c665_uiwcqe.jpg')] rounded-xl bg-cover bg-center"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-[#00ACC1] mb-2">Rajesh Sir</h3>
                    <p className="text-gray-600 mb-4">Lead Academic Director</p>
                    <div className="flex justify-center space-x-4">
                      {["M.Sc.", "Teaching Expert"].map((credential) => (
                        <span key={credential} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                          {credential}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
              {/* Achievement Cards */}
              <motion.div
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 gap-4"
              >
                {teacherAchievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className={`${achievement.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                  >
                    <achievement.icon className="w-8 h-8 mb-4" />
                    <p className="font-medium">{achievement.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Teacher Details and Subjects */}
            <div className="space-y-12">
              <motion.div className="bg-white p-8 rounded-2xl shadow-xl" variants={fadeInUp}>
                <h4 className="text-2xl font-bold text-[#00ACC1] mb-6">Teaching Philosophy</h4>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  With over 15 years of teaching experience, Rajesh Sir brings a unique blend of traditional and modern
                  teaching methods. His approach focuses on building strong fundamentals while making learning engaging
                  and enjoyable for students.
                </p>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#00ACC1] mb-4">Expertise Areas</h4>
                  <motion.div
                    variants={staggerChildren}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 gap-4"
                  >
                    {subjects.map((subject, i) => (
                      <motion.div
                        key={i}
                        className={`flex items-center space-x-3 ${subject.color} p-4 rounded-lg text-white transition-all group`}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                      >
                        <subject.icon className="w-6 h-6 group-hover:animate-bounce" />
                        <span className="font-medium">{subject.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Teaching Features */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-[#00ACC1]">Teaching Features</h4>
                <motion.div
                  variants={staggerChildren}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 gap-4"
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                      variants={fadeInUp}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-[#00ACC1] p-3 rounded-full">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h5 className="text-xl font-bold text-[#00ACC1] mb-2">{feature.title}</h5>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Subjects Section */}
      <motion.div
        className="bg-white py-24"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#00ACC1] mb-4">Our Comprehensive Curriculum</h2>
            <p className="text-xl text-gray-600">Expert guidance in all major subjects</p>
          </div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {subjects.map((subject, index) => (
              <motion.div key={subject.name} variants={fadeInUp}>
                <Tilt className="relative group">
                  <motion.div
                    className={`absolute inset-0 ${subject.color} rounded-2xl`}
                    animate={{ rotate: [0, 3, 0] }}
                    transition={{ duration: 0.5, yoyo: Number.POSITIVE_INFINITY }}
                  ></motion.div>
                  <motion.div
                    className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:-translate-y-2 transition-transform"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <subject.icon
                        className={`w-12 h-12 ${subject.color} text-white p-2 rounded-full group-hover:animate-bounce`}
                      />
                      <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">All Grades</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{subject.name}</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Comprehensive Study Material</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Regular Practice Tests</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Doubt Clearing Sessions</span>
                      </li>
                    </ul>
                  </motion.div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* New Section: Success Stories */}
      <motion.div
        className="bg-gray-50 py-24"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#00ACC1] mb-4">Classrom Photos</h2>
                      </div>

          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="w-full max-w-md mx-auto"
          >
            {[
              {
                image: "https://res.cloudinary.com/drl7llkoc/image/upload/v1738858825/Classes_eiljcz.jpg",
              },
              { image: "https://res.cloudinary.com/drl7llkoc/image/upload/v1739211666/Classrom_photos_cz7jnj.jpg" },
              {
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((story, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-bold text-[#00ACC1] mb-2">{story.name}</h3>
                  <p className="text-gray-600">{story.achievement}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>

      {/* Enhanced Grade Levels Section */}
      <motion.div
        className="bg-white py-20"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#00ACC1] mb-16">Grade Levels</h2>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {gradeLevels.map((grade, index) => (
              <motion.div key={grade} variants={fadeInUp}>
                <Tilt className="relative group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#00ACC1] to-[#007A8C] rounded-xl"
                    animate={{ rotate: [0, 6, 0] }}
                    transition={{ duration: 0.5, yoyo: Number.POSITIVE_INFINITY }}
                  ></motion.div>
                  <motion.div
                    className="relative p-8 bg-white rounded-xl text-center transform group-hover:-translate-y-2 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <GraduationCap className="w-12 h-12 mx-auto mb-4 text-[#00ACC1] group-hover:animate-bounce" />
                    <h3 className="text-2xl font-bold text-[#00ACC1]">{grade}</h3>
                    <p className="mt-2 text-gray-600">Standard</p>
                  </motion.div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Testimonials Carousel */}
      <motion.div
        className="bg-[#00ACC1] text-white py-20"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What People Say</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="text-center max-w-3xl mx-auto">
                  <p className="text-2xl italic mb-6">"{testimonial.text}"</p>
                  <p className="font-semibold">
                    {testimonial.name} - {testimonial.role}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="bg-gray-50 py-20"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#00ACC1] mb-16">Visit Our Branches</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {["Paldi", "Makarba"].map((branch, index) => (
              <motion.div
                key={branch}
                className="relative group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
                variants={fadeInUp}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF9800] opacity-20 rounded-full transform translate-x-8 -translate-y-8"></div>
                <MapPin className="w-12 h-12 text-[#FF9800] mb-6" />
                <h3 className="text-2xl font-bold mb-4">{branch} Branch</h3>
                <p className="text-gray-600 mb-6">Providing quality education in the heart of {branch}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HomePage

