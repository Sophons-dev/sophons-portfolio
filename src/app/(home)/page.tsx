import ThreeScene from "./_components/galaxy-three-scene";
import Hero, { HeroGradients } from "./_components/hero-section";
import { OffersSection } from "./_components/offers-section";

export default function Home() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-neutral-900 px-4 md:px-0">
            <div className="relative h-screen z-10">
                <div className="inset-0 w-full h-full pointer-events-none">
                    <div className="absolute top-20 inset-0 w-full h-full">
                        <ThreeScene />
                        <HeroGradients />
                    </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-dvh z-1 flex justify-center items-center pointer-events-none">
                    <div className="mb-30 lg:mb-60">
                        <Hero />
                    </div>

                </div>
            </div>

            <div className="relative z-10">
                <OffersSection />
            </div>
        </div>
    );
}
