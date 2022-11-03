import React from "react";
import banner from "../img/pen.jpg";
const About = () => {
  return (
    <div className="bg-black px-12">
      <div className="items-center grid grid-cols-1 md:grid-cols-2 gap-36 xl:px-96">
        <div className="">
          <h2 className="text-white text-2xl">Sobre mi</h2>
          <p className="text-md text-gray-300 mt-6">
          Tres puntos importantes: Preparación, ayudar y aprender. La experiencia que he obtenido me a enseñado como es el cambo de batalla y a estar preparado para casi cualquier cosa. Porque nunca está de más echar el hombro. Siempre estoy aprendiendo cosas nuevas dándome cada vez un perfil mas polivalente.
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
