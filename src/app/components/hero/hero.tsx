"use client";
import Image from "next/image";
import React from "react";
import "./hero.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div id="parent">
      <div id="left">
        <h1>I am </h1>
        <div id="effect">
          <Typewriter
            options={{
              strings: ["Web Developer", "UI/UX Designer", "Graphic Designer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div id="para">
          <p>
          Hello, I'm Areeba Saleem a student with a keen interest in web development. I'm currently learning my skills in front-end and back-end development, with a focus on creating responsive, user-friendly interfaces. I'm always looking for new challenges and opportunities to grow as a developer.
          </p>
        </div>
        <div id="Reachme">
         <button id='reachme'>Reach Me</button></div>
      </div>
      <div id="right">
        <div id="mypicture">
        <Image src="/mypicture.jpeg" height={300} width={300} alt="profile"></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
