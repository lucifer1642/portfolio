'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimateInView } from '@/components/motion/AnimateInView';
import { LEADERSHIP_ENTRIES } from '@/lib/constants';
import { Users } from 'lucide-react';

export function Leadership() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="leadership" className="section-padding">
            <div className="max-w-container mx-auto px-5 md:px-8">
                {/* Section Label */}
                <AnimateInView>
                    <p className="font-mono text-label uppercase tracking-[0.15em] text-accent mb-2">
                        LEADERSHIP
                    </p>
                    <h2 className="font-display text-h2-mobile md:text-h2 text-text-primary mb-12">
                        Leading from the Front
                    </h2>
                </AnimateInView>

                {/* Event cards */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {LEADERSHIP_ENTRIES.map((entry, i) => (
                        <motion.div
                            key={entry.event}
                            initial={{ opacity: 0, y: 32 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-bg-secondary border border-border rounded-lg p-8 hover:shadow-md hover:border-accent/30 transition-all duration-normal"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                                    <Users size={20} className="text-accent" />
                                </div>
                                <div>
                                    <p className="font-mono text-label uppercase tracking-wide text-accent mb-1">
                                        {entry.title}
                                    </p>
                                    <h3 className="font-display text-h3-mobile md:text-h3 text-text-primary mb-2">
                                        {entry.event}
                                    </h3>
                                    <p className="font-body text-body-sm text-text-secondary mb-4">
                                        {entry.description}
                                    </p>

                                    {/* Stat callout */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-md">
                                        <span className="font-mono text-body font-bold text-accent">
                                            {entry.stat}
                                        </span>
                                        <span className="font-mono text-caption text-text-tertiary">
                                            {entry.statLabel}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
