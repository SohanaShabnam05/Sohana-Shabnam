import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

    </div>
  );
}

export default App;
