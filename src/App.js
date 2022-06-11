import React from 'react';
import FooterSection from './components/FooterSection';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';

import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ServicesSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
