"use client";

import { motion } from 'framer-motion';
import Stars from './stars';
import { Button } from '@/components/ui/button';

const Hero = () => {

    return (
        <motion.div
            className="relative flex flex-col justify-center items-center h-screen w-full p-8 text-white text-center overflow-hidden"
        >
            <Stars />
            <div className='text-3xl md:text-6xl md:leading-16 mb-3'>
                <h2>your data&apos;s not dumb,</h2>
                <h2 className='text-purple-400'>it just needs direction</h2>
            </div>
            <div className='text-md md:text-xl leading-5 md:leading-8'>
                <h5>
                    We build AI systems that think with you — not for you. <br className='hidden md:block' />
                    Insights, not dashboards. Action, not noise.
                </h5>
            </div>
            <div className='mt-6 flex gap-3'>
                <Button variant={'default'} size={'lg'} className='bg-white text-black hover:bg-white/80 hover:text-black cursor-pointer px-6 py-2 rounded-md pointer-events-auto'>
                    Book a call
                </Button>
                <Button variant={'ghost'} size={'lg'} className='bg-black/30 text-white hover:bg-black/70 hover:text-white cursor-pointer px-6 py-2 pointer-events-auto'>
                    Send us a message
                </Button>
            </div>
        </motion.div>
    );
};

export default Hero;