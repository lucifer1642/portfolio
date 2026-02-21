'use client';

import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Research', href: '#research' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="border-t border-border bg-bg-secondary">
            <div className="max-w-container mx-auto px-5 md:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Column 1: Branding */}
                    <div>
                        <span className="font-display text-h3 font-bold text-text-primary">AKK</span>
                        <p className="mt-3 text-body-sm text-text-secondary max-w-xs">
                            Designed & Built by Ashwini Kumar Kar
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-mono text-label uppercase tracking-widest text-accent mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-body-sm text-text-secondary hover:text-accent transition-colors duration-fast"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Social */}
                    <div>
                        <h4 className="font-mono text-label uppercase tracking-widest text-accent mb-4">
                            Connect
                        </h4>
                        <div className="flex items-center gap-4">
                            <a
                                href={SOCIAL_LINKS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-md border border-border text-text-secondary hover:text-accent hover:border-accent transition-all duration-fast"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-md border border-border text-text-secondary hover:text-accent hover:border-accent transition-all duration-fast"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href={SOCIAL_LINKS.email}
                                className="p-2 rounded-md border border-border text-text-secondary hover:text-accent hover:border-accent transition-all duration-fast"
                                aria-label="Email"
                            >
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-caption text-text-tertiary font-mono">
                        © 2026 Ashwini Kumar Kar. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-caption text-text-tertiary hover:text-accent transition-colors duration-fast font-mono"
                    >
                        Back to top
                        <ArrowUp size={14} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
