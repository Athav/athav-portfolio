import { createBrowserRouter } from "react-router";
import About from "../pages/About";
import Home from "../pages/Home";

// createHashRouter
const router: any = createBrowserRouter([
    {
        path: "/",
        Component: Home,

    },
    {
        path: "/about",
        Component: About,
    },

], {
    basename: "/athav-portfolio/",
});

export default router;
