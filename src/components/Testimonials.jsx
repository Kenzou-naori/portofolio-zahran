import React from "react";
import Section from "./commons/Section";
import avatar from "../assets/avatar.png";

const Testimonials = () => {
  const TESTIMONIALS = [
    {
      id: 1,
      image: avatar,
      name: "Jhon Doe",
      comment: "lorem aja dah agak adoaiush",
    },
    {
      id: 2,
      image: avatar,
      name: "Jhon Doe",
      comment: "lorem aja dah agak adoaiush",
    },
    {
      id: 3,
      image: avatar,
      name: "Jhon Doe",
      comment: "lorem aja dah agak adoaiush",
    },
  ];
  return (
    <Section
      title="Testimonials"
      subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores totam eligendi, consequuntur odio doloribus facilis nihil ex provident!"
    >

    <div className="max-w-xl flex flex-col gap-5"> 
    {TESTIMONIALS.map(({id, image, name, comment}) => (
    <div className="flex p-4 justify-center items-cente rounded-xl shadow-md dark:shadow-gray-300" key={id}>
      <div className="w-1/3">
        <img src={image} alt={name} className="w-20 h-20 object-cover object-top pt-2" />
      </div>
      <div className="w-2/3 float-right flex-col justify-center items-center gap-3 p-2">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm font-extralight">{comment}</p>
      </div>
    </div>
    ))}
    
    
    </div>

    </Section>



  );
};

export default Testimonials;
