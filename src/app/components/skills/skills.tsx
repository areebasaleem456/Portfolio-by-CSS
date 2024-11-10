import React from "react";
import "./skills.css";

const skills = () => {
  return (
    <div id="skills">
      <h1 id="myskill">My Skills</h1>
      <p id="skill">
        As a skilled web developer I bring expertise in Programming languages
        JavaScript HTML CSS Frameworks React Next.js  BootstrapDevelopment
        tools Git GitHub VS CodeSoft skills Problem-solving communication 
        teamwork adaptability I m passionate about crafting dynamic web
        experiences and continually enhancing my skills to deliver exceptional
        result
      </p>
      
        <h3 className="hd">HTML</h3>
        <h5 className="sd">100%</h5>
        <div className="to"></div>

        <h3 className="hd">CSS</h3>
        <h5 className="sd">80%</h5>
        <div className="to"></div>
    
      
        <h3 className="hd">TypeScript</h3>
        <h5 className="sd">85%</h5>
        <div className="to"></div>

        <h3 className="hd">Tailwind css</h3>
        <h5 className="sd">90%</h5>
        <div className="to"></div>
      
      
        <h3 className="hd">Next.js</h3>
        <h5 className="sd">80%</h5>
        <div className="to"></div>
    </div>
  );
};

export default skills;
