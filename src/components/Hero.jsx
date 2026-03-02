import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { eventData } from '../eventData';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
    }),
};

const Hero = ({ onRegisterClick }) => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden">
            {/* Animated background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-hackathon-coral/20 rounded-full blur-3xl"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-hackathon-crimson/20 rounded-full blur-3xl"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hackathon-crimson/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto text-center relative z-10">
                {/* Badge */}
                <motion.div
                    custom={0}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/10 border border-white/20 rounded-full text-sm text-hackathon-cream/80 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 bg-hackathon-coral rounded-full animate-pulse" />
                    Organised by Club PERSAKA · UTM
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    custom={1}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 gradient-text leading-tight"
                >
                    {eventData.hero.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    custom={2}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-hackathon-coral mb-4 tracking-wide"
                >
                    {eventData.hero.subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                    custom={3}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-base sm:text-lg md:text-xl text-hackathon-cream/70 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    {eventData.hero.description}
                </motion.p>

                {/* Countdown Timer */}
                <motion.div
                    custom={4}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="mb-12"
                >
                    <p className="text-hackathon-cream/50 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                        Until {eventData.hero.countdownLabel}
                    </p>
                    <CountdownTimer />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    custom={5}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <button
                        onClick={onRegisterClick}
                        className="bg-gradient-to-r from-hackathon-coral to-hackathon-crimson text-white font-bold text-lg py-4 px-10 rounded-full hover:shadow-2xl hover:shadow-hackathon-coral/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    >
                        {eventData.hero.registerButtonText}
                    </button>
                    <button
                        onClick={() => {
                            const el = document.querySelector('#about');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-hackathon-cream/70 hover:text-hackathon-coral font-semibold text-base py-4 px-8 border border-white/20 rounded-full hover:border-hackathon-coral/50 transition-all duration-300"
                    >
                        Learn More ↓
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
