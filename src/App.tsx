import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Experience from "./pages/experience/Experience";
import Education from "./pages/education/Education";
import Projects from "./pages/projects/Projects";
import Resume from "./pages/resume/Resume";
import About from "./pages/about/About";
import Error from "./pages/error/Error";

const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/experiences",
        element: <Experience />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
