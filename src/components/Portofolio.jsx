// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import p1 from "../assets/kenzous.png";
import p2 from "../assets/landingp.png";

const Portofolio = () => {
  const PROJECTS = [
    {
      id: 1,
      image: p1,
      title: "GitHub",
      link: "https://github.com/Kenzou-naori/kenzous",
      demo: "https://kenzous.cods3.com",
    },
    {
      id: 2,
      image: p2,
      title: "GitHub",
      link: "https://github.com/Kenzou-naori/kenzous",
      demo: "https://https://kenzou-projects.vercel.app",
    }
   
  ];
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className='min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center ' id="Port"> 
    <h3 className='py-3 text-3xl lg:text-5xl'>My Project</h3>
    <div className="grid gap-8 lg:gap-14 lg:grid-cols-2 mt-6">

        {PROJECTS.map(({id, image, title, link, demo}) => (
            <div key={id} className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden" data-aos="zoom-out" data-aos-delay="100" data-aos-duration="1000">
                <img src={image} alt={title} className="w-2/3" />
                <div className="w-2/3 flex flex-col items-center justify-evenly p-1">
                    <h2>Kenzous</h2>
                    <a className="text-2xl cursor-pointer duration-150 hover:scale-110" href={link} target="_blank" rel="noopener noreferrer">
                        <FaGithub/>
                    </a>
                    <a className="text-2xl cursor-pointer duration-150 hover:scale-110" href={demo} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkSquareAlt />
                    </a>
                </div>
            </div>
        ))}


      </div>
</section>
  );
};
 
export default Portofolio;
