import React from 'react';
import FooterSection from './components/FooterSection';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Terms from './components/Terms'
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
      <HeroSection />
      <ServicesSection/>
      <FooterSection/>
      <Terms/>
    </div>
  );
}

export default App;
