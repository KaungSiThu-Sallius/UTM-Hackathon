import { motion } from 'framer-motion';
import { eventData } from '../eventData';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
    }),
};

const About = () => {
    const { about } = eventData;

    return (
        <section id="about" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 gradient-text"
                >
                    {about.title}
                </motion.h2>
                <motion.p
                    custom={1}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center text-hackathon-cream/60 mb-12 text-sm sm:text-base"
                >
                    Organised by Club PERSAKA · Universiti Teknologi Malaysia
                </motion.p>

                {/* Content Card */}
                <motion.div
                    variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="glass-effect rounded-3xl p-8 sm:p-12 mb-12"
                >
                    <p className="text-hackathon-cream/90 text-base sm:text-lg leading-relaxed text-justify">
                        {about.content}
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {about.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: (i) => ({
                                    opacity: 1,
                                    scale: 1,
                                    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
                                }),
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="glass-effect rounded-2xl p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-hackathon-coral/30"
                        >
                            <div className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text mb-2">
                                {stat.number}
                            </div>
                            <div className="text-hackathon-coral text-sm sm:text-base font-semibold uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;