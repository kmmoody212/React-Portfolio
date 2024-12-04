import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Glinda from "../../public/assets/images/Glinda.png";
import Etch from "../../public/assets/images/Etchasketch.png";
import Employee from "../../public/assets/images/Employee.png";
import Guess from "../../public/assets/images/Guess.png";
import Laudible from "../../public/assets/images/Laudible.png";
import soon from "../../public/assets/images/soon.jpg";

const projects = [
  {
    img: Glinda,
    name: "Hair by Glinda",
    description: "A professional website created for a local hairstylist.",
    link: "https://hairbyglinda.com",
    // The code is private for client
  },
  {
    img: Etch,
    name: "Etch-a-Sketch",
    description: "A smaller project implementing javascript.",
    link: "https://kmmoody212.github.io/etch-a-sketch/",
    code: "https://github.com/kmmoody212/etch-a-sketch",
  },
  {
    img: Employee,
    name: "Employee Tracker",
    description:
      "A fun 'The Office' themed command-line tool used to add to the staff of Dunder Mifflin!",
    // No link - this is a command line tool, not deployable
    code: "https://github.com/kmmoody212/Employee-tracker",
  },
  {
    img: Guess,
    name: "Guess My Number Game",
    description:
      "A random number generator game. Can you guess which number the computer picked?",
    link: "https://kmmoody212.github.io/guess-my-number-finished/",
    code: "https://github.com/kmmoody212/guess-my-number-finished",
  },
  {
    img: Laudible,
    name: "laudible Library",
    description:
      "This application will help you stay on top of books you've read or have yet to read.",
    link: "https://kmmoody212.github.io/TOP-library/",
    code: "https://github.com/kmmoody212/TOP-library",
  },
  {
    img: soon,
    name: "Coming Soon!",
    description: "This space is reserved for future projects",
  },
];

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <h1>My Portfolio</h1>
      <p className="page-des">
        Below are just a few applications and projects I have worked on. Feel
        free to view the application and/or the code!
      </p>
      <div className="card-container">
        {projects.map((p) => (
          <Card
            img={p.img}
            name={p.name}
            description={p.description}
            link={p.link}
            code={p.code}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
