import { motion } from 'framer-motion';
import { useState } from 'react';

const Portal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'student' | 'faculty' | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
    role: 'student' as 'student' | 'faculty'
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication
    setIsLoggedIn(true);
    setUserRole(loginForm.role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setLoginForm({ username: '', password: '', role: 'student' });
  };

  return (
    <div className="min-h-screen bg-neutral">
      {/* Banner Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/campus-banner.svg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm" />
        </div>
        <div className="relative container h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold">Student & Faculty Portal</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Your Gateway to Academic Excellence
            </p>
          </motion.div>
        </div>
      </section>

      {!isLoggedIn ? (
        /* Login Section */
        <section className="container py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto bg-white rounded-2xl shadow-soft p-8"
          >
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Login</h2>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  id="username"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Role</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="student"
                      checked={loginForm.role === 'student'}
                      onChange={(e) => setLoginForm({ ...loginForm, role: e.target.value as 'student' | 'faculty' })}
                      className="mr-2"
                    />
                    Student
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="faculty"
                      checked={loginForm.role === 'faculty'}
                      onChange={(e) => setLoginForm({ ...loginForm, role: e.target.value as 'student' | 'faculty' })}
                      className="mr-2"
                    />
                    Faculty
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Login
              </button>
              <div className="text-center space-y-2">
                <a href="#" className="text-secondary hover:text-primary transition-colors">Forgot Password?</a>
                <p className="text-gray-600">Need help? Check our <a href="#" className="text-secondary hover:text-primary transition-colors">FAQ</a></p>
              </div>
            </form>
          </motion.div>
        </section>
      ) : (
        /* Dashboard Section */
        <div>
          {/* Navigation */}
          <nav className="bg-white shadow-md py-4 sticky top-0 z-40 backdrop-blur-md bg-white/80">
            <div className="container flex justify-between items-center">
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('resources')}
                  className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'resources' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
                >
                  E-Learning
                </button>
                <button
                  onClick={() => setActiveTab('forum')}
                  className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'forum' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
                >
                  Discussion Forum
                </button>
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Logout
              </button>
            </div>
          </nav>

          {/* Dashboard Content */}
          <div className="container py-12">
            {activeTab === 'dashboard' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {userRole === 'student' ? (
                  /* Student Dashboard */
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Academic Records */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
                    >
                      <h3 className="text-2xl font-bold text-primary">Academic Records</h3>
                      <div className="space-y-2">
                        <p className="text-gray-600">Current Semester: 4th</p>
                        <p className="text-gray-600">CGPA: 3.8</p>
                        <p className="text-gray-600">Attendance: 85%</p>
                      </div>
                      <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                        View Details →
                      </a>
                    </motion.div>

                    {/* Class Schedule */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
                    >
                      <h3 className="text-2xl font-bold text-primary">Class Schedule</h3>
                      <div className="space-y-2">
                        <p className="text-gray-600">Next Class: Mathematics</p>
                        <p className="text-gray-600">Time: 10:00 AM</p>
                        <p className="text-gray-600">Room: 201</p>
                      </div>
                      <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                        Full Schedule →
                      </a>
                    </motion.div>

                    {/* Assignments */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
                    >
                      <h3 className="text-2xl font-bold text-primary">Assignments</h3>
                      <div className="space-y-2">
                        <p className="text-gray-600">Pending: 2</p>
                        <p className="text-gray-600">Submitted: 5</p>
                        <p className="text-gray-600">Next Due: Physics Lab (2 days)</p>
                      </div>
                      <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                        View Assignments →
                      </a>
                    </motion.div>
                  </div>
                ) : (
                  /* Faculty Dashboard */
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Class Management */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
                    >
                      <h3 className="text-2xl font-bold text-primary">Class Management</h3>
                      <div className="space-y-2">
                        <p className="text-gray-600">Today's Classes: 3</p>
                        <p className="text-gray-600">Students: 120</p>
                        <p className="text-gray-600">Next Class: 10:00 AM</p>
                      </div>
                      <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                        Manage Classes →
                      </a>
                    </motion.div>

                    {/* Assignment Tracking */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
                    >
                      <h3 className="text-2xl font-bold text-primary">Assignment Tracking</h3>
                      <div className="space-y-2">
                        <p className="text-gray-600">Pending Review: 15</p>
                        <p className="text-gray-600">Graded: 45</p>
                        <p className="text-gray-600">Active Assignments: 3</p>
                      </div>
                      <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                        Grade Assignments →
                      </a>
                    </motion.div>

                    {/* Student Performance */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
                    >
                      <h3 className="text-2xl font-bold text-primary">Student Performance</h3>
                      <div className="space-y-2">
                        <p className="text-gray-600">Class Average: 78%</p>
                        <p className="text-gray-600">Attendance Rate: 85%</p>
                        <p className="text-gray-600">Top Performer: John Doe</p>
                      </div>
                      <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                        View Analytics →
                      </a>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'resources' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12"
              >
                <div className="text-center space-y-4">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">E-Learning Resources</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Access study materials, recorded lectures, and online resources
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Study Materials */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
                  >
                    <h3 className="text-2xl font-bold text-primary">Study Materials</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>Course Notes</li>
                      <li>Presentations</li>
                      <li>E-Books</li>
                    </ul>
                    <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                      Browse Materials →
                    </a>
                  </motion.div>

                  {/* Recorded Lectures */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
                  >
                    <h3 className="text-2xl font-bold text-primary">Recorded Lectures</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>Video Lectures</li>
                      <li>Live Sessions</li>
                      <li>Tutorial Videos</li>
                    </ul>
                    <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                      Watch Lectures →
                    </a>
                  </motion.div>

                  {/* Online Resources */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
                  >
                    <h3 className="text-2xl font-bold text-primary">Online Resources</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>Research Papers</li>
                      <li>External Links</li>
                      <li>Educational Websites</li>
                    </ul>
                    <a href="#" className="text-secondary hover:text-primary transition-colors inline-block mt-4">
                      Explore Resources →
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'forum' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12"
              >
                <div className="text-center space-y-4">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Discussion Forum</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Connect with peers and faculty to discuss academic topics
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-soft p-8">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold text-primary">Recent Discussions</h3>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                      New Topic
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Discussion Thread */}
                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-gray-800">Understanding Quantum Physics</h4>
                        <span className="text-sm text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-gray-600 mb-4">I'm having trouble understanding the concept of quantum entanglement. Can someone explain?</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">Posted by: John Doe</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Physics</span>
                        </div>
                        <div className="text-sm text-gray-500">12 replies</div>
                      </div>
                    </div>

                    {/* Discussion Thread */}
                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-gray-800">Literature Analysis Techniques</h4>
                        <span className="text-sm text-gray-500">5 days ago</span>
                      </div>
                      <p className="text-gray-600 mb-4">What are some effective techniques for analyzing poetry?</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">Posted by: Jane Smith</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Literature</span>
                        </div>
                        <div className="text-sm text-gray-500">8 replies</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <a href="#" className="text-secondary hover:text-primary transition-colors">
                      View All Discussions →
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portal;