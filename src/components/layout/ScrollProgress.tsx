'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SECTION_IDS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function ScrollProgress() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = SECTION_IDS.indexOf(entry.target.id as typeof SECTION_IDS[number]);
                        if (idx !== -1) setActiveIndex(idx);
                    }
                });
            },
            { rootMargin: '-40% 0px -60% 0px', threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
            {SECTION_IDS.map((id, i) => (
                <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="group relative p-1"
                    aria-label={`Scroll to ${id}`}
                >
                    <motion.div
                        className={cn(
                            'rounded-full transition-all duration-normal',
                            i === activeIndex
                                ? 'w-3 h-3 bg-accent shadow-glow'
                                : 'w-2 h-2 bg-border hover:bg-text-secondary'
                        )}
                        layout
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />

                    {/* Tooltip */}
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-fast text-caption font-mono text-text-secondary whitespace-nowrap bg-bg-tertiary px-2 py-1 rounded pointer-events-none">
                        {id}
                    </span>
                </button>
            ))}
        </div>
    );
}
