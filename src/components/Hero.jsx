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
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-40 pb-24 relative overflow-hidden">
            {/* Subtle warm background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-hackathon-wine/8 rounded-full blur-3xl"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-hackathon-crimson/8 rounded-full blur-3xl"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hackathon-blush/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto text-center relative z-10">
                {/* Badge */}
                <motion.div
                    custom={1}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-hackathon-wine/10 border border-hackathon-wine/20 rounded-full text-sm text-hackathon-wine/80"
                >
                    <span className="w-2 h-2 bg-hackathon-wine rounded-full animate-pulse" />
                    Organised by Club PERSAKA · UTM
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    custom={2}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 gradient-text leading-tight"
                >
                    {eventData.hero.title}
                </motion.h1>

                {/* Subtitle / Slogan */}
                <motion.p
                    custom={3}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-hackathon-gray/70 mb-10 tracking-wide"
                >
                    {eventData.hero.subtitle}
                </motion.p>

                {/* CTA Buttons — ABOVE countdown */}
                <motion.div
                    custom={4}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
                >
                    <button
                        onClick={onRegisterClick}
                        className="bg-hackathon-wine text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-hackathon-crimson hover:shadow-2xl hover:shadow-hackathon-wine/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    >
                        {eventData.hero.registerButtonText}
                    </button>
                    <button
                        onClick={() => {
                            const el = document.querySelector('#about');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-hackathon-gray hover:text-hackathon-wine font-semibold text-base py-4 px-8 border border-hackathon-wine/25 rounded-full hover:border-hackathon-wine/60 transition-all duration-300"
                    >
                        Learn More ↓
                    </button>
                </motion.div>

                {/* Countdown Timer — below CTA */}
                <motion.div
                    custom={5}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    <p className="text-hackathon-gray/50 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                        Until {eventData.hero.countdownLabel}
                    </p>
                    <CountdownTimer />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
