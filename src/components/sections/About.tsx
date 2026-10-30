import { Typography } from "@mui/material";
import { CONTENT } from "../../lib/data";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

export default function About() {
    return (
        <Section id="about" overline="About" title="A little about how I work" maxTitleWidth={500}>
            <Reveal delay={100}>
                <Typography variant="body1" sx={{ color: "text.secondary", fontSize: 18, lineHeight: 1.7, maxWidth: 820 }}>
                    {CONTENT.about}
                </Typography>
            </Reveal>
        </Section>
    );
}
