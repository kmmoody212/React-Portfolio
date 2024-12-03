import React from "react";
import Card from "../components/Card";

const projects = {
  name: "Hair by Glinda",
  description: "A professional website created for a local hairstylist.",
};

export default function Portfolio() {
  return (
    <div>
      {projects.map((p) => (
        <Card name={p.name} description={p.description} />
      ))}
    </div>
  );
}
