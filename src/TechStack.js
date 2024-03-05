import html from './images/html-icon.png'
import css from './images/css-icon.png'
import js from './images/js-icon.png'
import github from './images/github-icon.JPG'
import react from './images/react-icon.JPG'
import cSharp from './images/cSharp-icon.JPG'





function TechStack(){
    return (
        <div className="pt-4 pb-4 bg-zinc-700">
            <h1 className="underline font-bold text-lg text-center text-white">Tech Stack</h1>
            <div className='flex justify-center items-center'>
                <img className='w-12 h-12 ml-2 mr-2 rounded-full' src={html} alt=""></img>
                <img className='w-12 h-12 ml-2 mr-2 rounded-full' src={css} alt=""></img>
                <img className='w-12 h-12 ml-2 mr-2 rounded-full' src={js} alt=""></img>
                <img className='w-12 h-12 ml-2 mr-2 rounded-full' src={react} alt=""></img>
                <img className='w-12 h-12 ml-2 mr-2 rounded-full' src={github} alt=""></img>
                <img className='w-12 h-12 ml-2 mr-2 rounded-full' src={cSharp} alt=""></img>
            </div>
        </div>
    )
}

export default TechStack
