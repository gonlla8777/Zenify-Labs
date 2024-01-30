import React, { useState } from "react";
import { IoToggle } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";

const Automation = () => {
  const [showModal, setShowModal] = useState(false);
  const [automatizacion, setAutomatizacion] = useState("");
  const [objeto, setObjeto] = useState("");
  const [plantilla, setPlantilla] = useState("");
  const [tipoAutomatizacion, setTipoAutomatizacion] = useState("entrada"); // Nuevo estado
  const [automatizaciones, setAutomatizaciones] = useState([
    {
      automatizacion: "entrada",
      objeto: "Ninja Expert Leads cualificados",
      plantilla: "Libro y curso",
    },
    {
      automatizacion: "entrada",
      objeto: "Ninja Expert cualificados",
      plantilla: "Libro y curso",
    },
    {
      automatizacion: "entrada",
      objeto: "Ninja Expert ",
      plantilla: "Libro y curso",
    },
    {
      automatizacion: "entrada",
      objeto: "Ninja Expert cualificados",
      plantilla: "Libro y curso",
    },
  ]);

  const handleCreateAutomatizacion = () => {
    const newAutomatizacion = {
      automatizacion: tipoAutomatizacion,
      objeto,
      plantilla,
    };
    const updatedAutomatizaciones = [...automatizaciones, newAutomatizacion];
    setAutomatizaciones(updatedAutomatizaciones);
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-slate-200 py-4">
        <p className="text-4xl font-light underline underline-offset-8 decoration-0 p-6">
          Automatizaciones
        </p>
      </div>
      <div className="grid text-white border border-white rounded-b-2xl justify-center items-center ">
        {automatizaciones.map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? "bg-neutral-700/20" : "bg-neutral-600/70"
            } px-1 ${
              index === automatizaciones.length - 1 ? "rounded-b-2xl" : ""
            }`}
          >
            <p>
              Cuando <span>{item.automatizacion}</span> :{" "}
            </p>
            <p>{item.objeto} ,</p>
            <p>enviar plantilla : </p>
            <p className="md:pr-20">{item.plantilla}</p>
            <div className="ml-auto flex items-center space-x-5 px-10">
              <IoToggle className="text-green-500 text-5xl px-2" />
              <FaRegTrashAlt className="text-white text-2xl" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pt-16">
        <div
          className="grid text-6xl text-slate-50 justify-items-center items-center justify-center text-center rounded-3xl bg-neutral-700 w-fit p-3 px-10 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <IoAddCircleOutline />
          <p className="text-xl">CREAR AUTOMATIZACIÓN</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
          <div className="bg-neutral-800 p-8 rounded-lg border border-white text-white">
            <h2 className="text-2xl font-bold mb-4">Crear Automatización</h2>
            <label htmlFor="tipoAutomatizacion">Tipo de Automatización:</label>
            <select
              id="tipoAutomatizacion"
              value={tipoAutomatizacion}
              onChange={(e) => setTipoAutomatizacion(e.target.value)}
              className="mb-4 p-2 border border-gray-300 rounded"
            >
              <option value="entrada">Entrada</option>
              <option value="dia">Día</option>
              <option value="fecha">Fecha</option>
              <option value="venta">Venta</option>
            </select>
            <label htmlFor="objeto">Objeto:</label>
            <input
              type="text"
              id="objeto"
              value={objeto}
              onChange={(e) => setObjeto(e.target.value)}
              className="mb-4 p-2 border border-gray-300 rounded"
            />
            <label htmlFor="plantilla">Plantilla:</label>
            <input
              type="text"
              id="plantilla"
              value={plantilla}
              onChange={(e) => setPlantilla(e.target.value)}
              className="mb-4 p-2 border border-gray-300 rounded"
            />
            <button
              onClick={handleCreateAutomatizacion}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Crear Automatización
            </button>
            <button onClick={() => setShowModal(false)} className="ml-2">
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Automation;
