import { useRef } from "react";
import type { SpotlightCardProps } from "../lib/interfaces";
import { Box, Card } from "@mui/material";

function SpotlightCard({ children, sx = {} }: SpotlightCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };
    return (
        <Card
            ref={ref}
            onMouseMove={handleMove}
            elevation={0}
            sx={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                border: "1px solid",
                borderColor: "grey.200",
                backgroundColor: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(6px)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 40px -12px rgba(124,92,255,0.25)",
                    borderColor: "primary.main",
                },
                "&:hover .spotlight-glow": { opacity: 1 },
                "&:hover .spotlight-arrow": {
                    color: "primary.main",
                    transform: "translate(2px,-2px)",
                },
                ...sx,
            }}
        >
            <Box
                className="spotlight-glow"
                sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0,
                    transition: "opacity 0.3s",
                    pointerEvents: "none",
                    background:
                        "radial-gradient(500px circle at var(--x,50%) var(--y,50%), rgba(124,92,255,0.12), transparent 70%)",
                }}
            />
            {children}
        </Card>
    );
}

export default SpotlightCard