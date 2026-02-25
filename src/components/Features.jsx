import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Activity } from 'lucide-react';

const Features = () => {
    return (
        <section id="intelligence" className="relative w-full min-h-screen bg-nura-cream py-32 px-8 md:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-nura-charcoal tracking-tight mb-4">
                        Precision Micro-UI
                    </h2>
                    <p className="font-outfit text-xl text-nura-charcoal/70 max-w-xl">
                        Functional artifacts over static layouts.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <DiagnosticShuffler />
                    <TelemetryTypewriter />
                    <AdaptiveRegimen />
                </div>
            </div>
        </section>
    );
};

// Card 1: Diagnostic Shuffler
const DiagnosticShuffler = () => {
    const containerRef = useRef(null);
    const [cards, setCards] = useState([
        { id: 1, label: "Epigenetic Age", value: "34.2 yrs" },
        { id: 2, label: "Microbiome Score", value: "98/100" },
        { id: 3, label: "Cortisol Optimization", value: "Optimal" }
    ]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCards(prevCards => {
                const newCards = [...prevCards];
                const lastCard = newCards.pop();
                newCards.unshift(lastCard);
                return newCards;
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Spring bounce transition when cards state changes
            gsap.fromTo(".shuffler-card",
                { y: -20, opacity: 0.5 },
                { y: 0, opacity: 1, duration: 0.6, ease: "custom", stagger: 0.1 }
            );
            // We will register a custom ease if possible, but power3.out is close to spring
            // CustomEase is a club plugin, so we can use elastic.out or back.out
            gsap.to(".shuffler-card", {
                ease: "back.out(1.7)"
            });
        }, containerRef);
        return () => ctx.revert();
    }, [cards]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[400px] bg-white rounded-[2rem] border border-nura-moss/10 shadow-sm flex flex-col items-center justify-center p-8 overflow-hidden"
        >
            <h3 className="absolute top-8 left-8 font-jakarta font-semibold text-nura-charcoal">Audit Intelligence</h3>
            <div className="relative w-full max-w-[200px] h-[200px] mt-8 flex flex-col items-center justify-center">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`shuffler-card absolute w-full p-6 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-nura-moss/5 transition-all duration-700`}
                        style={{
                            transform: `translateY(${index * 15}px) scale(${1 - index * 0.05})`,
                            zIndex: 10 - index,
                            opacity: 1 - index * 0.2
                        }}
                    >
                        <p className="font-mono text-xs text-nura-clay mb-2 uppercase tracking-wide">{card.label}</p>
                        <p className="font-jakarta text-2xl font-bold text-nura-charcoal">{card.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Card 2: Telemetry Typewriter
const TelemetryTypewriter = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const cursorRef = useRef(null);

    const messages = [
        "Optimizing Circadian Rhythm...",
        "Analyzing Biomarkers...",
        "Recalibrating Neural Pathways...",
        "Synchronizing Metabolic Load..."
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Blinking cursor
            gsap.to(cursorRef.current, {
                opacity: 0,
                repeat: -1,
                yoyo: true,
                duration: 0.5,
                ease: "steps(1)"
            });
        }, containerRef);

        // Typing logic
        let messageIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingTimer;

        const type = () => {
            const currentMessage = messages[messageIndex];

            if (isDeleting) {
                textRef.current.textContent = currentMessage.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textRef.current.textContent = currentMessage.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 30 : 70;

            if (!isDeleting && charIndex === currentMessage.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                messageIndex = (messageIndex + 1) % messages.length;
                typeSpeed = 500; // Pause before start
            }

            typingTimer = setTimeout(type, typeSpeed);
        };

        typingTimer = setTimeout(type, 1000);

        return () => {
            ctx.revert();
            clearTimeout(typingTimer);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[400px] bg-nura-charcoal rounded-[2rem] flex flex-col p-8 overflow-hidden"
        >
            <div className="flex items-center justify-between w-full mb-8">
                <h3 className="font-jakarta font-semibold text-nura-cream">Neural Stream</h3>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="font-mono text-[10px] text-nura-cream/50 uppercase tracking-widest">Live Feed</span>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
                <div className="font-mono text-nura-moss text-sm mb-2 opacity-50">&gt; SYSTEM_LOG</div>
                <div className="font-mono text-nura-cream text-lg h-16">
                    &gt; <span ref={textRef}></span>
                    <span ref={cursorRef} className="inline-block w-2.5 h-5 bg-nura-clay ml-1 align-middle"></span>
                </div>
            </div>

            <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
                <Activity size={200} className="text-nura-cream" strokeWidth={0.5} />
            </div>
        </div>
    );
};

// Card 3: Adaptive Regimen (Mock Cursor)
const AdaptiveRegimen = () => {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const dayRefs = useRef([]);
    const saveBtnRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
            const targetDay = dayRefs.current[3]; // Wednesday

            // Reset
            tl.set(cursorRef.current, { x: 50, y: 300, opacity: 0, scale: 1 });
            tl.set(targetDay, { backgroundColor: "transparent", color: "#1A1A1A" });
            tl.set(saveBtnRef.current, { scale: 1 });

            // Enter cursor
            tl.to(cursorRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" })
                .to(cursorRef.current, {
                    x: targetDay.offsetLeft + targetDay.offsetWidth / 2 - 10,
                    y: targetDay.offsetTop + targetDay.offsetHeight / 2 - 10,
                    duration: 1.2,
                    ease: "power2.inOut"
                })
                // Click action
                .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
                .to(targetDay, { backgroundColor: "#2E4036", color: "#F2F0E9", duration: 0.2 }, "<")
                .to(cursorRef.current, { scale: 1, duration: 0.1 })
                // Move to save
                .to(cursorRef.current, {
                    x: saveBtnRef.current.offsetLeft + saveBtnRef.current.offsetWidth / 2 - 10,
                    y: saveBtnRef.current.offsetTop + saveBtnRef.current.offsetHeight / 2 - 10,
                    duration: 1,
                    ease: "power2.inOut",
                    delay: 0.5
                })
                // Click save
                .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
                .to(saveBtnRef.current, { scale: 0.95, duration: 0.1 }, "<")
                .to(cursorRef.current, { scale: 1, duration: 0.1 })
                .to(saveBtnRef.current, { scale: 1, duration: 0.1 }, "<")
                // Exit
                .to(cursorRef.current, { opacity: 0, y: "+=50", duration: 0.5, delay: 0.5 });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToDays = (el) => {
        if (el && !dayRefs.current.includes(el)) {
            dayRefs.current.push(el);
        }
    };

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[400px] bg-white rounded-[2rem] border border-nura-moss/10 shadow-sm p-8"
        >
            <h3 className="font-jakarta font-semibold text-nura-charcoal mb-8">Adaptive Regimen</h3>

            <div className="flex justify-between items-center bg-nura-cream/50 rounded-2xl p-4 mb-16">
                {days.map((day, i) => (
                    <div
                        key={i}
                        ref={addToDays}
                        className="w-8 h-8 rounded-full flex items-center justify-center font-outfit text-sm font-medium transition-colors"
                    >
                        {day}
                    </div>
                ))}
            </div>

            <div className="flex justify-end">
                <button
                    ref={saveBtnRef}
                    className="px-6 py-2 bg-nura-clay text-white rounded-full font-jakarta text-sm font-medium"
                >
                    Save Protocol
                </button>
            </div>

            {/* Mock SVG Cursor */}
            <svg
                ref={cursorRef}
                className="absolute top-0 left-0 w-6 h-6 z-10 pointer-events-none drop-shadow-md"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path fill="#1A1A1A" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
            </svg>
        </div>
    );
};

export default Features;
