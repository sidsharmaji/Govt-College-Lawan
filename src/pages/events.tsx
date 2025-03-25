import { motion } from 'framer-motion';
import { useState } from 'react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');

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
            <h1 className="text-5xl md:text-6xl font-display font-bold">Events & Notices</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Stay Updated with College Events & Notices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-40 backdrop-blur-md bg-white/80">
        <div className="container flex flex-wrap justify-center gap-4 md:gap-8">
          <button
            onClick={() => setActiveTab('latest')}
            className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'latest' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
          >
            Latest News
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'events' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
          >
            Events
          </button>
          <button
            onClick={() => setActiveTab('circulars')}
            className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'circulars' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
          >
            Circulars
          </button>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="container py-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events, notices, or circulars..."
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

      {/* Live Notification Panel */}
      <div className="container mb-8">
        <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-accent">
            <span className="animate-pulse">🔴</span>
            <span className="font-semibold">Live Updates</span>
          </div>
          <p className="mt-2 text-gray-600">Semester Final Examinations Schedule Released - Check Important Dates</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container py-12">
        {/* Latest News Section */}
        {activeTab === 'latest' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Latest News</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with the latest updates and announcements
              </p>
            </div>

            <div className="grid gap-8">
              {/* Pinned Notice */}
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
                <div className="flex items-center space-x-2 text-primary mb-2">
                  <span>📌</span>
                  <span className="font-semibold">Pinned Notice</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Academic Calendar 2024 Released</h3>
                <p className="text-gray-600 mb-4">The academic calendar for the upcoming year has been released. Please check important dates and deadlines.</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Posted: 2 hours ago</span>
                  <a href="#" className="text-primary hover:underline">Read More →</a>
                </div>
              </div>

              {/* Regular Updates */}
              <div className="space-y-6">
                <NewsItem
                  title="Scholarship Applications Open"
                  category="Academic"
                  timestamp="1 day ago"
                  description="Merit-based scholarship applications are now open for the 2024 academic year."
                />
                <NewsItem
                  title="New Research Lab Inauguration"
                  category="Department"
                  timestamp="2 days ago"
                  description="State-of-the-art research facility to be inaugurated next week."
                />
                <NewsItem
                  title="Sports Day Registration"
                  category="Sports"
                  timestamp="3 days ago"
                  description="Annual sports day registration begins. Multiple events and categories available."
                />
              </div>
            </div>

            {/* Email Subscription */}
            <div className="bg-white p-8 rounded-2xl shadow-soft text-center">
              <h3 className="text-2xl font-bold mb-4">Never Miss an Update</h3>
              <p className="text-gray-600 mb-6">Subscribe to our newsletter for regular updates</p>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="px-6 py-2 bg-primary text-white rounded-r-lg hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Events Section */}
        {activeTab === 'events' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">College Events</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover upcoming events and activities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Upcoming Events */}
              <EventCard
                title="Annual Science Exhibition"
                date="March 15, 2024"
                category="Academic"
                description="Showcase your innovative projects and research work"
                registrationLink="#"
              />
              <EventCard
                title="Cultural Festival"
                date="April 5-7, 2024"
                category="Cultural"
                description="Three days of music, dance, and artistic performances"
                registrationLink="#"
              />
              <EventCard
                title="Sports Tournament"
                date="May 1-10, 2024"
                category="Sports"
                description="Inter-college sports competition in various categories"
                registrationLink="#"
              />
            </div>

            {/* Past Events Gallery */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-center">Past Events Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img src="/events/event1.svg" alt="Past Event" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img src="/events/event2.svg" alt="Past Event" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img src="/events/event3.svg" alt="Past Event" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img src="/events/event4.svg" alt="Past Event" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Circulars Section */}
        {activeTab === 'circulars' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Circulars & Guidelines</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access official documents and guidelines
              </p>
            </div>

            <div className="grid gap-6">
              <CircularItem
                title="Examination Guidelines 2024"
                category="Academic"
                date="January 15, 2024"
                fileSize="2.5 MB"
                downloadLink="#"
              />
              <CircularItem
                title="Library Rules and Regulations"
                category="General"
                date="January 10, 2024"
                fileSize="1.8 MB"
                downloadLink="#"
              />
              <CircularItem
                title="Hostel Accommodation Policy"
                category="Student Affairs"
                date="January 5, 2024"
                fileSize="3.2 MB"
                downloadLink="#"
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl font-bold text-primary">Stay Connected</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="btn-primary">
              Subscribe for Alerts
            </a>
            <a href="#" className="btn-secondary">
              Contact Helpdesk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
interface NewsItemProps {
  title: string;
  category: string;
  timestamp: string;
  description: string;
}

interface EventCardProps {
  title: string;
  date: string;
  category: 'Academic' | 'Cultural' | 'Sports';
  description: string;
  registrationLink: string;
}

interface CircularItemProps {
  title: string;
  category: string;
  date: string;
  fileSize: string;
  downloadLink: string;
}

// Helper Components
const NewsItem = ({ title, category, timestamp, description }: NewsItemProps) => (
  <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-xl transition-all">
    <div className="flex items-center justify-between mb-2">
      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">{category}</span>
      <span className="text-sm text-gray-500">{timestamp}</span>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href="#" className="text-primary hover:underline">Read More →</a>
  </div>
);

const EventCard = ({ title, date, category, description, registrationLink }: EventCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-2xl shadow-soft p-6 space-y-4"
  >
    <div className="flex items-center justify-between">
      <span className={`px-3 py-1 rounded-full text-sm ${
        category === 'Academic' ? 'bg-blue-100 text-blue-600' :
        category === 'Cultural' ? 'bg-green-100 text-green-600' :
        'bg-orange-100 text-orange-600'
      }`}>{category}</span>
      <span className="text-sm text-gray-500">{date}</span>
    </div>
    <h3 className="text-2xl font-bold text-primary">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <a
      href={registrationLink}
      className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
    >
      Register Now
    </a>
  </motion.div>
);

const CircularItem = ({ title, category, date, fileSize, downloadLink }: CircularItemProps) => (
  <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-xl transition-all">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">📄</span>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
      </div>
      <span className="text-sm text-gray-500">{date}</span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-500">{fileSize}</span>
      <a href={downloadLink} className="text-primary hover:underline">Download →</a>
    </div>
  </div>
);


export default Events;