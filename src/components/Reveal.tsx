import { Box, Fade, Grow } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import type { RevealProps } from "../lib/interfaces";

// Reveals children with a fade+slide once scrolled into view
function Reveal({ children, delay = 0, ...props }: RevealProps) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <Box ref={ref} {...props}>
            <Grow in={visible} timeout={700} style={{ transformOrigin: "0 0" }}>
                <Fade in={visible} timeout={700} style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}>
                    <div>{children}</div>
                </Fade>
            </Grow>
        </Box>
    );
}

export default Reveal;