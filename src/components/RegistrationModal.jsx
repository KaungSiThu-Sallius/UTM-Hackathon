const REGISTER_URL = 'https://kooq.my/events/utmxhackathon26';
const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(REGISTER_URL)}`;

const RegistrationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-3xl p-8 sm:p-10 max-w-sm w-full relative shadow-2xl shadow-hackathon-wine/20 border border-hackathon-wine/10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-hackathon-wine/10 hover:bg-hackathon-wine/20 text-hackathon-wine/70 hover:text-hackathon-wine transition-all duration-200"
                    aria-label="Close"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="text-center">
                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-1">Register Now</h2>
                    <p className="text-hackathon-gray/60 text-sm mb-6">Scan the QR code or click the link below</p>

                    {/* QR Code */}
                    <div className="flex justify-center mb-5">
                        <div className="bg-white rounded-2xl p-3 shadow-lg shadow-hackathon-wine/10 border border-hackathon-wine/10">
                            <img
                                src={QR_SRC}
                                alt="Scan to Register"
                                className="w-44 h-44 sm:w-48 sm:h-48"
                            />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3 mb-5">
                        <div className="flex-1 h-px bg-hackathon-wine/10" />
                        <span className="text-hackathon-gray/40 text-xs uppercase tracking-widest">or</span>
                        <div className="flex-1 h-px bg-hackathon-wine/10" />
                    </div>

                    {/* CTA link */}
                    <a
                        href={REGISTER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-hackathon-wine text-white font-bold py-4 px-6 rounded-xl hover:bg-hackathon-crimson hover:shadow-xl hover:shadow-hackathon-wine/30 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                    >
                        🔗 Go to Registration Page
                    </a>
                    <p className="text-hackathon-gray/40 text-xs mt-3">Opens Koo'Q registration page</p>
                </div>
            </div>
        </div>
    );
};

export default RegistrationModal;
