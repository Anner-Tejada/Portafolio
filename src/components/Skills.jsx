import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGimp } from "react-icons/si";

const Skills = () => {
  return (
    <div className="px-12 bg-black">
      <div className="w-100 md:justify-center items-center flex mb-4">
        <h2 className="text-white text-2xl">Herramientas</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xl:px-96">
        <div className="icon-box react">
          <div className="tooltip">React</div>
          <span>
            <FaReact className="icon" />
          </span>
        </div>
        <div className="icon-box express">
          <div className="tooltip">Express</div>
          <span>
            <SiExpress className="icon" />
          </span>
        </div>
        <div className="icon-box node">
          <div className="tooltip">Node</div>
          <span>
            <FaNodeJs className="icon" />
          </span>
        </div>
        <div className="icon-box mongo">
          <div className="tooltip">MongoDB</div>
          <span>
            <SiMongodb className="icon" />
          </span>
        </div>
        <div className="icon-box javascript">
          <div className="tooltip">JavaScript</div>
          <span>
            <SiJavascript className="icon" />
          </span>
        </div>
        <div className="icon-box tailwind">
          <div className="tooltip">TailwindCSS</div>
          <span>
            <SiTailwindcss className="icon" />
          </span>
        </div>
        <div className="icon-box sql">
          <div className="tooltip">SQL Server</div>
          <span>
            <SiMicrosoftsqlserver className="icon" />
          </span>
        </div>
        <div className="icon-box github">
          <div className="tooltip">Git Hub</div>
          <span>
            <SiGithub className="icon" />
          </span>
        </div>
        <div className="icon-box postman">
          <div className="tooltip">Postman</div>
          <span>
            <SiPostman className="icon" />
          </span>
        </div>
        <div className="icon-box vs">
          <div className="tooltip">VS Code</div>
          <span>
            <SiVisualstudiocode className="icon" />
          </span>
        </div>
        <div className="icon-box gimp">
          <div className="tooltip">Gimp</div>
          <span>
            <SiGimp className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
