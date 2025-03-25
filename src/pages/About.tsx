import { motion } from 'framer-motion';

const About = () => {
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
            <h1 className="text-5xl md:text-6xl font-display font-bold">About Us</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Nurturing Excellence, Building Futures
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-40 backdrop-blur-md bg-white/80">
        <div className="container flex justify-center space-x-4 md:space-x-8 text-sm md:text-base">
          <a href="#history" className="text-gray-600 hover:text-primary transition-colors">History</a>
          <a href="#mission" className="text-gray-600 hover:text-primary transition-colors">Mission & Vision</a>
          <a href="#faculty" className="text-gray-600 hover:text-primary transition-colors">Faculty</a>
          <a href="#facilities" className="text-gray-600 hover:text-primary transition-colors">Facilities</a>
        </div>
      </nav>

      {/* History Section */}
      <section id="history" className="section bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tracing our path from humble beginnings to academic excellence
            </p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-8">
            <TimelineItem
              year="1960"
              title="Foundation"
              description="Establishment of the college with a vision to provide quality education"
            />
            <TimelineItem
              year="1975"
              title="Major Expansion"
              description="Addition of new departments and modern facilities"
            />
            <TimelineItem
              year="1990"
              title="Academic Excellence"
              description="Recognition as one of the top institutions in the region"
            />
            <TimelineItem
              year="2010"
              title="Digital Revolution"
              description="Integration of technology in education and administration"
            />
            <TimelineItem
              year="2023"
              title="Modern Era"
              description="Continuing our legacy while embracing future innovations"
            />
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="section bg-neutral">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold text-primary">Our Mission</h2>
            <p className="text-xl text-gray-600">
              To provide quality education that empowers students with knowledge, skills, and values
              necessary for lifelong learning and meaningful contribution to society.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start space-x-3">
                <span className="text-primary text-xl">•</span>
                <span>Excellence in teaching and learning</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary text-xl">•</span>
                <span>Fostering innovation and research</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary text-xl">•</span>
                <span>Promoting inclusive education</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold text-primary">Our Vision</h2>
            <p className="text-xl text-gray-600">
              To be a leading institution that transforms lives through education, research, and
              innovation, preparing students for the challenges of tomorrow.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start space-x-3">
                <span className="text-primary text-xl">•</span>
                <span>Global recognition for academic excellence</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary text-xl">•</span>
                <span>State-of-the-art infrastructure and facilities</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary text-xl">•</span>
                <span>Strong industry-academia partnerships</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="section bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Our Faculty</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our dedicated team of educators and researchers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FacultyCard
              name="Dr. Sarah Johnson"
              designation="Head of Science Department"
              qualification="Ph.D. in Physics"
              image="/faculty/sarah.svg"
            />
            <FacultyCard
              name="Prof. Michael Chen"
              designation="Senior Mathematics Faculty"
              qualification="M.Sc. in Mathematics"
              image="/faculty/michael.svg"
            />
            <FacultyCard
              name="Dr. Emily Brown"
              designation="Head of Arts Department"
              qualification="Ph.D. in Literature"
              image="/faculty/emily.svg"
            />
          </div>

          <div className="text-center">
            <a href="#" className="btn-primary inline-block">
              View All Faculty
            </a>
          </div>
        </motion.div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="section bg-neutral">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Campus Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern infrastructure supporting academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FacilityCard
              title="Library"
              description="State-of-the-art library with digital resources"
              icon="📚"
            />
            <FacilityCard
              title="Laboratories"
              description="Well-equipped science and computer labs"
              icon="🔬"
            />
            <FacilityCard
              title="Sports Complex"
              description="Modern sports facilities and training equipment"
              icon="🏃"
            />
            <FacilityCard
              title="Auditorium"
              description="500-seat capacity with modern audio-visual system"
              icon="🎭"
            />
            <FacilityCard
              title="Cafeteria"
              description="Spacious dining area with healthy food options"
              icon="🍽️"
            />
            <FacilityCard
              title="Wi-Fi Campus"
              description="High-speed internet access throughout campus"
              icon="📡"
            />
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold">Join Our Community</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Be part of our journey towards excellence in education
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="btn bg-white text-primary hover:bg-white/90">
              Apply Now
            </a>
            <a href="#contact" className="btn border-2 border-white hover:bg-white/10">
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-24 text-right">
      <span className="text-xl font-bold text-primary">{year}</span>
    </div>
    <div className="flex-shrink-0">
      <div className="w-4 h-4 rounded-full bg-primary" />
      <div className="w-0.5 h-24 bg-primary/20 mx-auto" />
    </div>
    <div className="flex-grow pt-1">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// Faculty Card Component
const FacultyCard = ({
  name,
  designation,
  qualification,
  image,
}: {
  name: string;
  designation: string;
  qualification: string;
  image: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    className="bg-white rounded-xl shadow-soft p-6 text-center space-y-4"
  >
    <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto object-cover" />
    <div>
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-primary font-medium">{designation}</p>
      <p className="text-gray-600 text-sm">{qualification}</p>
    </div>
  </motion.div>
);

// Facility Card Component
const FacilityCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    className="bg-white rounded-xl shadow-soft p-6 space-y-4"
  >
    <span className="text-4xl">{icon}</span>
    <div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default About;