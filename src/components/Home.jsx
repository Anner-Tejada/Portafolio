import { useRef, useEffect } from "react";
import mountain from "../img/muntainIce.png";
import stars from "../img/stars.png";

const Home = () => {
  return (
    <>
      <div className="bg-black px-4 py-24">
        <div className="flex justify-center gap-10">
          <h1 className="text-white text-3xl">
            Hola mundo, mi nombre es Anner
          </h1>
          <h2 className="text-orange-600 text-2xl">
            Soy desarrollador frontend y backend.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
