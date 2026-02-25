import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Generative geometry background
const GeometricBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Golden spiral / wireframe rotation setup
        let angle = 0;
        const phi = 1.61803398875;

        // Will-change transform is added via CSS class in render
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            ctx.save();
            ctx.translate(cx, cy);
            // extremely slow rotation
            ctx.rotate(angle);

            // Draw a subtle geometric pattern
            ctx.strokeStyle = "rgba(201, 169, 97, 0.1)"; // faint gold 10%
            ctx.lineWidth = 1;

            for (let i = 0; i < 89; i += 3) {
                ctx.beginPath();
                const r = i * phi * 1.5;
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.stroke();

                // draw connecting lines creating wireframe
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(Math.cos(i) * r, Math.sin(i) * r);
                ctx.stroke();
            }

            ctx.restore();
            angle -= 0.0005; // Slow rotation direction

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full will-change-transform z-0"
        />
    );
};

const Hero = () => {
    const containerRef = useRef(null);
    const textRefs = useRef([]);
    const canvasContainerRef = useRef(null);

    const addToRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background fade in slightly
            gsap.fromTo(canvasContainerRef.current,
                { autoAlpha: 0.03 },
                { autoAlpha: 0.1, duration: 2.5, ease: "power2.out" }
            );

            // Staggered text fade up with Fibonacci deliberate timings
            gsap.set(textRefs.current, { y: 21, autoAlpha: 0 }); // 21px fibonacci

            gsap.to(textRefs.current, {
                y: 0,
                autoAlpha: 1,
                duration: 1.3,
                stagger: 0.130, // 130ms stagger
                ease: "power3.out",
                delay: 0.2
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleHover369 = (e) => {
        // Subtle golden pulse flash
        gsap.to(e.target, { color: "#D4A843", duration: 0.2, yoyo: true, repeat: 1 });
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[100dvh] overflow-hidden bg-gradient-to-b from-rt-void to-rt-obsidian flex items-end pb-[10vh]"
        >
            <div ref={canvasContainerRef} className="absolute inset-0 z-0 pointer-events-none">
                <GeometricBackground />
            </div>

            <div className="relative z-10 w-full px-8 md:px-16 grid-golden mx-auto max-w-7xl gap-8">
                {/* Left Column (38.2% visual weight proxy) */}
                <div className="flex flex-col items-start justify-end w-full">
                    <div className="mb-[34px]">
                        <h1 className="flex flex-col items-start uppercase tracking-widest text-[#E8E8E8] font-jakarta font-bold text-lg md:text-xl">
                            <span ref={addToRefs}>Реалността не е</span>
                            <span ref={addToRefs}>това, което</span>
                        </h1>
                        <h2
                            ref={addToRefs}
                            className="font-cormorant italic font-bold text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] text-rt-gold mt-1"
                        >
                            мислиш че е.
                        </h2>
                    </div>

                    <p ref={addToRefs} className="font-outfit text-rt-ash text-lg mb-[21px] max-w-md w-full">
                        И не, това не е поредната книга за „манифестация".
                    </p>

                    <div ref={addToRefs}>
                        <button className="bg-rt-gold text-rt-obsidian px-8 py-4 rounded-[2rem] font-jakarta font-bold text-base btn-shine-sweep transition-transform hover:scale-[1.03]">
                            Виж Системата
                        </button>
                    </div>
                </div>

                {/* Right Column (61.8%) - empty or decorative space, supporting Golden Ratio layout rules */}
                <div className="hidden md:flex flex-col items-end justify-end">
                    {/* The scroll indicator element mentioned */}
                    <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                        <span
                            onMouseEnter={handleHover369}
                            className="font-mono text-rt-ash text-xs tracking-[0.05em] cursor-default"
                        >
                            ↓ <span className="text-rt-cream font-bold">369</span> страници механика
                        </span>
                        {/* Tiny pulsing golden line */}
                        <div className="w-[1px] h-8 bg-rt-gold animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
