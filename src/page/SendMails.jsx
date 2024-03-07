import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoSaveOutline } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import data from "../assets/data/data.json";
import { useLanguage } from "../assets/languageService/LanguageContext";

const SendMails = () => {
  const { language } = useLanguage();
  const dataEmisor = data.dataEmisor;
  const dataReceptor = data.dataReceptor;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalReceptorOpen, setIsModalReceptorOpen] = useState(false);
  const [selectedEmisor, setSelectedEmisor] = useState(dataEmisor[0]);
  const [selectedReceivers, setSelectedReceivers] = useState([]);
  const [showModalErrors, setShowModalErrors] = useState(false);
  const [showModalSend, setShowModalSend] = useState(false);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmisorClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleReceptorClick = () => {
    setIsModalReceptorOpen(!isModalReceptorOpen);
  };

  const handleEmisorSelect = (emisor) => {
    setSelectedEmisor(emisor);
    setIsModalOpen(false);
  };

  const handleReceiverSelect = (receiver) => {
    const isSelected = selectedReceivers.includes(receiver);

    if (isSelected) {
      setSelectedReceivers(selectedReceivers.filter((r) => r !== receiver));
    } else {
      setSelectedReceivers([...selectedReceivers, receiver]);
    }
  };

  const handleRemoveReceiver = (receiver) => {
    setSelectedReceivers(selectedReceivers.filter((r) => r !== receiver));
  };

  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleContentChange = (value) => setContent(value);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (action) => {
    // Verificar si hay errores
    if (!selectedEmisor) {
      errors.push({ message: data[language].sendMails.errorEmitters });
    }
    if (selectedReceivers.length === 0) {
      errors.push({ message: data[language].sendMails.errorPublic });
    }
    if (!subject.trim()) {
      errors.push({ message: data[language].sendMails.errorAffair });
    }

    // Eliminar etiquetas HTML y espacios en blanco del contenido
    const contentWithoutTags = content.replace(/<[^>]*>?/gm, "").trim();

    // Verificar si el contenido es solo etiquetas <br> o está vacío
    if (!contentWithoutTags || contentWithoutTags === "<br>") {
      errors.push({ message: data[language].sendMails.errorTextEditor });
    }

    // Si hay errores, mostrar el modal de errores
    if (errors.length > 0) {
      setShowModalErrors(true);
      console.log("Errores:", errors);
      return;
    }

    // Si no hay errores, proceder con el envío o guardado
    console.log("Datos del correo a enviar:", {
      sender: selectedEmisor.name,
      recipients: selectedReceivers,
      subject,
      content,
    });

    // Lógica para enviar el correo al backend o guardar la plantilla

    // Simular envío o guardado exitoso
    if (action === "send") {
      setSuccessMessage({ message: data[language].sendMails.sentSuccessfully });
    } else if (action === "save") {
      setSuccessMessage({ message: data[language].sendMails.saveSuccessfully });
    }

    setShowModalSend(true);
  };

  const handleRemoveEmisor = () => {
    setSelectedEmisor(null);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="text-slate-200 py-4 ">
        <p className="text-4xl font-light underline underline-offset-8 decoration-0 p-6">
          {data[language].sendMails.title}
        </p>
      </div>
      <div>
        <div className="w-screen px-20  ">
          <div className="border border-slate-400 grid grid-rows-2  grid-flow-col divide-x bg-[#302F2F] borde rounded-t-lg">
            <div className="row-span-2 grid ">
              <label className="flex-col text-slate-50 text-2xl font-light uppercase">
                {data[language].sendMails.emitters}
              </label>
              {selectedEmisor && (
                <div className=" flex text-xl text-slate-50 p-2  m-5 rounded-xl bg-neutral-700 w-fit h-auto justify-items-center  items-center">
                  <img
                    src={selectedEmisor.avatar}
                    alt="Avatar del emisor"
                    width={50}
                    height={50}
                    className=" rounded-full m-2"
                  />
                  <p id="nombre del emisor" className="text-lg">
                    {selectedEmisor.name}
                  </p>
                  <button
                    className="text-red-500 ml-2"
                    onClick={handleRemoveEmisor}
                  >
                    X
                  </button>
                </div>
              )}
              <IoAddCircleOutline
                onClick={handleEmisorClick}
                className="flex text-6xl text-slate-50 m-auto mb-1 "
              />

              {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
                  <div className="bg-neutral-800 p-8 rounded-lg border border-white text-stone-600">
                    <div className="modal ">
                      <ul>
                        {dataEmisor.map((emisor) => (
                          <li
                            key={emisor.name}
                            onClick={() => handleEmisorSelect(emisor)}
                            className="hover:text-white list-disc list-item text-2xl cursor-pointer"
                          >
                            {emisor.name}
                          </li>
                        ))}
                      </ul>
                    </div>{" "}
                  </div>{" "}
                </div>
              )}
            </div>
            <div className="row-span-2 grid text-slate-50 text-2xl font-light uppercase">
              <label>{data[language].sendMails.public}</label>
              <div className="grid justify-items-center ">
                {selectedReceivers.map((receiver) => (
                  <div key={receiver} className="flex items-center">
                    <p className="text-lg text-slate-50 p-2  rounded-3xl bg-neutral-700 w-fit h-auto m-1 truncate">
                      {receiver}

                      <button
                        className="text-red-500 ml-2"
                        onClick={() => handleRemoveReceiver(receiver)}
                      >
                        X
                      </button>
                    </p>
                  </div>
                ))}
              </div>

              <IoAddCircleOutline
                onClick={handleReceptorClick}
                className="flex text-6xl text-slate-50 m-auto mb-1 "
              />

              {isModalReceptorOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center ">
                  <div className="bg-neutral-800 p-8 rounded-lg border border-white text-stone-600">
                    <div className="modal ">
                      <ul>
                        {dataReceptor.map((receptor) => (
                          <li
                            key={receptor}
                            onClick={() => handleReceiverSelect(receptor)}
                            className={`cursor-pointer hover:text-white text-lg ${
                              selectedReceivers.includes(receptor)
                                ? "text-white font-bold" // Estilo para indicar que está seleccionado
                                : ""
                            }`}
                          >
                            {receptor}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={handleReceptorClick}
                        className="text-red-500 m-2"
                      >
                        {data[language].sendMails.close}
                      </button>
                    </div>{" "}
                  </div>{" "}
                </div>
              )}
            </div>
          </div>
          <div className="bg-[#191919] flex-auto mt-2 border border-slate-400 text-left">
            <label className="text-white m-2">
              {data[language].sendMails.affair}:
            </label>
            <input
              type="text"
              className=" my-2 bg-[#818181] text-white"
              value={subject}
              onChange={handleSubjectChange}
            />
          </div>

          <ReactQuill
            value={content}
            onChange={handleContentChange}
            className="h-fit text-white"
            modules={{
              toolbar: [
                ["bold", "italic", "underline", "strike"],
                [{ header: 1 }, { header: 2 }],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image", "video"],
                ["clean"],
              ],
            }}
            style={{ width: "100%", height: "300px" }}
            formats={[
              "header",
              "bold",
              "italic",
              "underline",
              "strike",
              "list",
              "bullet",
              "link",
              "image",
              "video",
            ]}
          />
          <div className="flex justify-end ">
            <button
              className="w-auto h-auto mt-20 mr-2 p-2 bg-[#484848] text-white flex text-xl font-normal uppercase"
              onClick={() => handleSubmit("save")}
            >
              <IoSaveOutline className="text-3xl " />
              {data[language].sendMails.saveTemplate}
            </button>
            <button
              className="w-auto h-auto mt-20 p-2 bg-green-600 text-white flex text-xl font-normal uppercase"
              onClick={() => handleSubmit("send")}
            >
              <RiMailSendLine className="text-3xl " />
              {data[language].sendMails.send}
            </button>
          </div>
        </div>
        {/* Modal  Errors*/}
        {showModalErrors && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
            <div className="bg-neutral-800 p-8 rounded-lg border border-[#2D2D2D] text-white w-2/4 grid justify-items-center">
              <div className="grid grid-cols-1 justify-items-start ">
                <div className="flex">
                  <div className="text-center">
                    <p htmlFor="objeto" className="m-auto text-2xl">
                      {data[language].sendMails.error}
                    </p>
                    {errors.map((error, index) => (
                      <p key={index} className="m-auto">
                        <p key={index}>{error.message || error}</p>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  onClick={() => {
                    setShowModalErrors(false);
                    setErrors([]);
                  }}
                  className="bg-[#469C4A] text-white p-2 m-2 uppercase "
                >
                  {data[language].sendMails.accept}
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Modal  Send or Save*/}
        {showModalSend && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
            <div className="bg-neutral-800 p-8 rounded-lg border border-[#2D2D2D] text-white w-2/4 grid justify-items-center">
              <div className="grid grid-cols-1 justify-items-start ">
                <div className="flex">
                  <div className="text-center">
                    <p htmlFor="objeto" className="m-auto text-2xl">
                      {data[language].sendMails.congratulations}
                    </p>

                    <p className="m-auto">
                      {successMessage && (
                        <p className="m-auto">{successMessage.message}</p>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  onClick={() => {
                    setShowModalSend(false);
                    setErrors([]);
                  }}
                  className="bg-[#469C4A] text-white p-2 m-2 uppercase "
                >
                  {data[language].sendMails.accept}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SendMails;
