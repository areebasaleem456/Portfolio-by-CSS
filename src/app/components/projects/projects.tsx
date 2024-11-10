import React from "react";
import "./project.css";
import Link from "next/link";
import Image from "next/image";


const projects = () => {
  return (
    <div id="projects">
      <h1 id="myproject">My Projects</h1>
      <p className="text">
        "As a passionate developer/designer, I've had the opportunity to work on
        various projects that showcase my skills and creativity"
        <br />
        <br />
        <span id="span"> Some of my notable projects iclude: </span>
      </p>
      <div id="showproject">
        <div className="nextprojects">
       <h2 className="static">Dynamic Resume</h2>
       <h1 className="srb">Dynamic Resume Builder</h1>
       <p className="text">This is the project i create using next.js & Custom CSS.</p>
       <Link id="view" href={"/"} target="_blank">View Project</Link>
        </div>
        <div className="nextprojects">
          <h2 className="static">Static Resume</h2>
          <h1 className="srb">Static Resume Builder</h1>
          <p className="text">
            This is the project i create using next.js & Custom CSS.
          </p>
          <Link id="view" href={"/"} target="_blank">
            View Project
          </Link>
        </div>
        <div className="nextprojects">
        <h2 className="static">Typescript Project</h2>
          <h1 className="srb">Calculator Project</h1>
          <p className="text">
            This is the project i create using Typescript.
          </p>
          <Link id="view" href={"/"} target="_blank">
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default projects;
