import { useState } from "react";
import Modal from "./Modal";

const WorkItem = ({ imgUrl, title, tech }) => {4
  const [modal, setModal] = useState(false);
  
  const handleModal = () => {
    setModal(true);
  };
  return (
    <div className="bg-stone-900 rounded-lg overflow-hidden">
      <div>
        <img 
        src={imgUrl} 
        alt={title} 
        className="w-full md:h-48 object-cover scl" 
        onClick={handleModal}
        />
      </div>
      <div className="p-3 w-full">
        <h3 className="text-xl mb-2 md:mb-3 text-orange-600 ">
          {title}
        </h3>
        <p className="text-gray-500 flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-md">
          {tech.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 bg-stone-800 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
      {modal && <Modal key={title} imgUrl={imgUrl} setModal={setModal}/>}
    </div>
  );
};

export default WorkItem;
