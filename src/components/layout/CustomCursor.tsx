'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const posRef = useRef({ x: 0, y: 0 });
    const targetRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number>();

    const animate = useCallback(() => {
        const lerp = 0.12;
        posRef.current.x += (targetRef.current.x - posRef.current.x) * lerp;
        posRef.current.y += (targetRef.current.y - posRef.current.y) * lerp;

        if (cursorRef.current) {
            cursorRef.current.style.transform = `translate(${posRef.current.x - 6}px, ${posRef.current.y - 6}px)`;
        }

        rafRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        // Disable on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        setIsVisible(true);

        const handleMouseMove = (e: MouseEvent) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[data-cursor="hover"]') ||
                target.closest('input') ||
                target.closest('textarea') ||
                target.closest('select')
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[data-cursor="hover"]') ||
                target.closest('input') ||
                target.closest('textarea') ||
                target.closest('select')
            ) {
                setIsHovering(false);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [animate]);

    if (!isVisible) return null;

    return (
        <div
            ref={cursorRef}
            className={`cursor-dot ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
            aria-hidden="true"
        />
    );
}
