import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

const SendMails = () => {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState(""); // Nuevo estado para el asunto
  const [content, setContent] = useState("");

  const handleSenderChange = (e) => setSender(e.target.value);
  const handleRecipientChange = (e) => setRecipient(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value); // Nueva función para el asunto
  const handleContentChange = (value) => setContent(value);

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
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
  ];

  const handleSubmit = () => {
    console.log("Datos del correo a enviar:", {
      sender,
      recipient,
      subject, // Incluye el asunto en los datos del correo
      content,
    });

    // Aquí deberías enviar los datos al backend para enviar el correo
    // Puedes utilizar fetch() u otra librería como axios.
    // Implementa la lógica real de envío de correos aquí.
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-slate-200 py-4">
        <p className="text-4xl font-light underline underline-offset-8 decoration-0 p-6">
          Enviar Correos
        </p>
      </div>
      <div>
        <div className="border border-slate-400 grid grid-rows-2  grid-flow-col">
          <div className="row-span-2 grid">
            <label className="flex-col">Emisores</label>
            <input type="text" value={sender} onChange={handleSenderChange} />
          </div>
          <div>
            <label className="row-span-2 grid">Receptor:</label>
            <input
              type="text"
              value={recipient}
              onChange={handleRecipientChange}
            />
          </div>
        </div>

        <label>Asunto:</label>
        <input type="text" value={subject} onChange={handleSubjectChange} />

        <label>Contenido:</label>
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          modules={modules}
          formats={formats}
        />

        <button onClick={handleSubmit}>Enviar Correo</button>
      </div>
    </div>
  );
};

export default SendMails;
