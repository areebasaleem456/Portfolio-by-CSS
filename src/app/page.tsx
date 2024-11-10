import About from "./components/about/about"
import Contact from "./components/contact/contact"
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Hero from "./components/hero/hero";

export default function Home() {
return (
    <div>
        <Hero />
        <About />
        <Contact />
        <Skills />
        <Projects />
    </div>
  );
}
