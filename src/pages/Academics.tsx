import { motion } from 'framer-motion';
import { useState } from 'react';

const Academics = () => {

  const [activeTab, setActiveTab] = useState('courses');
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <div className="min-h-screen bg-neutral">
      {/* Banner Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/academics-banner.svg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm" />
        </div>
        <div className="relative container h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold">Academics</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Fostering Excellence in Education and Research
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-40 backdrop-blur-md bg-white/80">
        <div className="container flex flex-wrap justify-center gap-4 md:gap-8">
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'courses' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
          >
            Courses & Syllabus
          </button>
          <button
            onClick={() => setActiveTab('departments')}
            className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'departments' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
          >
            Departments
          </button>
          <button
            onClick={() => setActiveTab('faculty')}
            className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'faculty' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
          >
            Faculty
          </button>
          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'calendar' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
          >
            Academic Calendar
          </button>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="container py-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses, faculty, or departments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container py-12">
        {/* Courses & Syllabus Section */}
        {activeTab === 'courses' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Our Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our diverse range of academic programs designed to prepare you for success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Undergraduate Programs */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
              >
                <h3 className="text-2xl font-bold text-primary">Undergraduate Programs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Bachelor of Science (B.Sc)</li>
                  <li>Bachelor of Arts (B.A)</li>
                  <li>Bachelor of Commerce (B.Com)</li>
                </ul>
                <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                  View Details →
                </a>
              </motion.div>

              {/* Postgraduate Programs */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
              >
                <h3 className="text-2xl font-bold text-primary">Postgraduate Programs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Master of Science (M.Sc)</li>
                  <li>Master of Arts (M.A)</li>
                  <li>Master of Commerce (M.Com)</li>
                </ul>
                <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                  View Details →
                </a>
              </motion.div>

              {/* Diploma Programs */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
              >
                <h3 className="text-2xl font-bold text-primary">Diploma Programs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Diploma in Computer Applications</li>
                  <li>Diploma in Business Management</li>
                  <li>Diploma in Digital Marketing</li>
                </ul>
                <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                  View Details →
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Departments Section */}
        {activeTab === 'departments' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Our Departments</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our academic departments and their specialized areas of study
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Science Department */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
              >
                <h3 className="text-2xl font-bold text-primary">Department of Science</h3>
                <p className="text-gray-600">
                  Offering cutting-edge programs in Physics, Chemistry, and Biology with state-of-the-art laboratory facilities.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Physics</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Chemistry</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Biology</span>
                </div>
                <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                  Learn More →
                </a>
              </motion.div>

              {/* Arts Department */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
              >
                <h3 className="text-2xl font-bold text-primary">Department of Arts</h3>
                <p className="text-gray-600">
                  Fostering creativity and critical thinking through programs in Literature, History, and Fine Arts.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Literature</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">History</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Fine Arts</span>
                </div>
                <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                  Learn More →
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Faculty Section */}
        {activeTab === 'faculty' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Our Faculty</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet our distinguished faculty members and researchers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Faculty Cards */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 text-center space-y-4"
              >
                <img src="/faculty/sarah.svg" alt="Dr. Sarah Johnson" className="w-32 h-32 rounded-full mx-auto" />
                <div>
                  <h3 className="text-xl font-bold text-primary">Dr. Sarah Johnson</h3>
                  <p className="text-gray-600">Head of Science Department</p>
                  <p className="text-sm text-gray-500">Ph.D. in Physics</p>
                </div>
                <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                  View Profile →
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 text-center space-y-4"
              >
                <img src="/faculty/michael.svg" alt="Prof. Michael Chen" className="w-32 h-32 rounded-full mx-auto" />
                <div>
                  <h3 className="text-xl font-bold text-primary">Prof. Michael Chen</h3>
                  <p className="text-gray-600">Senior Mathematics Faculty</p>
                  <p className="text-sm text-gray-500">M.Sc. in Mathematics</p>
                </div>
                <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                  View Profile →
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 text-center space-y-4"
              >
                <img src="/faculty/emily.svg" alt="Dr. Emily Brown" className="w-32 h-32 rounded-full mx-auto" />
                <div>
                  <h3 className="text-xl font-bold text-primary">Dr. Emily Brown</h3>
                  <p className="text-gray-600">Head of Arts Department</p>
                  <p className="text-sm text-gray-500">Ph.D. in Literature</p>
                </div>
                <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                  View Profile →
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Academic Calendar Section */}
        {activeTab === 'calendar' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Academic Calendar</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Important dates and events for the academic year
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-soft p-8">
              <div className="space-y-8">
                {/* Semester Dates */}
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Semester Schedule</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-800">Fall Semester 2023</h4>
                      <p className="text-gray-600">Classes Begin: August 15, 2023</p>
                      <p className="text-gray-600">Mid-term Exams: October 10-15, 2023</p>
                      <p className="text-gray-600">Final Exams: December 5-15, 2023</p>
                      <p className="text-gray-600">Semester Ends: December 20, 2023</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-800">Spring Semester 2024</h4>
                      <p className="text-gray-600">Classes Begin: January 10, 2024</p>
                      <p className="text-gray-600">Mid-term Exams: March 5-10, 2024</p>
                      <p className="text-gray-600">Final Exams: May 1-10, 2024</p>
                      <p className="text-gray-600">Semester Ends: May 15, 2024</p>
                    </div>
                  </div>
                </div>
                
                {/* Important Dates */}
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Important Dates</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 bg-primary/5 rounded-lg">
                      <div className="bg-primary text-white p-3 rounded-full text-xl font-bold">15</div>
                      <div>
                        <h4 className="font-bold text-gray-800">Orientation Day</h4>
                        <p className="text-gray-600">August 12, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-primary/5 rounded-lg">
                      <div className="bg-primary text-white p-3 rounded-full text-xl font-bold">22</div>
                      <div>
                        <h4 className="font-bold text-gray-800">Annual Sports Day</h4>
                        <p className="text-gray-600">February 22, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-primary/5 rounded-lg">
                      <div className="bg-primary text-white p-3 rounded-full text-xl font-bold">10</div>
                      <div>
                        <h4 className="font-bold text-gray-800">Graduation Ceremony</h4>
                        <p className="text-gray-600">May 25, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Academics;