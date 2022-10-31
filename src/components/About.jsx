import React from "react";
import banner from "../img/pen.jpg";
const About = () => {
  return (
    <div className="bg-black px-12">
      <div className="items-center grid grid-cols-1 md:grid-cols-2 gap-36 xl:px-96">
        <div className="">
          <h2 className="text-white text-2xl">Sobre mi</h2>
          <p className="text-md text-gray-300 mt-6">
            Soy una persona con gran habilidad de adaptación, curiosa por naturaleza, me encanta explorar todas
            las fronteras del desarrollo de software, saber que formo parte de
            la era de la tecnología es algo que me llena de
            ilusión.
            <br /><br />
            Estoy abierto aprender todo lo que me permita el disco duro y a compartir el conocimiento que haya adquirido.
          </p>
        </div>
        <div>
          <img
            src={banner}
            alt="Anner Joel"
            className="w-full rounded-lg object-cover h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
