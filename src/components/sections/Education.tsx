'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimateInView } from '@/components/motion/AnimateInView';
import { EDUCATION_ENTRIES } from '@/lib/constants';
import { GraduationCap, MapPin } from 'lucide-react';

export function Education() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="education" className="section-padding">
            <div className="max-w-container mx-auto px-5 md:px-8">
                {/* Section Label */}
                <AnimateInView>
                    <p className="font-mono text-label uppercase tracking-[0.15em] text-accent mb-2">
                        EDUCATION
                    </p>
                    <h2 className="font-display text-h2-mobile md:text-h2 text-text-primary mb-12">
                        Academic Journey
                    </h2>
                </AnimateInView>

                {/* Education cards */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 },
                        },
                    }}
                    className="max-w-2xl mx-auto space-y-6"
                >
                    {EDUCATION_ENTRIES.map((entry) => (
                        <motion.div
                            key={entry.institution}
                            variants={{
                                hidden: { opacity: 0, y: 24 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                                },
                            }}
                            className="bg-bg-secondary border border-border rounded-lg p-6 md:p-8 hover:border-accent/30 hover:shadow-md transition-all duration-normal"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                                    <GraduationCap size={20} className="text-accent" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-display text-h3-mobile md:text-h3 text-text-primary">
                                        {entry.institution}
                                    </h3>
                                    <p className="font-body text-body text-text-secondary italic mt-1">
                                        {entry.degree}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-4 mt-3">
                                        <span className="font-mono text-caption text-text-tertiary">
                                            {entry.period}
                                        </span>
                                        <span className="flex items-center gap-1 font-mono text-caption text-text-tertiary">
                                            <MapPin size={12} />
                                            {entry.location}
                                        </span>
                                        {entry.grade && (
                                            <span className="px-2 py-0.5 bg-accent/10 text-accent font-mono text-label rounded">
                                                {entry.grade}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
