import { useState, useEffect, useRef } from 'react';

const navLinks = [
    { label: 'Home', href: '#home' },
    {
        label: 'Event',
        dropdown: [
            { label: 'Tentative', href: '#tentative' },
            { label: 'Rules', href: '#rules' },
            { label: 'Prizes', href: '#prizes' },
        ],
    },
    { label: 'FAQ', href: '#faq' },
    { label: 'Sponsors', href: '#sponsors' },
];

const Navbar = ({ onRegisterClick }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleNavClick = (href) => {
        setMobileOpen(false);
        setActiveDropdown(null);
        if (href.startsWith('#')) {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 backdrop-blur-xl shadow-md shadow-hackathon-wine/10 border-b border-hackathon-wine/10'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={dropdownRef}>
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo / Brand — Event logo */}
                    <button
                        onClick={() => handleNavClick('#home')}
                        className="flex items-center gap-2 group"
                    >
                        <img
                            src="/Hackathon 25 Logo.png"
                            alt="UTMxHackathon Logo"
                            className="w-16 h-16 sm:w-16 sm:h-16 object-contain drop-shadow group-hover:scale-110 transition-transform"
                        />
                        <span className="font-bold text-sm sm:text-base text-hackathon-wine group-hover:text-hackathon-crimson transition-colors hidden xs:block">
                            UTMxHackathon<span className="text-hackathon-crimson">'26</span>
                        </span>
                    </button>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) =>
                            link.dropdown ? (
                                <div key={link.label} className="relative">
                                    <button
                                        onClick={() =>
                                            setActiveDropdown(activeDropdown === link.label ? null : link.label)
                                        }
                                        className="flex items-center gap-1 px-4 py-2 rounded-lg text-hackathon-gray hover:text-hackathon-wine hover:bg-hackathon-wine/5 font-medium text-sm transition-all duration-200"
                                    >
                                        {link.label}
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Dropdown Menu */}
                                    {activeDropdown === link.label && (
                                        <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-hackathon-wine/10 rounded-xl shadow-xl shadow-hackathon-wine/10 overflow-hidden">
                                            {link.dropdown.map((item) => (
                                                <button
                                                    key={item.label}
                                                    onClick={() => handleNavClick(item.href)}
                                                    className="w-full text-left px-4 py-3 text-sm text-hackathon-gray hover:text-hackathon-wine hover:bg-hackathon-wine/5 transition-all duration-150"
                                                >
                                                    {item.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavClick(link.href)}
                                    className="px-4 py-2 rounded-lg text-hackathon-gray hover:text-hackathon-wine hover:bg-hackathon-wine/5 font-medium text-sm transition-all duration-200"
                                >
                                    {link.label}
                                </button>
                            )
                        )}
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={onRegisterClick}
                            className="px-5 py-2.5 bg-hackathon-wine text-white font-bold text-sm rounded-full hover:bg-hackathon-crimson hover:shadow-lg hover:shadow-hackathon-wine/30 hover:scale-105 transition-all duration-200"
                        >
                            Register Now
                        </button>
                    </div>

                    {/* Mobile burger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-lg text-hackathon-wine hover:bg-hackathon-wine/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="md:hidden pb-4 border-t border-hackathon-wine/10 mt-2 bg-white/95 backdrop-blur-xl rounded-b-2xl">
                        {navLinks.map((link) =>
                            link.dropdown ? (
                                <div key={link.label}>
                                    <p className="px-4 pt-3 pb-1 text-xs text-hackathon-wine/60 uppercase tracking-widest font-semibold">
                                        {link.label}
                                    </p>
                                    {link.dropdown.map((item) => (
                                        <button
                                            key={item.label}
                                            onClick={() => handleNavClick(item.href)}
                                            className="w-full text-left px-6 py-2.5 text-sm text-hackathon-gray hover:text-hackathon-wine transition-colors"
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavClick(link.href)}
                                    className="w-full text-left px-4 py-3 text-sm font-medium text-hackathon-gray hover:text-hackathon-wine transition-colors"
                                >
                                    {link.label}
                                </button>
                            )
                        )}
                        <div className="px-4 pt-3">
                            <button
                                onClick={() => { setMobileOpen(false); onRegisterClick(); }}
                                className="w-full py-3 bg-hackathon-wine text-white font-bold text-sm rounded-full hover:bg-hackathon-crimson transition-colors"
                            >
                                Register Now
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
