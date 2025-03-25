import { motion } from 'framer-motion';

interface NewsItemProps {
  title: string;
  category: string;
  timestamp: string;
  description: string;
}

export const NewsItem = ({ title, category, timestamp, description }: NewsItemProps) => (
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

interface EventCardProps {
  title: string;
  date: string;
  category: 'Academic' | 'Cultural' | 'Sports';
  description: string;
  registrationLink: string;
}

export const EventCard = ({ title, date, category, description, registrationLink }: EventCardProps) => (
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

interface CircularItemProps {
  title: string;
  category: string;
  date: string;
  fileSize: string;
  downloadLink: string;
}

export const CircularItem = ({ title, category, date, fileSize, downloadLink }: CircularItemProps) => (
  <div className="bg-white p-6 rounded-lg shadow-soft hover:shadow-xl transition-all">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">📄</span>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-sm text-gray-500">{category}</span>
        </div>
      </div>
      <span className="text-sm text-gray-500">{date}</span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-500">{fileSize}</span>
      <a
        href={downloadLink}
        className="flex items-center space-x-2 text-primary hover:underline"
      >
        <span>Download</span>
        <span>↓</span>
      </a>
    </div>
  </div>
);