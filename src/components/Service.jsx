import React from "react";
import services from "../data/services";
import ServiceItem from "./ServiceItem";

const Service = () => {
  return (
    <>
      <div className="bg-black p-12">
        <div className="w-100 md:justify-center items-center flex mb-4">
          <h2 className="text-white text-2xl">Servicios</h2>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 xl:px-96">
          {services.map((service) => (
            <ServiceItem
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            ></ServiceItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
