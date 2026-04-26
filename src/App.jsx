import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tentative from './components/Tentative';
import Rules from './components/Rules';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Sponsors from './components/Sponsors';
import Mentors from './components/Mentors';
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
        <div className="min-h-screen overflow-x-hidden w-full">
            <Navbar onRegisterClick={handleRegisterClick} />
            <Hero onRegisterClick={handleRegisterClick} />
            <About />
            <Tentative />
            <Rules />
            <Prizes />
            <FAQ />
            <Sponsors />
            <Mentors />
            <Footer />
            <RegistrationModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default App;
