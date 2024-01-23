import React from "react";
import CustomTable from "../assets/CustomTable ";

const DataList = () => {
  const data = [
    {
      lista: "A",
      fuente: "fuenteA",
      extension: "extA",
      datos: "datoA",
      acciones: "accionA",
    },
    {
      lista: "B",
      fuente: "fuenteB",
      extension: "extB",
      datos: "datoB",
      acciones: "accionB",
    },
    // ... más datos
  ];
  return (
    <div className="flex flex-col items-center justify-center ">
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
