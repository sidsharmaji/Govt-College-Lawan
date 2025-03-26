import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: {
    text: string;
    url: string;
  };
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Welcome to Govt College Lawan',
    description: 'Empowering minds with innovative learning experiences and cutting-edge facilities',
    image: '/campus-banner.svg',
    link: {
      text: 'Explore Campus',
      url: '/about'
    }
  },
  {
    id: 2,
    title: 'Admissions Open 2024',
    description: 'Join our prestigious institution. Limited seats available for the upcoming academic year.',
    image: '/academics-banner.svg',
    link: {
      text: 'Apply Now',
      url: '/admissions'
    }
  },
  {
    id: 3,
    title: 'Excellence in Education',
    description: 'Discover our state-of-the-art facilities and dedicated faculty committed to your success',
    image: '/grid.svg',
    link: {
      text: 'Learn More',
      url: '/academics'
    }
  },
  {
    id: 4,
    title: 'Student Life at GCL',
    description: 'Experience a vibrant campus life with diverse activities, clubs, and cultural events',
    image: '/campus-banner.svg',
    link: {
      text: 'Student Life',
      url: '/student-life'
    }
  }
];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-primary/10">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            onLoad={() => setIsLoading(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70 mix-blend-multiply" />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white space-y-6 max-w-4xl px-4">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-display font-bold leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-white/90"
              >
                {slides[currentSlide].description}
              </motion.p>
              {slides[currentSlide].link && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <a
                    href={slides[currentSlide].link.url}
                    className="btn-primary text-lg inline-block"
                  >
                    {slides[currentSlide].link.text}
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;