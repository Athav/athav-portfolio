import React, { useEffect, useRef, useState } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Container,
    Typography,
    Button,
    IconButton,
    Card,
    CardContent,
    Chip,
    LinearProgress,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Grid,
    ThemeProvider,
    createTheme,
    CssBaseline,
    Fade,
    Grow,
    useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Preview from "@mui/icons-material/RemoveRedEye";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const CONTENT = {
    name: "Athavan P",
    role: "Web Developer",
    statement:
        "I build interfaces that feel considered — the kind that get out of the way and just work. Over the past five years, I've moved between design and code, building everyday tools that people open without thinking twice. That's the goal: software that feels simple, even when there's a lot going on underneath.",
    about:
        `Web Developer with 5+ years of experience in building scalable and responsive web applications using
        React.js, Angular (6+), and Vue.js. Experienced in delivering client projects across multiple domains with
        working knowledge of Node.js, MongoDB, and RESTful API integration. Strong in UI development,
        performance optimization, and agile methodologies.`,
    experience: [
        { date: "2023 — Present", company: "Northline", title: "Senior Product Designer", body: "Own end-to-end design for the core workflow product. Rebuilt the design system, cut onboarding time by 38%." },
        { date: "2020 — 2023", company: "Fieldwork Co.", title: "Product Designer", body: "First design hire. Designed and helped build the initial web app from a blank canvas to 12,000 weekly users." },
        { date: "2017 — 2020", company: "Studio Halvor", title: "Visual Designer", body: "Editorial and identity work for cultural clients. Learned typography the slow way — by hand-setting a lot of type." },
    ],
    projects: [
        { tag: "Case study", title: "Rebuilding the Northline design system", body: "A token-based system unifying six products, built in Figma and shipped as a React library.", href: "#" },
        { tag: "Side project", title: "Ledger — a plain-text budgeting tool", body: "A local-first budgeting app for people who think in spreadsheets. Built solo with SQLite.", href: "#" },
        { tag: "Case study", title: "Onboarding redesign, Fieldwork", body: "Reduced time-to-first-value from 9 minutes to under 2 by rethinking the first-run experience.", href: "#" },
        { tag: "Experiment", title: "Type-scale playground", body: "A small tool for testing modular type scales live in the browser, used internally by three teams.", href: "#" },
    ],
    skills: [
        { name: "Product Design", level: 95 },
        { name: "React / TypeScript", level: 88 },
        { name: "Design Systems", level: 92 },
        { name: "Motion & Prototyping", level: 80 },
    ],
    contact: { email: "jordan@example.com", github: "github.com/jordanavery", linkedin: "linkedin.com/in/jordanavery" },
};

