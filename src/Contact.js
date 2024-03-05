import email from './images/email-icon.png'
import linkedin from './images/linkedin-icon.png'
import ContactPriv from './ContactPriv'

// ContactPriv is private due to sensitive content

function Contact(){
    return (
        <div id='contact' className="text-white bg-gradient-to-b from-black to-slate-500 text-center pb-12 rounded-lg pt-6">
            <h1 className="text-2xl pt-4 pb-2 w-3/4 ml-auto mr-auto">Have an idea for a Frontend website, or wish to contact me?</h1>
            <p className='text-xl'>I'd love to hear from you!</p>
            <div className='pb-8'>
                <div className='flex justify-center items-center pt-2 text-cyan-300'>
                    <p>owen@domail.co.uk</p>
                    <img className='h-6 w-6 ml-4 rounded-t-lg' alt='' src={email}></img>
                </div>
                <div className='flex justify-center items-center text-cyan-300'>
                    <a className='underline' href='https://www.linkedin.com/in/owen-pearce-283388263/'>LinkedIn</a>
                    <img className='h-8 w-16 rounded-full' alt='' src={linkedin}></img>
                </div>
            </div>
            <div className='border border-cyan-500 w-5/6 ml-auto mr-auto mb-4'></div>
            <ContactPriv />
        </div>
    )
}

export default Contact