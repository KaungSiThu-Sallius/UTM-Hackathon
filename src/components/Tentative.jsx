import { eventData } from '../eventData';

const Tentative = () => {
    const { tentative } = eventData;

    return (
        <section id="tentative" className="py-20 px-4 relative">
            <div className="max-w-4xl mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 gradient-text">
                    Event Tentative
                </h2>
                <p className="text-center text-hackathon-cream/60 mb-14 text-sm sm:text-base">Key milestones and schedule for UTMxHackathon'26</p>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-hackathon-coral/60 via-hackathon-crimson/40 to-transparent -translate-x-1/2" />

                    <div className="space-y-8">
                        {tentative.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex items-start gap-6 sm:gap-0 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                                    }`}
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
                                <div className="absolute sm:static left-0 sm:w-2/12 flex items-start sm:justify-center pt-1 sm:pt-0">
                                    <div className="w-12 h-12 bg-gradient-to-br from-hackathon-coral to-hackathon-crimson rounded-full flex items-center justify-center text-xl shadow-lg shadow-hackathon-coral/30 flex-shrink-0 z-10">
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Mobile: content (always on right of dot) */}
                                <div className="sm:hidden flex-1 pl-4">
                                    <div className="glass-effect rounded-2xl p-4">
                                        <p className="text-hackathon-coral font-bold text-sm mb-0.5">{item.date}</p>
                                        <p className="text-hackathon-cream font-semibold text-sm">{item.label}</p>
                                        <p className="text-hackathon-cream/50 text-xs mt-0.5">{item.mode}</p>
                                    </div>
                                </div>

                                {/* Desktop right side placeholder for alternating layout */}
                                <div className="hidden sm:block sm:w-5/12" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tentative;
