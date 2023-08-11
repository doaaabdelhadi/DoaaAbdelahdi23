import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Elevator from "./components/Elevator";
function App() { 
  return (
    <div>
      <Navbar />
      <Home />
      <Bio />
      <Skills />
      <Portfolio />
      <Elevator/>
      <Contact />
    </div>
  );
}
export default App;