import React, { useLayoutEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import About from "./pages/about/About";
import EditExperience from "./pages/experience/EditExperience";
import EditAbout from "./pages/about/EditAbout";
import EditProject from "./pages/projects/EditProject";
import Education from "./pages/Education";
import Error from "./pages/error/Error";
import Experience from "./pages/Experience";
import Home from "./pages/home/Home";
import Layout from "./Layout";
import Projects from "./pages/Projects";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const { pathname } = useLocation();
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [pathname]);
    return (
        <div>
            <SnackbarProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route
                            path="/experience/edit/:id"
                            element={<EditExperience />}
                        />
                        <Route path="/education" element={<Education />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route
                            path="/projects/edit/:id"
                            element={<EditProject />}
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/about/edit/:id" element={<EditAbout />} />
                        <Route path="*" element={<Error />} />
                    </Route>
                </Routes>
            </SnackbarProvider>
        </div>
    );
}

export default App;
