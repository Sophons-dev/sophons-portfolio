"use client";

import { motion, Variants } from 'framer-motion';
import Stars from './stars';
import { Button } from '@/components/ui/button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
    // Animation variants
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const fadeIn: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] // easeOutQuint
            }
        }
    };

    const buttonItem: Variants = {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] // easeOutExpo
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="relative flex flex-col justify-center items-center h-screen w-full p-8 text-white text-center overflow-hidden"
        >
            <motion.div variants={fadeIn}>
                <Stars />
            </motion.div>

            <motion.div variants={item}>
                <AnimatedGradientTextDemo icon={'🎉'} text="Introducing Sophons" />
            </motion.div>

            <motion.div variants={item} className='text-3xl md:text-6xl md:leading-16 mb-3'>
                <motion.h2 variants={item}>your data&apos;s not dumb,</motion.h2>
                <motion.h2 variants={item} className='text-purple-400'>it just needs direction</motion.h2>
            </motion.div>

            <motion.div variants={item} className='text-md md:text-xl leading-5 md:leading-8 mb-8'>
                <h5>
                    We build AI systems that think with you — not for you. <br className='hidden md:block' />
                    Insights, not dashboards. Action, not noise.
                </h5>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className='flex md:flex-row gap-2'
            >
                <motion.div variants={buttonItem}>
                    <Button
                        variant={'default'}
                        size={'lg'}
                        className='bg-white text-black hover:bg-white/80 hover:text-black cursor-pointer pointer-events-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
                    >
                        Book a call
                    </Button>
                </motion.div>
                <motion.div variants={buttonItem}>
                    <Button
                        variant={'ghost'}
                        size={'lg'}
                        className='bg-black/30 text-white hover:bg-black/70 hover:text-white cursor-pointer  pointer-events-auto transition-all duration-300 transform hover:scale-105 border border-white/20'
                    >
                        Send us a message
                    </Button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};



export const AnimatedGradientTextDemo = ({ icon, text, className }: { icon?: React.ReactNode, text: string, className?: string }) => {
    return (
        <div className={cn("group w-fit relative mx-auto flex items-center justify-center rounded-full px-4 py-1 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ", className)}>
            <span
                className={cn(
                    "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-white via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                )}
                style={{
                    WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                    WebkitClipPath: "padding-box",
                }}
            />
            {icon && (
                <>
                    {icon}
                    <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                </>
            )}
            <AnimatedGradientText className="text-sm font-medium">
                {text}
            </AnimatedGradientText>
            <ChevronRight
                className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
            />
        </div>
    );
}

export const HeroGradients = () => {
    return (
        <>
            {/* Top gradient */}
            <div
                className="absolute top-0 h-0 md:h-30 left-0 w-full z-20 pointer-events-none
                       bg-gradient-to-b from-neutral-900 via-neutral-900/5 to-transparent"
            />

            {/* Left gradient */}
            <div
                className="absolute left-0 h-full w-10 md:w-100 z-20 pointer-events-none
                       bg-gradient-to-r from-neutral-900 via-neutral-900/5 to-transparent"
            />

            {/* Right gradient */}
            <div
                className="absolute right-0 h-full w-10 md:w-100 z-20 pointer-events-none
                       bg-gradient-to-l from-neutral-900 via-neutral-900/5 to-transparent"
            />

            {/* Bottom gradient */}
            <div
                className="absolute bottom-0 h-50 left-0 w-full z-20 pointer-events-none
                       bg-gradient-to-t from-neutral-900 via-neutral-900/5 to-transparent"
            />

        </>
    )
}

export default Hero;