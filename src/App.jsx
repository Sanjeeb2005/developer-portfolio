import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "../src/components/About/About"
import Projects from "./components/Projects/Projects"

function App(){
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;