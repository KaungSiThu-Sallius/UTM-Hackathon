import { motion } from 'framer-motion';
import { eventData } from '../eventData';

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
});

const Prizes = () => {
    const { prizes } = eventData;

    return (
        <section id="prizes" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    variants={fadeUp(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 gradient-text"
                >
                    {prizes.title}
                </motion.h2>
                <motion.p
                    variants={fadeUp(0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center text-hackathon-gray/60 mb-4 text-sm sm:text-base"
                >
                    {prizes.subtitle}
                </motion.p>

                {/* Total Prize Pool Badge */}
                <motion.div
                    variants={fadeUp(0.15)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex justify-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 bg-hackathon-wine/10 border border-hackathon-wine/30 rounded-full px-6 py-2">
                        <span className="text-hackathon-wine font-bold text-sm sm:text-base">Total Prize Pool:</span>
                        <span className="text-hackathon-crimson font-extrabold text-lg sm:text-xl">{prizes.totalPrize}</span>
                    </div>
                </motion.div>

                {/* Top 3 — larger cards in a row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    {prizes.items.slice(0, 3).map((item, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: (idx) => ({
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.55, delay: 0.2 + idx * 0.1, ease: 'easeOut' },
                                }),
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.04, y: -4 }}
                            className={`relative glass-effect rounded-3xl p-8 flex flex-col items-center text-center
                                transition-all duration-300
                                ${i === 0
                                    ? 'border-2 border-yellow-400/60 shadow-lg shadow-yellow-400/10'
                                    : i === 1
                                        ? 'border border-gray-400/40 shadow-md shadow-gray-300/10'
                                        : 'border border-amber-700/30 shadow-md shadow-amber-900/10'
                                }`}
                        >
                            {/* Glow accent for 1st */}
                            {i === 0 && (
                                <div className="absolute inset-0 rounded-3xl pointer-events-none"
                                    style={{ boxShadow: 'inset 0 0 60px 0 rgba(250,204,21,0.07)' }} />
                            )}

                            <div className="text-5xl mb-3">{item.icon}</div>
                            <p className={`text-xs font-semibold uppercase tracking-widest mb-1
                                ${i === 0 ? 'text-yellow-400' : i === 1 ? 'text-gray-400' : 'text-amber-700'}`}>
                                {item.place}
                            </p>
                            <p className="text-hackathon-gray/70 text-sm mb-4">{item.label}</p>
                            <p className={`text-3xl sm:text-4xl font-extrabold
                                ${i === 0
                                    ? 'text-yellow-400'
                                    : i === 1
                                        ? 'text-gray-300'
                                        : 'text-amber-600'
                                }`}>
                                {item.amount}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Special Awards — smaller side-by-side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {prizes.items.slice(3).map((item, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: (idx) => ({
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, delay: 0.5 + idx * 0.1, ease: 'easeOut' },
                                }),
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.04, y: -3 }}
                            className="glass-effect rounded-2xl p-6 flex flex-col items-center text-center
                                border border-hackathon-wine/20 hover:border-hackathon-wine/40
                                transition-all duration-300"
                        >
                            <div className="text-4xl mb-2">{item.icon}</div>
                            <p className="text-hackathon-wine text-xs font-semibold uppercase tracking-widest mb-0.5">
                                {item.place}
                            </p>
                            <p className="text-hackathon-gray/60 text-xs mb-3">{item.label}</p>
                            <p className="text-2xl font-extrabold text-hackathon-wine">{item.amount}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Prizes;
