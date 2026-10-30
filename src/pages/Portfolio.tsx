import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Education from "../components/sections/Education";
import ResumePanel from "../components/sections/ResumePanel";
import Contact from "../components/sections/Contact";

export default function Portfolio() {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <ResumePanel />
            <Contact />
        </>
    );
}
