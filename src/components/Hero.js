import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative bg-black text-white min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-32">
            {/* Left Side: Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Best <span className="text-[rgb(91,208,31)]">Influencer Marketing</span>
                    <br /> Agency in India
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                    XenoQuant is the best Influencer marketing agency in India, providing
                    top influencer marketing platforms to help brands and visionary
                    marketers leverage social media influencers' content in marketing
                    and advertising their products/services.
                </p>
                <Link href="/contact">
                    <button className="mt-6 px-6 py-3 text-lg font-semibold bg-[rgb(91,208,31)] rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r from-green-500 to-green-700">
                        Contact Us
                    </button>
                </Link>
            </div>

            {/* Right Side: Video */}
            <div className="lg:w-1/2 flex justify-center">
                <video
                    src="/hero-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[90%] md:w-[500px] lg:w-[600px] xl:w-[700px] object-contain"
                />
            </div>

        </section>
    );
}
