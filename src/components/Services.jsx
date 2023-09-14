// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skills = [
    {
      id: "1",
      title: "Wallpaper Design",
      detail: " I like creating wallpapers with various design applications.",
      icon: <i className="bx bx-color-fill text-sky-600 text-4xl"></i>,
    },
    {
      id: "2",
      title: "Website Design",
      detail: " I enjoy developing websites, and I usually use Figma to do so.",
      icon: <i className="bx bx-devices text-sky-600 text-4xl"></i>,
    },
    {
      id: "3",
      title: "Front End Web Development",
      detail: "  For the Front End I usually use HTML, CSS, Tailwind, Reactjs",
      icon: <i className="bx bx-minus-front text-sky-600 text-4xl"></i>,
    },
    {
      id: "4",
      title: "Back End Web Development",
      detail:
        " I amm currently using Laravel for the backend, but I will be learning others as well.",
      icon: <i className="bx bx-minus-back text-sky-600 text-4xl"></i>,
    },
  ];
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
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
      {skills.map(({ id, title, detail, icon }) => (
          <div
          key={id}
            id="card"
            className="flex flex-col text-start p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110 hover:bg-sky-800 hover:text-white "
          >
            {icon}
            <h3 className="mt-5 text-lg font-bold">{title}</h3>
            <p className="text-thin">{detail}</p>
          </div>
      ))}
        </div>
    </section>
  );
};

export default Services;
