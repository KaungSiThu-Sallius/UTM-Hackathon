import { eventData } from '../eventData';

const Footer = () => {
    return (
        <footer className="py-12 px-4 border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text mb-4">
                            UTM HACKATHON
                        </h3>
                        <p className="text-hackathon-cream/70 text-sm">
                            Building the future, one hack at a time.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-hackathon-coral mb-4">
                            Contact
                        </h4>
                        <div className="space-y-2 text-sm text-hackathon-cream/70">
                            <p>{eventData.contact.email}</p>
                            <p>{eventData.contact.location}</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-bold text-hackathon-coral mb-4">
                            Follow Us
                        </h4>
                        <div className="flex gap-4">
                            {Object.entries(eventData.social).map(([platform, link]) => (
                                <a
                                    key={platform}
                                    href={link}
                                    className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-hackathon-coral/20 transition-all duration-300 transform hover:scale-110"
                                    aria-label={platform}
                                >
                                    <span className="text-hackathon-coral capitalize text-xs font-bold">
                                        {platform.charAt(0).toUpperCase()}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-8 border-t border-white/10">
                    <p className="text-hackathon-cream/60 text-sm">
                        © {new Date().getFullYear()} UTM Hackathon. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
