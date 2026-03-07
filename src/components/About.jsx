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

            </div>
        </section>
    );
};

export default About;