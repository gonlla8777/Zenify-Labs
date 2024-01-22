import React, { useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import image1 from "/image/bootcam.png";
import image2 from "/image/bootcam - 2.png";
import image3 from "/image/bootcam - 3.png";
import image4 from "/image/bootcam - 4.png";

const images = [
  {
    title: "Imagen 1",
    description: "Descripción de la imagen 1",
    src: image1,
  },
  {
    title: "Imagen 2",
    description: "Descripción de la imagen 2",
    src: image2,
  },
  {
    title: "Imagen 3",
    description: "Descripción de la imagen 3",
    src: image3,
  },
  {
    title: "Imagen 4",
    description: "Descripción de la imagen 4",
    src: image4,
  },
  {
    title: "Imagen 1",
    description: "Descripción de la imagen 1",
    src: image1,
  },
  {
    title: "Imagen 2",
    description: "Descripción de la imagen 2",
    src: image2,
  },
  {
    title: "Imagen 3",
    description: "Descripción de la imagen 3",
    src: image3,
  },
  {
    title: "Imagen 4",
    description: "Descripción de la imagen 4",
    src: image4,
  },
  {
    title: "Imagen 1",
    description: "Descripción de la imagen 1",
    src: image1,
  },
  {
    title: "Imagen 2",
    description: "Descripción de la imagen 2",
    src: image2,
  },
  {
    title: "Imagen 3",
    description: "Descripción de la imagen 3",
    src: image3,
  },
  {
    title: "Imagen 4",
    description: "Descripción de la imagen 4",
    src: image4,
  },
  {
    title: "Imagen 1",
    description: "Descripción de la imagen 1",
    src: image1,
  },
  {
    title: "Imagen 2",
    description: "Descripción de la imagen 2",
    src: image2,
  },
  {
    title: "Imagen 3",
    description: "Descripción de la imagen 3",
    src: image3,
  },
  {
    title: "Imagen 4",
    description: "Descripción de la imagen 4",
    src: image4,
  },
];

const Embudo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="text-slate-200 py-4">
        <p className="text-4xl font-light underline underline-offset-8 decoration-0 p-6">
          Embudos Activos!
        </p>
      </div>

      <div className="relative w-full max-w-screen-xl">
        <div className="flex items-center justify-center">
          <div className="w-full overflow-hidden m-5">
            <div
              className="transition-transform ease-in-out duration-300 transform flex overflow-hidden"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / images.length)
                }%)`,
                width: `${images.length * 100}%`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center flex-col`}
                  style={{
                    width: `${100 / images.length}%`,
                  }}
                >
                  <div className=" bg-gradient-to-l from-gray-500 rounded-3xl">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="max-w-full max-h-full opacity-10 rounded-3xl"
                    />
                  </div>
                  <p className="text-2xl  font-semibold text-slate-200/30">
                    {image.title}
                  </p>
                  <p className="text-xl  text-slate-200/30">
                    {image.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden m-5">
            <div
              className="transition-transform ease-in-out duration-300 transform flex overflow-hidden"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / images.length)
                }%)`,
                width: `${images.length * 100}%`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center flex-col`}
                  style={{
                    width: `${100 / images.length}%`,
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="max-w-full max-h-full"
                  />
                  <p className="text-2xl font-semibold text-slate-200">
                    {image.title}
                  </p>
                  <p className="text-xl text-slate-200">{image.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full overflow-hidden m-5 ">
            <div
              className="transition-transform ease-in-out duration-300 transform flex overflow-hidden"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / images.length)
                }%)`,
                width: `${images.length * 100}%`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center flex-col`}
                  style={{
                    width: `${100 / images.length}%`,
                  }}
                >
                  <div className=" bg-gradient-to-r from-gray-500 rounded-3xl">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="max-w-full max-h-full opacity-10 rounded-3xl"
                    />
                  </div>

                  <p className="text-2xl  font-semibold text-slate-200/30">
                    {image.title}
                  </p>
                  <p className="text-xl  text-slate-200/30">
                    {image.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-2">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className={`h-5 w-5 mx-2 bg-neutral-600 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-neutral-100" : ""
              }`}
            ></span>
          ))}
        </div>
        <div className="flex justify-center items-center pt-16">
          <div className="grid text-8xl text-slate-50 justify-items-center items-center justify-center text-center rounded-3xl bg-neutral-700 w-1/4 p-2">
            <IoAddCircleOutline />
            <p className="text-xl">SOLICITAR EMBUDO</p>
          </div>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className=" absolute left-20 text-9xl text-slate-50 "
      >
        <MdChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-20 text-9xl text-slate-50 "
      >
        <MdChevronRight />
      </button>
    </div>
  );
};

export default Embudo;
