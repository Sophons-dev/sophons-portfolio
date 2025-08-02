"use client";
import React, { useState, useEffect } from 'react';


const Stars = () => {
    const [stars, setStars] = useState<React.ReactElement[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const generatedStars = Array.from({ length: 50 }).map((_, i) => {
            const style = {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
            };
            return <div key={i} className="absolute rounded-full bg-white twinkle" style={style} />;
        });
        setStars(generatedStars);
    }, []);

    // Don't render anything on the server to avoid hydration mismatch
    if (!mounted) {
        return <div className="absolute inset-0 z-[5]" />;
    }

    return <div className="absolute inset-0 z-[5]">{stars}</div>;
};

export default Stars;