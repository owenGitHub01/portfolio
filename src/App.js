import Links from "./Links";
import Bio from "./Bio";
import TechStack from "./TechStack";
import Projects from "./Projects/Projects";


function App(){

  return (
    <div>
      <div className="w-full">
        <Links />
        <Bio />
        <TechStack />
        <Projects />
      </div>
    </div>
  )
}

export default App;
