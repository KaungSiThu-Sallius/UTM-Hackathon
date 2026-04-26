import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eventData } from '../eventData';

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
});

const ChevronIcon = ({ open }) => (
    <svg
        className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const MentorCard = ({ mentor, index, isOpen, onToggle }) => {

    return (
        <motion.div
            custom={index}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: (i) => ({
                    opacity: 1, y: 0,
                    transition: { duration: 0.6, delay: 0.1 + i * 0.15, ease: 'easeOut' },
                }),
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-effect rounded-3xl overflow-hidden flex flex-col"
        >
            {/* Photo + header */}
            <div className="relative">
                <div className="h-56 sm:h-64 overflow-hidden bg-hackathon-warmtan">
                    <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover object-top"
                    />
                    {/* gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-hackathon-wine/60 via-transparent to-transparent" />
                </div>

                {/* Name pinned at bottom of photo */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-4">
                    <h3 className="text-white font-bold text-lg sm:text-xl leading-tight drop-shadow">
                        {mentor.name}
                    </h3>
                </div>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-1">
                {/* Positions */}
                <ul className="space-y-1 mb-4">
                    {mentor.positions.map((pos, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-hackathon-gray/80">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-hackathon-wine flex-shrink-0" />
                            {pos}
                        </li>
                    ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {mentor.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-hackathon-wine/10 text-hackathon-wine border border-hackathon-wine/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Expand toggle */}
                <button
                    onClick={() => onToggle(index)}
                    className="flex items-center justify-between w-full text-left text-hackathon-wine font-semibold text-sm py-3 border-t border-hackathon-wine/15 hover:text-hackathon-crimson transition-colors group mt-auto"
                >
                    <span>{isOpen ? 'Show less' : 'Read more'}</span>
                    <ChevronIcon open={isOpen} />
                </button>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            key="details"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                            className="overflow-hidden"
                        >
                            {/* Summary */}
                            <p className="text-hackathon-gray/75 text-sm leading-relaxed pt-4 pb-4">
                                {mentor.summary}
                            </p>

                            {/* Achievements */}
                            <div className="bg-hackathon-wine/5 border border-hackathon-wine/15 rounded-2xl p-4">
                                <p className="text-hackathon-wine font-bold text-xs uppercase tracking-widest mb-3">
                                    Achievements
                                </p>
                                <ul className="space-y-2">
                                    {mentor.achievements.map((ach, i) => (
                                        <li key={i} className="text-hackathon-gray/80 text-sm leading-snug">
                                            {ach}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const Mentors = () => {
    const { mentors } = eventData;
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section id="mentors" className="py-20 px-4 relative section-alt">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    variants={fadeUp(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 gradient-text"
                >
                    Meet Our Mentors
                </motion.h2>
                <motion.p
                    variants={fadeUp(0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center text-hackathon-gray/60 mb-14 text-sm sm:text-base max-w-xl mx-auto"
                >
                    Industry veterans and hackathon champions here to guide your journey.
                </motion.p>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {mentors.map((mentor, i) => (
                        <MentorCard
                            key={mentor.name}
                            mentor={mentor}
                            index={i}
                            isOpen={openIndex === i}
                            onToggle={handleToggle}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mentors;
