const SubmissionModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full relative shadow-2xl shadow-hackathon-wine/20 border border-hackathon-wine/10"
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

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-6">Submission via KooQ</h2>

                {/* Requirements */}
                <div className="mb-5">
                    <p className="text-hackathon-wine font-semibold text-sm mb-2">Submission requirements:</p>
                    <ul className="space-y-1.5 text-hackathon-gray text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-hackathon-wine mt-0.5">•</span>
                            GitHub repository link (prototype source code)
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-hackathon-wine mt-0.5">•</span>
                            5-minute Youtube video (public or unlisted)
                        </li>
                    </ul>
                </div>

                {/* Divider */}
                <div className="h-px bg-hackathon-wine/10 mb-5" />

                {/* Notes */}
                <div>
                    <p className="text-hackathon-wine font-semibold text-sm mb-2">Notes:</p>
                    <ul className="space-y-1.5 text-hackathon-gray text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-hackathon-wine mt-0.5">•</span>
                            Submission must be done via Kooq platform
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-hackathon-wine mt-0.5">•</span>
                            Ensure all links are working and accessible
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-hackathon-wine mt-0.5">•</span>
                            Tutorial will be provided later
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-hackathon-crimson font-semibold mt-0.5">•</span>
                            <span className="font-semibold text-hackathon-crimson">Submit before deadline strictly (Which is 11 May, 10pm)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SubmissionModal;
