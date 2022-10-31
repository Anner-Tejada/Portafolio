import React from "react";
import WorkItem from "./WorkItem";
import works from "../data/works";

const Works = () => {
  return (
    <div className="bg-black p-12">
      <div className="w-100 md:justify-center items-center flex mb-4">
        <h2 className="text-white text-2xl">Algunos proyectos</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:px-96">
        {works.map(work => (
            <WorkItem 
            key={work.title}
            imgUrl={work.imgUrl}
            title={work.title}
            tech={work.tech}
            ></WorkItem>
        ))}
      </div>
    </div>
  );
};

export default Works;
