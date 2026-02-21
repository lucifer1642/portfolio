'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimateInView } from '@/components/motion/AnimateInView';
import { EXPERIENCE_ENTRIES } from '@/lib/constants';
import { ChevronDown, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

function ExperienceCard({
    entry,
    isLeft,
    index,
}: {
    entry: (typeof EXPERIENCE_ENTRIES)[number];
    isLeft: boolean;
    index: number;
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <AnimateInView
            animation={isLeft ? 'fadeRight' : 'fadeLeft'}
            delay={0.1}
            className={cn(
                "w-full md:w-[calc(50%-2rem)] lg:w-[calc(50%-3rem)]",
                isLeft ? "md:pr-0" : "md:pl-0 ml-auto"
            )}
        >
            <div className="bg-bg-secondary border border-border rounded-lg p-6 hover:border-accent/30 hover:shadow-md transition-all duration-300 ease-out group">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Briefcase size={16} className="text-accent" />
                            <span className="font-mono text-label uppercase tracking-wide text-accent">
                                {entry.period}
                            </span>
                        </div>
                        <h3 className="font-display text-[20px] font-bold text-text-primary">
                            {entry.role}
                        </h3>
                        <p className="font-body text-body-sm italic text-text-secondary mt-1">
                            {entry.company}
                        </p>
                    </div>
                </div>

                {/* Expandable bullets */}
                <div className="mt-4">
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-2 overflow-hidden"
                            >
                                {entry.bullets.map((bullet, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex gap-2 text-body-sm text-text-secondary"
                                    >
                                        <span className="text-accent mt-1 shrink-0">▹</span>
                                        <span>{bullet}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-1 mt-3 text-body-sm text-accent hover:text-accent-dim font-mono transition-colors duration-fast"
                    >
                        {isExpanded ? 'Show Less' : 'Show more'}
                        <ChevronDown
                            size={14}
                            className={cn(
                                'transition-transform duration-normal',
                                isExpanded && 'rotate-180'
                            )}
                        />
                    </button>
                </div>
            </div>
        </AnimateInView>
    );
}

function ExperienceDot({ index }: { index: number }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <div
            ref={ref}
            className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-bg-primary z-10 mt-6 md:mt-8"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: [0, 1.5, 1] } : { scale: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-3 h-3 rounded-full bg-accent shadow-glow"
            />
        </div>
    );
}

export function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" className="section-padding">
            <div className="max-w-container mx-auto px-5 md:px-8">
                {/* Section Label */}
                <AnimateInView>
                    <p className="font-mono text-label uppercase tracking-[0.15em] text-accent mb-2">
                        EXPERIENCE
                    </p>
                    <h2 className="font-display text-h2-mobile md:text-h2 text-text-primary mb-12">
                        Where I&apos;ve Worked
                    </h2>
                </AnimateInView>

                {/* Timeline */}
                <div ref={containerRef} className="relative max-w-4xl mx-auto pl-8 md:pl-0">
                    {/* SVG Line Background */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border-subtle -translate-x-1/2" />

                    {/* SVG Line Active (Animated) */}
                    <motion.div
                        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-accent origin-top -translate-x-1/2 shadow-glow"
                        style={{ scaleY }}
                    />

                    <div className="space-y-12 md:space-y-24">
                        {EXPERIENCE_ENTRIES.map((entry, i) => {
                            const isLeft = i % 2 === 0;
                            return (
                                <div key={entry.id} className="relative flex flex-col md:flex-row justify-between w-full">
                                    {/* Timeline Dot */}
                                    <ExperienceDot index={i} />

                                    {/* Left Spacer (Desktop Only) */}
                                    {isLeft ? (
                                        <ExperienceCard entry={entry} isLeft={true} index={i} />
                                    ) : (
                                        <div className="hidden md:block w-[calc(50%-2rem)] lg:w-[calc(50%-3rem)]" />
                                    )}

                                    {/* Right Spacer (Desktop Only) */}
                                    {!isLeft ? (
                                        <ExperienceCard entry={entry} isLeft={false} index={i} />
                                    ) : (
                                        <div className="hidden md:block w-[calc(50%-2rem)] lg:w-[calc(50%-3rem)]" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
