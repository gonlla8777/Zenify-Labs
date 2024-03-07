import React, { useState, useEffect } from "react";
import { IoToggle } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import Switch from "@mui/material/Switch";
import { useLanguage } from "../assets/languageService/LanguageContext";

// Importa el archivo JSON
import data from "../assets/data/data.json";

const Automation = () => {
  const { language } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [automatizacion, setAutomatizacion] = useState("");
  const [objeto, setObjeto] = useState("");
  const [plantilla, setPlantilla] = useState("");
  const [tipoAutomatizacion, setTipoAutomatizacion] = useState("entrada");
  const [automatizaciones, setAutomatizaciones] = useState([]);

  useEffect(() => {
    // Establece automatizaciones con los datos del archivo JSON
    setAutomatizaciones(data.automatizacionesData);
  }, []);

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

  const handleDeleteAutomatizacion = (index) => {
    const confirmation = window.confirm(
      "¿Estás seguro de que quieres eliminar esta automatización?"
    );
    if (confirmation) {
      const updatedAutomatizaciones = automatizaciones.filter(
        (item, i) => i !== index
      );
      setAutomatizaciones(updatedAutomatizaciones);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-slate-200 py-4">
        <p className="text-4xl font-light underline underline-offset-8 decoration-0 p-6">
          {data[language].automations.title}
        </p>
      </div>
      <div className="grid text-white border border-white rounded-b-2xl justify-center items-center lg:text-xl font-light ">
        {automatizaciones.map((item, index) => (
          <div
            key={index}
            className={`flex items-center px-5 ${
              index % 2 === 0 ? "bg-neutral-700/20" : "bg-neutral-600/70"
            }  ${index === automatizaciones.length - 1 ? "rounded-b-2xl" : ""}`}
          >
            <p>
              {data[language].automations.when}{" "}
              <span>{item.automatizacion}</span> :{" "}
            </p>
            <p>{item.objeto} ,</p>
            <p>{data[language].automations.sendTemplate} : </p>
            <p className="md:pr-24 lg:pr-80 pr-5">{item.plantilla}</p>
            <div className="ml-auto flex items-center space-x-5 px-10">
              <Switch defaultChecked color="success" className="mx-2" />
              <FaRegTrashAlt
                className="text-white text-2xl cursor-pointer hover:scale-110 hover:transition-all"
                onClick={() => handleDeleteAutomatizacion(index)}
              />
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
          <p className="text-xl uppercase">
            {data[language].automations.createAutomation}
          </p>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
          <div className="bg-neutral-800 p-8 rounded-lg border border-[#2D2D2D] text-white w-2/4 grid justify-items-center">
            <h2 className="text-2xl  mb-10 uppercase font-light">
              {data[language].automations.createAutomation}
            </h2>
            <div className="grid grid-cols-1 justify-items-start ">
              <div className="flex">
                <div>
                  <label htmlFor="tipoAutomatizacion">
                    {data[language].automations.when} :
                  </label>
                  <select
                    id="tipoAutomatizacion"
                    value={tipoAutomatizacion}
                    onChange={(e) => setTipoAutomatizacion(e.target.value)}
                    className="mb-4 p-2 mx-5 rounded bg-[#424242] "
                  >
                    <option value="entrada">Entrada</option>
                    <option value="dia">Día</option>
                    <option value="fecha">Fecha</option>
                    <option value="venta">Venta</option>
                  </select>
                </div>
                <div className="">
                  <label htmlFor="objeto" className="m-auto">
                    Enviar Plantilla:
                  </label>
                  <select
                    type="text"
                    id="objeto"
                    value={objeto}
                    onChange={(e) => setObjeto(e.target.value)}
                    className="mb-4 p-2 mx-5  rounded bg-[#424242]"
                  >
                    {data.sendTemplate.map((template, index) => (
                      <option key={index} value={template}>
                        {template}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div></div>
              <div>
                <label htmlFor="plantilla" className="">
                  Plantilla:
                </label>
                <select
                  type="text"
                  id="plantilla"
                  value={plantilla}
                  onChange={(e) => setPlantilla(e.target.value)}
                  className="mb-4 p-2 mx-5  rounded bg-[#424242]"
                >
                  {data.templates.map((template, index) => (
                    <option key={index} value={template}>
                      {template}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#818181] text-white p-2 m-2 mx-10 uppercase"
              >
                Cancelar
              </button>
              <button
                onClick={handleCreateAutomatizacion}
                className="bg-[#469C4A] text-white p-2 m-2 uppercase"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Automation;
