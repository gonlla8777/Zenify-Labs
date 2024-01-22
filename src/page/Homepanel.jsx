import React from "react";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { FaMagic } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { RiMailStarLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Homepanel = () => {
  const name = "Juan";
  return (
    <>
      <div className="">
        <div className="text-slate-200 py-4 ">
          <p className="text-4xl font-light underline underline-offset-8 decoration-0 ">
            Bienvenido, {name}!
          </p>
          <p className="text-2xl font-light py-2">PANEL DE CONTROL</p>
        </div>

        <div className="    grid  lg:grid-cols-3 text-center   justify-items-center mx-auto gap-8 w-fit h-fit">
          <Link to={"/embudo"}>
            <div className="text-slate-200 text-xl w-80 h-48 bg-green-600 rounded-2xl pt-5 hover:scale-110 transition-all">
              <FaFilterCircleDollar className="w-9/12 h-4/6 m-auto " />
              <h2>EMBUDOS ACTIVOS</h2>
            </div>
          </Link>
          <div className="text-slate-200 text-xl w-80 h-48 bg-green-600 rounded-2xl pt-5 hover:scale-110 transition-all">
            <FaListUl className="w-9/12 h-4/6 m-auto " />
            <h2>LISTAS DE DATOS</h2>
          </div>{" "}
          <div className="text-slate-200 text-xl w-80 h-48 bg-green-600 rounded-2xl pt-5 hover:scale-110 transition-all">
            <RiMailSendLine className="w-9/12 h-4/6 m-auto " />
            <h2>ENVIAR CORREO</h2>
          </div>{" "}
          <div className="text-slate-200 text-xl w-80 h-48 bg-green-600 rounded-2xl pt-5 hover:scale-110 transition-all">
            <FaMagic className="w-9/12 h-4/6 m-auto " />
            <h2>AUTOMATIZACIONES</h2>
          </div>{" "}
          <div className="text-slate-200 text-xl w-80 h-48 bg-green-600 rounded-2xl pt-5 hover:scale-110 transition-all">
            <FiSend className="w-9/12 h-4/6 m-auto " />
            <h2>BANDEJA DE SALIDA</h2>
          </div>{" "}
          <div className="text-slate-200 text-xl w-80 h-48 bg-green-600 rounded-2xl pt-5 hover:scale-110 transition-all">
            <RiMailStarLine className="w-9/12 h-4/6 m-auto " />
            <h2>PLANTILLAS DE CORREO</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepanel;
