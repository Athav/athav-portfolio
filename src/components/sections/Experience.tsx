import { Box, Typography } from "@mui/material";
import { CONTENT } from "../../lib/data";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

export default function Experience() {
    return (
        <Section id="work" overline="Experience" title="Where I've been">
            <Box sx={{ position: "relative", maxWidth: 720 }}>
                <Box
                    sx={{
                        position: "absolute", left: 7, top: 8, bottom: 8, width: 2,
                        background: "linear-gradient(to bottom, var(--a1), var(--a2), transparent)",
                    }}
                />
                <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {CONTENT.experience.map((role, i) => (
                        <Reveal key={role.company} delay={i * 120} sx={{ position: "relative", pl: 5 }}>
                            <Box
                                sx={{
                                    position: "absolute", left: 0, top: 6, width: 14, height: 14, borderRadius: "50%",
                                    bgcolor: "background.default", border: "2px solid var(--a1)",
                                    boxShadow: "0 0 0 4px rgb(var(--a1r) / 0.15)",
                                }}
                            />
                            <Typography variant="caption" sx={{ color: "var(--mut)", fontWeight: 500 }}>{role.date}</Typography>
                            <Typography variant="h5" sx={{ mt: 0.5, mb: 0.5 }}>
                                {role.title}{" "}
                                <Typography component="span" sx={{ color: "var(--mut)", fontFamily: "inherit", fontWeight: 400 }}>
                                    — {role.company}
                                </Typography>
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary", maxWidth: 560, lineHeight: 1.6 }}>
                                {role.body}
                            </Typography>
                        </Reveal>
                    ))}
                </Box>
            </Box>
        </Section>
    );
}
