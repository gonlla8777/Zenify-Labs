import React, { useEffect, useState } from "react";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { FaMagic } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { RiMailStarLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import data from "../assets/data/data.json";
import { useLanguage } from "../context/hooks";

const Homepanel = () => {
  const name = "Juan";
  const { language } = useLanguage();

  return (
    <>
      <div className="">
        <div className="text-slate-200 py-4 ">
          <p className="text-4xl font-light underline underline-offset-8 decoration-0 uppercase ">
            {data[language].home.title}, {name}!
          </p>
          <p className="text-2xl font-light py-2">
            {data[language].home.controlPanel}
          </p>
        </div>

        <div className="    grid  lg:grid-cols-3 text-center   justify-items-center mx-auto gap-8 w-fit h-fit">
          <Link to={"/embudo"}>
            <div className="text-slate-200 text-xl w-80 h-48 bg-green-600 rounded-2xl pt-5 hover:scale-110 transition-all uppercase ">
              <FaFilterCircleDollar className="w-9/12 h-4/6 m-auto " />
              <h2 className="pt-3">{data[language].home.activeFunnels}</h2>
            </div>
          </Link>
          <Link to={"/datalist"}>
            <div className="text-slate-200 text-xl w-80 h-48 bg-green-600 rounded-2xl pt-5 hover:scale-110 transition-all uppercase ">
              <FaListUl className="w-9/12 h-4/6 m-auto " />
              <h2 className="pt-3">{data[language].home.dataList}</h2>
            </div>{" "}
          </Link>
          <Link to={"/sendMails"}>
            <div className="text-slate-200 text-xl w-80 h-48 bg-green-600 rounded-2xl pt-5 hover:scale-110 transition-all uppercase ">
              <RiMailSendLine className="w-9/12 h-4/6 m-auto " />
              <h2 className="pt-3">{data[language].home.sendEmails}</h2>
            </div>{" "}
          </Link>
          <Link to={"/automation"}>
            <div className="text-slate-200 text-xl w-80 h-48 bg-green-600 rounded-2xl pt-5 hover:scale-110 transition-all uppercase ">
              <FaMagic className="w-9/12 h-4/6 m-auto " />
              <h2 className="pt-3">{data[language].home.automations}</h2>
            </div>{" "}
          </Link>
          <div className="text-slate-200 text-xl w-80 h-48 bg-green-600 rounded-2xl pt-5 hover:scale-110 transition-all uppercase ">
            <FiSend className="w-9/12 h-4/6 m-auto " />
            <h2 className="pt-3">{data[language].home.outbox}</h2>
          </div>{" "}
          <div className="text-slate-200 text-xl w-80 h-48 bg-green-600 rounded-2xl pt-5 hover:scale-110 transition-all uppercase ">
            <RiMailStarLine className="w-9/12 h-4/6 m-auto " />
            <h2 className="pt-3">{data[language].home.emailTemplates}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepanel;
