import React from "react";
import Navbar from "../components/Navbar";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <h1>My Resume</h1>
      <div className="resume-container">
        <a
          className="resume-dl"
          href="../../public/assets/documents/RESUME 2024.pdf"
          download="RESUME 2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here to Download Resume
        </a>
        <p className="resume-skills">
          Proficiencies: HTML, CSS, JavaScript, Node.js, TypeScript, SQL,
          postgreSQL, Express, React{" "}
        </p>
      </div>
    </div>
  );
};

export default Resume;
