'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export const SkeletonOne = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 p-4"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] items-center space-x-3 bg-white dark:bg-black"
            >
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-xs font-bold">
                    S
                </div>
                <div className="flex-1">
                    <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Keyword Research</p>
                    <p className="text-xs text-neutral-500">High-intent, low-competition keywords</p>
                </div>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-3 items-center space-x-3 w-5/6 ml-auto bg-white dark:bg-black"
            >
                <div className="flex-1 text-right">
                    <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Content Optimization</p>
                    <p className="text-xs text-neutral-500">SEO-friendly content structure</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                    E
                </div>
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-3 items-center space-x-3 bg-white dark:bg-black"
            >
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold">
                    O
                </div>
                <div className="flex-1">
                    <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Performance Tracking</p>
                    <p className="text-xs text-neutral-500">Real-time analytics & reporting</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export const SkeletonTwo = () => {


    const designElements = [
        {
            title: 'Responsive Layouts',
            icon: '📱',
            description: 'Adaptive designs that work on any device',
            color: 'from-blue-400 to-cyan-400'
        },
        {
            title: 'UI Components',
            icon: '✨',
            description: 'Beautiful, consistent interface elements',
            color: 'from-purple-400 to-pink-400'
        },
        {
            title: 'Micro-Interactions',
            icon: '🔄',
            description: 'Delightful animations and transitions',
            color: 'from-amber-400 to-orange-400'
        }
    ];

    return (
        <div className="relative p-4 h-full overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-slate-800/50 dark:to-slate-900/50" />

            <div className="relative max-h-[150px] z-10">
                <div className="space-y-3">
                    {designElements.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1, type: 'spring' }}
                            whileHover={{ x: 5 }}
                            className="flex items-start p-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-sm"
                        >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl mr-3 bg-gradient-to-br ${item.color} text-white`}>
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="font-medium text-sm text-gray-900 dark:text-white">{item.title}</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-blue-400/10 dark:bg-blue-400/5" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-purple-400/10 dark:bg-purple-400/5" />
            </div>
        </div>
    );
};

export const SkeletonThree = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    const designElements = [
        { name: 'User Research', color: 'from-purple-500 to-pink-500' },
        { name: 'Wireframing', color: 'from-blue-500 to-cyan-500' },
        { name: 'Prototyping', color: 'from-green-500 to-emerald-500' },
        { name: 'Visual Design', color: 'from-amber-400 to-orange-500' },
    ];

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg flex-col p-4 space-y-3"
            style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
            } as React.CSSProperties}
        >
            <h3 className="text-sm font-semibold text-slate-800">UI/UX Design Process</h3>
            <div className="grid grid-cols-2 gap-3">
                {designElements.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.03 }}
                        className={`p-3 rounded-lg bg-gradient-to-br ${item.color} text-white text-xs font-medium shadow-sm`}
                    >
                        {item.name}
                    </motion.div>
                ))}
            </div>
            <motion.div
                className="mt-2 h-2 bg-slate-200 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                />
            </motion.div>
        </motion.div>
    );
};
export const SkeletonFour = () => {
    const first = {
        initial: {
            x: 20,
            rotate: -5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    const second = {
        initial: {
            x: -20,
            rotate: 5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
        >
            <motion.div
                variants={first}
                className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                <Image
                    src={'/avatar.png'}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    AI-Powered Data Analysis
                </p>
                <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Insightful
                </p>
            </motion.div>
            <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
                <Image
                    src={'/avatar.png'}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Business Intelligence Solutions
                </p>
                <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Strategic
                </p>
            </motion.div>
            <motion.div
                variants={second}
                className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                <Image
                    src={'/avatar.png'}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Predictive Analytics & ML
                </p>
                <p className="border border-teal-500 bg-teal-100 dark:bg-teal-900/20 text-teal-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Forward-Thinking
                </p>
            </motion.div>
        </motion.div>
    );
};
export const SkeletonFive = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
            >
                <Image
                    src={'/avatar.png'}
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="text-xs text-neutral-500">
                    Modern cloud solutions like AWS, Azure, and GCP offer scalable
                    infrastructure that can adapt to your business needs in real-time...
                </p>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
            >
                <p className="text-xs text-neutral-500">Go serverless!</p>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 shrink-0" />
            </motion.div>
        </motion.div>
    );
};

export const SkeletonSix = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };
    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
            >
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
        </motion.div>
    )
}