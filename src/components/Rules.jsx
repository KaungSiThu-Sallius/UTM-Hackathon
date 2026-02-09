import { eventData } from '../eventData';

const Rules = () => {
    return (
        <section className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 gradient-text">
                    {eventData.rules.title}
                </h2>

                {/* Rules Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {eventData.rules.items.map((rule, index) => (
                        <div
                            key={index}
                            className="glass-effect rounded-2xl p-6 sm:p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-hackathon-crimson/30"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-hackathon-coral to-hackathon-crimson rounded-full flex items-center justify-center font-bold text-lg sm:text-xl">
                                    {index + 1}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl sm:text-2xl font-bold text-hackathon-coral mb-3">
                                        {rule.title}
                                    </h3>
                                    <p className="text-hackathon-cream/80 text-sm sm:text-base leading-relaxed">
                                        {rule.description}
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

export default Rules;
