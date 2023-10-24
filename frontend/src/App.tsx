import React, { useLayoutEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import About from "./pages/about/About";
import Education from "./pages/education/Education";
import Error from "./pages/error/Error";
import Experience from "./pages/experience/Experience";
import Home from "./pages/home/Home";
import Layout from "./Layout";
import Projects from "./pages/projects/Projects";
import Resume from "./pages/resume/Resume";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
