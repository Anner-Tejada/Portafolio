import WebDev from "../img/icons/web.png";
import UI from "../img/icons/ui.png";
import WebBack from "../img/icons/back.png";
import Base from "../img/icons/base.png";

export default [
  {
    icon: <img src={WebDev} alt="web developer" />,
    title: "Frontend",
    description: (
      <p className='text-gray-400'>
        Puedo implementar una interfaz amigable, sencilla pero elegante,
        funcional y responsiva con React.js y TailwindCSS.
        <br />
        <br />
        También puedo trabajar sobre un diseño ya propuesto.
      </p>
    ),
  },
  {
    icon: <img src={UI} alt="UI developer" />,
    title: "UI",
    description: (
      <p className='text-gray-400'>
        Quiero que mis usuarios se sientan cómodos y tranquilos al utilizar un
        producto, haciéndolo amigable e intuitivo especialmente si no manejan
        muy bien el tema de la tecnología.
      </p>
    ),
  },
  {
    icon: <img src={WebBack} alt="backend developer" />,
    title: "Backend",
    description: (
      <p className='text-gray-400'>
        Puedo trabajar en la lógica de una acción solicitada para algún componente y
        para que pueda ejecutarse correctamente con Node.js y Express.js.
      </p>
    ),
  },
  {
    icon: <img src={Base} alt="base developer" />,
    title: "Data Base",
    description: (
      <p className='text-gray-400'>
        Implementar y normalizar base de datos.<br /><br /> 
        Manejo de consultas, procedimientos almacenados.
      </p>
    ),
  },
];
