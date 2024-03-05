import ProjectCard from "./ProjectCard"

import { Project1 } from "./ProjectData"

function Projects(){

    return(
        <div className="text-center pt-24">
            <h1 className="text-3xl underline pb-6">Projects.</h1>
            <div>  
                <ProjectCard title={Project1.title} bio={Project1.description} gLink={Project1.github} wLink={Project1.web} />
                <ProjectCard title={Project1.title} bio={Project1.description} gLink={Project1.github} wLink={Project1.web} />
            </div>
            <div></div>
        </div>
    )
}

export default Projects