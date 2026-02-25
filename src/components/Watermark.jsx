import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Watermark = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        // Rotates 1 degree every 3 seconds
        gsap.to(svgRef.current, {
            rotation: 360,
            duration: 360 * 3, // 1080 seconds for a full rotation
            ease: "none",
            repeat: -1
        });
    }, []);

    return (
        <div className="fixed bottom-[40vh] right-[-10vw] md:right-[-5vw] pointer-events-none z-0 opacity-[0.02]">
            <svg
                ref={svgRef}
                width="400"
                height="400"
                viewBox="0 0 100 100"
                className="will-change-transform"
            >
                <path
                    d="M 50 50 Q 55 45 60 50 T 50 70 Q 20 60 30 30 T 80 20 Q 110 60 80 100"
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="0.5"
                />
                <circle cx="50" cy="50" r="45" fill="none" stroke="var(--gold)" strokeWidth="0.2" />
            </svg>
        </div>
    );
};

export default Watermark;
