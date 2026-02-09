import { useState } from 'react';

const RegistrationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="glass-effect rounded-3xl p-8 sm:p-12 max-w-md w-full transform transition-all duration-300 scale-100 hover:scale-[1.02]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="text-center">
                    <div className="mb-6">
                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-hackathon-coral to-hackathon-crimson rounded-full flex items-center justify-center animate-pulse">
                            <svg
                                className="w-10 h-10 text-hackathon-cream"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
                        Coming Soon!
                    </h2>

                    <p className="text-hackathon-cream/80 text-base sm:text-lg mb-8 leading-relaxed">
                        Registration will open soon. Stay tuned for updates and be ready to secure your spot!
                    </p>

                    <button
                        onClick={onClose}
                        className="w-full bg-gradient-to-r from-hackathon-coral to-hackathon-crimson text-hackathon-cream font-bold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-hackathon-coral/50 transition-all duration-300 transform hover:scale-105"
                    >
                        Got It!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationModal;
