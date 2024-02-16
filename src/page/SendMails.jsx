import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoSaveOutline } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";

const SendMails = () => {
  const dataEmisor = [
    {
      avatar:
        "https://res.cloudinary.com/di5mf85h3/image/upload/v1706962555/jpgsalta-1-2_1_a1quvn.png",
      name: "Juan Gutierrez",
    },
    {
      avatar:
        "https://res.cloudinary.com/di5mf85h3/image/upload/v1698287212/b1494cc6-9d0c-44cf-aa3a-8ba9d42aea3c_kfionj.jpg",
      name: "Gonzalo Llanos",
    },
  ];

  const dataReceptor = [
    {
      receptorName: "Ninja experts Leads Cualificados",
    },
    {
      receptorName: "Ninja experts Leads Cualificados 2",
    },
    {
      receptorName: "Ninja experts Leads Cualificados 3 ",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalReceptorOpen, setIsModalReceptorOpen] = useState(false);
  const [selectedEmisor, setSelectedEmisor] = useState(dataEmisor[0]);
  const [selectedReceivers, setSelectedReceivers] = useState([]);

  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

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

  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleContentChange = (value) => setContent(value);

  const handleSubmit = () => {
    console.log("Datos del correo a enviar:", {
      sender: selectedEmisor.name,
      recipients: selectedReceivers,
      subject,
      content,
    });

    // Lógica para enviar el correo al backend
  };

  return (
    <div className="flex flex-col items-center  justify-center ">
      <div className="text-slate-200 py-4 ">
        <p className="text-4xl font-light underline underline-offset-8 decoration-0 p-6">
          Enviar Correos
        </p>
      </div>
      <div>
        <div className="w-screen px-20  ">
          <div className="border border-slate-400 grid grid-rows-2  grid-flow-col divide-x bg-[#302F2F] borde rounded-t-lg">
            <div className="row-span-2 grid ">
              <label className="flex-col text-slate-50 text-2xl font-light ">
                EMISORES
              </label>
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
              </div>
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
            <div className="row-span-2 grid text-slate-50 text-2xl font-light">
              <label>PÚBLICO</label>
              <div className="grid justify-items-center ">
                {selectedReceivers.map((receiver) => (
                  <p
                    id="nombre del emisor"
                    className=" text-lg text-slate-50 p-2  rounded-3xl bg-neutral-700 w-fit h-auto m-1 truncate"
                  >
                    {receiver}
                  </p>
                ))}
              </div>

              <IoAddCircleOutline
                onClick={handleReceptorClick}
                className="flex text-6xl text-slate-50 m-auto mb-1 "
              />

              {isModalReceptorOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
                  <div className="bg-neutral-800 p-8 rounded-lg border border-white text-stone-600">
                    <div className="modal ">
                      <ul>
                        {dataReceptor.map((receptor) => (
                          <li
                            key={receptor.receptorName}
                            onClick={() =>
                              handleReceiverSelect(receptor.receptorName)
                            }
                            className={`cursor-pointer hover:text-white text-lg ${
                              selectedReceivers.includes(receptor.receptorName)
                                ? "text-white font-bold" // Estilo para indicar que está seleccionado
                                : ""
                            }`}
                          >
                            {receptor.receptorName}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={handleReceptorClick}
                        className="text-red-500 m-2"
                      >
                        Cerrar
                      </button>
                    </div>{" "}
                  </div>{" "}
                </div>
              )}
            </div>
          </div>
          <div className="bg-[#191919] flex-auto mt-2 border border-slate-400 text-left">
            <label className="text-white m-2">Asunto:</label>
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
              className="w-auto h-auto mt-20 mr-2 p-2 bg-[#484848] text-white flex text-xl font-normal"
              onClick={handleSubmit}
            >
              <IoSaveOutline className="text-3xl" />
              GUARDAR PLANTILLA
            </button>
            <button
              className="w-auto h-auto mt-20 p-2 bg-green-600 text-white flex text-xl font-normal"
              onClick={handleSubmit}
            >
              <RiMailSendLine className="text-3xl " />
              ENVIAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMails;
