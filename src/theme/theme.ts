import { createTheme } from "@mui/material/styles";
import type { SiteThemeDef } from "./themes";

// Builds the MUI theme for the selected site theme
export const buildTheme = (t: SiteThemeDef) =>
    createTheme({
        palette: {
            mode: t.mode,
            background: { default: t.bg, paper: t.paper },
            primary: { main: t.a1 },
            secondary: { main: t.a2 },
            text: { primary: t.tx, secondary: t.soft },
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
