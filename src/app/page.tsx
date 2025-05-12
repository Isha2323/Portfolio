import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./globals.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import About from "./components/About";
export default function Main() {
  return (
    <>
      <Navbar />

      <Home />

      <About />

      <Skills />

      <Projects />

      <Contact />
    </>
  );
}
