'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-bg-primary relative overflow-hidden">
            {/* Subtle animated background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 text-center px-5">
                {/* Glitch 404 */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-[120px] md:text-[180px] font-extrabold text-text-primary leading-none relative"
                    style={{
                        textShadow: '2px 2px 0 var(--color-accent), -2px -2px 0 var(--color-error)',
                    }}
                >
                    404
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="font-body text-body-lg text-text-secondary mt-4 mb-8"
                >
                    Looks like this page got lost in latent space.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-text-inverse font-body font-semibold rounded-md hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-fast"
                    >
                        Back to Homepage
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
