import Links from "./Links";
import Bio from "./Bio";
import TechStack from "./TechStack";
import Projects from "./Projects/Projects";
import Contact from "./Contact";


function App(){

  return (
    <div>
      <div className="w-full">
        <Links />
        <Bio />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App;
