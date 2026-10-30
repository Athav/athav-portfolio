import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import resumePDF from "../assets/resume/athavan-resume.pdf";
import { CONTENT } from "../lib/data";

export default function ResumePage() {
    return (
        <Container maxWidth="md" sx={{ pt: 14, pb: 8, textAlign: "center" }}>
            <Typography variant="h3" sx={{ textShadow: "0 0 28px rgb(var(--a1r) / var(--gl))" }}>My Resume</Typography>
            <Typography sx={{ color: "text.secondary", mt: 1.5 }}>{CONTENT.name} | Web Developer | 6+ Years Experience</Typography>
            <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap", mt: 4 }}>
                <Button
                    size="large" variant="contained" href={resumePDF} download="Athavan-P-Resume.pdf" startIcon={<ArrowDownwardIcon />}
                    sx={{ bgcolor: "var(--a1)", color: "var(--on)", "&:hover": { bgcolor: "var(--a1)" } }}
                >
                    Download PDF
                </Button>
                <Button size="large" variant="outlined" color="secondary" component={Link} to="/" startIcon={<ArrowBackIcon />}>
                    Back to portfolio
                </Button>
            </Box>
            <Box sx={{ mt: 5, p: 1, borderRadius: 3, overflow: "hidden", border: "1px solid rgb(var(--a1r) / 0.25)", bgcolor: "var(--card)" }}>
                <Box component="iframe" src={`${resumePDF}#view=FitH`} title="Resume" sx={{ width: "100%", height: "80vh", border: 0, borderRadius: 2, bgcolor: "white" }} />
            </Box>
        </Container>
    );
}
