
import Carousel from './Carousel'

import ExtraEducation from "./ExtraEducation"
import ExtraCerts from "./ExtraCertifications"
import ExtraInterests from "./ExtraInterests"
import ExtraSkills from './ExtraSkills'

function ExtraInfo(){

    const slides = [
        <ExtraEducation />,
        <ExtraCerts />,
        <ExtraSkills />, 
        <ExtraInterests />
    ]

    return (
        <main className="App pt-24 pb-24 flex justify-center items-center w-full">
            <div className='max-w-sm sm:max-w-2xl'>
                <Carousel>
                    {slides.map((s) => (
                        <div className='h-96 centerText carousel-sizing border-2 border-black rounded-lg ml-auto mr-auto'>{s}</div>
                    ))}
                </Carousel>
            </div>
        </main>
    )
}

export default ExtraInfo