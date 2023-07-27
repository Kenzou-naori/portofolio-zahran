// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="min-h-fit flex flex-col  items-center mt-12 py-16 px-5 text-center"
      id="Skills"
    >
      <h3
        className="py-3 text-3xl lg:text-5xl"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        My Skills
      </h3>

      <div
        className="grid gap-10 lg:grid-cols-3 mt-3 place-content-center select-none aos-init max-w-5xl"
        data-aos="flip-down"
        data-aos-delay="300"
        data-aos-duration="2200"
      >
        <div id="card" className="flex flex-col text-start p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110 hover:bg-sky-800 hover:text-white ">
          <i className="bx bx-color-fill text-sky-600 text-4xl"></i>
          <h3 className="mt-5 text-lg font-bold">Wallpaper Design</h3>
          <p className="text-thin">
            I love to make a Wallpaper using several design aplication.
          </p>
        </div>
        <div id="card" className="flex flex-col text-start p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110  hover:bg-sky-800 hover:text-white ">
          <i className="bx bx-devices text-sky-600 text-4xl"></i>
          <h3 className="mt-5 text-lg font-bold">Website Design</h3>
          <p className="text-thin">
            I love to design a website, for designing a website i usually use figma.
          </p>
        </div>
        <div id="card" className="flex flex-col text-start p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110  hover:bg-sky-800 hover:text-white ">
          <i className="bx bx-minus-front text-sky-600 text-4xl"></i>
          <h3 className="mt-5 text-lg font-bold">Front End</h3>
          <p className="text-thin">
            For the Front End I usually use HTML, CSS, Tailwind, Reactjs
          </p>
        </div>
        <div id="card" className="flex flex-col text-start p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110  hover:bg-sky-800 hover:text-white ">
          <i className="bx bx-minus-back text-sky-600 text-4xl"></i>
          <h3 className="mt-5 text-lg font-bold">Back End</h3>
          <p className="text-thin">
            I am using laravel for the backend right now, but I will learn
            others as well.
          </p>
        </div>

        {/* ))} */}
      </div>
    </section>
  );
};

export default Services;
