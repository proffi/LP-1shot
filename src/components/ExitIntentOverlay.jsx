import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const ExitIntentOverlay = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const overlayRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // Only on Desktop
        if (window.innerWidth < 1200) return;

        // Check session storage so it only fires once per session
        if (sessionStorage.getItem('v2_exit_intent_fired')) {
            setHasTriggered(true);
            return;
        }

        const handleMouseLeave = (e) => {
            // Trigger when mouse moves off the top of the browser window
            if (e.clientY <= 0 && !hasTriggered) {
                setIsVisible(true);
                setHasTriggered(true);
                sessionStorage.setItem('v2_exit_intent_fired', 'true');

                // Track exit intent shown
                console.log("[data-track='exit-intent-shown']");
            }
        };

        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        return () => document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    }, [hasTriggered]);

    // Animate In/Out based on visibility
    useEffect(() => {
        if (!overlayRef.current) return;

        if (isVisible) {
            gsap.fromTo(overlayRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4, ease: "power2.out" });
            gsap.fromTo(contentRef.current, { y: 21, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, delay: 0.2, ease: "back.out(1.5)" });
            document.body.style.overflow = 'hidden';
        } else if (hasTriggered) {
            // Only animate out if it was visible
            gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.3, ease: "power2.in" });
            document.body.style.overflow = '';
        }
    }, [isVisible, hasTriggered]);

    if (!isVisible && !hasTriggered) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[10000] bg-rt-obsidian/80 backdrop-blur-sm flex items-center justify-center invisible opacity-0"
        >
            <div
                ref={contentRef}
                className="bg-rt-surface rounded-[3rem] p-12 max-w-md w-full border border-rt-gold/10 shadow-[0_34px_89px_rgba(0,0,0,0.8)] flex flex-col items-center text-center relative"
            >
                <h2 className="font-jakarta font-bold text-rt-cream text-3xl mb-4">
                    Преди да тръгнеш
                </h2>

                <p className="font-outfit text-rt-cream text-base mb-8">
                    Книга 1 е само €21.<br />
                    Разбери модела. Без ангажимент за системата.
                </p>

                <button
                    onClick={() => {
                        console.log("[data-track='exit-intent-click']");
                        // Scroll to Book 1 or navigate
                        document.getElementById('книгите')?.scrollIntoView({ behavior: 'smooth' });
                        setIsVisible(false);
                    }}
                    className="w-full bg-rt-gold text-rt-obsidian font-jakarta font-bold px-8 py-4 rounded-[1.5rem] mb-4 hover:bg-rt-gold-bright transition-colors"
                >
                    ВЗЕМИ КНИГА 1 — €21
                </button>

                <button
                    onClick={() => setIsVisible(false)}
                    className="font-outfit text-rt-ash text-sm hover:text-rt-cream transition-colors border-b border-transparent hover:border-rt-cream pb-1"
                >
                    Не, благодаря
                </button>
            </div>
        </div>
    );
};

export default ExitIntentOverlay;
