import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-neutral">
      {/* Banner Section */}
      <section className="relative h-[40vh] overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl font-display font-bold">Get in Touch with Us</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              We're here to help and answer any questions you might have
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-40 backdrop-blur-md bg-white/80">
        <div className="container flex justify-center space-x-4 md:space-x-8 text-sm md:text-base">
          <a href="#location" className="text-gray-600 hover:text-primary transition-colors">Location</a>
          <a href="#inquiry" className="text-gray-600 hover:text-primary transition-colors">Inquiry</a>
          <a href="#details" className="text-gray-600 hover:text-primary transition-colors">Contact Details</a>
          <a href="#social" className="text-gray-600 hover:text-primary transition-colors">Social Media</a>
        </div>
      </nav>

      {/* Map Section */}
      <section id="location" className="section bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Our Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at our campus or get directions to reach us
            </p>
          </div>
          
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.3714257064535!2d-86.12396688561198!3d35.0373187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM1LCsDI2JzE0LjgiTiA4NsKwMDcnMjYuNCJX!5e0!3m2!1sen!2sus!4v1635959481000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex justify-center">
            <a
              href="https://goo.gl/maps/xxx" // TODO: Update with actual Google Maps link
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get Directions</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry" className="section bg-neutral">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Send us a Message</h2>
              <p className="text-xl text-gray-600">
                Have questions? We'd love to hear from you
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-gray-700">Subject</label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="General">General Inquiry</option>
                    <option value="Admissions">Admissions</option>
                    <option value="Academics">Academics</option>
                    <option value="Events">Events</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-700">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn-primary text-lg px-8 py-3"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Contact Details Section */}
      <section id="details" className="section bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-primary">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-2xl">📞</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone Numbers</h3>
                    <p className="text-gray-600">Admissions: +1 234 567 8900</p>
                    <p className="text-gray-600">Administration: +1 234 567 8901</p>
                    <p className="text-gray-600">Support: +1 234 567 8902</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary text-2xl">✉️</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email Addresses</h3>
                    <p className="text-gray-600">General: info@govtcollegelawan.edu</p>
                    <p className="text-gray-600">Admissions: admissions@govtcollegelawan.edu</p>
                    <p className="text-gray-600">Support: support@govtcollegelawan.edu</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary text-2xl">🕒</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary text-2xl">📍</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Address</h3>
                    <p className="text-gray-600">
                      123 College Street,<br />
                      Lawan City, State 12345<br />
                      Country
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-primary">Connect With Us</h2>
              <div id="social" className="space-y-6">
                <p className="text-xl text-gray-600">
                  Follow us on social media to stay updated with the latest news and events
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.32,6.44c-.86,.38-1.78,.64-2.75,.76,1-.59,1.75-1.53,2.11-2.65-.93,.55-1.96,.95-3.06,1.16-.88-.94-2.13-1.52-3.52-1.52-2.66,0-4.82,2.16-4.82,4.82,0,.38,.04,.75,.12,1.1-4.06-.2-7.65-2.14-10.06-5.09-.42,.72-.66,1.55-.66,2.44,0,1.67,.85,3.15,2.15,4.01-.79-.02-1.53-.24-2.18-.6v.06c0,2.34,1.66,4.28,3.87,4.73-.4,.11-.83,.17-1.27,.17-.31,0-.61-.03-.91-.09.61,1.92,2.39,3.31,4.49,3.35-1.65,1.29-3.72,2.06-5.98,2.06-.39,0-.77-.02-1.15-.07,2.13,1.37,4.66,2.17,7.37,2.17,8.84,0,13.67-7.32,13.67-13.67,0-.21,0-.42-.01-.62.94-.68,1.75-1.52,2.4-2.48Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;