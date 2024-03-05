import ProjectCard from "./ProjectCard"
import imgPro1 from './images/portfolio-PassControl.png'
import imgPro2 from './images/portfolio-Quiz-png.png'
import imgPro3 from './images/portfolio-AgeCalc.png'

import { Project1, Project2, Project3 } from "./ProjectData"

function Projects(){

    return(
        <div className="text-center pt-24">
            <h1 className="text-3xl underline pb-6">Projects.</h1>
            <div>  
                <ProjectCard title={Project1.title} bio={Project1.description} gLink={Project1.github} wLink={Project1.web} img={imgPro1}/>
                <ProjectCard title={Project2.title} bio={Project2.description} gLink={Project2.github} wLink={Project2.web} img={imgPro2}/>
                <ProjectCard title={Project3.title} bio={Project3.description} gLink={Project3.github} wLink={Project3.web} img={imgPro3}/>
            </div>
            <div></div>
        </div>
    )
}

export default Projects