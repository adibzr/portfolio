import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Nav />
      <Intro />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
