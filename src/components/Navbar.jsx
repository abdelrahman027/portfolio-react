import React from 'react';
import myLogo from '../assets/newLogo.png';
import { Bars3Icon, LinkIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { useEffect } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const mobileNavToggler = () => {
        setNav(!nav)
    }
    const handleSetActive = (to) => {
        console.log(to)
    }

    window.onscroll = () => {
        setNav(false)
    }
    return (
        <div className='fixed w-full h-[80-px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 p-2 shadow-md'>
            <div>
                <img src={myLogo} alt="logo" style={{ width: '50px' }} />
            </div>
            {/****** Menu ******/}

            <ul className=' hidden md:flex group transition-all duration-300'>
                <li>
                    <Link className='hover:text-pink-600 duration-300' activeClass="active" to="home" smooth={true} duration={500} onSetActive={handleSetActive}>

                        Home
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-pink-600 duration-300' activeClass="active" to="about" smooth={true} duration={500} onSetActive={handleSetActive}>

                        About
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-pink-600 duration-300' activeClass="active" to="skills" smooth={true} duration={500} onSetActive={handleSetActive}>

                        Skills
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-pink-600 duration-300' activeClass="active" to="work" smooth={true} duration={500} onSetActive={handleSetActive}>

                        Work
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-pink-600 duration-300' activeClass="active" to="contact" smooth={true} duration={500} onSetActive={handleSetActive}>

                        Contact
                    </Link>
                </li>
            </ul>

            {/****** bars ******/}
            <div className='md:hidden z-10 cursor-pointer' onClick={mobileNavToggler}>
                {nav ? <XMarkIcon className='h-5 w-5' /> : <Bars3Icon className='h-5 w-5' />}
            </div>
            {/****** mobile ******/}
            <ul className={`absolute top-0 right-0 w-[50%] opacity-90 shadow-lg h-screen bg-[#0a192f] flex-col justify-center items-center ${nav ? 'flex' : 'hidden'}`}>
                <li className='py-6 text-3xl border-b-2 border-pink-600'>
                    <Link className='hover:text-pink-600 duration-300' activeClass="active" to="home" smooth={true} duration={500} onSetActive={handleSetActive}>

                        Home
                    </Link>
                </li>
                <li className='py-6 text-3xl border-b-2 border-pink-600'>
                    <Link className='hover:text-pink-600 duration-300' activeClass="active" to="about" smooth={true} duration={500} onSetActive={handleSetActive}>

                        About
                    </Link>
                </li>
                <li className='py-6 text-3xl border-b-2 border-pink-600'>
                    <Link className='hover:text-pink-600 duration-300' activeClass="active" to="skills" smooth={true} duration={500} onSetActive={handleSetActive}>

                        Skills
                    </Link>
                </li>
                <li className='py-6 text-3xl border-b-2 border-pink-600'>
                    <Link className='hover:text-pink-600 duration-300' activeClass="active" to="work" smooth={true} duration={500} onSetActive={handleSetActive}>

                        Work
                    </Link>
                </li>
                <li className='py-6 text-3xl border-b-2 border-pink-600'>
                    <Link className='hover:text-pink-600 duration-300' activeClass="active" to="contact" smooth={true} duration={500} onSetActive={handleSetActive}>

                        Contact
                    </Link>
                </li>
            </ul>
            {/****** social items ******/}
            <div className=' hidden md:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className=' w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-20px] transition-all duration-300 '>
                        <a href="https://www.linkedin.com/public-profile/settings" target='_blank' className='flex justify-between items-center w-full text-gray-300 bg-[#0a66c2] rounded p-2'>
                            LinkedIn
                            <AiFillLinkedin size={30} />
                        </a>
                    </li>
                    <li className=' w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-20px] transition-all duration-300 '>
                        <a href="https://github.com/abdelrahman027" target='_blank' className='flex justify-between items-center w-full text-gray-300 bg-[#333] rounded p-2'>
                            Github
                            <AiFillGithub size={30} />
                        </a>
                    </li>
                    <li className=' w-[160px] h-[60px] justify-between items-center ml-[-100px] hover:ml-[-20px] transition-all duration-300 '>
                        <a href="https://twitter.com/Abdoo027" target='_blank' className='flex justify-between items-center w-full text-gray-300 bg-[#1da1f2] rounded p-2'>
                            Twitter
                            <AiFillTwitterSquare size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar