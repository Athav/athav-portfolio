import { Box, Container, Typography } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { CONTENT } from "../../lib/data";
import Reveal from "../ui/Reveal";
import SpotlightCard from "../ui/SpotlightCard";
import GradientBlob from "../ui/GradientBlob";
import Section from "../ui/Section";

interface ContactCard { label: string; value: string; href: string; Icon: SvgIconComponent; cta: string; alt: boolean }

const { contact } = CONTENT;
const cards: ContactCard[] = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}`, Icon: MailOutlineIcon, cta: "Send a message", alt: false },
    { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}`, Icon: PhoneIcon, cta: "Call me", alt: true },
    { label: "LinkedIn", value: "athavan-p", href: contact.linkedin, Icon: LinkedInIcon, cta: "Connect", alt: false },
    { label: "GitHub", value: "github.com/Athav", href: contact.github, Icon: GitHubIcon, cta: "View code", alt: true },
];

export default function Contact() {
    return (
        <Container id="contact" maxWidth="lg" sx={{ py: { xs: 5, md: 7 }, scrollMarginTop: "72px" }}>
            <Section id="resume" overline="Contact" title="Get in touch" maxTitleWidth={520}>
            <Reveal>
                <Box sx={{ position: "relative", overflow: "hidden", textAlign: "center", mb: 5, py: { xs: 4, md: 6 }, px: 2, borderRadius: 2.5, border: "1px solid rgb(var(--a1r) / 0.25)", background: "linear-gradient(135deg, rgb(var(--a1r) / 0.12), rgb(var(--a2r) / 0.08))" }}>
                    <GradientBlob top={-120} right={-100} color="var(--a1)" delay={2} />
                    <Box sx={{ position: "relative" }}>
                        <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 1.5 }}>Contact</Typography>
                        <Typography variant="h3" sx={{ fontSize: { xs: 30, md: 44 }, lineHeight: 1.2, maxWidth: 560, mx: "auto", textShadow: "0 0 28px rgb(var(--a1r) / var(--gl))" }}>
                            Let&rsquo;s build something worth shipping.
                        </Typography>
                    </Box>
                </Box>
            </Reveal>
            </Section>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }, gap: 2.5 }}>
                {cards.map(({ label, value, href, Icon, cta, alt }, i) => (
                    <Reveal key={label} delay={i * 80} sx={{ height: "100%" }}>
                        <Box
                            component="a" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                            sx={{ display: "block", height: "100%", textDecoration: "none", color: "inherit" }}
                        >
                            <SpotlightCard>
                                <Box sx={{ p: 2.75, display: "flex", flexDirection: "column", gap: 0.75 }}>
                                    <Box
                                        sx={{
                                            mb: 1, width: 46, height: 46, borderRadius: "50%", display: "grid", placeItems: "center", color: "var(--on)",
                                            bgcolor: alt ? "var(--a2)" : "var(--a1)", boxShadow: `0 0 18px rgb(var(${alt ? "--a2r" : "--a1r"}) / 0.5)`,
                                        }}
                                    >
                                        <Icon />
                                    </Box>
                                    <Typography variant="caption" sx={{ color: "var(--mut)", letterSpacing: 1.5, textTransform: "uppercase" }}>{label}</Typography>
                                    <Typography sx={{ wordBreak: "break-word" }}>{value}</Typography>
                                    <Typography variant="body2" sx={{ color: "var(--a1)", mt: 0.5 }}>{cta} →</Typography>
                                </Box>
                            </SpotlightCard>
                        </Box>
                    </Reveal>
                ))}
            </Box>

            <Typography variant="body2" align="center" sx={{ color: "var(--mut)", mt: 6 }}>
                © {new Date().getFullYear()} {CONTENT.name}. Built with React.js, MUI and Tailwind CSS.
            </Typography>
        </Container>
    );
}
