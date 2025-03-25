import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface Course {
  id: number;
  name: string;
  code: string;
  duration: string;
  departments: string[];
}

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
}

const API_URL = 'http://localhost:5000/api';

// Mock data for development
const mockCourses: Course[] = [
  {
    id: 1,
    name: 'Bachelor of Science in Computer Science',
    code: 'BSC-CS',
    duration: '4 years',
    departments: ['Computer Science']
  },
  {
    id: 2,
    name: 'Bachelor of Arts in English',
    code: 'BA-ENG',
    duration: '3 years',
    departments: ['Arts and Humanities']
  },
  {
    id: 3,
    name: 'Master of Business Administration',
    code: 'MBA',
    duration: '2 years',
    departments: ['Business']
  }
];

export const useAcademics = () => {
  const queryClient = useQueryClient();

  // For development, return mock data instead of making API calls
const { data: courses = mockCourses, isLoading: coursesLoading } = useQuery<Course[]>({
    queryKey: ['courses'],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/courses`);
      if (!response.ok) throw new Error('Failed to fetch courses');
      return response.json();
    },
  });

  const { data: events = [], isLoading: eventsLoading } = useQuery<Event[]>({
    queryKey: ['events'],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/events`);
      if (!response.ok) throw new Error('Failed to fetch events');
      return response.json();
    },
  });

  const addEvent = useMutation({
    mutationFn: async (newEvent: Omit<Event, 'id'>) => {
      const response = await fetch(`${API_URL}/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEvent),
      });
      if (!response.ok) throw new Error('Failed to add event');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });

  return {
    courses,
    events,
    coursesLoading,
    eventsLoading,
    addEvent,
  };
};