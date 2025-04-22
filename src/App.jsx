import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import VideoGrid from './components/VideoGrid';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <VideoGrid />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
