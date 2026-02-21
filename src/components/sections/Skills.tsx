'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimateInView } from '@/components/motion/AnimateInView';
import { SKILL_CATEGORIES } from '@/lib/constants';
import { Tag } from '@/components/ui/Tag';

export function Skills() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="skills" className="section-padding">
            <div className="max-w-container mx-auto px-5 md:px-8">
                {/* Section Label */}
                <AnimateInView>
                    <p className="font-mono text-label uppercase tracking-[0.15em] text-accent mb-2">
                        SKILLS
                    </p>
                    <h2 className="font-display text-h2-mobile md:text-h2 text-text-primary mb-12">
                        Technical Arsenal
                    </h2>
                </AnimateInView>

                {/* Skill category cards */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.08 },
                        },
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {SKILL_CATEGORIES.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={{
                                hidden: { opacity: 0, y: 24 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                                },
                            }}
                            className="bg-bg-secondary border border-border rounded-lg p-6 hover:border-accent/30 hover:shadow-md transition-all duration-normal"
                        >
                            <h3 className="font-display text-h3-mobile md:text-h3 text-text-primary mb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <Tag
                                        key={skill}
                                        variant={category.title === 'Core Competencies' ? 'core' : 'default'}
                                    >
                                        {skill}
                                    </Tag>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
