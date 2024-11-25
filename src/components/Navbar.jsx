import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faArrowRight, faXmark} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export function Navbar(){
    const[showNavbar, setShowNavbar] = useState(false)
    function handleClick(){
        setShowNavbar(curr => !curr)
    }
    return <div className="p-2 px-24 sticky top-0 z-50 bg-gray-50">
        <nav className="flex justify-between items-center">
            <div className="hidden lg:flex items-center">
            <div className="font-family:Poppins font-extrabold text-3xl tracking-tight text-primary hover:bg-gray-200"><Link to='/'>FETCHUSER</Link></div>
            <div className="hidden lg:block ml-20">
                <Link to='/' className="m-8 font-semibold text-secondary hover:bg-gray-200">Home</Link>
                <Link to='/about' className="m-8 font-semibold text-secondary hover:bg-gray-200">About</Link>
                <Link to='/technology' className="m-8 font-semibold text-secondary hover:bg-gray-200">Technology</Link>
                <Link to='/detail' className="m-8 font-semibold text-secondary hover:bg-gray-200">Details</Link>
            </div>
            </div>
            <div><a href="https://github.com/Ashwani133/FetchUser" className="font-semibold text-secondary hidden lg:block hover:bg-gray-200" target="_blank" >GITHUB</a></div>
        </nav>
        {showNavbar===false?<nav className='lg:hidden flex justify-between'>
            <Link href="" className='font-extrabold text-3xl tracking-tight text-primary hover:bg-gray-200'>FETCHUSER</Link>
            <button onClick={handleClick}><FontAwesomeIcon icon={faBars} /></button>
        </nav>:<nav>
            <div className='lg:hidden flex justify-between'>
            <Link to='/' className='font-extrabold text-3xl tracking-tight text-primary hover:bg-gray-200'>FETCHUSER</Link>
            <button onClick={handleClick}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
            <div className='lg:hidden'>
                <Link to='/' className="m-8 font-semibold text-secondary hover:bg-gray-200 block">Home</Link>
                <Link to='/about' className="m-8 font-semibold text-secondary hover:bg-gray-200 block">About</Link>
                <Link to='/technology' className="m-8 font-semibold text-secondary hover:bg-gray-200 block">Technology</Link>
                <Link to='/detail' className="m-8 font-semibold text-secondary hover:bg-gray-200 block">Details</Link>
            </div>
        </nav>}
    </div>
}