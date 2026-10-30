import { useRef } from "react";
import type { SpotlightCardProps } from "../../lib/interfaces";
import { Box, Card } from "@mui/material";

// Card with a cursor-following glow and a subtle 3D tilt
function SpotlightCard({ children, sx = {} }: SpotlightCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        el.style.setProperty("--x", `${x}px`);
        el.style.setProperty("--y", `${y}px`);
        el.style.setProperty("--ry", `${(x / r.width - 0.5) * 10}deg`);
        el.style.setProperty("--rx", `${-(y / r.height - 0.5) * 10}deg`);
    };
    const handleLeave = () => {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
    };

    return (
        <Card
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            elevation={0}
            sx={[
                {
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    border: "1px solid rgb(var(--a1r) / 0.2)",
                    backgroundColor: "var(--card)",
                    backgroundImage: "none",
                    backdropFilter: "blur(8px)",
                    transform: "perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateY(var(--ty,0px))",
                    transition: "transform 0.2s ease-out, box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.4s",
                    "&:hover": {
                        "--ty": "-6px",
                        boxShadow: "0 20px 40px -12px rgb(var(--a1r) / 0.3)",
                        borderColor: "var(--a1)",
                    },
                    "&:hover .spotlight-glow": { opacity: 1 },
                    "&:hover .spotlight-arrow": { color: "var(--a1)", transform: "translate(2px,-2px)" },
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            <Box
                className="spotlight-glow"
                sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0,
                    transition: "opacity 0.3s",
                    pointerEvents: "none",
                    background: "radial-gradient(500px circle at var(--x,50%) var(--y,50%), rgb(var(--a1r) / 0.14), transparent 70%)",
                }}
            />
            {children}
        </Card>
    );
}

export default SpotlightCard;
