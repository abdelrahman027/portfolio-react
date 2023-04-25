import React from 'react';
import { skills } from '../data/data';


const Skills = () => {
    const techs = skills;
    return (
        <div name='skills' className='w-full modified h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {techs.map((tech) => (

                        <div key={tech.id} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={tech.image} alt={`${tech.name}/img`} />
                            <p className='my-4'>{tech.name}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Skills