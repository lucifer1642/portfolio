'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { AnimateInView } from '@/components/motion/AnimateInView';
import { PROJECTS } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';
import Image from 'next/image';

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, rotateY: 90 }}
            animate={inView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: '1000px' }}
        >
            <div
                className="group bg-bg-secondary border border-border rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--project-accent)]"
                style={{
                    ['--project-accent' as string]: project.accent,
                    boxShadow: inView ? 'var(--hover-shadow, none)' : 'none'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.setProperty('--hover-shadow', project.glow);
                    e.currentTarget.style.boxShadow = project.glow;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                }}
            >
                {/* Top accent bar */}
                <div
                    className="h-[3px] w-full"
                    style={{ background: project.accent }}
                />

                {/* Project Image */}
                {project.image && (
                    <div className="relative w-full h-48 sm:h-56 overflow-hidden border-b border-border">
                        <Image
                            src={project.image}
                            alt={`${project.title} visualization`}
                            fill
                            className="object-cover transition-transform duration-slower group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-[0.85]" />
                    </div>
                )}

                <div className="p-8">
                    {/* Status badge */}
                    <div className="flex items-center justify-end mb-4">
                        {project.status === 'active' ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-success/10 text-success text-label font-mono rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                                ACTIVE
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface border border-border-subtle text-text-secondary text-label font-mono rounded-full uppercase">
                                {project.status}
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-[24px] font-bold text-text-primary mb-2">
                        {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="font-body text-[16px] text-text-secondary mb-3">
                        {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="font-body text-[15px] text-text-secondary mb-4 line-clamp-3">
                        {project.description}
                    </p>

                    {/* Metric badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                        style={{
                            background: `${project.accent}15`,
                            boxShadow: `0 0 10px ${project.accent}20`
                        }}
                    >
                        <span
                            className="font-mono text-body font-bold"
                            style={{ color: project.accent }}
                        >
                            {project.metric}
                        </span>
                        <span className="font-mono text-caption text-text-tertiary">
                            {project.metricLabel}
                        </span>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.techTags.map((tag) => (
                            <Tag key={tag} className="text-[11px] px-2 py-1">
                                {tag}
                            </Tag>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 font-body text-body-sm font-semibold transition-colors duration-fast group/link"
                        style={{ color: project.accent }}
                    >
                        Case Study
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-fast group-hover/link:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export function Projects() {
    return (
        <section id="projects" className="section-padding">
            <div className="max-w-container mx-auto px-5 md:px-8">
                {/* Section Label */}
                <AnimateInView>
                    <p className="font-mono text-label uppercase tracking-[0.15em] text-accent mb-2">
                        PROJECTS
                    </p>
                    <h2 className="font-display text-h2-mobile md:text-h2 text-text-primary mb-4">
                        What I&apos;ve Built
                    </h2>
                    <p className="font-body text-body-lg text-text-secondary max-w-2xl mb-12">
                        Bridging the gap between theoretical research and production-grade intelligent systems.
                    </p>
                </AnimateInView>

                {/* 3-card grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, i) => (
                        <ProjectCard key={project.slug} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
