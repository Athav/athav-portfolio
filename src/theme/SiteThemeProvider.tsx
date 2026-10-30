import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { DEFAULT_THEME, THEMES } from "./themes";
import { buildTheme } from "./theme";

interface SiteThemeContextValue {
    themeId: string;
    setThemeId: (id: string) => void;
}

const SiteThemeContext = createContext<SiteThemeContextValue>({ themeId: DEFAULT_THEME, setThemeId: () => { } });

// eslint-disable-next-line react-refresh/only-export-components
export const useSiteTheme = () => useContext(SiteThemeContext);

const readSaved = (): string => {
    try {
        const s = localStorage.getItem("site-theme");
        if (s && THEMES.some((t) => t.id === s)) return s;
    } catch { /* storage unavailable */ }
    return DEFAULT_THEME;
};

export function SiteThemeProvider({ children }: { children: ReactNode }) {
    const [themeId, setThemeId] = useState<string>(readSaved);

    useEffect(() => {
        document.documentElement.dataset.theme = themeId;
        try { localStorage.setItem("site-theme", themeId); } catch { /* ignore */ }
    }, [themeId]);

    const muiTheme = useMemo(() => buildTheme(THEMES.find((t) => t.id === themeId) ?? THEMES[0]), [themeId]);

    return (
        <SiteThemeContext.Provider value={{ themeId, setThemeId }}>
            <ThemeProvider theme={muiTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </SiteThemeContext.Provider>
    );
}
