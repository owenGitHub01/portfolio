import ProjectCard from "./ProjectCard"
import imgPro1 from './images/portfolio-PassControl.png'
import imgPro2 from './images/portfolio-Quiz-png.png'
import imgPro3 from './images/portfolio-AgeCalc.png'

import { Project1, Project2, Project3 } from "./ProjectData"

function Projects(){

    return(
        <div id="project" className="text-center pt-24 pb-4 sm:pt-12 sm:pb-8">
            <h1 className="text-3xl underline pb-6">Projects</h1>
            <div className="sm:flex sm:items-center sm:justify-center sm:pb-4 "> 
                <ProjectCard title={Project1.title} bio={Project1.description} gLink={Project1.github} wLink={Project1.web} img={imgPro1}/>
                <ProjectCard title={Project2.title} bio={Project2.description} gLink={Project2.github} wLink={Project2.web} img={imgPro2}/>
                <ProjectCard title={Project3.title} bio={Project3.description} gLink={Project3.github} wLink={Project3.web} img={imgPro3}/>
            </div>
            <h1 className="text-xl font-bold">If you wish to see more projects please contact me!</h1>
        </div>
    )
}

export default Projects