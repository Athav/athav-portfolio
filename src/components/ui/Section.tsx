import { Container, Typography } from "@mui/material";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
    id: string;
    overline: string;
    title: string;
    children: ReactNode;
    maxTitleWidth?: number;
}

export default function Section({ id, overline, title, children, maxTitleWidth }: SectionProps) {
    return (
        <Container id={id} maxWidth="lg" sx={{ py: { xs: 5, md: 4 }, scrollMarginTop: "72px" }}>
            <Reveal>
                <Typography variant="overline" sx={{ fontSize: 14, color: "primary.main", fontWeight: 700, letterSpacing: 1.5 }}>
                    {overline}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: { xs: 30, md: 36 }, mb: 6, maxWidth: maxTitleWidth }}>
                    {title}
                </Typography>
            </Reveal>
            {children}
        </Container>
    );
}
