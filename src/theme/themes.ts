export interface SiteThemeDef {
    id: string;
    label: string;
    mode: "light" | "dark";
    bg: string;
    paper: string;
    tx: string;
    soft: string;
    a1: string;
    a2: string;
}

// The CSS variables for each id live in src/index.css
export const THEMES: SiteThemeDef[] = [
    { id: "light", label: "Light", mode: "light", bg: "#FAFAFC", paper: "#FFFFFF", tx: "#0F172A", soft: "#475569", a1: "#7C5CFF", a2: "#4F8EFF" },
    { id: "neon", label: "Neon Dark", mode: "dark", bg: "#05060f", paper: "#0b0e1f", tx: "#e8ecff", soft: "#c3c9e0", a1: "#22f3ff", a2: "#ff2fd6" },
    { id: "forest", label: "Forest Green", mode: "dark", bg: "#07241a", paper: "#0c3123", tx: "#fffbe8", soft: "#e6e0c2", a1: "#ffd93d", a2: "#f6edcf" },
    { id: "rose", label: "Dark Pink", mode: "dark", bg: "#3d0b2b", paper: "#4d1138", tx: "#ffffff", soft: "#f6d9e7", a1: "#ff5fa2", a2: "#ffffff" },
    { id: "crimson", label: "Dark Red", mode: "dark", bg: "#2a0808", paper: "#431010", tx: "#ffffff", soft: "#f9d9d9", a1: "#ff4d4d", a2: "#ffffff" },
];

export const DEFAULT_THEME = "rose";
