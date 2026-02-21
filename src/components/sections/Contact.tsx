'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AnimateInView } from '@/components/motion/AnimateInView';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(100),
    email: z.string().email('Please enter a valid email').max(255),
    subject: z.string().min(3, 'Subject must be at least 3 characters').max(200),
    message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
});

type ContactFormData = z.infer<typeof contactSchema>;

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
    const [formState, setFormState] = useState<FormState>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setFormState('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const result = await response.json().catch(() => ({}));
                if (response.status === 429) {
                    throw new Error('Too many requests. Please try again later.');
                }
                throw new Error(result.message || 'Something went wrong. Please try again.');
            }

            setFormState('success');
            reset();
        } catch (err: any) {
            setFormState('error');
            setErrorMessage(err.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <section id="contact" className="section-padding">
            <div className="max-w-container mx-auto px-5 md:px-8">
                {/* Section Label */}
                <AnimateInView>
                    <p className="font-mono text-label uppercase tracking-[0.15em] text-accent mb-2">
                        CONTACT
                    </p>
                    <h2 className="font-display text-h2-mobile md:text-h2 text-text-primary mb-12">
                        Get in Touch
                    </h2>
                </AnimateInView>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {/* Left — Copy + Social */}
                    <AnimateInView animation="fadeLeft">
                        <div>
                            <p className="font-body text-body-lg text-text-secondary mb-8">
                                Have a project in mind, a research collaboration to discuss, or just want to say hello?
                                I&apos;d love to hear from you. Drop me a message and I&apos;ll get back to you as soon as possible.
                            </p>

                            <div className="space-y-4">
                                <a
                                    href={SOCIAL_LINKS.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-fast group"
                                >
                                    <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-fast">
                                        <Github size={18} />
                                    </div>
                                    <span className="font-body text-body-sm">github.com/lucifer1642</span>
                                </a>

                                <a
                                    href={SOCIAL_LINKS.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-fast group"
                                >
                                    <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-fast">
                                        <Linkedin size={18} />
                                    </div>
                                    <span className="font-body text-body-sm">linkedin.com/in/ashwinikumarkar</span>
                                </a>

                                <a
                                    href={SOCIAL_LINKS.email}
                                    className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-fast group"
                                >
                                    <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-fast">
                                        <Mail size={18} />
                                    </div>
                                    <span className="font-body text-body-sm">ashwinikumarkar16@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </AnimateInView>

                    {/* Right — Form */}
                    <AnimateInView animation="fadeRight">
                        <AnimatePresence mode="wait">
                            {formState === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                                    className="flex flex-col items-center justify-center h-full min-h-[400px] bg-bg-secondary border border-border rounded-lg p-8"
                                >
                                    <CheckCircle size={48} className="text-success mb-4" />
                                    <h3 className="font-display text-h3 text-text-primary mb-2">Message Sent!</h3>
                                    <p className="font-body text-body text-text-secondary text-center">
                                        I&apos;ll get back to you soon.
                                    </p>
                                    <button
                                        onClick={() => setFormState('idle')}
                                        className="mt-6 px-5 py-2.5 border border-border text-text-secondary hover:text-accent hover:border-accent rounded-md font-body text-body-sm transition-all duration-fast"
                                    >
                                        Send Another
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-5"
                                    noValidate
                                >
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block font-mono text-label uppercase tracking-wide text-text-tertiary mb-2">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            {...register('name')}
                                            className="w-full px-4 py-3 bg-surface border border-border rounded-sm text-body text-text-primary font-body placeholder:text-text-tertiary focus:border-accent focus:outline-none transition-colors duration-fast"
                                            placeholder="Your name"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-caption text-error flex items-center gap-1">
                                                <AlertCircle size={12} />
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block font-mono text-label uppercase tracking-wide text-text-tertiary mb-2">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            {...register('email')}
                                            className="w-full px-4 py-3 bg-surface border border-border rounded-sm text-body text-text-primary font-body placeholder:text-text-tertiary focus:border-accent focus:outline-none transition-colors duration-fast"
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-caption text-error flex items-center gap-1">
                                                <AlertCircle size={12} />
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label htmlFor="subject" className="block font-mono text-label uppercase tracking-wide text-text-tertiary mb-2">
                                            Subject
                                        </label>
                                        <input
                                            id="subject"
                                            type="text"
                                            {...register('subject')}
                                            className="w-full px-4 py-3 bg-surface border border-border rounded-sm text-body text-text-primary font-body placeholder:text-text-tertiary focus:border-accent focus:outline-none transition-colors duration-fast"
                                            placeholder="What's this about?"
                                        />
                                        {errors.subject && (
                                            <p className="mt-1 text-caption text-error flex items-center gap-1">
                                                <AlertCircle size={12} />
                                                {errors.subject.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block font-mono text-label uppercase tracking-wide text-text-tertiary mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            {...register('message')}
                                            className="w-full px-4 py-3 bg-surface border border-border rounded-sm text-body text-text-primary font-body placeholder:text-text-tertiary focus:border-accent focus:outline-none transition-colors duration-fast resize-none"
                                            placeholder="Tell me about your project or idea..."
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-caption text-error flex items-center gap-1">
                                                <AlertCircle size={12} />
                                                {errors.message.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Error message */}
                                    {formState === 'error' && (
                                        <div className="flex items-center gap-2 p-3 bg-error/10 border border-error/20 rounded-md text-body-sm text-error">
                                            <AlertCircle size={16} />
                                            {errorMessage}
                                        </div>
                                    )}

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={formState === 'loading'}
                                        className="flex items-center justify-center gap-2 w-full px-7 py-[14px] bg-accent text-text-inverse font-body font-semibold rounded-md hover:brightness-110 hover:-translate-y-[1px] hover:shadow-glow active:scale-[0.98] transition-all duration-fast disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                                    >
                                        {formState === 'loading' ? (
                                            <>
                                                <Loader2 size={18} className="animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </AnimateInView>
                </div>
            </div>
        </section>
    );
}
