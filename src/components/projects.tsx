import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Countdown Timer",
        desc: "A Next.js and Typescript powered website to track time with an interactive countdown features.",
        img: "/project-1.jpg",
        tags: ["Mext.JS", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "Weather Widget",
        desc: "A Next.js and Typerscript based tool for fetching and displaying real-time weather data.",
        img: "/project-2.jpg",
        tags: ["Next.JS", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "Dynamic Resume Builder",
        desc: "A Typescript based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
        img: "/project-3.jpg",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
        id: 3,
        title: "Static Resume Builder",
        desc: "A Typescript based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
        img: "/project-4.jpg",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
];

const Projects = () => {
    return (
      <div id='projects' className='container pt-32'>
        <Heading title='My Projects' />
        <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
          {data.map((el) => (
            <Card
              key={el.id}
              title={el.title}
              desc={el.desc}
              img={el.img}
              tags={el.tags}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;