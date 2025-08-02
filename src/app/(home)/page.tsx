import ThreeScene from "./_components/galaxy-three-scene";
import Hero, { HeroGradients } from "./_components/hero-section";
import { OffersSection } from "./_components/offers-section";

export default function Home() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-neutral-900">
            <div className="relative h-screen z-10">
                <div className="absolute top-0 inset-0 w-full h-full">
                    <ThreeScene />
                </div>

                <div className="absolute top-0 left-0 w-full h-full z-1 flex justify-center items-center pointer-events-none">
                    <div className="mb-80">

                        <Hero />
                    </div>

                    <HeroGradients />
                </div>
            </div>

            <div className="relative z-10">
                <OffersSection />
            </div>
        </div>
    );
}
