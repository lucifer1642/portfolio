'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    // Scroll detection for glass effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Section-aware active state via IntersectionObserver
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -60% 0px', threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    // Dark/Light mode toggle
    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved === 'light') {
            setIsDark(false);
            document.documentElement.classList.add('light');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark((prev) => {
            const next = !prev;
            if (next) {
                document.documentElement.classList.remove('light');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.add('light');
                localStorage.setItem('theme', 'light');
            }
            return next;
        });
    };

    // Close mobile menu on escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMobileOpen(false);
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    // Lock body scroll and handle focus trap when mobile menu open
    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
            // Simple focus trap: focus the first close button when opened
            const closeBtn = document.getElementById('mobile-menu-close');
            if (closeBtn) closeBtn.focus();
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileOpen]);

    const scrollToSection = (href: string) => {
        setIsMobileOpen(false);
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ease-in-out',
                    isScrolled
                        ? 'glass border-b border-border-subtle'
                        : 'bg-transparent'
                )}
            >
                <div className="max-w-container mx-auto h-full flex items-center justify-between px-5 md:px-8">
                    {/* Logo */}
                    <Link
                        href="#hero"
                        onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
                        className="font-display text-h3 font-bold text-text-primary tracking-tight hover:text-accent transition-colors duration-fast"
                    >
                        AKK
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => scrollToSection(link.href)}
                                className="relative font-body text-body-sm tracking-wide uppercase"
                            >
                                <span
                                    className={cn(
                                        'transition-colors duration-fast',
                                        activeSection === link.href.replace('#', '')
                                            ? 'text-accent'
                                            : 'text-text-secondary hover:text-text-primary'
                                    )}
                                >
                                    {link.label}
                                </span>
                                {activeSection === link.href.replace('#', '') && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-md text-text-secondary hover:text-accent transition-colors duration-fast"
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="5" />
                                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                </svg>
                            ) : (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>
                            )}
                        </button>

                        {/* Download CV */}
                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-2 px-5 py-2.5 bg-accent text-text-inverse font-body text-body-sm font-semibold rounded-md hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-fast"
                        >
                            <Download size={16} />
                            Download CV
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsMobileOpen(true)}
                        className="md:hidden p-2 text-text-primary"
                        aria-label="Open navigation menu"
                        aria-expanded={isMobileOpen}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-bg-primary/95 backdrop-blur-xl md:hidden"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-bg-secondary border-l border-border p-8 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                id="mobile-menu-close"
                                onClick={() => setIsMobileOpen(false)}
                                className="self-end p-2 text-text-secondary hover:text-text-primary"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>

                            {/* Mobile nav links */}
                            <div className="flex-1 flex flex-col justify-center gap-6">
                                {NAV_LINKS.map((link, i) => (
                                    <motion.button
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.06 }}
                                        onClick={() => scrollToSection(link.href)}
                                        className={cn(
                                            'text-left font-display text-h3 font-semibold transition-colors',
                                            activeSection === link.href.replace('#', '')
                                                ? 'text-accent'
                                                : 'text-text-primary hover:text-accent'
                                        )}
                                    >
                                        {link.label}
                                    </motion.button>
                                ))}

                                {/* Download CV mobile */}
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="flex items-center gap-2 px-5 py-3 bg-accent text-text-inverse font-body font-semibold rounded-md w-fit mt-4"
                                >
                                    <Download size={16} />
                                    Download CV
                                </a>
                            </div>

                            {/* Social icons at bottom */}
                            <div className="flex items-center gap-6 pt-8 border-t border-border">
                                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                                    <Linkedin size={20} />
                                </a>
                                <a href={SOCIAL_LINKS.email} className="text-text-secondary hover:text-accent transition-colors">
                                    <Mail size={20} />
                                </a>

                                {/* Theme toggle mobile */}
                                <button onClick={toggleTheme} className="ml-auto p-2 text-text-secondary hover:text-accent" aria-label="Toggle theme">
                                    {isDark ? '☀️' : '🌙'}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
