import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutMe from "./routes/AboutMe";
import Contact from "./routes/Contact";
import Portfolio from "./routes/Portfolio";
import Resume from "./routes/Resume";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/aboutme", element: <AboutMe /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/contact", element: <Contact /> },
  { path: "/resume", element: <Resume /> },
]);
