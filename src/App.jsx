import React from 'react';
import { motion } from 'framer-motion';
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
      {/* Sidebar with scroll-triggered fade-in animation */}
      <motion.div 
        initial={{ opacity: 0 }}  // Start invisible
        whileInView={{ opacity: 1 }}  // Fade in when in view
        transition={{ duration: 0.8, ease: 'easeOut' }}  // Fade-in with smooth transition
        viewport={{ once: true }}  // Trigger only once when entering the viewport
      >
        <Sidebar />
      </motion.div>

      {/* Navbar with scroll-triggered fade-in and scale */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
      >
        <Navbar />
      </motion.div>

      {/* Hero Section with scroll-triggered fade-in and up motion */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <Hero />
      </motion.div>

      {/* About Section with scroll-triggered zoom-in effect */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      {/* HowItWorks Section with scroll-triggered slide-in from right */}
      <motion.div 
        initial={{ x: '100%' }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
      >
        <HowItWorks />
      </motion.div>

      {/* VideoGrid with scroll-triggered fade-in */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <VideoGrid />
      </motion.div>

      {/* CTA Section with scroll-triggered bounce effect */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 150 }}
        viewport={{ once: true }}
      >
        <CTASection />
      </motion.div>

      {/* Footer with scroll-triggered fade-in */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
