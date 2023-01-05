import React from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/intro';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div className='App'>
      <Intro />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
