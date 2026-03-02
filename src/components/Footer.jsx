import { motion } from 'framer-motion';
import { eventData } from '../eventData';

const socialIcons = {
    telegram: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
    ),
    instagram: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
    ),
    linkedin: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    facebook: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    ),
    email: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
};

const Footer = () => {
    const { social } = eventData;

    const links = [
        { key: 'email', label: social.email, href: `mailto:${social.email}` },
        { key: 'telegram', label: `Telegram: ${social.telegram.label}`, href: social.telegram.url },
        { key: 'instagram', label: `Instagram: ${social.instagram.label}`, href: social.instagram.url },
        { key: 'linkedin', label: `LinkedIn: ${social.linkedin.label}`, href: social.linkedin.url },
        { key: 'facebook', label: `Facebook: ${social.facebook.label}`, href: social.facebook.url },
    ];

    return (
        <motion.footer
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="py-12 px-4 border-t border-hackathon-wine/15 bg-hackathon-parchment/60 relative"
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-10 mb-10">
                    {/* Brand — Event logo + UTM logo */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/Hackathon 25 Logo.png"
                                alt="UTMxHackathon Logo"
                                className="w-10 h-10 object-contain"
                            />
                            <div>
                                <p className="font-bold text-hackathon-wine text-base leading-tight">UTMxHackathon<span className="text-hackathon-crimson">'26</span></p>
                                <p className="text-hackathon-gray/50 text-xs">Organised by Club PERSAKA</p>
                            </div>
                        </div>
                        <p className="text-hackathon-gray/60 text-sm leading-relaxed mb-5">
                            Build. Innovate. Transform. — An innovation-driven hackathon at Universiti Teknologi Malaysia.
                        </p>
                        {/* UTM Logo in footer */}
                        <div className="flex items-center gap-2">
                            <img
                                src="/utm-logo.png"
                                alt="UTM Logo"
                                className="w-8 h-8 object-contain opacity-70"
                            />
                            <span className="text-hackathon-gray/50 text-xs">Universiti Teknologi Malaysia</span>
                        </div>
                    </div>

                    {/* Quick Links — matching nav order */}
                    <div>
                        <h4 className="text-hackathon-wine font-bold mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            {[
                                { label: 'Home', href: '#home' },
                                { label: 'Tentative', href: '#tentative' },
                                { label: 'Rules', href: '#rules' },
                                { label: 'FAQ', href: '#faq' },
                                { label: 'Sponsors', href: '#sponsors' },
                            ].map(({ label, href }) => (
                                <li key={href}>
                                    <button
                                        onClick={() => {
                                            const el = document.querySelector(href);
                                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="text-hackathon-gray/60 hover:text-hackathon-wine transition-colors"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h4 className="text-hackathon-wine font-bold mb-4 text-sm uppercase tracking-widest">Connect With Us</h4>
                        <ul className="space-y-3">
                            {links.map(({ key, label, href }) => (
                                <li key={key}>
                                    <a
                                        href={href}
                                        target={href.startsWith('mailto') ? '_self' : '_blank'}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-hackathon-gray/60 hover:text-hackathon-wine transition-colors group text-sm"
                                    >
                                        <span className="text-hackathon-wine/50 group-hover:text-hackathon-wine transition-colors flex-shrink-0">
                                            {socialIcons[key]}
                                        </span>
                                        <span className="truncate">{label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="text-center pt-8 border-t border-hackathon-wine/10">
                    <p className="text-hackathon-gray/40 text-xs sm:text-sm">
                        © {new Date().getFullYear()} UTMxHackathon'26 · Club PERSAKA, Universiti Teknologi Malaysia · All rights reserved.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;