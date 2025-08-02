import ThreeScene from "./_components/galaxy-three-scene";
import Hero from "./_components/hero-section";
import Vignette from "./_components/vignette";

export default function Home() {
    return (
        <div className="relative w-screen h-screen overflow-hidden bg-neutral-900">
            <div className="absolute top-30 inset-0 w-full h-full">
                <ThreeScene />
            </div>

            <div className="absolute -top-25 md:-top-40 left-0 w-full h-full z-1 flex justify-center items-center pointer-events-none">
                <Hero />
            </div>
        </div>
    );
}
