'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import type { Project } from '@/lib/constants';

interface ProjectPageLayoutProps {
    project: Project;
}

export function ProjectPageLayout({ project }: ProjectPageLayoutProps) {
    return (
        <main className="min-h-screen bg-bg-primary pt-24 pb-16">
            <div className="max-w-container mx-auto px-5 md:px-8">
                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 text-body-sm font-mono text-text-tertiary mb-8"
                >
                    <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/#projects" className="hover:text-accent transition-colors">Projects</Link>
                    <span>/</span>
                    <span className="text-text-secondary">{project.title}</span>
                </motion.div>

                {/* Back button */}
                <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-body-sm text-text-secondary hover:text-accent transition-colors mb-10 font-body"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>
                </motion.div>

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative mb-16 rounded-2xl overflow-hidden border border-border bg-bg-secondary"
                >
                    {/* Background Visual */}
                    {project.image && (
                        <div className="absolute inset-0 z-0 select-none pointer-events-none">
                            <Image
                                src={project.image}
                                alt={`${project.title} background visual`}
                                fill
                                className="object-cover opacity-20 mix-blend-screen"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-bg-secondary/80 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-bg-secondary via-bg-secondary/60 to-transparent" />
                        </div>
                    )}

                    <div className="relative z-10 p-8 md:p-12 lg:p-16">
                        {/* Status badge */}
                        {project.status === 'active' && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-success/10 text-success text-label font-mono rounded-full mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                                IN PROGRESS
                            </span>
                        )}

                        <h1 className="font-display text-h1-mobile md:text-h1 text-text-primary mb-4 max-w-4xl">
                            {project.title}
                        </h1>
                        <p className="font-body text-body-lg text-text-secondary max-w-2xl mb-8">
                            {project.tagline}
                        </p>

                        {/* Tags & Actions */}
                        <div className="flex flex-wrap items-center gap-4 mb-10">
                            {project.techTags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-bg-tertiary border border-border-subtle rounded-sm font-mono text-label text-text-secondary"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Metrics bar & Actions */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-border/50 pt-8">
                            <div className="flex flex-wrap items-center gap-6">
                                <div
                                    className="flex items-center gap-2 px-4 py-2 rounded-md"
                                    style={{ background: `${project.accent}15` }}
                                >
                                    <span className="font-mono text-h3 font-bold" style={{ color: project.accent }}>
                                        {project.metric}
                                    </span>
                                    <span className="font-mono text-body-sm text-text-tertiary">
                                        {project.metricLabel}
                                    </span>
                                </div>
                                <span className="font-mono text-body-sm text-text-tertiary">
                                    {project.period}
                                </span>
                            </div>

                            <a
                                href="#"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-body text-body-sm font-semibold text-bg-primary transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
                                style={{ background: project.accent, boxShadow: `0 4px 14px ${project.accent}40` }}
                            >
                                {project.status === 'active' ? 'View Patent' : 'View Source'}
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Content sections */}
                <div className="max-w-3xl space-y-16">
                    {/* Problem Statement */}
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h2 className="font-display text-h2-mobile md:text-h2 text-text-primary mb-6">
                            Problem Statement
                        </h2>
                        <p className="font-body text-body-lg text-text-secondary leading-relaxed">
                            {project.problemStatement}
                        </p>
                    </motion.section>

                    {/* Solution Architecture */}
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h2 className="font-display text-h2-mobile md:text-h2 text-text-primary mb-6">
                            Solution Architecture
                        </h2>
                        <p className="font-body text-body-lg text-text-secondary leading-relaxed">
                            {project.solutionArchitecture}
                        </p>
                    </motion.section>

                    {/* Tech Stack */}
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <h2 className="font-display text-h2-mobile md:text-h2 text-text-primary mb-6">
                            Tech Stack
                        </h2>
                        <p className="font-body text-body-lg text-text-secondary leading-relaxed mb-4">
                            {project.techStack}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.techTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 bg-surface border border-border-subtle rounded-sm font-mono text-label text-text-secondary"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.section>

                    {/* Results */}
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <h2 className="font-display text-h2-mobile md:text-h2 text-text-primary mb-6">
                            Results & Metrics
                        </h2>
                        <div
                            className="p-6 rounded-lg border-l-4 mb-6"
                            style={{
                                borderColor: project.accent,
                                background: `${project.accent}08`,
                            }}
                        >
                            <p className="font-body text-body-lg text-text-secondary leading-relaxed">
                                {project.results}
                            </p>
                        </div>
                    </motion.section>

                    {/* Challenges */}
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <h2 className="font-display text-h2-mobile md:text-h2 text-text-primary mb-6">
                            Challenges & Learnings
                        </h2>
                        <p className="font-body text-body-lg text-text-secondary leading-relaxed">
                            {project.challenges}
                        </p>
                    </motion.section>
                </div>

                {/* Back to projects */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 pt-10 border-t border-border"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary hover:text-accent hover:border-accent rounded-md font-body text-body-sm transition-all duration-fast"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
