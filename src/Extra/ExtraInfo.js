
import Carousel from './Carousel'

import ExtraEducation from "./ExtraEducation"
import ExtraCerts from "./ExtraCertifications"
import ExtraInterests from "./ExtraInterests"
import ExtraSkills from './ExtraSkills'

function ExtraInfo(){

    const slides = [
        <ExtraCerts />,
        <ExtraSkills />, 
        <ExtraInterests />
    ]

    return (
        <main className="App pt-16 pb-16 flex justify-center items-center w-full">
            <div className='max-w-sm sm:max-w-2xl bg-gray-200'>
                <Carousel>
                    {slides.map((s) => (
                        <div className='h-96 centerText carousel-sizing border-2 border-black rounded-lg ml-auto mr-auto sm:h-72'>{s}</div>
                    ))}
                </Carousel>
            </div>
        </main>
    )
}

export default ExtraInfo