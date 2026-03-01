import { useState } from 'react';
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
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 gradient-text">
                    Frequently Asked Questions
                </h2>
                <p className="text-center text-hackathon-cream/60 mb-12 text-sm sm:text-base">
                    Got questions? We've got answers.
                </p>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-hackathon-coral/20"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left p-6 sm:p-8 flex justify-between items-center gap-4 hover:bg-white/5 transition-colors duration-200"
                            >
                                <h3 className="text-base sm:text-lg font-bold text-hackathon-cream">
                                    {faq.question}
                                </h3>
                                <svg
                                    className={`w-6 h-6 text-hackathon-coral flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
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
                                    <p className="text-hackathon-cream/80 text-sm sm:text-base leading-relaxed border-t border-white/10 pt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;