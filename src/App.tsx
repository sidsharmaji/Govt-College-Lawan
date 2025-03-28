import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/admissions'
import Events from './pages/events'
import Portal from './pages/Portal'

function App() {
  return (
    <Router basename="/govt-college-lawan">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/events" element={<Events />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
    </Router>
  )
}

const Home = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-white/80 shadow-lg z-50 border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <img src="/logo.svg" alt="College Logo" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl font-display font-bold text-primary">Govt College</h1>
              <p className="text-sm text-gray-600">Lawan</p>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <div className={`lg:flex items-center space-x-8 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">About</Link>
            <Link to="/academics" className="text-gray-700 hover:text-primary transition-colors">Academics</Link>
            <Link to="/admissions" className="text-gray-700 hover:text-primary transition-colors">Admissions</Link>
            <Link to="/events" className="text-gray-700 hover:text-primary transition-colors">Events</Link>
            <Link to="/portal" className="text-gray-700 hover:text-primary transition-colors">Portal</Link>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        style={{ scale, opacity }}
        className="relative min-h-screen flex items-center justify-center py-32 px-4 bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 animate-float [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] animate-pulse-slow" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container relative text-center text-white space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Welcome to the Future of
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent animate-text">
              Education
            </span>
          </h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-neutral/90">
            Empowering minds with innovative learning experiences and cutting-edge facilities
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/about" className="btn-primary text-lg">
              Discover More
            </Link>
            <Link to="/contact" className="btn-secondary text-lg">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Our Legacy of Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover our rich history of academic excellence and commitment to nurturing future leaders.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl glass-effect shadow-soft hover:shadow-xl transition-all"
            >
              <div className="text-4xl text-primary mb-4">🏛️</div>
              <h3 className="text-2xl font-bold mb-2">Rich Heritage</h3>
              <p className="text-gray-600">Founded in 1960, we have been shaping minds and futures for over six decades.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl glass-effect shadow-soft hover:shadow-xl transition-all"
            >
              <div className="text-4xl text-primary mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-2">Academic Excellence</h3>
              <p className="text-gray-600">Consistently ranked among the top institutions with outstanding academic achievements.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl glass-effect shadow-soft hover:shadow-xl transition-all"
            >
              <div className="text-4xl text-primary mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-2">Innovation Hub</h3>
              <p className="text-gray-600">Embracing modern technology and innovative teaching methodologies.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="section bg-neutral">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore our diverse range of programs designed to prepare you for success.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all backdrop-blur-lg"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Science Stream</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center"><span className="text-secondary mr-2">→</span> Physics</li>
                <li className="flex items-center"><span className="text-secondary mr-2">→</span> Chemistry</li>
                <li className="flex items-center"><span className="text-secondary mr-2">→</span> Biology</li>
                <li className="flex items-center"><span className="text-secondary mr-2">→</span> Mathematics</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all backdrop-blur-lg"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Arts Stream</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center"><span className="text-secondary mr-2">→</span> Literature</li>
                <li className="flex items-center"><span className="text-secondary mr-2">→</span> History</li>
                <li className="flex items-center"><span className="text-secondary mr-2">→</span> Economics</li>
                <li className="flex items-center"><span className="text-secondary mr-2">→</span> Geography</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Have questions? We're here to help and guide you through your journey.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Contact Information</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="flex items-center"><span className="text-primary mr-2">📍</span> 123 College Road, Lawan</p>
                  <p className="flex items-center"><span className="text-primary mr-2">📞</span> +1234567890</p>
                  <p className="flex items-center"><span className="text-primary mr-2">✉️</span> info@govtcollegelawan.edu</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:text-secondary transition-colors">Facebook</a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">Twitter</a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors">Instagram</a>
                </div>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full text-center">Send Message</button>
            </motion.form>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default App
