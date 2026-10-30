import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "light",
        background: { default: "#FAFAFC", paper: "#FFFFFF" },
        primary: { main: "#7C5CFF" },
        secondary: { main: "#4F8EFF" },
        text: { primary: "#0F172A", secondary: "#475569" },
    },
    typography: {
        fontFamily: "'Inter', sans-serif",
        h1: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 },
        h2: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
        h3: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
        h4: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
        h5: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
        h6: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
        button: { textTransform: "none", fontWeight: 600 },
    },
    shape: { borderRadius: 14 },
});