const NAV = [
    { id: "about", label: "About" },
    { id: "work", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

const theme = createTheme({
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

// Reveals children with a fade+slide once scrolled into view
function Reveal({ children, delay = 0, ...props }) {
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

function SpotlightCard({ children, sx = {} }) {
    const ref = useRef(null);
    const handleMove = (e) => {
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

const GradientBlob = ({ top, left, right, bottom, color, delay = 0 }) => (
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
            opacity: 0.45,
            animation: `blobFloat 14s ease-in-out ${delay}s infinite`,
            "@keyframes blobFloat": {
                "0%, 100%": { transform: "translate(0,0) scale(1)" },
                "33%": { transform: "translate(30px,-40px) scale(1.1)" },
                "66%": { transform: "translate(-20px,20px) scale(0.95)" },
            },
        }}
    />
);

export default function Portfolio() {
    const [active, setActive] = useState("about");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: "-45% 0px -50% 0px" }
        );
        NAV.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id) => {
        setDrawerOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
            />

            {/* Nav */}
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    bgcolor: scrolled ? "rgba(255,255,255,0.75)" : "transparent",
                    backdropFilter: scrolled ? "blur(10px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(15,23,42,0.08)" : "1px solid transparent",
                    transition: "all 0.3s ease",
                    color: "text.primary",
                }}
            >
                <Toolbar sx={{ maxWidth: 1200, mx: "auto", width: "100%", px: { xs: 2, md: 4 } }}>
                    <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
                        {CONTENT.name}
                    </Typography>

                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center" }}>
                        {NAV.map((s) => (
                            <Box
                                key={s.id}
                                component="button"
                                onClick={() => scrollTo(s.id)}
                                sx={{
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    fontFamily: "inherit",
                                    fontSize: 14,
                                    fontWeight: active === s.id ? 600 : 500,
                                    color: active === s.id ? "primary.main" : "text.secondary",
                                    position: "relative",
                                    py: 0.5,
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        left: 0,
                                        bottom: -2,
                                        height: 2,
                                        width: active === s.id ? "100%" : "0%",
                                        background: "linear-gradient(90deg,#7C5CFF,#4F8EFF)",
                                        transition: "width 0.25s ease",
                                    },
                                    "&:hover::after": { width: "100%" },
                                }}
                            >
                                {s.label}
                            </Box>
                        ))}
                        <Button
                            onClick={() => scrollTo("contact")}
                            variant="contained"
                            sx={{
                                background: "linear-gradient(90deg,#7C5CFF,#4F8EFF)",
                                boxShadow: "0 8px 20px -6px rgba(124,92,255,0.5)",
                                transition: "transform 0.2s ease",
                                "&:hover": { transform: "scale(1.04)" },
                            }}
                        >
                            Say hello
                        </Button>
                    </Box>

                    <IconButton sx={{ display: { xs: "flex", md: "none" } }} onClick={() => setDrawerOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 260, pt: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2 }}>
                        <IconButton onClick={() => setDrawerOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List>
                        {NAV.map((s) => (
                            <ListItemButton key={s.id} onClick={() => scrollTo(s.id)}>
                                <ListItemText primary={s.label} />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </Drawer>

            {/* Hero */}
            <Box
                component="section"
                sx={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", px: { xs: 2, md: 4 }, pt: 10 }}
            >
                <Box sx={{ position: "absolute", inset: 0, zIndex: -1, overflow: "hidden" }}>
                    <GradientBlob top={-60} left={-60} color="linear-gradient(135deg,#C4B5FD,#A5B4FC)" delay={0} />
                    <GradientBlob top={120} right={-40} color="linear-gradient(135deg,#93C5FD,#BFDBFE)" delay={4} />
                    <GradientBlob bottom={-60} left="30%" color="linear-gradient(135deg,#FBCFE8,#FDE68A)" delay={8} />
                </Box>

                <Container maxWidth="lg">
                    <Fade in timeout={900}>
                        <Stack direction="row" spacing={2} justifyContent={'center'}>
                            <Avatar
                                alt="Athav"
                                src="src\assets\athav.png"
                                sx={{ width: 200, height: 200 }}
                            />
                        </Stack>
                    </Fade>
                    <Fade in timeout={900}>
                        <Stack direction="row" spacing={2} justifyContent={'center'}>
                            <Typography variant="h1" sx={{ fontSize: { xs: 44, md: 72 }, lineHeight: 1.05, mb: 2, maxWidth: 700 }}>
                                {CONTENT.name}
                            </Typography>
                        </Stack>
                    </Fade>
                    <Stack direction="row" spacing={2} justifyContent={'start'} mt={5}>
                        <Fade in timeout={1000}>
                            <Typography variant="h4" sx={{ color: "primary.main", mb: 3 }}>
                                {CONTENT.role}
                            </Typography>
                        </Fade>
                    </Stack>
                    <Fade in timeout={1100}>
                        <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 5, lineHeight: 1.6 }}>
                            {CONTENT.statement}
                        </Typography>
                    </Fade>
                    <Fade in timeout={1200}>
                        <Box sx={{
                            display: "flex", gap: 1, flexWrap: "wrap", marginBottom: 2,
                            flexDirection: { xs: 'column', sm: 'row' },
                        }}>
                            <Button
                                size="large"
                                variant="contained"
                                endIcon={<ArrowDownwardIcon />}
                                onClick={() => scrollTo("projects")}
                                sx={{
                                    background: "linear-gradient(90deg,#7C5CFF,#4F8EFF)",
                                    boxShadow: "0 10px 25px -8px rgba(124,92,255,0.55)",
                                    px: 3,
                                    transition: "transform 0.2s ease",
                                    "&:hover": { transform: "scale(1.04)" },
                                }}
                            >
                                View my work
                            </Button>
                            <Button
                                size="large"
                                variant="outlined"
                                onClick={() => scrollTo("contact")}
                                sx={{
                                    borderColor: "grey.300",
                                    color: "text.primary",
                                    transition: "transform 0.2s ease",
                                    "&:hover": { transform: "scale(1.04)", borderColor: "primary.main", color: "primary.main" },
                                }}
                            >
                                Get in touch
                            </Button>
                        </Box>
                    </Fade>
                </Container>
            </Box>

            {/* About */}
            <Container id="about" maxWidth="lg" sx={{ py: 5, }}>
                <Reveal>
                    <Typography variant="overline" sx={{ fontSize: 14, color: "primary.main", fontWeight: 700, letterSpacing: 1.5 }}>
                        About
                    </Typography>
                    <Typography variant="h3" sx={{ fontSize: { xs: 30, md: 32 }, mb: 3, maxWidth: 500 }}>
                        A little about how I work
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", fontSize: 18, lineHeight: 1.7 }}>
                        {CONTENT.about}
                    </Typography>
                </Reveal>
            </Container>

            {/* Experience — timeline */}
            <Container id="work" maxWidth="lg" sx={{ py: 5 }}>
                <Reveal>
                    <Typography variant="overline" sx={{ fontSize: 14, color: "primary.main", fontWeight: 700, letterSpacing: 1.5 }}>
                        Experience
                    </Typography>
                    <Typography variant="h3" sx={{ fontSize: { xs: 30, md: 32 }, mb: 7 }}>
                        Where I've been
                    </Typography>
                </Reveal>
                <Box sx={{ position: "relative", maxWidth: 640 }}>
                    <Box
                        sx={{
                            position: "absolute",
                            left: 7,
                            top: 8,
                            bottom: 8,
                            width: 2,
                            background: "linear-gradient(to bottom, #7C5CFF, #93C5FD, transparent)",
                        }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {CONTENT.experience.map((role, i) => (
                            <Reveal key={i} delay={i * 120} sx={{ position: "relative", pl: 5 }}>
                                <Box
                                    sx={{
                                        position: "absolute",
                                        left: 0,
                                        top: 6,
                                        width: 14,
                                        height: 14,
                                        borderRadius: "50%",
                                        bgcolor: "white",
                                        border: "2px solid",
                                        borderColor: "primary.main",
                                        boxShadow: "0 0 0 4px rgba(124,92,255,0.12)",
                                    }}
                                />
                                <Typography variant="caption" sx={{ color: "text.disabled", fontWeight: 500 }}>
                                    {role.date}
                                </Typography>
                                <Typography variant="h5" sx={{ mt: 0.5, mb: 0.5 }}>
                                    {role.title}{" "}
                                    <Typography component="span" sx={{ color: "text.disabled", fontFamily: "inherit", fontWeight: 400 }}>
                                        — {role.company}
                                    </Typography>
                                </Typography>
                                <Typography variant="body2" sx={{ color: "text.secondary", maxWidth: 480, lineHeight: 1.6 }}>
                                    {role.body}
                                </Typography>
                            </Reveal>
                        ))}
                    </Box>
                </Box>
            </Container>

            {/* Projects */}
            <Container id="projects" maxWidth="lg" sx={{ py: 5 }}>
                <Reveal>
                    <Typography variant="overline" sx={{ fontSize: 14, color: "primary.main", fontWeight: 700, letterSpacing: 1.5 }}>
                        Projects
                    </Typography>
                    <Typography variant="h3" sx={{ fontSize: { xs: 30, md: 32 }, mb: 7 }}>
                        Selected work
                    </Typography>
                </Reveal>
                <Grid container spacing={3}>
                    {CONTENT.projects.map((p, i) => (
                        <Grid item xs={12} md={6} key={i}>
                            <Reveal delay={i * 100}>
                                <Box
                                    component="a"
                                    href={p.href}
                                    sx={{ display: "block", textDecoration: "none", color: "inherit" }}
                                >
                                    <SpotlightCard>
                                        <CardContent sx={{ p: 3 }}>
                                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                                                <Chip
                                                    label={p.tag}
                                                    size="small"
                                                    sx={{ bgcolor: "rgba(124,92,255,0.08)", color: "primary.main", fontWeight: 600, fontSize: 11 }}
                                                />
                                                <ArrowOutwardIcon
                                                    className="spotlight-arrow"
                                                    sx={{ fontSize: 18, color: "text.disabled", transition: "all 0.25s ease" }}
                                                />
                                            </Box>
                                            <Typography variant="h6" sx={{ mb: 1 }}>
                                                {p.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                                                {p.body}
                                            </Typography>
                                        </CardContent>
                                    </SpotlightCard>
                                </Box>
                            </Reveal>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Skills */}
            <Container id="skills" maxWidth="lg" sx={{ py: 5 }}>
                <Reveal>
                    <Typography variant="overline" sx={{ fontSize: 14, color: "primary.main", fontWeight: 700, letterSpacing: 1.5 }}>
                        Skills
                    </Typography>
                    <Typography variant="h3" sx={{ fontSize: { xs: 30, md: 32 }, mb: 7 }}>
                        What I bring
                    </Typography>
                </Reveal>
                <Box sx={{ maxWidth: 520, display: "flex", flexDirection: "column", gap: 4 }}>
                    {CONTENT.skills.map((skill, i) => (
                        <Reveal key={skill.name} delay={i * 100}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    {skill.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "text.disabled" }}>
                                    {skill.level}%
                                </Typography>
                            </Box>
                            <LinearProgress
                                variant="determinate"
                                value={skill.level}
                                sx={{
                                    height: 8,
                                    borderRadius: 4,
                                    bgcolor: "grey.200",
                                    "& .MuiLinearProgress-bar": {
                                        borderRadius: 4,
                                        background: "linear-gradient(90deg,#7C5CFF,#4F8EFF)",
                                    },
                                }}
                            />
                        </Reveal>
                    ))}
                </Box>
            </Container>

            {/* Resume */}
            <Container id="resume" maxWidth="lg" sx={{ py: 5, }}>
                <Reveal>
                    <Typography variant="overline" sx={{ fontSize: 14, color: "primary.main", fontWeight: 700, letterSpacing: 1.5 }}>
                        Resume
                    </Typography>
                    <Typography variant="h3" sx={{ fontSize: { xs: 30, md: 32 }, mb: 3, maxWidth: 500 }}>
                        Look and download my resume
                    </Typography>
                    <Fade in timeout={1200}>
                        <Box sx={{
                            display: "flex", gap: 1, flexWrap: "wrap", marginBottom: 2,
                            flexDirection: { xs: 'column', sm: 'row' },
                        }}>
                            {/* 
                                <form method="get" action="file.doc">
                                    <button type="submit">Download!</button>
                                </form>
                            */}
                            <Button
                                size="large"
                                type="submit"
                                variant="contained"
                                href="src\assets\resume\athavan-resume.pdf"
                                target="_blank" download
                                startIcon={<ArrowDownwardIcon />}
                                sx={{
                                    background: "linear-gradient(90deg,#7C5CFF,#4F8EFF)",
                                    boxShadow: "0 10px 25px -8px rgba(124,92,255,0.55)",
                                    px: 3,
                                    transition: "transform 0.2s ease",
                                    "&:hover": { transform: "scale(1.04)" },
                                }}
                            >
                                Download
                            </Button>
                            <Button
                                size="large"
                                variant="outlined"
                                href="src\assets\resume\athavan-resume.pdf"
                                target="_blank"
                                startIcon={<Preview />}
                                sx={{
                                    borderColor: "grey.300",
                                    color: "text.primary",
                                    transition: "transform 0.2s ease",
                                    "&:hover": { transform: "scale(1.04)", borderColor: "primary.main", color: "primary.main" },
                                }}
                            >
                                Preview
                            </Button>
                        </Box>
                    </Fade>
                </Reveal>
            </Container>

            {/* Contact */}
            <Container id="contact" maxWidth="lg" sx={{ py: 5 }}>
                <Reveal>
                    <Box
                        sx={{
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: 6,
                            background: "linear-gradient(135deg,#7C5CFF,#4F8EFF)",
                            color: "white",
                            p: { xs: 5, md: 8 },
                        }}
                    >
                        <GradientBlob top={-80} right={-80} color="rgba(255,255,255,0.25)" delay={2} />
                        <Typography variant="overline" sx={{ color: "rgba(255,255,255,0.8)", fontWeight: 700, letterSpacing: 1.5 }}>
                            Contact
                        </Typography>
                        <Typography variant="h3" sx={{ fontSize: { xs: 30, md: 46 }, mb: 4, maxWidth: 480, lineHeight: 1.2 }}>
                            Let's build something worth shipping.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                            <Button
                                href={`mailto:${CONTENT.contact.email}`}
                                variant="contained"
                                startIcon={<MailOutlineIcon />}
                                sx={{
                                    bgcolor: "white",
                                    color: "primary.main",
                                    transition: "transform 0.2s ease",
                                    "&:hover": { bgcolor: "grey.100", transform: "scale(1.04)" },
                                }}
                            >
                                {CONTENT.contact.email}
                            </Button>
                            <Button
                                href={`https://${CONTENT.contact.github}`}
                                variant="outlined"
                                startIcon={<GitHubIcon />}
                                sx={{
                                    borderColor: "rgba(255,255,255,0.4)",
                                    color: "white",
                                    transition: "transform 0.2s ease",
                                    "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)", transform: "scale(1.04)" },
                                }}
                            >
                                GitHub
                            </Button>
                            <Button
                                href={`https://${CONTENT.contact.linkedin}`}
                                variant="outlined"
                                startIcon={<LinkedInIcon />}
                                sx={{
                                    borderColor: "rgba(255,255,255,0.4)",
                                    color: "white",
                                    transition: "transform 0.2s ease",
                                    "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)", transform: "scale(1.04)" },
                                }}
                            >
                                LinkedIn
                            </Button>
                        </Box>
                    </Box>
                </Reveal>
                <Typography variant="body2" align="center" sx={{ color: "text.disabled", mt: 6 }}>
                    © {new Date().getFullYear()} {CONTENT.name}. Built with care.
                </Typography>
            </Container>
        </ThemeProvider>
    );
}