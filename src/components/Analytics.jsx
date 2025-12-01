import React from "react";
import laptop from "../assets/laptop.jpg";

export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="laptop img" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold py-2">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id vitae
            voluptatum debitis, corporis beatae quod amet. Culpa, nulla,
            consequuntur dolores at ducimus soluta architecto explicabo sequi,
            tenetur assumenda delectus? Vero?
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
