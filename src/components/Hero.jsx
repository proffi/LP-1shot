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
            // Background fade in slower
            gsap.fromTo(canvasContainerRef.current,
                { autoAlpha: 0.03 },
                { autoAlpha: 0.08, duration: 4, ease: "power2.out" }
            );

            // Staggered text fade up with precise Fibonacci deliberate timings
            // Using a simple timeline to control exact delays
            const tl = gsap.timeline();

            gsap.set(textRefs.current, { y: 30, autoAlpha: 0 });

            // Ref 0: "Реалността не е"
            tl.to(textRefs.current[0], { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out" }, "+=0.2")
                // Ref 1: "това, което мислиш..." (Fibonacci 130ms delay)
                .to(textRefs.current[1], { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out" }, "+=0.13")
                // Ref 2: Qualifier text (Fibonacci 340ms delay)
                .to(textRefs.current[2], { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out" }, "+=0.34")
                // Ref 3: Final CTA block + disclaimer (Fibonacci 550ms delay)
                .to(textRefs.current[3], { y: 0, autoAlpha: 1, duration: 1.2, ease: "power3.out" }, "+=0.55");

            // Hero Arrow/Line Pulse
            gsap.fromTo(".hero-scroll-line",
                { height: 0 },
                { height: 34, duration: 1.5, ease: "power2.inOut", repeat: -1, yoyo: true }
            );

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
            className="relative w-full h-[100dvh] overflow-hidden bg-rt-void flex items-end pb-[15vh] md:pb-[20vh]"
        >
            {/* Background Image is removed in FAVOR of pure dark void + geometric spiral */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0A0E1A] to-[#000000] pointer-events-none" />

            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(10,14,26,0)_0%,rgba(0,0,0,0.7)_70%)] pointer-events-none" />

            {/* Geometric spiral has 5-8% opacity in hero per spec */}
            <div ref={canvasContainerRef} className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
                <GeometricBackground />
            </div>

            <div className="relative z-10 w-full px-8 md:px-16 grid-golden mx-auto max-w-7xl">
                {/* Left Column (38.2% visual weight proxy) */}
                <div className="flex flex-col items-start justify-end w-full md:w-[220%]"> {/* Span across slightly on desktop for drama */}
                    <div className="mb-[34px]">
                        <h1
                            ref={(el) => textRefs.current[0] = el}
                            className="flex flex-col items-start uppercase tracking-[0.15em] text-rt-silver font-jakarta font-bold text-[1rem] leading-tight opacity-0"
                        >
                            Реалността не е
                        </h1>
                        <h2
                            ref={(el) => textRefs.current[1] = el}
                            className="font-cormorant italic font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[1.0] text-rt-gold mt-2 opacity-0 -ml-[2px]"
                        >
                            това, което мислиш че е.
                        </h2>
                    </div>

                    <p
                        ref={(el) => textRefs.current[2] = el}
                        className="font-outfit text-rt-ash text-[1.05rem] mb-[55px] max-w-lg w-full opacity-0"
                    >
                        И не, това не е поредната книга за „манифестация".
                    </p>

                    <div ref={(el) => textRefs.current[3] = el} className="flex flex-col items-start opacity-0">
                        <button
                            onClick={() => document.getElementById('книгите')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-rt-gold text-rt-obsidian px-[34px] py-[13px] rounded-[1.5rem] font-jakarta font-bold text-[1rem] transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(201,169,97,0.2)] hover:shadow-[0_0_25px_rgba(201,169,97,0.4)]"
                        >
                            Виж Системата <span>↓</span>
                        </button>
                        <span
                            className="font-mono text-rt-ash-dim text-[0.75rem] mt-3 tracking-wide cursor-default"
                            onMouseEnter={handleHover369}
                        >
                            <span className="text-rt-ash transition-colors">369</span> страници механика. Не мистика.
                        </span>
                    </div>
                </div>

                {/* Right Column handles absolutely nothing per spec, Hero content is bottom left */}
            </div>

            {/* Subtle Scroll Indicator */}
            <div className="absolute bottom-[21px] left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="hero-scroll-line w-[2px] h-[34px] bg-rt-gold"></div>
            </div>
        </section>
    );
};

export default Hero;
