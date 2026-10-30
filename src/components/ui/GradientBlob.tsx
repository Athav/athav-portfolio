import { Box } from "@mui/material";
import type { GradientBlobProps } from "../../lib/interfaces";

// Soft floating background blob; pass a CSS colour such as "var(--a1)" so it follows the theme
const GradientBlob = ({ top, left, right, bottom, color, delay = 0 }: GradientBlobProps) => (
    <Box
        sx={{
            position: "absolute",
            top,
            left,
            right,
            bottom,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: color,
            filter: "blur(70px)",
            opacity: "var(--orb)",
            animation: `blobFloat 14s ease-in-out ${delay}s infinite`,
            "@keyframes blobFloat": {
                "0%, 100%": { transform: "translate(0,0) scale(1)" },
                "33%": { transform: "translate(30px,-40px) scale(1.1)" },
                "66%": { transform: "translate(-20px,20px) scale(0.95)" },
            },
        }}
    />
);

export default GradientBlob;
