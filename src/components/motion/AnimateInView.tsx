'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type AnimationType = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale';

interface AnimateInViewProps {
    children: ReactNode;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

const variants = {
    fadeUp: {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -32 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 32 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.94 },
        visible: { opacity: 1, scale: 1 },
    },
};

export function AnimateInView({
    children,
    animation = 'fadeUp',
    delay = 0,
    duration = 0.6,
    className,
    once = true,
}: AnimateInViewProps) {
    const [ref, inView] = useInView({
        triggerOnce: once,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants[animation]}
            transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1], // ease-out-expo
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Stagger Children Wrapper ────────────────────────────────
interface StaggerChildrenProps {
    children: ReactNode;
    stagger?: number;
    className?: string;
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const staggerItem = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export function StaggerChildren({ children, stagger = 0.08, className }: StaggerChildrenProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: stagger },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export { staggerItem };
