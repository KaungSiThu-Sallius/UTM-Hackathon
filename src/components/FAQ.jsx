import { useState } from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../eventData';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = eventData.faqs;

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 px-4 relative">
            <div className="max-w-4xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 gradient-text"
                >
                    Frequently Asked Questions
                </motion.h2>
                <motion.p
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center text-hackathon-gray/60 mb-12 text-sm sm:text-base"
                >
                    Got questions? We've got answers.
                </motion.p>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={{
                                hidden: { opacity: 0, y: 25 },
                                visible: (i) => ({
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, delay: i * 0.07, ease: 'easeOut' },
                                }),
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-hackathon-wine/15"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left p-6 sm:p-8 flex justify-between items-center gap-4 hover:bg-hackathon-wine/5 transition-colors duration-200"
                            >
                                <h3 className="text-base sm:text-lg font-bold text-hackathon-gray">
                                    {faq.question}
                                </h3>
                                <svg
                                    className={`w-6 h-6 text-hackathon-wine flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                                    <p className="text-hackathon-gray/80 text-sm sm:text-base leading-relaxed border-t border-hackathon-wine/10 pt-4">
                                        {faq.answer}
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

export default FAQ;