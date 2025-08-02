
"use client";

import { useEffect, useState } from "react";
import { SophonsIcon } from "../custom/icons";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav className={cn("flex px-4 md:px-0 fixed top-0 left-0 right-0 z-50 max-w-5xl mx-auto transition-all duration-500 ease-in-out", isScrolled ? "h-16 mt-3" : "h-24")}>
            <div className={cn("flex items-center justify-between w-full p-3 rounded-2xl", isScrolled ? "bg-neutral-900/60 backdrop-blur-sm border border-white/20" : "")}>
                <div className="flex items-center space-x-2">
                    <SophonsIcon width={30} height={30} />
                    <h4 className="text-lg font-semibold text-white">Sophons</h4>
                </div>

                <div className="font-semibold flex items-center text-white">
                    <Button className="hidden md:block">
                        <Link className="flex items-center gap-2" href={'mailto:hello@sophons.tech'} >
                            <Mail /> hello@sophons.tech
                        </Link>
                    </Button>

                    <Link href={'https://cal.com/sophons/30min'} target='_blank' rel='noopener noreferrer'>
                        <Button variant={'outline'} className="bg-transparent border border-white/20">
                            Book a call
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}