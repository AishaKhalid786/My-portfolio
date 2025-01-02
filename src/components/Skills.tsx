import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h2 className='text-4x; md:text-5xl'>Skills I am Learning</h2>
                <p className='text-slate-400 pt-2'> During my learning phase, I have developed a solid understanding of HTML, CSS, and JavaScript, enabling me to build and style responsive websites with interactive features. I have also started working with Next.js, gaining experience in building modern web applications with server-side rendering and static site generation. Additionally, I have become proficient in using Microsoft Office tools, such as Word, Excel, and PowerPoint, for creating documents, managing data, and delivering presentations. I stay updated on the latest technologies to ehance my skill set and contribute effectively to projects.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-red-600 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2>Typescript</h2>
                        <h2>Next.JS</h2>
                        <h2>HTML</h2>
                    </div>

                    <div className='space-y-2'>
                        <h2>Tailwind</h2>
                        <h2>Node.JS</h2>
                        <h2>CSS</h2>
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
