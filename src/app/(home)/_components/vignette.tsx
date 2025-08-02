"use client";

export default function Vignette() {
    return (
        <div
            className="fixed inset-0 w-full h-full z-10 pointer-events-none"
            style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
                mixBlendMode: 'multiply',
            }}
        />
    );
}
