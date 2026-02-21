'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimateInView } from '@/components/motion/AnimateInView';
import { ACHIEVEMENTS } from '@/lib/constants';
import {
    GraduationCap,
    Heart,
    Award,
    Shield,
    BarChart3,
    Brain,
    type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
    GraduationCap,
    Heart,
    Award,
    Shield,
    BarChart3,
    Brain,
};

export function Achievements() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="achievements" className="section-padding">
            <div className="max-w-container mx-auto px-5 md:px-8">
                {/* Section Label */}
                <AnimateInView>
                    <p className="font-mono text-label uppercase tracking-[0.15em] text-accent mb-2">
                        ACHIEVEMENTS
                    </p>
                    <h2 className="font-display text-h2-mobile md:text-h2 text-text-primary mb-12">
                        Recognition & Certifications
                    </h2>
                </AnimateInView>

                {/* Achievement list */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.06 },
                        },
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {ACHIEVEMENTS.map((achievement) => {
                        const Icon = iconMap[achievement.icon] || Award;
                        return (
                            <motion.div
                                key={achievement.title}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                                    },
                                }}
                                className="flex items-start gap-4 p-5 bg-bg-secondary border border-border rounded-lg hover:border-accent/30 hover:shadow-md transition-all duration-normal"
                            >
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                                    <Icon size={18} className="text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-display text-body font-semibold text-text-primary">
                                        {achievement.title}
                                    </h4>
                                    <p className="font-body text-body-sm text-text-secondary mt-1">
                                        {achievement.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
