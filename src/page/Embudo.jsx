import React, { useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import data from "../assets/data/data.json";
import { useLanguage } from "../context/hooks";

const Embudo = () => {
  const { language } = useLanguage();
  const images = data.embudoData;
  const [showModal, setShowModal] = useState(false);
  const [showModalFunnel, setShowModalFunnel] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const [preImg, setPreImg] = useState();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="text-slate-200 py-4">
        <p className="text-4xl font-light underline underline-offset-8 decoration-0 p-6">
          {data[language].funnel.title}
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
                    className="max-w-full max-h-full cursor-pointer"
                    onClick={() => openModal(image)}
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
                index === currentIndex ? "bg-neutral-200" : ""
              }`}
            ></span>
          ))}
        </div>
        <div className="flex justify-center items-center pt-16">
          <button
            className="grid text-6xl text-slate-50 justify-items-center items-center justify-center text-center rounded-3xl bg-neutral-700 w-1/4 p-2 uppercase"
            onClick={() => {
              setShowModalFunnel(true);
            }}
          >
            <IoAddCircleOutline />
            <p className="text-xl">{data[language].funnel.requestFunnels}</p>
          </button>
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

      {/* Modal */}
      {showModal && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
          <div className="bg-neutral-800 p-8 rounded-lg border border-[#2D2D2D] text-white w-2/4 grid justify-items-center">
            <div className="grid grid-cols-1 justify-items-start ">
              <div className="flex">
                <div className="text-left">
                  <p htmlFor="objeto" className="m-auto text-2xl">
                    {selectedImage.title}
                  </p>
                  <p htmlFor="objeto" className="m-auto">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
              <div className="flex m-auto mt-6">
                <p className="mr-2">{data[language].funnel.periods}: </p>
                <div className=" flex m-auto bg-neutral-700 justify-items-center  items-center">
                  <MdChevronLeft className="text-2xl" />
                  <p>{selectedImage.firstPeriod}</p>
                  <p className="mx-2"> {data[language].funnel.to} </p>
                  <p>{selectedImage.secodPeriod}</p>
                  <MdChevronRight className="text-2xl" />
                </div>
              </div>
              <div className="flex space-x-6  mx-auto mt-4">
                <div className="">
                  <p>{data[language].funnel.audienceReached}</p>
                  <p>{selectedImage.audienceReached}</p>
                  <p>
                    {data[language].funnel.growth}:{" "}
                    <span className="text-green-600">
                      %{selectedImage.growth}
                    </span>
                  </p>
                </div>
                <div>
                  <p>{data[language].funnel.listEntries}</p>
                  <p>{selectedImage.listEntriesData}</p>
                  <p>
                    {selectedImage.trafficPercentage}%{" "}
                    {data[language].funnel.ofTraffic}
                  </p>
                </div>
                <div>
                  <p>{data[language].funnel.salesMade}</p>
                  <p>{selectedImage.salesMade}</p>
                  <p>
                    {selectedImage.salesPercentage}%{" "}
                    {data[language].funnel.ofTraffic}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                onClick={closeModal}
                className="bg-[#469C4A] text-white p-2 m-2 uppercase "
              >
                {data[language].funnel.accept}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Modal  funnel request*/}
      {showModalFunnel && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
          <div className="bg-neutral-800 p-8 rounded-lg border border-[#2D2D2D] text-white w-2/4 grid justify-items-center">
            <div className="grid grid-cols-1 justify-items-start ">
              <div className="flex">
                <div className="text-center">
                  <p htmlFor="objeto" className="m-auto text-2xl">
                    {data[language].funnel.requestFunnels}
                  </p>
                  <p htmlFor="objeto" className="m-auto pt-10">
                    {data[language].funnel.funnelMail}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                onClick={() => {
                  setShowModalFunnel(false);
                }}
                className="bg-[#469C4A] text-white p-2 m-2 uppercase "
              >
                {data[language].funnel.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Embudo;
