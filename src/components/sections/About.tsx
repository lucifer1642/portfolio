'use client';

import { AnimateInView } from '@/components/motion/AnimateInView';
import { ABOUT_BIO, ABOUT_PHILOSOPHY, ABOUT_STATS } from '@/lib/constants';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { GitHubCalendar } from 'react-github-calendar';

function StatCard({ value, label, suffix, decimals }: { value: number; label: string; suffix: string; decimals: number }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <div
            ref={ref}
            className="bg-bg-tertiary border-l-[3px] border-l-accent p-6 rounded-md hover:shadow-glow hover:-translate-y-1 transition-all duration-200 ease-out group"
        >
            <div className="font-mono text-stat-mobile md:text-stat text-accent font-bold">
                {inView ? (
                    <CountUp end={value} duration={1.5} decimals={decimals} suffix={suffix} />
                ) : (
                    <span>0{suffix}</span>
                )}
            </div>
            <div className="font-body text-[13px] text-text-secondary mt-2">{label}</div>
        </div>
    );
}

export function About() {
    return (
        <section id="about" className="section-padding">
            <div className="max-w-container mx-auto px-5 md:px-8">
                {/* Section Label */}
                <AnimateInView>
                    <p className="font-mono text-label uppercase tracking-[0.15em] text-accent mb-2">
                        ABOUT
                    </p>
                    <h2 className="font-display text-h2-mobile md:text-h2 text-text-primary mb-12">
                        Who I Am
                    </h2>
                </AnimateInView>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                    {/* Left — Text */}
                    <div className="md:col-span-7">
                        <AnimateInView animation="fadeLeft">
                            <p className="font-body text-body-lg text-text-secondary leading-relaxed mb-6">
                                {ABOUT_BIO}
                            </p>
                            <div className="mt-8 border-l-[3px] border-l-accent pl-5 py-1 bg-bg-secondary/50 rounded-r-sm">
                                <p className="font-mono text-label uppercase tracking-[0.15em] text-accent mb-3">
                                    What drives me
                                </p>
                                <p className="font-body text-body text-text-secondary">
                                    {ABOUT_PHILOSOPHY}
                                </p>
                            </div>
                        </AnimateInView>
                    </div>

                    {/* Right — Stats */}
                    <div className="md:col-span-5">
                        <AnimateInView animation="fadeRight">
                            <div className="grid grid-cols-2 gap-4">
                                {ABOUT_STATS.map((stat) => (
                                    <StatCard
                                        key={stat.label}
                                        value={stat.value}
                                        label={stat.label}
                                        suffix={stat.suffix}
                                        decimals={stat.decimals}
                                    />
                                ))}
                            </div>
                        </AnimateInView>
                    </div>
                </div>

                {/* GitHub Calendar */}
                <div className="mt-16 md:mt-24">
                    <AnimateInView animation="fadeUp">
                        <h3 className="font-display text-[24px] font-semibold text-text-primary mb-6">
                            Open Source Contributions
                        </h3>
                        <div className="p-6 md:p-8 bg-bg-secondary border border-border rounded-lg overflow-x-auto hover:border-accent/30 transition-colors duration-normal">
                            <GitHubCalendar
                                username="lucifer1642"
                                colorScheme="dark"
                                theme={{
                                    dark: ['#1A2235', '#00D4FF20', '#00D4FF60', '#00D4FF90', '#00D4FF'],
                                }}
                                blockSize={12}
                                blockMargin={4}
                                fontSize={12}
                            />
                        </div>
                    </AnimateInView>
                </div>
            </div>
        </section>
    );
}
