import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/aboutme", element: <AboutMe /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/contact", element: <Contact /> },
  { path: "/resume", element: <Resume /> },
]);
