import { cn } from '@/lib/utils';
import React from 'react';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: 'default' | 'core';
}

export function Tag({ children, variant = 'default', className, ...props }: TagProps) {
    return (
        <span
            className={cn(
                'shimmer-hover rounded-sm font-mono tracking-wide transition-all duration-200 ease-out cursor-default',
                variant === 'default'
                    ? 'px-3 py-1.5 bg-surface border border-border-subtle text-label text-text-secondary hover:text-accent hover:border-accent hover:bg-accent-subtle'
                    : 'px-4 py-2 bg-accent/10 border border-accent/30 text-body-sm text-accent shadow-glow font-bold hover:bg-accent/20 hover:border-accent',
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
