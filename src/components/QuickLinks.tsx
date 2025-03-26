import { motion } from 'framer-motion';
import { AcademicCapIcon, UserGroupIcon, CalendarIcon, NewspaperIcon } from '@heroicons/react/24/outline';

interface QuickLink {
  title: string;
  description: string;
  icon: React.ElementType;
  url: string;
}

const quickLinks: QuickLink[] = [
  {
    title: 'Admissions',
    description: 'Apply now and join our prestigious institution',
    icon: AcademicCapIcon,
    url: '/admissions'
  },
  {
    title: 'Academics',
    description: 'Explore our courses and departments',
    icon: UserGroupIcon,
    url: '/academics'
  },
  {
    title: 'Events',
    description: 'Stay updated with college activities',
    icon: CalendarIcon,
    url: '/events'
  },
  {
    title: 'News',
    description: 'Latest updates and announcements',
    icon: NewspaperIcon,
    url: '/news'
  }
];

const QuickLinks = () => {
  return (
    <section className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Quick Links</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Fast access to important information and services</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group p-6 bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all text-center"
            >
              <link.icon className="h-12 w-12 mx-auto text-primary group-hover:text-secondary transition-colors" />
              <h3 className="text-xl font-bold mt-4 mb-2 text-gray-800 group-hover:text-primary transition-colors">
                {link.title}
              </h3>
              <p className="text-gray-600">{link.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;