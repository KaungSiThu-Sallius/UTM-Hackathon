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
                    className="text-center text-hackathon-gray/60 mb-12 text-sm sm:text-base"
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
                    <p className="text-hackathon-gray text-base sm:text-lg leading-relaxed text-justify">
                        {about.content}
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl sm:max-w-4xl mx-auto">
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
                            className={`glass-effect rounded-2xl p-5 sm:p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-hackathon-wine/20 ${index === about.stats.length - 1 && about.stats.length % 2 !== 0
                                    ? 'col-span-2 sm:col-span-1'
                                    : ''
                                }`}
                        >
                            <div className="text-2xl sm:text-3xl font-black gradient-text mb-1 leading-tight">
                                {stat.number}
                            </div>
                            <div className="text-hackathon-wine text-xs sm:text-sm font-semibold uppercase tracking-wide leading-tight mt-1">
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