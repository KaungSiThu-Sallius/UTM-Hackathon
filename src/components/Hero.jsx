import CountdownTimer from './CountdownTimer';
import { eventData } from '../eventData';

const Hero = ({ onRegisterClick }) => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-hackathon-coral/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-hackathon-crimson/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-6xl mx-auto text-center relative z-10">
                {/* Main Title */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 gradient-text animate-fade-in">
                    {eventData.hero.title}
                </h1>

                {/* Subtitle */}
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-hackathon-coral mb-4 tracking-wide">
                    {eventData.hero.subtitle}
                </p>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-hackathon-cream/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                    {eventData.hero.description}
                </p>

                {/* Countdown Timer */}
                <div className="mb-12">
                    <CountdownTimer />
                </div>

                {/* CTA Button */}
                <button
                    onClick={onRegisterClick}
                    className="group relative bg-gradient-to-r from-hackathon-coral to-hackathon-crimson text-hackathon-cream font-bold text-lg sm:text-xl py-5 px-12 rounded-full hover:shadow-2xl hover:shadow-hackathon-coral/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                    <span className="relative z-10">{eventData.hero.registerButtonText}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-hackathon-crimson to-hackathon-coral rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                {/* Scroll Indicator */}
                <div className="mt-20 animate-bounce">
                    <svg
                        className="w-8 h-8 mx-auto text-hackathon-coral"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
