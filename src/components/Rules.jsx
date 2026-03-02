import { motion } from 'framer-motion';
import { eventData } from '../eventData';

const Rules = () => {
    const rules = eventData.rules;

    return (
        <section id="rules" className="py-20 px-4 relative section-alt">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 text-hackathon-wine"
                >
                    Competition Rules
                </motion.h2>
                <motion.p
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center text-hackathon-gray/60 mb-12 text-sm sm:text-base"
                >
                    Please read and adhere to all competition rules
                </motion.p>

                {/* Rules Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {rules.map((rule, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: (i) => ({
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
                                }),
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className={`glass-effect rounded-2xl p-6 sm:p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-hackathon-wine/20 ${rules.length % 2 !== 0 && index === rules.length - 1
                                ? 'md:col-span-2 md:max-w-xl md:mx-auto md:w-full'
                                : ''
                                }`}
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-hackathon-wine rounded-full flex items-center justify-center font-bold text-lg sm:text-xl text-white">
                                    {index + 1}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl sm:text-2xl font-bold text-hackathon-wine mb-3">
                                        {rule.title}
                                    </h3>
                                    <p className="text-hackathon-gray text-sm sm:text-base leading-relaxed">
                                        {rule.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rules;