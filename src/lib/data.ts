import FolderIcon from '@mui/icons-material/Folder';

const CONTENT = {
    name: "Athavan P",
    role: "Web Developer",
    statement:
        "I build interfaces that feel considered — the kind that get out of the way and just work. Over the past five years, I've moved between design and code, building everyday tools that people open without thinking twice. That's the goal: software that feels simple, even when there's a lot going on underneath.",
    about:
        `Web Developer with 5+ years of experience in building scalable and responsive web applications using
        React.js, Angular (6+), and Vue.js. Experienced in delivering client projects across multiple domains with
        working knowledge of Node.js, MongoDB, and RESTful API integration. Strong in UI development,
        performance optimization, and agile methodologies.`,
    experience: [
        { date: "2023 — Present", company: "Northline", title: "Senior Product Designer", body: "Own end-to-end design for the core workflow product. Rebuilt the design system, cut onboarding time by 38%." },
        { date: "2020 — 2023", company: "Fieldwork Co.", title: "Product Designer", body: "First design hire. Designed and helped build the initial web app from a blank canvas to 12,000 weekly users." },
        { date: "2017 — 2020", company: "Studio Halvor", title: "Visual Designer", body: "Editorial and identity work for cultural clients. Learned typography the slow way — by hand-setting a lot of type." },
    ],
    projects: [
        { tag: "Case study", title: "Rebuilding the Northline design system", body: "A token-based system unifying six products, built in Figma and shipped as a React library.", href: "#" },
        { tag: "Side project", title: "Ledger — a plain-text budgeting tool", body: "A local-first budgeting app for people who think in spreadsheets. Built solo with SQLite.", href: "#" },
        { tag: "Case study", title: "Onboarding redesign, Fieldwork", body: "Reduced time-to-first-value from 9 minutes to under 2 by rethinking the first-run experience.", href: "#" },
        { tag: "Experiment", title: "Type-scale playground", body: "A small tool for testing modular type scales live in the browser, used internally by three teams.", href: "#" },
    ],
    skills: [
        { name: "Product Design", level: 95 },
        { name: "React / TypeScript", level: 88 },
        { name: "Design Systems", level: 92 },
        { name: "Motion & Prototyping", level: 80 },
    ],
    skillSets: [
        {
            name: "Frontend Development", level: 95, iconList: [
                { name: 'react', icn: FolderIcon },
                { name: 'angular', icn: FolderIcon },
                { name: 'vue', icn: FolderIcon },
                { name: 'ui', icn: FolderIcon },
            ]
        },
        {
            name: "Backend Development", level: 95, iconList: [
                { name: 'nodejs', icn: FolderIcon },
                { name: 'expressjs', icn: FolderIcon },
                { name: 'laravel', icn: FolderIcon },
                { name: 'python', icn: FolderIcon },
            ]
        },
        {
            name: "Mobile Development", level: 95, iconList: [
                { name: 'reactnative', icn: FolderIcon },
                { name: 'android', icn: FolderIcon },
            ]
        },
        {
            name: "Database", level: 95, iconList: [
                { name: 'sql', icn: FolderIcon },
                { name: 'mongodb', icn: FolderIcon },
            ]
        },
        {
            name: "Tools & Practices", level: 95, iconList: [
                { name: 'git', icn: FolderIcon },
                { name: 'testdebugg', icn: FolderIcon },
            ]
        },
    ],
    // const skills = [
    //   { name: "React JS", icon: <FaReact color="#61DBFB" /> },
    //   { name: "Vue JS", icon: <FaVuejs color="#42b883" /> },
    //   { name: "Angular 6+", icon: <FaAngular color="#DD0031" /> },
    //   { name: "Node JS", icon: <FaNodeJs color="#3C873A" /> },
    //   { name: "Express JS", icon: <SiExpress color="#000000" /> },
    //   { name: "React Native", icon: <FaReact color="#61DBFB" /> }, // same logo as React
    //   { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    //   { name: "SQL", icon: <SiMysql color="#4479A1" /> },
    //   { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    //   { name: "Laravel", icon: <FaLaravel color="#FF2D20" /> },
    //   { name: "Python", icon: <FaPython color="#3776AB" /> },
    //   { name: "UI/UX Design", icon: <MdDesignServices color="#7C5CFF" /> }, // no brand logo — generic icon
    //   { name: "Testing & Debugging", icon: <MdBugReport color="#7C5CFF" /> }, // no brand logo — generic icon
    // ];
    contact: { email: "jordan@example.com", github: "github.com/jordanavery", linkedin: "linkedin.com/in/jordanavery" },
};

const NAV = [
    { id: "about", label: "About" },
    { id: "work", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
];

export { CONTENT, NAV };
