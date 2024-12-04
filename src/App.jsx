import { createBrowserRouter } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/aboutme", element: <AboutMe /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/contact", element: <Contact /> },
  { path: "/resume", element: <Resume /> },
]);

function App() {
  return (
    <>
      <AboutMe />
    </>
  );
}
export default App;
