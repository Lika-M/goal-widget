import { useState } from 'react';

import Course from './components/Course.tsx';
import Header from './components/Header.tsx';

import img from './assets/training.jpg';
import './App.css';

export type Course = {
  title: string;
  description: string;
  id: number;
}

function App() {

  const [courses, setCourses] = useState<Course[]>([]);

  function handleAddCourse() {

    const newCourse: Course = {
      title: 'Informatics Practices',
      description: 'Retrieve and manipulate data using Structured Query Language. Identify the Emerging trends in the fields of Information Technology.',
      id: Math.floor(Math.random() * 100)
    }
    setCourses(state => {
      return [...state, newCourse]
    });
  }

  return (
    <main>
      <Header image={{ src: img, alt: "Course Image" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <button onClick={handleAddCourse}>Add New Course</button>
      <ul>
        {courses.map(c =>
          <li key={c.id}>
            <Course title={c.title}  >
              <p>{c.description}</p>
            </Course>
          </li>)}
      </ul>
    </main>


  )
}

export default App
