// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import p1 from "../assets/kenzous.png";
import p2 from "../assets/landingp.png";
import p3 from "../assets/tikdown.png";

const Portofolio = () => {
  const PROJECTS = [
    {
      id: 1,
      image: p1,
      title: "Kenzous",
      detail:
        "E-commerce website developed with the PHP programming language and the Laravel framework .",
      link: "https://github.com/Kenzou-naori/kenzous",
      demo: "https://kenzous.cods3.com",
    },
    {
      id: 2,
      image: p2,
      title: "Landing Page",
      detail:
        "Landing Page developed with HTML and CSS",
      link: "https://github.com/Kenzou-naori/kenzous-projects",
      demo: "https://kenzou-projects.vercel.app",
    },
    {
      id: 3,
      image: p3,
      title: "TikTok Downloader",
      detail:
        "Website for download Tiktok videos for free",
      link: "https://github.com/Kenzou-naori/tiktokdownloader",
      demo: "https://tiktokdownloader-plum.vercel.app/",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center "
      id="Port"
    >
      <h3 className="py-3 text-3xl lg:text-5xl">My Projects</h3>
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2 mt-6">
        {PROJECTS.map(({ id, image, title, link, detail, demo }) => (
          <div
            key={id}
            className="max-w-lg flex flex-col shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
            data-aos="zoom-out"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img src={image} alt={title}  />
            <div className="flex flex-col mx-2">
              <h2 className="text-xl font-bold my-4">{title}</h2>
              <p className=" max-w-md p-2 lg:ml-6 ml-0">{detail}</p>
              <div className=" flex flex-row items-center justify-end pr-5 gap-5 py-4">
                <a
                  className="text-2xl cursor-pointer duration-150 hover:scale-110"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="text-2xl cursor-pointer duration-150 hover:scale-110"
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkSquareAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portofolio;
