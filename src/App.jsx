import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "../src/components/About/About"
import Skills from "./components/Skill/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App(){
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;