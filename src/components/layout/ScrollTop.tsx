import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const CIRCUMFERENCE = 2 * Math.PI * 22;

// Floating button with a progress ring; appears after scrolling down
export default function ScrollTop() {
    const [show, setShow] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const f = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(max > 0 ? window.scrollY / max : 0);
            setShow(window.scrollY > 400);
        };
        f();
        window.addEventListener("scroll", f, { passive: true });
        return () => window.removeEventListener("scroll", f);
    }, []);

    return (
        <Box
            component="button"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
                position: "fixed",
                right: 24,
                bottom: "calc(24px + env(safe-area-inset-bottom))",
                zIndex: 1200,
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: 0,
                cursor: "pointer",
                bgcolor: "background.paper",
                color: "var(--a1)",
                display: "grid",
                placeItems: "center",
                boxShadow: "0 0 20px rgb(var(--a1r) / 0.4)",
                opacity: show ? 1 : 0,
                transform: show ? "none" : "scale(0.5) translateY(20px)",
                pointerEvents: show ? "auto" : "none",
                transition: "opacity 0.3s, transform 0.3s",
                "&:hover": { translate: "0 -4px" },
            }}
        >
            <svg width="48" height="48" viewBox="0 0 48 48" style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }}>
                <circle cx="24" cy="24" r="22" fill="none" stroke="rgb(var(--a1r) / 0.2)" strokeWidth="2" />
                <circle
                    cx="24" cy="24" r="22" fill="none" stroke="var(--a1)" strokeWidth="2" strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE} strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
                />
            </svg>
            <KeyboardArrowUpIcon />
        </Box>
    );
}
