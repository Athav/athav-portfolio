import { Box, CardContent, Typography } from "@mui/material";
import { CONTENT } from "../../lib/data";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import SpotlightCard from "../ui/SpotlightCard";

export default function Education() {
    return (
        <Section id="education" overline="Education" title="Where I studied">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, gap: 3 }}>
                {CONTENT.education.map((e, i) => (
                    <Reveal key={e.title} delay={(i % 2) * 100} sx={{ height: "100%" }}>
                        <SpotlightCard>
                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="caption" sx={{ color: "var(--a1)", fontWeight: 600 }}>{e.date} · {e.grade}</Typography>
                                <Typography variant="h6" sx={{ mt: 0.5, mb: 0.5 }}>{e.title}</Typography>
                                <Typography variant="body2" sx={{ color: "text.secondary" }}>{e.school}</Typography>
                            </CardContent>
                        </SpotlightCard>
                    </Reveal>
                ))}
            </Box>
        </Section>
    );
}
