import { motion } from 'framer-motion';
import { eventData } from '../eventData';

const Tentative = () => {
    const { tentative } = eventData;

    return (
        <section id="tentative" className="py-20 px-4 sm:px-4 relative">
            <div className="max-w-4xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 gradient-text"
                >
                    Event Tentative
                </motion.h2>
                <motion.p
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center text-hackathon-cream/60 mb-14 text-sm sm:text-base"
                >
                    Key milestones and schedule for UTMxHackathon'26
                </motion.p>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 sm:left-1/2 top-7 sm:top-0 bottom-0 w-0.5 bg-gradient-to-b from-hackathon-coral via-hackathon-crimson to-hackathon-coral/30 -translate-x-1/2" />

                    <div className="space-y-8">
                        {tentative.map((item, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={{
                                    hidden: (i) => ({
                                        opacity: 0,
                                        x: i % 2 === 0 ? -40 : 40,
                                    }),
                                    visible: (i) => ({
                                        opacity: 1,
                                        x: 0,
                                        transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
                                    }),
                                }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className={`relative flex items-start sm:gap-0 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                            >
                                {/* Desktop: Left / Right content */}
                                <div className={`hidden sm:block sm:w-5/12 ${index % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                                    <div className="glass-effect rounded-2xl p-5 inline-block max-w-xs hover:shadow-xl hover:shadow-hackathon-coral/20 transition-all duration-300 hover:scale-105">
                                        <div className="text-2xl mb-2">{item.icon}</div>
                                        <p className="text-hackathon-coral font-bold text-sm mb-1">{item.date}</p>
                                        <p className="text-hackathon-cream font-semibold text-base">{item.label}</p>
                                        <p className="text-hackathon-cream/50 text-xs mt-1">{item.mode}</p>
                                    </div>
                                </div>

                                {/* Centre dot */}
                                <div className="absolute sm:static left-2 sm:w-2/12 flex items-start sm:justify-center pt-1 sm:pt-0">
                                    <motion.div
                                        whileInView={{ scale: [0, 1.2, 1] }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="w-12 h-12 bg-gradient-to-br from-hackathon-coral to-hackathon-crimson rounded-full flex items-center justify-center text-xl shadow-lg shadow-hackathon-coral/30 flex-shrink-0 z-10"
                                    >
                                        {item.icon}
                                    </motion.div>
                                </div>

                                {/* Mobile: content (always on right of dot) */}
                                <div className="sm:hidden w-full pl-20">
                                    <div className="glass-effect rounded-2xl p-4">
                                        <p className="text-hackathon-coral font-bold text-sm mb-0.5">{item.date}</p>
                                        <p className="text-hackathon-cream font-semibold text-sm">{item.label}</p>
                                        <p className="text-hackathon-cream/50 text-xs mt-0.5">{item.mode}</p>
                                    </div>
                                </div>

                                {/* Desktop right side placeholder for alternating layout */}
                                <div className="hidden sm:block sm:w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tentative;
