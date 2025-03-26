import { motion } from 'framer-motion';

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  image?: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Annual Science Exhibition 2024',
    category: 'Events',
    date: 'March 15, 2024',
    description: 'Join us for an exciting showcase of innovative projects by our talented students.',
    image: '/news/science-expo.svg'
  },
  {
    id: 2,
    title: 'National Level Achievement',
    category: 'Achievement',
    date: 'March 10, 2024',
    description: 'Our students secured top positions in the National Science Olympiad.',
    image: '/news/achievement.svg'
  },
  {
    id: 3,
    title: 'New Computer Lab Inauguration',
    category: 'Infrastructure',
    date: 'March 5, 2024',
    description: 'State-of-the-art computer lab with latest technology and equipment.',
    image: '/news/computer-lab.svg'
  }
];

const NewsUpdates = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Latest Updates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about college news, events, and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all overflow-hidden"
            >
              {item.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {item.category}
                  </span>
                  <time>{item.date}</time>
                </div>
                <h3 className="text-xl font-bold text-gray-800 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">{item.description}</p>
                <a
                  href={`/news/${item.id}`}
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/news"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <span>View All News</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsUpdates;