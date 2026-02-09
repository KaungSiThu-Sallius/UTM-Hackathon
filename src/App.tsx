import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Rules from './components/Rules';
import FAQ from './components/FAQ';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Hero onRegisterClick={handleRegisterClick} />
      <About />
      <Rules />
      <FAQ />
      <Sponsors />
      <Footer />
      <RegistrationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;

