import { motion } from 'framer-motion';
import { useState } from 'react';

const Admissions = () => {
  const [activeSection, setActiveSection] = useState('process');
  const [isFormExpanded, setIsFormExpanded] = useState(false);

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
            <h1 className="text-5xl md:text-6xl font-display font-bold">Admissions</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Your Journey to Academic Excellence Starts Here
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <div className="bg-white shadow-md py-6">
        <div className="container flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setIsFormExpanded(true)}
            className="btn-primary text-lg flex items-center gap-2"
          >
            <span>🎯</span> Apply Now
          </button>
          <a href="#" className="btn-secondary text-lg flex items-center gap-2">
            <span>📥</span> Download Brochure
          </a>
          <a href="#contact" className="btn-outline text-lg flex items-center gap-2">
            <span>📞</span> Contact Admission Office
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-40 backdrop-blur-md bg-white/80">
        <div className="container flex flex-wrap justify-center gap-4 md:gap-8">
          <button
            onClick={() => setActiveSection('process')}
            className={`px-4 py-2 rounded-lg transition-colors ${activeSection === 'process' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
          >
            Admission Process
          </button>
          <button
            onClick={() => setActiveSection('eligibility')}
            className={`px-4 py-2 rounded-lg transition-colors ${activeSection === 'eligibility' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
          >
            Eligibility Criteria
          </button>
          <button
            onClick={() => setActiveSection('application')}
            className={`px-4 py-2 rounded-lg transition-colors ${activeSection === 'application' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
          >
            Online Application
          </button>
          <button
            onClick={() => setActiveSection('faq')}
            className={`px-4 py-2 rounded-lg transition-colors ${activeSection === 'faq' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
          >
            FAQs
          </button>
        </div>
      </nav>

      {/* Application Form Modal */}
      {isFormExpanded && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-primary">Online Application Form</h3>
              <button
                onClick={() => setIsFormExpanded(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <form className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Personal Information</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Academic Details</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <select className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option value="">Select Program</option>
                    <option value="bsc">B.Sc Programs</option>
                    <option value="ba">B.A Programs</option>
                    <option value="msc">M.Sc Programs</option>
                    <option value="ma">M.A Programs</option>
                  </select>
                  <select className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option value="">Select Course</option>
                    <option value="cs">Computer Science</option>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="mathematics">Mathematics</option>
                  </select>
                </div>
                <textarea
                  placeholder="Previous Academic Background"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Documents Upload</h4>
                <div className="space-y-2">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <p className="text-gray-600">Drop your academic certificates here or</p>
                    <button type="button" className="text-primary hover:text-primary/80">browse files</button>
                  </div>
                  <p className="text-sm text-gray-500">Supported formats: PDF, JPG, PNG (Max size: 5MB)</p>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsFormExpanded(false)}
                  className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Content Sections */}
      <div className="container py-12">
        {/* Admission Process Section */}
        {activeSection === 'process' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Admission Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow these simple steps to begin your academic journey with us
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Step 1: Registration */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">1</span>
                  <h3 className="text-2xl font-bold text-primary">Registration</h3>
                </div>
                <p className="text-gray-600">
                  Create your account on our admissions portal to begin the application process.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fill in basic details</li>
                  <li>• Verify email address</li>
                  <li>• Set up login credentials</li>
                </ul>
              </motion.div>

              {/* Step 2: Form Submission */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">2</span>
                  <h3 className="text-2xl font-bold text-primary">Form Submission</h3>
                </div>
                <p className="text-gray-600">
                  Complete the application form with your personal and academic details.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Personal information</li>
                  <li>• Academic history</li>
                  <li>• Course preferences</li>
                </ul>
              </motion.div>

              {/* Step 3: Document Upload */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">3</span>
                  <h3 className="text-2xl font-bold text-primary">Document Upload</h3>
                </div>
                <p className="text-gray-600">
                  Upload all required documents and certificates.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Academic certificates</li>
                  <li>• Identity proof</li>
                  <li>• Passport size photo</li>
                </ul>
              </motion.div>

              {/* Step 4: Entrance Exam */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">4</span>
                  <h3 className="text-2xl font-bold text-primary">Entrance Exam</h3>
                </div>
                <p className="text-gray-600">
                  Appear for the entrance examination if applicable to your course.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Exam guidelines</li>
                  <li>• Important dates</li>
                  <li>• Preparation tips</li>
                </ul>
              </motion.div>

              {/* Step 5: Fee Payment */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">5</span>
                  <h3 className="text-2xl font-bold text-primary">Fee Payment</h3>
                </div>
                <p className="text-gray-600">
                  Complete the admission fee payment through our secure payment gateway.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Multiple payment options</li>
                  <li>• Secure transactions</li>
                  <li>• Payment confirmation</li>
                </ul>
              </motion.div>

              {/* Step 6: Confirmation */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">6</span>
                  <h3 className="text-2xl font-bold text-primary">Confirmation</h3>
                </div>
                <p className="text-gray-600">
                  Receive confirmation and attend counseling session.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Admission confirmation</li>
                  <li>• Course counseling</li>
                  <li>• Class schedule</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Eligibility Criteria Section */}
        {activeSection === 'eligibility' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Eligibility Criteria</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Check the eligibility requirements for your desired program
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Undergraduate Programs */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 space-y-6"
              >
                <h3 className="text-2xl font-bold text-primary">Undergraduate Programs</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">B.Sc. Programs</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 10+2 with minimum 60% in Science stream</li>
                      <li>• Mathematics as compulsory subject</li>
                      <li>• Valid entrance exam score</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">B.A. Programs</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 10+2 with minimum 55% in any stream</li>
                      <li>• English proficiency</li>
                      <li>• Entrance test qualification</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Postgraduate Programs */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 space-y-6"
              >
                <h3 className="text-2xl font-bold text-primary">Postgraduate Programs</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">M.Sc. Programs</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Bachelor's degree with 65% in relevant field</li>
                      <li>• Research aptitude test clearance</li>
                      <li>• Interview performance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">M.A. Programs</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Bachelor's degree with 60% in relevant subject</li>
                      <li>• Entrance examination</li>
                      <li>• Academic interview</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Diploma Programs */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 space-y-6"
              >
                <h3 className="text-2xl font-bold text-primary">Diploma Programs</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Technical Diplomas</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 10+2 with 50% in relevant stream</li>
                      <li>• Basic computer knowledge</li>
                      <li>• Aptitude test clearance</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* International Students */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft p-6 space-y-6"
              >
                <h3 className="text-2xl font-bold text-primary">International Students</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Admission Requirements</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Valid passport and visa</li>
                      <li>• English proficiency test scores</li>
                      <li>• Academic transcripts with translation</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Admissions;