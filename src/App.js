import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>

    </div>
  );
}

export default App;
