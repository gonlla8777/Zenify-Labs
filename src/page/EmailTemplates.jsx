import React, { useState } from "react";
import { useLanguage } from "../assets/languageService/LanguageContext";
import { MdEmail } from "react-icons/md";

const EmailTemplates = () => {
  const { language } = useLanguage();

  const emailTemplatesdata = [
    {
      sender: "Juan Gutierrez",
      recipients: ["Ninja experts Leads Cualificados"],
      subject: "Asunto del Mail",
      content: "<p>Contenido del mail</p>",
    },
    {
      sender: "Gonzalo Llanos",
      recipients: [
        "Ninja experts Leads Cualificados",
        "Ninja experts Leads Cualificados",
      ],
      subject: "Asunto del Mail 2",
      content:
        "<p>Contenido del mail aa 2aaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>",
    },
    {
      sender: "Juan Gutierrez",
      recipients: [
        "Ninja experts Leads Cualificados",
        "Ninja experts Leads Cualificados 2",
        "Ninja experts Leads Cualificados 3 ",
        "Ninja experts Leads Cualificados 3 ",
      ],
      subject: "asdsad",
      content:
        "<p>asdasd</p><p>asd</p><p>asd</p><p>asd</p><p>asd</p><p>das</p><p>adsdds</p><p>ds</p><p>dsdddddddddddds</p><p>ds</p><p>d</p><p>sd</p><p>asd</p><p>d</p><p>asd</p><p><br></p><p>asd</p><p><br></p>",
    },
  ];
  const saveTemplate = (data) => {
    setSelectTemplate(data);
  };

  const [selectTemplate, setSelectTemplate] = useState(emailTemplatesdata[0]);
  return (
    <div className="flex flex-col items-center mx-auto justify-center  ">
      <div className="text-slate-200 py-4 ">
        <p className="text-4xl font-light underline underline-offset-8 decoration-0 p-6">
          <p>Plantillas de Correo</p>
        </p>
      </div>
      <div className="w-6/12">
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 cursor-default text-neutral-100">
          <div class=" bg-neutral-700 rounded-l-md divide-y divide-neutral-600">
            <p className="m-2 text-neutral-500">Correo electrónico</p>
            {emailTemplatesdata.map((dataTemplate, index) => (
              <div
                className=" hover:bg-neutral-600"
                key={index}
                onClick={() => saveTemplate(dataTemplate)}
              >
                <button className="flex items-center hover:cursor-pointer border-gray-400 p-1 ">
                  <MdEmail className="bg-neutral-500 border border-white rounded-full text-4xl text-zinc-900 p-1 m-1" />
                  <p>{dataTemplate.subject}</p>
                </button>
              </div>
            ))}
            <div className="h-2"></div>
          </div>
          <div class="col-span-2 bg-neutral-600 rounded-r-md p-1" id="email">
            <div className=" col-auto grid  justify-items-start">
              <spam className=" text-neutral-400">Emisor:</spam>{" "}
              <div className="ml-12">{selectTemplate.sender}</div>
              <spam className=" text-neutral-400">Público:</spam>{" "}
              <div class="ml-12">
                {selectTemplate.recipients.map((recipient, index) => (
                  <div key={index} className="">
                    <spam>{recipient}</spam>
                  </div>
                ))}
              </div>
              <spam className=" text-neutral-400">Asunto:</spam>{" "}
              <div class="ml-12">{selectTemplate.subject}</div>
              <spam className=" text-neutral-400">Mensaje:</spam>{" "}
              <div className="ml-12  w-4/12 text-left ...">
                <p
                  class="truncate ..."
                  dangerouslySetInnerHTML={{ __html: selectTemplate.content }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplates;
