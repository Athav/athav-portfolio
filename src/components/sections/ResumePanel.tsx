import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Preview from "@mui/icons-material/RemoveRedEye";
import resumePDF from "../../assets/resume/athavan-resume.pdf";
import { CONTENT } from "../../lib/data";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

const lineWidths = [90, 70, 90, 45, 90, 70];

export default function ResumePanel() {
    return (
        <Section id="resume" overline="Resume" title="Look and download my resume" maxTitleWidth={520}>
            <Reveal>
                <Box
                    sx={{
                        display: "grid", gridTemplateColumns: { xs: "1fr", md: "240px 1fr" }, gap: 5, alignItems: "center",
                        p: { xs: 3, md: 5 }, borderRadius: 2.5, textAlign: { xs: "center", md: "left" },
                        background: "linear-gradient(135deg, rgb(var(--a1r) / 0.1), rgb(var(--a2r) / 0.08))",
                        border: "1px solid rgb(var(--a1r) / 0.3)", boxShadow: "0 0 50px rgb(var(--a1r) / 0.12)",
                    }}
                >
                    {/* document mock-up */}
                    <Box
                        sx={{
                            mx: "auto", width: "100%", maxWidth: 210, aspectRatio: "3 / 4", p: 2.25, borderRadius: 2, bgcolor: "var(--doc)",
                            border: "1px solid var(--a1)", boxShadow: "0 0 34px rgb(var(--a1r) / 0.3)", display: "flex", flexDirection: "column", gap: 1.1,
                        }}
                    >
                        <Box sx={{ height: 9, width: "55%", borderRadius: 1, bgcolor: "var(--a1)" }} />
                        <Box sx={{ height: 6, width: "35%", borderRadius: 1, bgcolor: "var(--a2)" }} />
                        {lineWidths.map((w, i) => (
                            <Box key={i} sx={{ height: 6, width: `${w}%`, borderRadius: 1, bgcolor: "var(--line)" }} />
                        ))}
                        <Box sx={{ mt: "auto", alignSelf: "flex-end", fontSize: 11, letterSpacing: 2, color: "var(--a1)", border: "1px solid var(--a1)", borderRadius: 1, px: 1 }}>PDF</Box>
                    </Box>

                    <Box>
                        <Typography variant="h4" sx={{ mb: 1 }}>{CONTENT.name}</Typography>
                        <Typography sx={{ color: "text.secondary", mb: 3, lineHeight: 1.6 }}>
                            Web Developer building scalable, responsive web apps with React.js, Angular and Vue.js. Grab the full resume for experience, projects and education.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", mb: 3.5, justifyContent: { xs: "center", md: "flex-start" } }}>
                            {CONTENT.stats.map(([n, l]) => (
                                <Box key={l}>
                                    <Typography component="b" sx={{ display: "block", fontSize: 30, fontWeight: 700, color: "var(--a1)", fontFamily: "'Space Grotesk', sans-serif" }}>{n}</Typography>
                                    <Typography variant="caption" sx={{ color: "var(--mut)" }}>{l}</Typography>
                                </Box>
                            ))}
                        </Box>
                        <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "flex-start" } }}>
                            <Button
                                size="large" variant="contained" href={resumePDF} download="Athavan-P-Resume.pdf" startIcon={<ArrowDownwardIcon />}
                                sx={{ bgcolor: "var(--a1)", color: "var(--on)", px: 3, boxShadow: "0 10px 25px -8px rgb(var(--a1r) / 0.55)", transition: "transform 0.2s ease", "&:hover": { transform: "scale(1.04)", bgcolor: "var(--a1)" } }}
                            >
                                Download
                            </Button>
                            <Button
                                size="large" variant="outlined" component={Link} to="/resume" startIcon={<Preview />}
                                sx={{ borderColor: "var(--line)", color: "text.primary", transition: "transform 0.2s ease", "&:hover": { transform: "scale(1.04)", borderColor: "var(--a1)", color: "var(--a1)" } }}
                            >
                                Preview
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Reveal>
        </Section>
    );
}
