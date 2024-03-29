import email from './images/email-icon.png'
import linkedin from './images/linkedin-icon.png'
import ContactPriv from './ContactPriv'

// ContactPriv is private due to sensitive content

function Contact(){
    return (
        <div id='contact' className="text-white bg-gradient-to-b from-black to-slate-500 text-center pb-12 rounded-lg pt-6">
            <h1 className="text-2xl pt-4 pb-2 w-3/4 ml-auto mr-auto sm:text-3xl">Have an idea for a Frontend website, or wish to contact me?</h1>
            <p className='text-xl sm:text-2xl'>I'd love to hear from you!</p>
            <div className='pb-8 sm:flex sm:items-center sm:justify-center sm:pt-4'>
                <div className='flex justify-center items-center pt-2 text-cyan-300 sm:mr-2'>
                    <img className='h-6 w-6 mr-2 rounded-t-lg' alt='' src={email}></img>
                    <p className='sm:text-lg'>owen@domail.co.uk</p>
                </div>
                <div className='flex justify-center items-center text-cyan-300 pt-2 sm:ml-2'>
                    <img className='h-8 w-8 mr-2 rounded-lg' alt='' src={linkedin}></img>
                    <a className='underline sm:text-lg' href='https://www.linkedin.com/in/owen-pearce-283388263/'>LinkedIn</a>
                </div>
            </div>
            <div className='border border-cyan-500 w-5/6 ml-auto mr-auto mb-4'></div>
            <ContactPriv />
        </div>
    )
}

export default Contact