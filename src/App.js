import Links from "./Links";
import Bio from "./Bio";
import TechStack from "./TechStack";
import Projects from "./Projects/Projects";
import Contact from "./Contact";
import ExtraInfo from "./Extra/ExtraInfo";

function App(){

  return (
    <div>
      <div className="w-full">
        <Links />
        <Bio />
        <TechStack />
        <Projects />
        <Contact />
        <ExtraInfo />
      </div>
    </div>
  )
}

export default App;
