import React from "react";
import CustomTable from "../assets/CustomTable ";

const DataList = () => {
  const data = [
    {
      lista: "Ninja Expert Leads cualificados",
      fuente: "Emergente Inicio Form, www.juangutierez.com",
      extension: "11.825",
      datos: "datoA",
      acciones: {
        download: false,
        senMail: true,
      },
    },
    {
      lista: "Ninjalab | Content ExpertB",
      fuente: "Landing Form, ninjalab.net",
      extension: "252.485",
      datos: "datoB",
      acciones: {
        download: true,
        senMail: true,
      },
    },
    // ... más datos
  ];
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="text-slate-200 py-4">
        <p className="text-4xl font-light underline underline-offset-8 decoration-0 p-6">
          Lista de Datos
        </p>
      </div>
      <div className="container mx-auto p-4  w-fit">
        <CustomTable data={data} />
      </div>
    </div>
  );
};

export default DataList;
