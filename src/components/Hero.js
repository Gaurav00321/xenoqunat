import Link from "next/link";
import { AnimatedModalDemo } from "./ui/Contact-Button";

export default function Hero() {
    return (
        <section className="relative bg-[#020617] text-white min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-32">
            {/* Left Side: Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Connecting <span className="text-cyan-500"> Brands </span>
                    <br /> With  
                    <span className="text-cyan-500"> Influencer </span>
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                    XenoQuant is an influencer marketing agency that connects brands with influencers while creating the best ROI for both parties.
                    <br/>
                    With a network of 65+ creators and 25+ brands,
                    <br/>
                    we are ready to collaborate with you.
                </p>
                <AnimatedModalDemo />
            </div>

            {/* Right Side: Video */}
            <div className="lg:w-1/2 flex justify-center">
                {/* <video
                    src="/hero-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[90%] md:w-[500px] lg:w-[600px] xl:w-[700px] object-contain"
                /> */}
            </div>

        </section>
    );
}
