

function ProjectCard({title, bio, gLink, wLink}){

    return(
        <div className="flex justify-center items-center pt-4 pb-4">
            <div className="w-5/6 border-2 border-black rounded h-56 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-400">
                <h1 className="text-2xl font-bold pt-4 pb-2">{title}</h1>
                <p className="w-5/6 ml-auto mr-auto">{bio}</p>
                <a className="underline pl-2 pr-2" href={gLink}>Github</a>
                <a className="underline pl-2 pr-2" href={wLink}>View</a>
            </div>
        </div>
    )
}

export default ProjectCard