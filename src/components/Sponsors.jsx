import { eventData } from '../eventData';

const Sponsors = () => {
    return (
        <section className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
                    {eventData.sponsors.title}
                </h2>

                {/* Sponsor Tiers */}
                <div className="space-y-12">
                    {eventData.sponsors.tiers.map((tier, tierIndex) => (
                        <div key={tierIndex}>
                            {/* Tier Name */}
                            <div className="text-center mb-8">
                                <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent inline-block px-6 py-2`}>
                                    {tier.name}
                                </h3>
                            </div>

                            {/* Sponsor Logos Grid */}
                            <div className={`grid gap-6 ${tier.name === 'Platinum' ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto' :
                                    tier.name === 'Gold' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' :
                                        'grid-cols-2 md:grid-cols-4'
                                }`}>
                                {tier.companies.map((company, companyIndex) => (
                                    <div
                                        key={companyIndex}
                                        className="glass-effect rounded-2xl p-6 sm:p-8 flex items-center justify-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-hackathon-coral/20"
                                    >
                                        <img
                                            src={company.logo}
                                            alt={company.name}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Become a Sponsor CTA */}
                <div className="mt-16 text-center">
                    <div className="glass-effect rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto">
                        <h3 className="text-2xl sm:text-3xl font-bold text-hackathon-coral mb-4">
                            Interested in Sponsoring?
                        </h3>
                        <p className="text-hackathon-cream/80 mb-6 text-sm sm:text-base">
                            Join us in supporting the next generation of innovators and get your brand in front of talented students.
                        </p>
                        <a
                            href={`mailto:${eventData.contact.email}`}
                            className="inline-block bg-gradient-to-r from-hackathon-coral to-hackathon-crimson text-hackathon-cream font-bold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-hackathon-coral/50 transition-all duration-300 transform hover:scale-105"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
