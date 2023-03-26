import React from "react";
import { Button } from "../components/UI/Button";
import { Item } from "../components/Common/Item";
export const MarketPlace = () => {
  return (
    <div>
      <div class="h-screen">
        <hr className="mx-10 border-[#686262]" />
        <h1 className=" font-bold text-white mx-16 my-10 text-3xl font-[Archivo Black] ">
          Discover More Shoes
        </h1>
        <div class="flex justify-start ml-12">
          <Button className="text-white bg-primary ">All Categories</Button>
          <Button className="text-white border border-primary ">
            Resellers
          </Button>
          <Button className="text-white border border-primary">
            Manufacturers
          </Button>
          <Button className="text-white border border-primary">Nike</Button>
          <Button className="text-white border border-primary">Adidas</Button>
        </div>
        <div class="mt-10 ml-16 flex m-5 flex-wrap">
          <Item className="m-5"></Item>
          <Item className="m-5"></Item>
          <Item className="m-5"></Item>
          <Item className="m-5"></Item>
          <Item className="m-5"></Item>
          <Item className="m-5"></Item>
          <Item className="m-5"></Item>
          <Item className="m-5"></Item>
        </div>
      </div>
    </div>
  );
};
