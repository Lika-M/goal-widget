import { useState } from 'react';

import Header from './components/Header.tsx';
import AddForm from './components/AddForm.tsx';
import CourseList from './components/CourseList.tsx';

import img from './assets/training.jpg';
import './App.css';

export type Course = {
  title: string;
  description: string;
  id: number;
}

function App() {

  const [courses, setCourses] = useState<Course[]>([]);

  function handleAddCourse({ title, summary }: { title: string, summary: string }) {

    const newCourse: Course = {
      title: title,
      description: summary,
      id: Math.floor(Math.random() * 100)
    }

    setCourses(state => {
      return [...state, newCourse]
    });
  }

  function handleDelete(id: number) {
    setCourses(state => {
      return state.filter(x => x.id !== id);
    });
  }

  return (
    <main className='fallback'>
      <Header image={{ src: img, alt: "Course Image" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <AddForm addCourse={handleAddCourse} />
      <CourseList courses={courses} onDelete={handleDelete} />
    </main>
  );
}

export default App
