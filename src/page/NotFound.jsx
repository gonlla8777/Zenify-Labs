import React from "react";
import error404 from "/image/404error.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="">
        <img src={error404} className="mx-auto w-1/3" />
      </div>
    </div>
  );
};

export default NotFound;
