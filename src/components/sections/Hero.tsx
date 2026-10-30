import { Avatar, Box, Button, Container, Fade, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import profImg from "../../assets/resume/athav.png";
import { CONTENT } from "../../lib/data";
import { scrollToId } from "../../lib/scroll";
import useTyping from "../../hooks/useTyping";
import GradientBlob from "../ui/GradientBlob";

export default function Hero() {
    const role = useTyping(CONTENT.roles);

    return (
        <Box
            component="section"
            sx={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", px: { xs: 2, md: 4 }, pt: 10 }}
        >
            <Box sx={{ position: "absolute", inset: 0, zIndex: -1, overflow: "hidden" }}>
                <GradientBlob top={-60} left={-60} color="var(--a1)" delay={0} />
                <GradientBlob top={120} right={-40} color="var(--a2)" delay={4} />
                <GradientBlob bottom={-60} left="30%" color="var(--a1)" delay={8} />
            </Box>

            <Container maxWidth="lg" sx={{ textAlign: "center" }}>
                <Fade in timeout={900}>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                        <Avatar
                            alt={CONTENT.name}
                            src={profImg}
                            sx={{ width: 200, height: 200, border: "3px solid var(--a1)", boxShadow: "0 0 40px rgb(var(--a1r) / 0.45)" }}
                        />
                    </Box>
                </Fade>
                <Fade in timeout={1000}>
                    <Typography variant="h1" sx={{ fontSize: { xs: 44, md: 72 }, lineHeight: 1.05, mb: 2, textShadow: "0 0 28px rgb(var(--a1r) / var(--gl))" }}>
                        {CONTENT.name}
                    </Typography>
                </Fade>
                <Fade in timeout={1100}>
                    <Typography variant="h4" sx={{ color: "primary.main", mb: 3, minHeight: "1.4em" }}>
                        {role}
                        <Box
                            component="span"
                            sx={{
                                display: "inline-block", width: 3, height: "1em", bgcolor: "primary.main", ml: 0.5, verticalAlign: "-0.12em",
                                animation: "caretBlink 1s steps(2) infinite",
                                "@keyframes caretBlink": { "50%": { opacity: 0 } },
                            }}
                        />
                    </Typography>
                </Fade>
                {/* <Fade in timeout={1200}>
                    <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 5, lineHeight: 1.6, maxWidth: 820, mx: "auto" }}>
                        {CONTENT.statement}
                    </Typography>
                </Fade> */}
                <Fade in timeout={1300}>
                    <Box sx={{ pb: 2, display: "flex", gap: 1.5, justifyContent: "center", flexDirection: { xs: "column", sm: "row" }, alignItems: "center" }}>
                        <Button
                            size="large"
                            variant="contained"
                            endIcon={<ArrowDownwardIcon />}
                            onClick={() => scrollToId("projects")}
                            sx={{
                                width: { xs: '100%', sm: '20%' },
                                bgcolor: "var(--a1)", color: "var(--on)", px: 3,
                                boxShadow: "0 10px 25px -8px rgb(var(--a1r) / 0.55)",
                                transition: "transform 0.2s ease",
                                "&:hover": { transform: "scale(1.04)", bgcolor: "var(--a1)" },
                            }}
                        >
                            View my works
                        </Button>
                        <Button
                            size="large"
                            variant="outlined"
                            onClick={() => scrollToId("contact")}
                            sx={{
                                width: { xs: '100%', sm: '15%' },
                                borderColor: "var(--line)", color: "text.primary", transition: "transform 0.2s ease",
                                "&:hover": { transform: "scale(1.04)", borderColor: "var(--a1)", color: "var(--a1)" },
                            }}
                        >
                            Get in touch
                        </Button>
                        <Button
                            size="large"
                            variant="outlined"
                            onClick={() => scrollToId("resume")}
                            sx={{
                                width: { xs: '100%', sm: '15%' },
                                borderColor: "var(--line)", color: "text.primary", transition: "transform 0.2s ease",
                                "&:hover": { transform: "scale(1.04)", borderColor: "var(--a1)", color: "var(--a1)" },
                            }}
                        >
                            Resume
                        </Button>
                    </Box>
                </Fade>
            </Container>
        </Box>
    );
}
