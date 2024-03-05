
function ExtraInfo(){

    const handleClick = () => {
    }

    return(
        <div className="text-center h-56">
            <button onClick={() => handleClick()} className="w-24 h-8 ml-4 mr-4 rounded-md underline text-xl basis-1/3">Education</button>
            <button onClick={() => handleClick()} className="w-24 h-8 ml-4 mr-4 rounded-md underline text-xl basis-1/3">Certifications</button>
            <button onClick={() => handleClick()} className="w-24 h-8 ml-4 mr-4 rounded-md underline text-xl basis-1/3">Interests</button>
            {handleClick}
        </div>
    )
}

export default ExtraInfo