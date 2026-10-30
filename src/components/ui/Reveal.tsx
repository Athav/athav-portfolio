import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import type { RevealProps } from "../../lib/interfaces";

// Animates in every time it enters the viewport: from below when scrolling down,
// from above when scrolling back up, and fades out again when it leaves.
function Reveal({ children, delay = 0, sx = {} }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [on, setOn] = useState(false);
    const [fromY, setFromY] = useState(50);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setOn(true);
                else {
                    setOn(false);
                    setFromY(entry.boundingClientRect.top < 0 ? -50 : 50);
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <Box
            ref={ref}
            sx={[
                {
                    opacity: on ? 1 : 0,
                    transform: on ? "none" : `translateY(${fromY}px) scale(0.94)`,
                    transition: `opacity 0.65s ease-out ${on ? delay : 0}ms, transform 0.65s ease-out ${on ? delay : 0}ms`,
                    willChange: "opacity, transform",
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            {children}
        </Box>
    );
}

export default Reveal;
