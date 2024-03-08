import Photo from './images/IMG_E6548.JPG'

function Bio(){
    return (
        <div>
            <div id='home' className='flex justify-center items-center pt-24'>
                <img alt='' className='h-60 w-60 rounded-full' src={Photo}></img>
            </div>
            <div className='text-center pb-12'>
                <h1 className='text-3xl pt-2 pb-2 font-bold'>Hi, I'm Owen.</h1>
                <p className='w-5/6 mr-auto ml-auto text-lg'>   
                    I am a software developer based in Bicester, Oxfordshire. I am
                    looking for a oppotunity within software development to express my
                    hard work ethic and passion for software development!
                </p>
            </div>
        </div>
    )
}

export default Bio