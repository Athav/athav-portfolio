import {
    SiAngular, SiBitbucket, SiCss, SiExpress, SiFigma, SiGit, SiHtml5,
    SiMongodb, SiNodedotjs, SiNpm, SiReact, SiSass, SiVuedotjs,
} from "react-icons/si";
import type { EducationItem, ExperienceItem, NavItem, ProjectItem, SkillSet } from "./interfaces";

const experience: ExperienceItem[] = [
    {
        date: "Oct 2020 — Aug 2025 · 4 yrs 10 mos", company: "Sumanas Technology, Madurai", title: "Web Developer",
        body: "React, Angular, Vue and React Native work for client products: a multi-tenant hospital system, a workforce portal, NYU's seating platform and a balloon booking site.",
    },
    {
        date: "May 2019 — Sep 2020 · 1 yr 4 mos", company: "Wondersoft Pvt Ltd (client company)", title: "Angular Developer",
        body: "Migrated the eShopaid retail POS frontend from Knockout.js to Angular 8 and built reusable, configuration-driven components.",
    },
    {
        date: "May 2018 — May 2019 · 1 yr", company: "ValueMatters Org Consulting", title: "Full Stack Developer",
        body: "Built a MEAN-stack patient monitoring proof of concept with role-based dashboards, appointment booking and medical history tracking.",
    },
];

const projects: ProjectItem[] = [
    { tag: "Sumanas Technology", title: "Hospital & Patient Management System", body: "Multi-tenant hospital system covering IP, OP, Pharmacy, Lab, Pathology and Radiology, with role-based access across hospital branches.", tech: ["Angular 7", "TypeScript", "HTML5", "SCSS", "RxJS", "REST APIs", "Git"] },
    { tag: "Sumanas Technology", title: "Work Force Management", body: "Employee and management dashboards for attendance, performance tracking and scrum-style task ticketing with real-time status updates.", tech: ["Angular 7", "TypeScript", "HTML5", "SCSS", "Git"] },
    { tag: "Sumanas Technology", title: "NYU Seating Management System", body: "Seat layout designer, student allocation and printable seat labels for NYU Law School classrooms and exam halls.", tech: ["Vue.js", "Laravel", "MySQL", "SCSS", "Vuex", "REST APIs", "Git"] },
    { tag: "Sumanas Technology", title: "Rainbow Ryders Balloon Booking", body: "Hot air balloon booking platform: a Vue and Laravel admin site for balloons, pricing, coupons and payments, plus a React user site with calendar booking.", tech: ["Vue.js", "React.js", "Laravel", "MySQL", "WordPress", "SCSS", "Vuex", "REST APIs"] },
    { tag: "Wondersoft Pvt Ltd", title: "eShopaid Retail POS (Angular Migration)", body: "Migrated a cloud-based retail POS frontend from Knockout.js to Angular 8: register management, stock adjustment, discounts, billing and receipts.", tech: ["Angular 8", "Knockout.js", "Java APIs"] },
    { tag: "ValueMatters Org Consulting", title: "Patient Monitoring Application (MEAN)", body: "Proof-of-concept hospital app with role-based dashboards for admins, doctors, patients, receptionists and therapists, plus appointment booking and doctor assignment.", tech: ["Angular 6", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bitbucket"] },
];

const education: EducationItem[] = [
    { title: "Master of Computer Application (MCA)", school: "College of Engineering, Guindy (CEG), Chennai", date: "2015 — 2018", grade: "CGPA 6.05" },
    { title: "Bachelor of Information Technology (B.Sc IT)", school: "GTN Arts and Science College, Dindigul", date: "2012 — 2015", grade: "CGPA 7.07" },
    { title: "Higher Secondary Certificate (HSC)", school: "C.S.M.A Higher Secondary School, Dindigul", date: "2011 — 2012", grade: "61.83%" },
    { title: "Secondary School Leaving Certificate (SSLC)", school: "C.S.M.A Higher Secondary School, Dindigul", date: "2009 — 2010", grade: "67.80%" },
];

const skillSets: SkillSet[] = [
    {
        name: "Frontend Development", items: [
            { name: "React.js", Icon: SiReact, color: "#61DAFB" },
            { name: "Angular", Icon: SiAngular, color: "#DD0031" },
            { name: "Vue.js", Icon: SiVuedotjs, color: "#4FC08D" },
            // { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
            // { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
            { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", Icon: SiCss, color: "#1572B6" },
            { name: "SCSS", Icon: SiSass, color: "#CC6699" },
        ],
    },
    {
        name: "Backend Development", items: [
            { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
            { name: "Express.js", Icon: SiExpress, color: "var(--tx)" },
        ],
    },
    { name: "Mobile Development", items: [{ name: "React Native", Icon: SiReact, color: "#61DAFB" }] },
    {
        name: "Database", items: [
            { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
        ],
    },
    {
        name: "Tools & Practices", items: [
            { name: "Git", Icon: SiGit, color: "#F05032" },
            { name: "Bitbucket", Icon: SiBitbucket, color: "#2684FF" },
            { name: "npm", Icon: SiNpm, color: "#CB3837" },
            // { name: "JWT", Icon: SiJsonwebtokens, color: "#FB015B" },
            { name: "UI/UX Design", Icon: SiFigma, color: "#F24E1E" },
        ],
    },
];

const CONTENT = {
    name: "Athavan P",
    role: "Web Developer",
    roles: ["Web Developer", "React.js Engineer", "Angular Developer", "Vue.js Developer"],
    statement:
        "I build interfaces that feel considered — the kind that get out of the way and just work. Over the past six years, I've moved between design and code, building everyday tools that people open without thinking twice. That's the goal: software that feels simple, even when there's a lot going on underneath.",
    about:
        `Web Developer with 6+ years of experience in building scalable and responsive web applications using
        React.js, Angular (6+), and Vue.js. Experienced in delivering client projects across multiple domains with
        working knowledge of Node.js, MongoDB, and RESTful API integration. Strong in UI development,
        performance optimization, and agile methodologies.`,
    stats: [["6+", "Years experience"], ["6", "Projects"], ["3", "Frameworks"]] as [string, string][],
    experience,
    projects,
    education,
    skillSets,
    contact: {
        email: "p.adhavan71@gmail.com",
        phone: "+91 9786075662",
        github: "https://github.com/Athav",
        linkedin: "https://www.linkedin.com/in/athavan-p",
    },
};

const NAV: NavItem[] = [
    { id: "about", label: "About" },
    { id: "work", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
];

export { CONTENT, NAV };
