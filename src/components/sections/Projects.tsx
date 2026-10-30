import { Box, CardContent, Chip, Typography } from "@mui/material";
import { CONTENT } from "../../lib/data";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import SpotlightCard from "../ui/SpotlightCard";

export default function Projects() {
    return (
        <Section id="projects" overline="Projects" title="Selected work">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, gap: 3 }}>
                {CONTENT.projects.map((p, i) => (
                    <Reveal key={p.title} delay={(i % 2) * 100} sx={{ height: "100%" }}>
                        <SpotlightCard>
                            <CardContent sx={{ p: 3 }}>
                                <Chip
                                    label={p.tag}
                                    size="small"
                                    sx={{ mb: 2, bgcolor: "rgb(var(--a1r) / 0.12)", color: "var(--a1)", fontWeight: 600, fontSize: 11 }}
                                />
                                <Typography variant="h6" sx={{ mb: 1 }}>{p.title}</Typography>
                                <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6, mb: 2 }}>{p.body}</Typography>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                                    {p.tech.map((t) => (
                                        <Chip key={t} label={t} size="small" variant="outlined" sx={{ fontSize: 11, borderColor: "var(--line)", color: "text.secondary" }} />
                                    ))}
                                </Box>
                            </CardContent>
                        </SpotlightCard>
                    </Reveal>
                ))}
            </Box>
        </Section>
    );
}
