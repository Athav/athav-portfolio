import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
    AppBar, Box, Button, Drawer, IconButton, List, ListItemButton, ListItemText, Menu, MenuItem,
    Toolbar, Typography, useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PaletteIcon from "@mui/icons-material/Palette";
import CheckIcon from "@mui/icons-material/Check";
import { CONTENT, NAV } from "../../lib/data";
import { scrollToId } from "../../lib/scroll";
import { THEMES } from "../../theme/themes";
import { useSiteTheme } from "../../theme/SiteThemeProvider";

export default function Navbar() {
    const { themeId, setThemeId } = useSiteTheme();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const isHome = pathname === "/";
    const [active, setActive] = useState("about");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchor, setAnchor] = useState<HTMLElement | null>(null);
    const [progress, setProgress] = useState(0);
    const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

    // scroll progress bar
    useEffect(() => {
        const f = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(max > 0 ? window.scrollY / max : 0);
        };
        f();
        window.addEventListener("scroll", f, { passive: true });
        return () => window.removeEventListener("scroll", f);
    }, [pathname]);

    // highlight the section in view (home page only)
    useEffect(() => {
        if (!isHome) return;
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: "-45% 0px -50% 0px" }
        );
        NAV.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [isHome]);

    const goTo = (id: string) => {
        setDrawerOpen(false);
        if (isHome) scrollToId(id);
        else {
            navigate("/");
            setTimeout(() => scrollToId(id), 150);
        }
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    bgcolor: scrolled || !isHome ? "var(--glass)" : "transparent",
                    backgroundImage: "none",
                    backdropFilter: scrolled || !isHome ? "blur(12px)" : "none",
                    borderBottom: scrolled || !isHome ? "1px solid rgb(var(--a1r) / 0.18)" : "1px solid transparent",
                    transition: "all 0.3s ease",
                    color: "text.primary",
                    pt: "env(safe-area-inset-top)",
                }}
            >
                <Toolbar sx={{ maxWidth: 1200, mx: "auto", width: "100%", px: { xs: 2, md: 4 } }}>
                    <Typography variant="h6" onClick={() => goTo("about")} sx={{ flexGrow: 1, fontWeight: 700, cursor: "pointer" }}>
                        {CONTENT.name}
                    </Typography>

                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
                        {NAV.map((s) => (
                            <Box
                                key={s.id}
                                component="button"
                                onClick={() => goTo(s.id)}
                                sx={{
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    fontFamily: "inherit",
                                    fontSize: 14,
                                    fontWeight: isHome && active === s.id ? 600 : 500,
                                    color: isHome && active === s.id ? "primary.main" : "text.secondary",
                                    position: "relative",
                                    py: 0.5,
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        left: 0,
                                        bottom: -2,
                                        height: 2,
                                        width: isHome && active === s.id ? "100%" : "0%",
                                        background: "linear-gradient(90deg,var(--a1),var(--a2))",
                                        transition: "width 0.25s ease",
                                    },
                                    "&:hover::after": { width: "100%" },
                                }}
                            >
                                {s.label}
                            </Box>
                        ))}
                        <Button
                            onClick={() => goTo("contact")}
                            variant="contained"
                            sx={{
                                bgcolor: "var(--a1)",
                                color: "var(--on)",
                                boxShadow: "0 8px 20px -6px rgb(var(--a1r) / 0.5)",
                                transition: "transform 0.2s ease",
                                "&:hover": { transform: "scale(1.04)", bgcolor: "var(--a1)" },
                            }}
                        >
                            Say hello
                        </Button>
                    </Box>

                    {/* theme switcher */}
                    <IconButton aria-label="Change theme" onClick={(e) => setAnchor(e.currentTarget)} sx={{ ml: 1, color: "primary.main" }}>
                        <PaletteIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchor}
                        open={!!anchor}
                        onClose={() => setAnchor(null)}
                        slotProps={{ paper: { sx: { minWidth: 250, border: "1px solid rgb(var(--a1r) / 0.3)", backgroundImage: "none" } } }}
                    >
                        {THEMES.map((t) => (
                            <MenuItem
                                key={t.id}
                                selected={t.id === themeId}
                                onClick={() => { setThemeId(t.id); setAnchor(null); }}
                            >
                                <Box sx={{ display: "flex", mr: 1.75 }}>
                                    {[t.bg, t.a1, t.a2].map((c, i) => (
                                        <Box
                                            key={i}
                                            sx={{ width: 16, height: 16, borderRadius: "50%", bgcolor: c, border: "1px solid rgba(128,128,128,0.6)", ml: i ? "-4px" : 0 }}
                                        />
                                    ))}
                                </Box>
                                <ListItemText primary={t.label} />
                                {t.id === themeId && <CheckIcon fontSize="small" color="primary" sx={{ ml: 1 }} />}
                            </MenuItem>
                        ))}
                    </Menu>

                    <IconButton aria-label="Open menu" sx={{ display: { xs: "flex", md: "none" } }} onClick={() => setDrawerOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <Box sx={{ height: 2, width: `${progress * 100}%`, background: "linear-gradient(90deg,var(--a1),var(--a2))" }} />
            </AppBar>

            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)} slotProps={{ paper: { sx: { backgroundImage: "none" } } }}>
                <Box sx={{ width: 260, pt: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2 }}>
                        <IconButton aria-label="Close menu" onClick={() => setDrawerOpen(false)}><CloseIcon /></IconButton>
                    </Box>
                    <List>
                        {NAV.map((s) => (
                            <ListItemButton key={s.id} onClick={() => goTo(s.id)}>
                                <ListItemText primary={s.label} slotProps={{ primary: { color: isHome && active === s.id ? "primary" : "inherit" } }} />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}
