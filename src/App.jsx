import React from 'react';
import Header from './components/Layout/Header';
import Banner from './components/Layout/Banner';
import Card from './components/Layout/Card';
import Trusted from './components/Layout/Trusted';
import HowItWorks from './components/Layout/HowItWorks';
import About from './components/Layout/About';
import WhyCasa from './components/Layout/WhyCasa';
import CasaSection from './components/Layout/CasaSection';
import ReviewsSection from './components/Layout/ReviewsSection';
import PricingSection from './components/Layout/PricingSection';
import ContactSection from './components/Layout/ContactSection';
import Footer from './components/Layout/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Card />
      <Trusted />
      <About />
      <HowItWorks />
      <CasaSection />
      <ReviewsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;