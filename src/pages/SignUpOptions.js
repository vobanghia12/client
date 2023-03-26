import React from "react";
import { Link } from "react-router-dom";

export const SignUpOptions = () => {
  return (
    <div class="h-screen">
      <hr className="mx-10 border-[#686262] mb-20" />
      <h1 className=" font-bold text-white mx-16 my-10 text-4xl font-[Archivo Black] text-center">
        Welcome to de<span className="text-primary">COM</span>
      </h1>

      <Link to="/SignUpManufacture">
        <div className="flex">
          <button className="box2 p-2 ">
            <h2 className="text-white text-center font-bold text-xl mb-5">
              Manurfacturers{" "}
            </h2>
            <p className="text-[#686262] text-center">
              For brand companies such as Nike, Adidas, Puma, etc... to sell
              shoes
            </p>
          </button>
        </div>
      </Link>
      <Link to="/SignUpIndividuals">
        <div className="flex">
          <button className="box2 p-2">
            <h2 className="text-white text-center font-bold text-xl">
              Individuals{" "}
            </h2>
            <p className="text-[#686262] text-center">
              For individuals who want to trade and sell shoes
            </p>
          </button>
        </div>
      </Link>
    </div>
  );
};
