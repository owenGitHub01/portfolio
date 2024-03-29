import gitLogo from '../images/github-icon.JPG'
import webLogo from './images/web-icon.png'

function ProjectCard({title, bio, gLink, wLink, img}){

    const handleGit = () => {
        if(gLink === ''){
            return (
                    <a className="flex items-center justify-center pt-2" href={gLink}>
                        <img alt='' src={gitLogo} className='w-6 h-6 mr-2'></img>
                        GitHub Unavailable
                    </a>
            )
        }
        else {
            return (
                <a target='_blank' rel="noreferrer"  className="underline flex items-center justify-center pt-2" href={gLink}>
                    <img alt='' src={gitLogo} className='w-6 h-6 mr-2'></img>
                    GitHub
                </a>
            )
        }
    }

    return( 
        <div className="flex justify-center items-center pt-4 pb-4 sm:pl-4 sm:pr-4">
            <div className="w-5/6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 pb-4 sm:w-80 sm:h-96">
                <h1 className="text-2xl font-bold pt-4 pb-2">{title}</h1>
                <img className="w-5/6 h-36 ml-auto mr-auto" alt="" src={img}></img>
                <p className="w-5/6 ml-auto mr-auto sm:w-11/12">{bio}</p>
                {handleGit()}
                <a target='_blank' rel="noreferrer"  className="underline flex items-center justify-center pt-2" href={wLink}>
                    <img alt='' src={webLogo} className='w-6 h-6 mr-2 rounded-full'></img>
                    View
                </a>
            </div>
        </div>
    )
}

export default ProjectCard