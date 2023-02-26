import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skill from './Skill';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
      </main>

    </div>
  );
}

export default App;
