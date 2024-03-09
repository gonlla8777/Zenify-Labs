import { FaGoogle } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../assets/data/data.json";
import { useLanguage } from "../assets/languageService/LanguageContext";
import { useAuthentication } from "../service/firebase"; // Cambio en la importación

const Login = () => {
  const { language } = useLanguage();
  const { signInWithGoogle } = useAuthentication(); // Usar el hook useAuthentication

  const [credentials, setCredentials] = useState({
    emailOrUsername: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para iniciar sesión utilizando los datos de credentials
    console.log("Datos de inicio de sesión:", credentials);
  };
  return (
    <>
      <div className="w-auto min-h-screen h-auto pt-20">
        <div className="grid  sm:grid-cols-2 grid-cols-1 gap-1">
          <div className=" pl-2 sm:pl-10">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-stone-700 to-stone-500  text-xl md:text-4xl lg:text-7xl uppercase font-bold  ">
              {data[language].login.motivationalText}{" "}
              <spam className="text-green-600">
                {data[language].login.motivationalTextGreen}
              </spam>
            </p>
          </div>
          <div className="static    col-span-1  w-fit grid  justify-items-center mx-auto bg-neutral-700/30 p-10 rounded-lg text-white border-neutral-700 border-4 shadow-neutral-700/50 shadow-lg hover:scale-105 transition-all min-w-72">
            <h1 className="font-bold text-3xl">{data[language].login.login}</h1>
            <form onSubmit={handleSubmit} className="">
              <div className="mt-10">
                <p className="text-neutral-400 font-extralight text-left">
                  {data[language].login.emailOrUsername} <br />
                  <input
                    className="w-full rounded-sm border border-neutral-600 "
                    type="text"
                    name="emailOrUsername"
                    value={credentials.emailOrUsername}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className="mt-10">
                <p className="text-neutral-400 font-extralight text-left">
                  {data[language].login.password}
                  <br />
                  <input
                    className="w-full rounded-sm border border-neutral-600 "
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                  />
                </p>
                <p className="text-neutral-400 underline decoration-1 font-extralight text-left mt-2 cursor-pointer hover:text-neutral-300 transition-all">
                  {data[language].login.forgotPassword}
                </p>
              </div>
              <div className=" divide-neutral-700 divide-y-2">
                <div>
                  <Link to={"/panel"}>
                    <button
                      type="submit"
                      className="bg-[#469C4A] p-5 m-10 rounded-xl hover:scale-105  hover:bg-[#378a3b] transition-all "
                    >
                      {data[language].login.login}
                    </button>
                  </Link>
                </div>
                <div>
                  <div className="flex justify-center text-black text-xl mt-2 ">
                    <button
                      className="bg-neutral-400 p-5 rounded-xl border-neutral-700 border-2 hover:scale-105 hover:shadow-md hover:shadow-neutral-600 transition-all "
                      onClick={signInWithGoogle}
                    >
                      <FaGoogle />
                    </button>
                  </div>
                </div>
                <div className="text-neutral-400 font-extralight text-center mt-2 ">
                  <p>{data[language].login.notAccount}</p>
                  <Link to={"/register"}>
                    <p className="text-neutral-400 underline decoration-1 font-extralight text-center cursor-pointer hover:text-neutral-300 transition-all">
                      {" "}
                      {data[language].login.toRegister}
                    </p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
