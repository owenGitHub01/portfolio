
import Carousel from './Carousel'

import ExtraEducation from "./ExtraEducation"
import ExtraCerts from "./ExtraCertifications"
import ExtraInterests from "./ExtraInterests"

function ExtraInfo(){

    const slides = [
        <ExtraEducation />,
        <ExtraCerts />, 
        <ExtraInterests />
    ]

    return (
        <main className="App pt-24 pb-24 flex justify-center items-center w-full">
            <div className='max-w-sm'>
                <Carousel>
                    {slides.map((s) => (
                        <div className='h-96 w-96 border-2 border-black rounded-lg'>{s}</div>
                    ))}
                </Carousel>
            </div>
        </main>
    )
}

export default ExtraInfo