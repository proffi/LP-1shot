import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const containerRef = useRef(null);
    const textLine1Ref = useRef(null);
    const textLine2Ref = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Setup initial state
            gsap.set([textLine1Ref.current, textLine2Ref.current, subtitleRef.current], {
                y: 50,
                opacity: 0
            });

            // Animate in
            gsap.to([textLine1Ref.current, textLine2Ref.current, subtitleRef.current], {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[100dvh] overflow-hidden flex items-end pb-24 px-8 md:px-16"
        >
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2070&auto=format&fit=crop"
                    alt="Dark Moody Forest"
                    className="w-full h-full object-cover object-center"
                />
                {/* Moss to Black Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#2E4036]/60 via-[#1A1A1A]/80 to-[#1A1A1A] mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-90" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-end h-full">
                <div className="max-w-3xl">
                    <p ref={subtitleRef} className="text-[#CC5833] font-mono text-sm uppercase tracking-[0.2em] mb-4">
                        Clinical Telemetry Initialized
                    </p>
                    <h1 className="text-white leading-[1.1] tracking-tight flex flex-col items-start">
                        <span
                            ref={textLine1Ref}
                            className="font-jakarta font-bold text-5xl md:text-7xl lg:text-8xl"
                        >
                            Nature is the
                        </span>
                        <span
                            ref={textLine2Ref}
                            className="font-garamond italic font-medium text-7xl md:text-9xl lg:text-[10rem] text-[#F2F0E9] mt-[-1rem]"
                        >
                            Algorithm.
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
