import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tentative from './components/Tentative';
import Rules from './components/Rules';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onRegisterClick={() => setIsModalOpen(true)} />
      <Hero onRegisterClick={() => setIsModalOpen(true)} />
      <About />
      <Tentative />
      <Rules />
      <Prizes />
      <FAQ />
      <Sponsors />
      <Footer />
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
