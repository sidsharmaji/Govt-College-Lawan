const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Sample data - In a real app, this would come from a database
const courses = [
  {
    id: 1,
    name: 'Bachelor of Science',
    code: 'BSC',
    duration: '4 years',
    departments: ['Physics', 'Chemistry', 'Biology']
  },
  {
    id: 2,
    name: 'Bachelor of Arts',
    code: 'BA',
    duration: '3 years',
    departments: ['Literature', 'History', 'Fine Arts']
  }
];

const events = [
  {
    id: 1,
    title: 'Annual Science Exhibition',
    date: '2024-05-15',
    description: 'Showcasing student projects and research work'
  },
  {
    id: 2,
    title: 'Cultural Festival',
    date: '2024-06-01',
    description: 'Celebrating diversity through arts and culture'
  }
];

// Routes
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.get('/api/events', (req, res) => {
  res.json(events);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json(course);
});

app.post('/api/events', (req, res) => {
  const { title, date, description } = req.body;
  const newEvent = {
    id: events.length + 1,
    title,
    date,
    description
  };
  events.push(newEvent);
  res.status(201).json(newEvent);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});