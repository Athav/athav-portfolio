import { Box, CardContent, Chip, Typography } from "@mui/material";
import { CONTENT } from "../../lib/data";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import SpotlightCard from "../ui/SpotlightCard";

export default function Skills() {
    return (
        <Section id="skills" overline="Skills" title="What I bring">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, gap: 3 }}>
                {CONTENT.skillSets.map((s, i) => (
                    <Reveal key={s.name} delay={(i % 2) * 100} sx={{ height: "100%" }}>
                        <SpotlightCard>
                            <CardContent sx={{ p: 3 }}>
                                <Chip
                                    label={s.name}
                                    sx={{ mb: 2.5, bgcolor: "rgb(var(--a1r) / 0.12)", color: "var(--a1)", fontWeight: 600, fontSize: 15 }}
                                />
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2.5 }}>
                                    {s.items.map(({ name, Icon, color }) => (
                                        <Box
                                            key={name}
                                            sx={{
                                                display: "flex", flexDirection: "column", alignItems: "center", gap: 0.75, width: 76,
                                                transition: "transform 0.25s ease",
                                                "&:hover": { transform: "translateY(-5px) scale(1.08)" },
                                            }}
                                        >
                                            <Icon size={32} color={color} />
                                            <Typography variant="caption" sx={{ color: "text.secondary", textAlign: "center", lineHeight: 1.2 }}>{name}</Typography>
                                        </Box>
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
