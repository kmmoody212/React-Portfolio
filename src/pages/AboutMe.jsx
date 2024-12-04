import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <h1>About Me</h1>
      <div className="aboutme-container">
        <p className="aboutme-p">
          Hi, I’m Katrina Moody, a web developer with a passion for creating
          functional, visually appealing, and user-friendly websites. After
          transitioning from a career in Human Resources, I’ve embraced my love
          for problem-solving and technology to build projects that combine
          creativity with clean code. My journey has included learning languages
          like JavaScript and TypeScript, building responsive designs, and
          collaborating on team projects. I’m always excited to learn new tools
          and frameworks, and I’m committed to crafting digital experiences that
          make a difference. When I’m not coding, you can find me exploring
          creative hobbies or enjoying music by Stray Kids.
        </p>{" "}
        <img
          className="profile-pic"
          src="../../public/assets/images/me.jpg"
        ></img>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
