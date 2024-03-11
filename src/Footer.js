
import logoGit from './images/github-icon.JPG'
import logoLinkedIn from './images/linkedin-icon.png'
import logoMail from './images/email-icon.png'

import shootingStar from './images/ShootingStar-logo.png'

function Footer(){

    return(
        <div className="h-56 bg-black w-full">
            <div className='flex h-32 pt-4'>
                <div className='w-2/4 pl-4'>
                    <h1 className="text-3xl text-white sm:ml-80">Owen.Net</h1>
                    <img className='w-20 rounded-full h-20 ml-8 sm:ml-80' alt='' src={shootingStar}></img>
                </div>
                <div className='text-white pr-4'>
                    <a target='_blank' rel="noreferrer"  href='https://www.linkedin.com/in/owen-pearce-283388263/' className='underline flex text-lg pb-2'>
                        LinkedIn 
                        <img className='h-8 w-8 ml-2 rounded-lg' alt='' src={logoLinkedIn}></img>
                    </a>
                    <a target='_blank' rel="noreferrer" href='https://github.com/owenGitHub01' className='underline flex text-lg pb-2'>
                        GitHub
                        <img className='h-8 w-8 ml-2 bg-white rounded-full' alt='' src={logoGit}></img>
                    </a>
                    <p className='flex text-lg'>
                        Owen@domail.co.uk
                        <img className='h-8 w-8 ml-2 rounded-lg' alt='' src={logoMail}></img>
                    </p>
                </div>
            </div>
            <div className="w-3/4 border border-white ml-auto mr-auto mt-2 mb-4"></div>
            <p className="text-center text-gray-500">© Copyright Owen.Net 2024</p>
            <p className="text-center text-gray-500">All rights reserved. Created by <a className="underline font-bold" href="#home">Owen.Net</a></p>

        </div>
    )
}

export default Footer