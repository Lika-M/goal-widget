import Course from './components/Course.tsx';
import Header from './components/Header.tsx';

import img from '../public/training.jpg'
import './App.css'

function App() {

  return (
    <main>
      <Header image={{src: img, alt: "Course Image"}}>
        <h1>Your Course Goals</h1>
      </Header>
      <Course title="7th Grade Math">
        <p>Math 7 is designed to be a rigorous course that utilizes the enVision 2.0 Common Core math series to address the Massachusetts Common Core Standards.</p>
      </Course>
    </main>


  )
}

export default App
