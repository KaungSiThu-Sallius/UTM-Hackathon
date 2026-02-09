import { eventData } from '../eventData';

const About = () => {
    return (
        <section className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 gradient-text">
                    {eventData.about.title}
                </h2>

                {/* Content */}
                <div className="glass-effect rounded-3xl p-8 sm:p-12 mb-12">
                    <p className="text-hackathon-cream/90 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                        {eventData.about.content}
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {eventData.about.stats.map((stat, index) => (
                        <div
                            key={index}
                            className="glass-effect rounded-2xl p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-hackathon-coral/30"
                        >
                            <div className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text mb-2">
                                {stat.number}
                            </div>
                            <div className="text-hackathon-coral text-sm sm:text-base font-semibold uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
