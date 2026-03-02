import { motion } from 'framer-motion';
import { eventData } from '../eventData';

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
});

const Sponsors = () => {
    const { sponsors } = eventData;

    return (
        <section id="sponsors" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    variants={fadeUp(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 gradient-text"
                >
                    {sponsors.title}
                </motion.h2>
                <motion.p
                    variants={fadeUp(0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center text-hackathon-cream/60 mb-14 text-sm sm:text-base"
                >
                    Supporting the next generation of innovators
                </motion.p>

                {/* TBD state */}
                {sponsors.comingSoon && (
                    <motion.div
                        variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="glass-effect rounded-3xl p-12 text-center max-w-xl mx-auto mb-14"
                    >
                        <div className="text-5xl mb-4">🤝</div>
                        <h3 className="text-2xl font-bold text-hackathon-coral mb-2">Sponsors Coming Soon</h3>
                        <p className="text-hackathon-cream/70 text-sm">
                            We are currently in the process of confirming our sponsors. Stay tuned!
                        </p>
                    </motion.div>
                )}

                {/* Sponsor tiers (shown when not empty) */}
                {sponsors.tiers && sponsors.tiers.length > 0 && (
                    <div className="space-y-12 mb-14">
                        {sponsors.tiers.map((tier, tierIndex) => (
                            <div key={tierIndex}>
                                <motion.div
                                    variants={fadeUp(tierIndex * 0.1)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="text-center mb-8"
                                >
                                    <h3 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent inline-block px-6 py-2`}>
                                        {tier.name}
                                    </h3>
                                </motion.div>
                                <div className={`grid gap-6 ${tier.name === 'Platinum' ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto' :
                                    tier.name === 'Gold' ? 'grid-cols-2 md:grid-cols-3' :
                                        'grid-cols-2 md:grid-cols-4'
                                    }`}>
                                    {tier.companies.map((company, i) => (
                                        <motion.div
                                            key={i}
                                            custom={i}
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: (idx) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.07 } }),
                                            }}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            className="glass-effect rounded-2xl p-6 flex items-center justify-center hover:scale-105 transition-all duration-300"
                                        >
                                            <img src={company.logo} alt={company.name} className="w-full h-auto object-contain" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Interested in Sponsoring CTA */}
                <motion.div
                    variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="glass-effect rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-hackathon-coral mb-3">
                            {sponsors.interested.title}
                        </h3>
                        <p className="text-hackathon-cream/70 text-sm sm:text-base max-w-xl mx-auto">
                            {sponsors.interested.description}
                        </p>
                    </div>

                    {/* Prospectus Button */}
                    <div className="flex justify-center mb-10">
                        <a
                            href={sponsors.interested.prospectusLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-hackathon-coral to-hackathon-crimson text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-hackathon-coral/50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            View Prospectus
                        </a>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {sponsors.interested.contacts.map((contact, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-hackathon-coral/30 transition-colors duration-300">
                                <p className="text-hackathon-coral font-bold text-sm mb-0.5">{contact.role}</p>
                                <p className="text-hackathon-cream font-semibold text-base mb-3">{contact.name}</p>
                                <div className="space-y-1.5 text-sm">
                                    <a
                                        href={`tel:${contact.phone}`}
                                        className="flex items-center gap-2 text-hackathon-cream/70 hover:text-hackathon-coral transition-colors"
                                    >
                                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {contact.phone}
                                    </a>
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="flex items-center gap-2 text-hackathon-cream/70 hover:text-hackathon-coral transition-colors break-all"
                                    >
                                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        {contact.email}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Sponsors;