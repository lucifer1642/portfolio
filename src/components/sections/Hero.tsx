'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ParticleField } from '@/components/three/ParticleField';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';
import { SOCIAL_LINKS, HERO_TAGLINE } from '@/lib/constants';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 1 },
    visible: (custom: { delay: number; scale?: boolean }) => ({
        opacity: 1,
        y: 0,
        scale: custom.scale ? 1 : 1,
        transition: {
            delay: custom.delay,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
    }),
};
// Name special case
const nameVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: 0.7,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
    },
};

export function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);
    const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

    const scrollToProjects = () => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToAbout = () => {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Particle background */}
            <ParticleField />

            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-transparent to-bg-primary z-[1]" />

            {/* Content */}
            <motion.div
                className="relative z-10 text-center px-5 md:px-8 max-w-4xl mx-auto"
                style={{ y, opacity }}
                initial="hidden"
                animate="visible"
            >
                {/* Greeting */}
                <motion.p
                    variants={itemVariants}
                    custom={{ delay: 0.5 }}
                    className="font-body text-h4 text-text-secondary tracking-wide mb-4"
                >
                    Hi, I&apos;m
                </motion.p>

                {/* Name */}
                <motion.h1
                    variants={nameVariants}
                    className="font-display text-display-mobile md:text-display text-text-primary mb-6"
                >
                    Ashwini Kumar Kar
                </motion.h1>

                {/* Typewriter */}
                <motion.div
                    variants={itemVariants}
                    custom={{ delay: 1.0 }}
                    className="font-mono text-[24px] text-accent mb-6 h-[1.3em]"
                >
                    <TypeAnimation
                        sequence={[
                            'ML Engineer', 2000,
                            'Researcher', 2000,
                            'Patent Holder', 2000,
                            'Builder', 2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        cursor={true}
                    />
                </motion.div>

                {/* Tagline */}
                <motion.p
                    variants={itemVariants}
                    custom={{ delay: 1.1 }}
                    className="font-body text-body-lg text-text-secondary max-w-xl mx-auto mb-10"
                >
                    {HERO_TAGLINE}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={itemVariants}
                    custom={{ delay: 1.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <button
                        onClick={scrollToProjects}
                        className="flex items-center gap-2 px-7 py-[14px] bg-accent text-text-inverse font-body font-semibold rounded-md hover:brightness-110 hover:-translate-y-[1px] hover:shadow-glow active:scale-[0.98] transition-all duration-fast"
                    >
                        View My Work
                        <ChevronDown size={18} />
                    </button>

                    <a
                        href="/resume.pdf"
                        download
                        className="flex items-center gap-2 px-5 py-[10px] border border-border text-text-primary font-body font-semibold rounded-md hover:border-accent hover:text-accent hover:bg-accent-subtle transition-all duration-fast bg-transparent"
                    >
                        <Download size={18} />
                        Download CV
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    variants={itemVariants}
                    custom={{ delay: 1.5 }}
                    className="flex items-center justify-center gap-5"
                >
                    <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent hover:bg-accent-subtle hover:scale-110 transition-all duration-fast"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent hover:bg-accent-subtle hover:scale-110 transition-all duration-fast"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href={SOCIAL_LINKS.email}
                        className="p-3 rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent hover:bg-accent-subtle hover:scale-110 transition-all duration-fast"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.button
                onClick={scrollToAbout}
                style={{ opacity: scrollIndicatorOpacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow"
                aria-label="Scroll to About section"
            >
                <ChevronDown size={24} className="text-text-tertiary" />
            </motion.button>
        </section>
    );
}
