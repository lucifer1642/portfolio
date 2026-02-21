'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimateInView } from '@/components/motion/AnimateInView';
import { RESEARCH_ITEMS } from '@/lib/constants';
import { FileText, Award } from 'lucide-react';

export function Research() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="research" className="section-padding">
            <div className="max-w-container mx-auto px-5 md:px-8">
                {/* Section Label */}
                <AnimateInView>
                    <p className="font-mono text-label uppercase tracking-[0.15em] text-accent mb-2">
                        RESEARCH & PATENTS
                    </p>
                    <h2 className="font-display text-h2-mobile md:text-h2 text-text-primary mb-12">
                        Published Work
                    </h2>
                </AnimateInView>

                {/* Two cards */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {RESEARCH_ITEMS.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, rotate: 2, y: 24 }}
                            animate={inView ? { opacity: 1, rotate: 0, y: 0 } : { opacity: 0, rotate: 2, y: 24 }}
                            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-bg-secondary border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-normal group"
                        >
                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                                style={{ background: `${item.accent}15` }}
                            >
                                {item.type === 'patent' ? (
                                    <Award size={24} style={{ color: item.accent }} />
                                ) : (
                                    <FileText size={24} style={{ color: item.accent }} />
                                )}
                            </div>

                            {/* Tag */}
                            <span
                                className="inline-block px-3 py-1 rounded-full font-mono text-label tracking-wide mb-4"
                                style={{
                                    background: `${item.accent}15`,
                                    color: item.accent,
                                }}
                            >
                                {item.tag}
                            </span>

                            {/* Title */}
                            <h3 className="font-display text-h3-mobile md:text-h3 text-text-primary mb-3">
                                {item.title}
                            </h3>

                            {/* Venue & Date */}
                            <p className="font-body text-body-sm text-text-secondary mb-1">
                                {item.venue}
                            </p>
                            <p className="font-mono text-caption text-text-tertiary">
                                {item.date}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
