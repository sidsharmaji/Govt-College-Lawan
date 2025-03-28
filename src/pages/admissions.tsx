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
                    <h4 className="font-semibold mb-2">Additional Requirements</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Valid passport and student visa</li>
                      <li>• English language proficiency test scores</li>
                      <li>• Translated academic documents</li>
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