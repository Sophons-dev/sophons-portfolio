"use client";

import { cn } from "@/lib/utils";
import React from "react";
import {
    IconBoxAlignRightFilled,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { AnimatedGradientTextDemo } from "./hero-section";
import { SkeletonOne, SkeletonTwo, SkeletonThree, SkeletonFour, SkeletonFive } from "@/components/custom/offer-elements";


export function OffersSection() {
    return (
        <section className="py-20 mt-30 px-4 md:px-0">
            <div className="mb-15 flex flex-col gap-3">
                <AnimatedGradientTextDemo text="See what we can do" />
                <h2 className="text-4xl text-white text-center">Our Offers and Services</h2>
                <p className="text-lg text-neutral-400 text-center">We offer a range of services to help you achieve your goals.</p>
            </div>
            <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem] border p-7 rounded-xl border-neutral-700 dark:border-neutral-800">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={cn("[&>p:text-lg]", item.className)}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}


const items = [
    {
        title: "SEO Optimization",
        description: (
            <span className="text-sm">
                Improve visibility and drive traffic with strategic, AI-informed SEO.
            </span>
        ),
        header: <SkeletonOne />,
        className: "md:col-span-1",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Web & Mobile Development",
        description: (
            <span className="text-sm">
                High-performance web and mobile experiences, built to engage.
            </span>
        ),
        header: <SkeletonTwo />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Mobile Development",
        description: (
            <span className="text-sm">
                Native and cross-platform apps tailored to performance and UX.
            </span>
        ),
        header: <SkeletonThree />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "AI + Business Intelligence",
        description: (
            <span className="text-sm">
                Build intelligent systems that turn raw data into real-time decisions.
            </span>
        ),
        header: <SkeletonFour />,
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },

    {
        title: "Cloud & Infrastructure",
        description: (
            <span className="text-sm">
                Deploy, manage, and scale your systems with secure cloud solutions.
            </span>
        ),
        header: <SkeletonFive />,
        className: "md:col-span-1",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    }
];
